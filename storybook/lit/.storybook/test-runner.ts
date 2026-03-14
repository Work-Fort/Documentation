import type { TestRunnerConfig } from '@storybook/test-runner';
import { getStoryContext } from '@storybook/test-runner';

/**
 * Custom test-runner config that adds WCAG 1.4.11 non-text contrast checks.
 * axe-core doesn't check border contrast automatically, so we do it manually
 * for form inputs, buttons, and other UI components with borders.
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

const config: TestRunnerConfig = {
  async postVisit(page, context) {
    // Check border contrast on form inputs and buttons
    const violations = await page.evaluate(() => {
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
          const bgColor = style.backgroundColor;

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
                `${selector}: border contrast ratio ${ratio.toFixed(2)}:1 (needs 3:1). ` +
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
    });

    if (violations.length > 0) {
      throw new Error(
        `WCAG 1.4.11 Non-text contrast violations:\n${violations.join('\n')}`
      );
    }
  },
};

export default config;
