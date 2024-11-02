import React from 'react';
import clsx from 'clsx';
import styles from './contact-us.module.css';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Layout from '@theme/Layout';
import Image from '../core/Image';
import Container from '../core/Container';

const AssetImage: Image = {
  Svg: require('@site/static/img/3.svg').default,
};

const ContactUs: React.FC = () => {
  return (
    <Layout
      title="Clearlinc.io"
      description="Instant Credit Profiling for Smarter Lending Decisions"
    >
      <Container className={clsx('section', styles.main)} background="dark">
        <div className="row">
          <div className="col col--6">
            <div className="card">
              <div className="">
                <h2 className="section__title">Contact Us</h2>
                <h3 className="section__subtitle">
                  {
                    'Have questions or need assistance? We’re here to help. Reach out to our team, and we’ll get back to you as soon as possible.'
                  }
                </h3>
              </div>
              <div>
                <FaEnvelope className={styles.icon} />
                <h2 className={styles.subHeading}>Email Us</h2>
                <p className={styles.text}>michael@clearlinc.io</p>
              </div>
              <div>
                <FaPhoneAlt className={styles.icon} />
                <h2 className={styles.subHeading}>Call Us</h2>
                <p className={styles.text}>+1 (123) 456-7890</p>
              </div>
            </div>
          </div>
          <div
            className={clsx('col col--6', styles.problemSolutionImageContainer)}
          >
            <AssetImage.Svg className={styles.logoBackground} role="img" />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default ContactUs;
