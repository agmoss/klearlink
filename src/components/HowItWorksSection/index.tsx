// src/components/HowItWorksSection.tsx

import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Card, { CardHeader } from '@site/src/core/Card';
import Code from '@site/src/core/Code';
import config, { BasicItem } from '@site/klearlink.config';

const ExampleOne: React.FC = () => (
  <Code>
    {`import klearlink
‍
api_key = "12345"
client = klearlink.client(api_key)

consumer_info = {
  "consumer_facts": {
    "first_name": "John",
    "last_name": "Doe",
    [...others]
  },
  "credit_facts": {
    "amount": 1000,
    "credit_type": "PDL",
    "application_datetime": "2024-09-23 21:47:12.023476",
    "credit_state": "applied"
  }
}

consumer_match = client.submit_consumer_credit(consumer_info)`}
  </Code>
);

const ExampleTwo: React.FC = () => (
  <Code>
    {`print(consumer_match)
>>>
{
  "consumer_match": [
    {
      "matched_on": {
        "first_name": true,
        "last_name": true,
        "date_of_birth": true,
        "address": true,
        "phone_number": false
      },
      "credit_facts": {
        "amount": 1200,
        "credit_type": "PDL",
        "payment_amount_due": 1200,
        "credit_state": "non-compliant",
        [...]
      }
    }
  ]
}`}
  </Code>
);

const ExampleThree: React.FC = () => (
  <Code>
    {`non_compliant_found = any(
    match.get("credit_facts", {}).get("credit_state") == "non-compliant"
    for match in consumer_match.get("consumer_match", [])
)

if non_compliant_found: 
    print("My applicant has a non compliant loan!")
else:
    print("My applicant is in compliance on their loans!")   `}
  </Code>
);

const ExampleFour: React.FC = () => (
  <Code>
    {`@your_api_server.route("/klearlink-webhook-callback", methods=["POST"])
def klearlink-webhook() -> tuple[Response, int]:
    data = request.get_json()

    print(f"User with id of {data.id} has new klearlink data!")

    return ("", 200)`}
  </Code>
);

const CodeExamples = [ExampleOne, ExampleTwo, ExampleThree, ExampleFour];

const Feature: React.FC<BasicItem & { idx: number }> = ({
  title,
  description,
  idx,
}) => {
  const ToRender = CodeExamples[idx];
  return (
    <div className="row padding--md">
      <div className="col col--6">
        <Card>
          <CardHeader>
            <h3 className="section__subtitle alt text--bold text--secondary">
              {title}
            </h3>
            <p>{description}</p>
          </CardHeader>
        </Card>
      </div>
      <div className="col col--6 dont-render-small">
        <ToRender />
      </div>
    </div>
  );
};

const HowItWorksSection: React.FC = () => (
  <div id="how-it-works">
    <div className="row">
      <div className="col col--12 text--center">
        <h2 className="section__title h2">{config.howItWorksSection.title}</h2>
      </div>
      <div className="row">
        <div className="col col--12">
          {config.howItWorksSection.items.map((feature, idx) => {
            return <Feature {...feature} idx={idx} key={idx} />;
          })}
        </div>
        <div
          id="solutions"
          className="col col--12 text--center padding-vert--md"
        >
          <Link
            className="button button--primary button--lg main"
            to={useBaseUrl('/products')}
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default HowItWorksSection;
