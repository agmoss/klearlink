import React from 'react';
import clsx from 'clsx';
import styles from './contact-us.module.css';
import { FaEnvelope } from 'react-icons/fa';
import Layout from '@theme/Layout';
import Image from '../core/Image';
import Container from '../core/Container';
import Card, { CardBody, CardHeader } from '../core/Card';

const AssetImage: Image = {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  Svg: require('@site/static/img/2.svg').default,
};

const ContactUs: React.FC = () => {
  return (
    <Layout
      title="Clearlinc.io"
      description="Instant Credit Profiling for Smarter Lending Decisions"
    >
      <Container padding={['all']}>
        <div className="row">
          <div className="col col--5">
            <Card>
              <CardHeader>
                <h2 className="section__title">Contact Us</h2>
              </CardHeader>
              <CardBody>
                <div className="text--center">
                  <FaEnvelope className="icon" />
                  <h2 className={styles.subHeading}>Email Us</h2>
                  <p className={styles.text}>michael@clearlinc.io</p>
                </div>
              </CardBody>
            </Card>
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
