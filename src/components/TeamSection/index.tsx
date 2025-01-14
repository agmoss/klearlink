// src/components/TeamSection.tsx

import React from 'react';
import config from '../../../clearlinc.config';

import Card, { CardBody, CardHeader } from '@site/src/core/Card';

const TeamSection: React.FC = () => (
  <div id="team-section">
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
          {config.aboutUsSection.teamSection.members.map((member, index) => (
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
                    <h3 style={{ margin: '1rem 0 0.5rem' }}>{member.name}</h3>
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
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default TeamSection;
