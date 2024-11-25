import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Welcome to the Nimble SRT Prometheus Exporter Docs"
      description="Documentation for the Nimble SRT Prometheus Exporter, supporting English and Russian languages.">
      <main className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Welcome to the Nimble SRT Prometheus Exporter Documentation</h1>
          <p className="hero__subtitle">
            Your go-to guide for understanding and using the Nimble SRT Prometheus Exporter. 
            Supporting both English and Russian languages.
          </p>
          <div className={styles.features}>
            <section>
              <h2>About the Project</h2>
              <p>
                The <strong>Nimble SRT Prometheus Exporter</strong> is a tool that collects 
                performance data from Nimble Streamer SRT streams and prepares it for monitoring in Prometheus.
                With this exporter, you can:
              </p>
              <ul>
                <li>Track key metrics of SRT streams.</li>
                <li>Visualize performance using tools like Grafana.</li>
                <li>Set up alerts to ensure smooth stream operations.</li>
              </ul>
              <p>
                The exporter simplifies SRT stream monitoring by offering a ready-to-use solution, 
                bridging the gap between stream performance and modern monitoring tools.
              </p>
            </section>

            <section>
              <h2>Made with Docusaurus</h2>
              <p>
                This documentation is powered by <a href="https://docusaurus.io" target="_blank" rel="noopener noreferrer">Docusaurus</a>, 
                a modern documentation framework that enables easy content creation and i18n (internationalization) support.
              </p>
            </section>

            <section>
              <h2>i18n Support</h2>
              <p>
                Our documentation supports English and Russian languages. Use the language switcher in the top-right 
                corner to change the interface language. The system remembers your language choice for a seamless experience.
              </p>
              <p>
                The i18n setup uses the <code>LanguageSwitcher</code> component, which you can extend for more robust locale 
                management. Translations are configured in the Docusaurus <code>docusaurus.config.js</code> file.
              </p>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
