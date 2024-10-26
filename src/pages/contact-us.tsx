import React from 'react';
import clsx from 'clsx';
import styles from './contact-us.module.css';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Layout from '@theme/Layout';

const ContactUs: React.FC = () => {
  return (
    <Layout
      title="Clearlinc.io"
      description="Instant Credit Profiling for Smarter Lending Decisions"
    >
      <section className={clsx('section', styles.contactSection)}>
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <h1 className={clsx('section__title', styles.heading)}>
                Get In Touch
              </h1>
              <p className={clsx('section__subtitle', styles.description)}>
                Have questions or need assistance? We’re here to help. Reach out
                to our team, and we’ll get back to you as soon as possible.
              </p>
            </div>
          </div>
          <div className="row">
            <div className={clsx('col col--6', styles.contactInfo)}>
              <FaEnvelope className={styles.icon} />
              <h2 className={styles.subHeading}>Email Us</h2>
              <p className={styles.text}>support@clearlinc.io</p>
            </div>
            <div className={clsx('col col--6', styles.contactInfo)}>
              <FaPhoneAlt className={styles.icon} />
              <h2 className={styles.subHeading}>Call Us</h2>
              <p className={styles.text}>+1 (123) 456-7890</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;
