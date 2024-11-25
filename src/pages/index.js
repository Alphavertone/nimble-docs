import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import Translate, {translate} from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <Translate>{siteConfig.title}</Translate>
        </Heading>
        <p className="hero__subtitle">
          <Translate>{siteConfig.tagline}</Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            <Translate>Read the Docs</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={translate({
        message: "Welcome to the Nimble SRT Prometheus Exporter Documentation",
        id: "homepage.title",
        description: "Homepage title",
      })}
      description={translate({
        message: "Documentation for the Nimble SRT Prometheus Exporter, supporting English and Russian languages.",
        id: "homepage.description",
        description: "Homepage description",
      })}>
      <HomepageHeader />
      <main className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">
            <Translate>Welcome to the Nimble SRT Prometheus Exporter Documentation</Translate>
          </h1>
          <p className="hero__subtitle">
            <Translate>
              Your go-to guide for understanding and using the Nimble SRT Prometheus Exporter.
              Supporting both English and Russian languages.
            </Translate>
          </p>
          <div className={styles.features}>
            <section>
              <h2>
                <Translate>About the Project</Translate>
              </h2>
              <p>
              <Translate>
                  This is primarily a study documentation project created to demonstrate the use of
                  Docusaurus for building multilingual documentation websites.
                  </Translate>
              </p>
            </section>

            <section>
              <h2>
                <Translate>Made with Docusaurus</Translate>
              </h2>
              <p>
                <Translate>
                  This documentation is powered by</Translate> <a href="https://docusaurus.io" target="_blank" rel="noopener noreferrer">Docusaurus</a>,
                  <Translate> a modern documentation framework that enables easy content creation and i18n (internationalization) support.
                </Translate>
              </p>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
