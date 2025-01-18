import React from 'react';
import clsx from 'clsx';
import styles from './contact-us.module.css';
import { FaEnvelope } from 'react-icons/fa';
import Layout from '@theme/Layout';
import Image from '../core/Image';
import Container from '../core/Container';

const AssetImage: Image = {
  Svg: require('@site/static/img/2.svg').default,
};

const ContactUs: React.FC = () => {
  return (
    <Layout
      title="Klearlink.io"
      description="Instant Credit Profiling for Smarter Lending Decisions"
    >
      <Container>
        <div className="row">
          <div className="col col--5">
            <div className="nohover card">
              <div className="card__header">
                <h2 className="section__title">Contact Us</h2>
              </div>
              <div>
                <div className="card__body">
                  <div className="text--center">
                    <FaEnvelope className={styles.icon} />
                    <h2 className={styles.subHeading}>Email Us</h2>
                    <p className={styles.text}>michael@klearlink.io</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={clsx('col col--7', styles.problemSolutionImageContainer)}
          >
            <div className="card">
              <AssetImage.Svg className={styles.logoBackground} role="img" />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default ContactUs;
