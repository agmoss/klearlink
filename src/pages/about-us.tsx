import React from 'react';
import Layout from '@theme/Layout';
import Container from '../core/Container';
import Card, { CardBody, CardHeader } from '../core/Card';
import HeroSection from '../components/HeroSection/about-us';
import AccentImage from '../core/AccentImage';
import config from '../../clearlinc.config';

const AboutUs: React.FC = () => {
  return (
    <Layout title="About Us" description="Learn more about us at Clearlinc.io">
      <AccentImage position={{ top: '-40%', left: '35%' }} src="/img/5.svg" />
      <main>
        <HeroSection />
        <Container className="padding-vert--xl">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <Card>
                <CardHeader>
                  <h2 className="text--center text--bold text--secondary">
                    {config.aboutUsSection.companyOverview.headline}
                  </h2>
                </CardHeader>
                <CardBody>
                  <p>{config.aboutUsSection.companyOverview.content}</p>
                </CardBody>
              </Card>
            </div>
          </div>
        </Container>
        <Container className="padding-vert--md">
          <div className="row">
            <div className="col col--12">
              <h2 className="text--center text--bold text--secondary">
                {config.aboutUsSection.teamSection.headline}
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col col--8 col--offset-2">
              <div className="row">
                {config.aboutUsSection.teamSection.members.map(
                  (member, index) => (
                    <div className="col col--6" key={index}>
                      <div className="text--center">
                        <Card>
                          <div className="card__image">
                            <div className="about-img-container">
                              <img
                                src={member.image}
                                alt="Image alt text"
                                className="about-img"
                                title="Logo Title Text 1"
                              />
                            </div>
                          </div>
                          <CardHeader className="center">
                            <h3 style={{ margin: '1rem 0 0.5rem' }}>
                              {member.name}
                            </h3>
                            <p>
                              <strong>{member.role}</strong>
                            </p>
                          </CardHeader>
                          <CardBody>
                            <p>{member.bio}</p>
                          </CardBody>
                        </Card>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </Container>
      </main>
    </Layout>
  );
};

export default AboutUs;
