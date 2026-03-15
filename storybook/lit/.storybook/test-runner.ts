import type { TestRunnerConfig } from '@storybook/test-runner';
import type { Page } from 'playwright';

/**
 * Custom test-runner config that adds WCAG 1.4.11 non-text contrast checks.
 * axe-core doesn't check border contrast automatically, so we do it manually
 * for form inputs, buttons, and other UI components with borders.
 *
 * Each story is tested in both dark and light mode.
 */

// Relative luminance calculation per WCAG 2.0
function luminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function contrastRatio(l1: number, l2: number): number {
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

function parseColor(color: string): [number, number, number] | null {
  const rgb = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (rgb) return [parseInt(rgb[1]), parseInt(rgb[2]), parseInt(rgb[3])];
  return null;
}

/**
 * Run border contrast checks for a given theme mode.
 * Returns an array of violation descriptions (empty if all pass).
 */
async function checkBorderContrast(page: Page, mode: string): Promise<string[]> {
  return page.evaluate((themeMode: string) => {
    const issues: string[] = [];

    // Selectors for elements that should have visible borders
    const selectors = [
      '.wf-field__input',
      '.wf-field__container',
      '.wf-button',
      '.wf-text-input__input',
      '.wf-file-upload__drop-zone',
      '.wf-checkbox .wf-field__container',
      '.wf-radio .wf-field__container',
    ];

    for (const selector of selectors) {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => {
        const style = getComputedStyle(el);
        const borderColor = style.borderColor;

        // Skip if no border or border is transparent/none
        if (
          style.borderStyle === 'none' ||
          style.borderWidth === '0px' ||
          borderColor === 'transparent' ||
          borderColor.includes('rgba(0, 0, 0, 0)')
        ) {
          return;
        }

        // Parse colors
        const border = parseColorInner(borderColor);
        // Get the parent's background for contrast comparison
        let parentBg: [number, number, number] | null = null;
        let parent = el.parentElement;
        while (parent) {
          const pStyle = getComputedStyle(parent);
          const pBg = parseColorInner(pStyle.backgroundColor);
          if (pBg && !(pBg[0] === 0 && pBg[1] === 0 && pBg[2] === 0 && pStyle.backgroundColor.includes('0)'))) {
            parentBg = pBg;
            break;
          }
          parent = parent.parentElement;
        }
        // Fall back to body background
        if (!parentBg) {
          const bodyBg = parseColorInner(getComputedStyle(document.body).backgroundColor);
          parentBg = bodyBg || [0, 0, 0]; // assume black if nothing
        }

        if (border && parentBg) {
          const borderLum = luminanceInner(border[0], border[1], border[2]);
          const bgLum = luminanceInner(parentBg[0], parentBg[1], parentBg[2]);
          const ratio = contrastRatioInner(borderLum, bgLum);

          // WCAG 1.4.11 requires 3:1 for non-text UI components
          if (ratio < 3) {
            issues.push(
              `[${themeMode}] ${selector}: border contrast ratio ${ratio.toFixed(2)}:1 (needs 3:1). ` +
              `Border: ${borderColor}, Background: ${getComputedStyle(parent || document.body).backgroundColor}`
            );
          }
        }
      });
    }

    return issues;

    // Inner functions (must be defined inside evaluate)
    function parseColorInner(color: string): [number, number, number] | null {
      const rgb = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (rgb) return [parseInt(rgb[1]), parseInt(rgb[2]), parseInt(rgb[3])];
      return null;
    }
    function luminanceInner(r: number, g: number, b: number): number {
      const [rs, gs, bs] = [r, g, b].map((c) => {
        const s = c / 255;
        return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
    }
    function contrastRatioInner(l1: number, l2: number): number {
      const lighter = Math.max(l1, l2);
      const darker = Math.min(l1, l2);
      return (lighter + 0.05) / (darker + 0.05);
    }
  }, mode);
}

const config: TestRunnerConfig = {
  async postVisit(page, context) {
    // Run border contrast checks in dark mode (default)
    const darkViolations = await checkBorderContrast(page, 'dark');

    // Switch to light mode and check again
    await page.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'light');
      document.body.style.background = 'var(--wf-color-bg)';
      document.body.style.color = 'var(--wf-color-text)';
    });

    // Wait for styles to apply
    await new Promise(r => setTimeout(r, 100));

    // Run border contrast checks in light mode
    const lightViolations = await checkBorderContrast(page, 'light');

    // Reset back to dark
    await page.evaluate(() => {
      document.documentElement.removeAttribute('data-theme');
      document.body.style.background = 'var(--wf-color-bg)';
      document.body.style.color = 'var(--wf-color-text)';
    });

    const allViolations = [...darkViolations, ...lightViolations];
    if (allViolations.length > 0) {
      throw new Error(
        `WCAG 1.4.11 Non-text contrast violations:\n${allViolations.join('\n')}`
      );
    }
  },
};

export default config;
