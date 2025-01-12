import React from 'react';
import Layout from '@theme/Layout';
import Container from '../core/Container';
import Card, { CardBody, CardHeader } from '../core/Card';
import HeroSection from '../components/HeroSection/about-us';
import AccentImage from '../core/AccentImage';

const AboutUs: React.FC = () => {
  return (
    <Layout title="About Us" description="Learn more about us at Clearlinc.io">
      <AccentImage position={{ top: '-40%', left: '35%' }} src="/img/5.svg" />
      <main>
        <HeroSection />
        <Container padding={['top']}>
          <div className="row">
            <div className="col col--8 col--offset-2">
              <Card>
                <CardHeader>
                  <h2 className="text--center text--bold text--secondary">
                    Clearlinc exists to enable financial inclusion by helping
                    consumers build an alternative credit profile.
                  </h2>
                </CardHeader>
                <CardBody>
                  <p>
                    So we created an instant method of assembling short-term and
                    alternative credit data to empower businesses with the tools
                    to make smarter, faster, and more informed decisions. In a
                    world where instant credit access is the norm, understanding
                    customers' credit behavior should be just as seamless. Our
                    platform provides real-time credit insights designed to
                    drive innovation, reduce fraud, and promote responsible
                    borrowing across industries. By leveraging advanced
                    analytics and cutting-edge technology, we help you make
                    accurate decisions that fuel growth while minimizing risk.
                    Clearlinc is your partner in building trust, transparency,
                    and efficiency in credit management—because better decisions
                    today lead to a stronger, more sustainable tomorrow.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </Container>
        <Container padding={['bottom']}>
          <div className="row">
            <div className="col col--12">
              <h2 className="text--center text--bold text--secondary">
                Meet the Team
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col col--8 col--offset-2">
              <div className="row">
                <div className="col col--6">
                  <div className="text--center">
                    <Card>
                      <CardHeader>
                        <img
                          src="https://placehold.co/300x300"
                          alt="Michael Wendland"
                          style={{
                            borderRadius: '8px',
                          }}
                        />
                        <h3 style={{ margin: '1rem 0 0.5rem' }}>
                          Michael Wendland
                        </h3>
                        <p>
                          <strong>Co-Founder & CEO</strong>
                        </p>
                      </CardHeader>
                      <CardBody>
                        <p>
                          A business leader and entrepreneur with over 18+ years
                          of experience in the financial services industry,
                          including consumer finance, mortgage lending, and
                          credit cards. Michael founded Refresh Financial in
                          2010, servicing over 125,000 Canadians and recognized
                          as one of the fastest-growing technology companies in
                          North America until its sale in 2021.
                        </p>
                      </CardBody>
                    </Card>
                  </div>
                </div>
                <div className="col col--6">
                  <div style={{ textAlign: 'center' }}>
                    <Card>
                      <CardHeader>
                        <img
                          src="https://placehold.co/300x300"
                          alt="Andrew Moss"
                          style={{
                            borderRadius: '8px',
                          }}
                        />
                        <h3 style={{ margin: '1rem 0 0.5rem' }}>Andrew Moss</h3>
                        <p>
                          <strong>Co-Founder & CTO</strong>
                        </p>
                      </CardHeader>
                      <CardBody>
                        <p>
                          Andrew is an accomplished tech professional holding
                          senior leadership positions in fintech and software
                          development brands such as Neo Financial and Vivid
                          Theory. Andrew has successfully scaled startups from
                          idea to exit, delivering impactful results and driving
                          innovation.
                        </p>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </Layout>
  );
};

export default AboutUs;
