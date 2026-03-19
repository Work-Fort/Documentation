// src/pages/index.tsx
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home(): React.JSX.Element {
  return (
    <Layout title="Home" description="WorkFort developer documentation">
      <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>WorkFort Documentation</h1>
        <p>Build services on the WorkFort platform.</p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
          <Link className="button button--primary button--lg" to="/architecture">
            Read the Docs
          </Link>
          <a className="button button--secondary button--lg" href="/design/">
            Browse Components
          </a>
        </div>
      </main>
    </Layout>
  );
}
