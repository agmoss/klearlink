---
sidebar_position: 1
---

import Clearprofile from '/img/clearprofile.png';
import API from '/img/clearsync_api.png';

# ClearProfile

## Abstract

The Clearlinc product—Clearprofile—is an API product for the controlled dissemination of cross-party lending statuses to lending organizations. Integration with the API allows your lending organization to understand your applicants' prior payment performance on loans applied for and originated with other lenders.

With Clearlinc, your lending organization inputs two components relating to each loan application:

1. **Consumer Facts**
2. **Credit Facts**

Together, these are referred to as a **Consumer Credit** record

in return, your lending organization is provided with a **Consumer Match** record

---

### Consumer Facts

Consumer facts are the details of your loan applicant.

Consumer Fact fields are:

- **Address**: Consumers address
- **Date of Birth**: Consumer date of birth
- **Email**: Consumer email address
- **Phone Number**: Consumer phone number
- **Institution Names**: The names of unique institutions utilized in the last 60 days either via linked data or pre-authorized debit data.
- **Bankrupt/ Insolvent:** Is the consumer insolvent/CP?
- **SIN** (optional)
- **FUTURE RELEASE:** Bank Account Rating - indicates the number of unique bank accounts utilized in the last 60 days. B1 = 1 account utilized….B2 = 2 accounts utilized, etc.

:::info
Clearlinc will only ever return the exact Consumer Facts you submit to the system, **and the Consumer Facts you submit are not accessible to other lenders.** The system allows for the determination of inter-organizational consumer matches. It does not allow for any possibility of inter-organizational data dissemination, viewership, or enrichment. Further, Consumer Matches do not contain any identifiable information about the lending organization.

:::

---

### Credit Facts

Credit Facts are information on the consumer's credit and the state of that credit within your organization.

Credit Fact fields are:

- **Amount**: Credit Limit extended
- **Credit Type**: The loan type (for the purposes of the pilot will default to payday)
- **Application DateTime**: The date/time the consumer last applied for the credit
- **Originated DateTime**: Date/time the credit was approved and funds advanced
- **Payment Due Date**: The date on which the loan is due
- **Payment Amount Due**: Amount due on the Payment Due Date
- **Credit State:** The lifecycle state of the consumer's credit (defined in states below)

#### Credit State

An application/loan has the following lifecycle. As time progresses, your institution learns information about the borrowers' performance on the loan, as represented by the following states:

<p align="center">
    <img src={Clearprofile} alt="API" style={{maxWidth: 600, width: '100%', height:'auto'}}/>
</p>

- **application** - The consumer has applied for credit at your organization
- **originated** - Your organization has extended credit to the consumer
  - **compliant** - all credit reported to Clearlinc has been paid as agreed in the last 60 days
  - **non-compliant** - all, or some, credit reported to Clearlinc is past due in the last 60 days. Note that this state is dynamic based on the most recent data received. For example, a customer on day 50 may be non-compliant due to one loan that is past due; however, following fulfillment of all obligations on day 51, the credit state would flip to compliant on any successful matches on day 51 or later. **\[NTD: consider static data that hold any status in the last 60 days? - this would likely be more beneficial to lenders\]**
- **declined** - Your institution has declined to extend credit to the consumer
- **bankrupt/insolvent** - based on information captured from a credit state/loan fact, the consumer is flagged as bankrupt or insolvent

:::info
The change in credit state is tied to the change in other credit facts. For example, as the Credit State moves from application → origination, the Originated Date and Originated Time move from Null → Date.

:::

###

---

### Consumer Match Record

A Consumer Match is the result of the Clearlinc process. Clearlinc will return the matching **_Consumer Facts_** and their associated **_Credit Facts_** from other lending organizations to your institution. The data returned in a successful Consumer Match will allow your organization to utilize the returned data for credit decisioning. This data will assist in areas such as:

- **Credit performance in the last 60 days**—this allows the lender to see all compliant consumers and any outstanding issues of non-compliance by the consumer.
- **Added debt-to-income calculation enhancements** - This data allows lenders to calculate the consumer's borrowing ratio of debt to income if credit is still outstanding.
- **Credit stacking or fraud stacking determinations** - If the consumer has obtained multiple forms of credit in the last 30 days, this could be a further signal of risk, and even fraud risk, beyond traditional borrowing ratios.
- **Institution utilization** - allows lenders to determine the institutions the consumer has linked or authorized for debit purposes in the last 60 days.

#### Decisioning

When decisioning on a consumer match, your organization will rely on the match's current and previous credit state. These can be interpreted as follows:

- **application** - The consumer has applied for credit at the matched institution
- **originated** - The matched organization has extended credit to the consumer
  - **compliant** - The consumer has paid their credit as agreed in the last 60 days
  - **non-compliant** - all, or some, credit reported to Clearlinc is past due in the last 60 days.
- **declined** - The matched organization has declined to extend credit to the consumer
- **bankrupt/insolvent** - The matched organization has flagged the institution as bankrupt/insolvent

**_If your match's credit state is non-compliant, you now know that your applicant is out of payment compliance with a loan originated from another lending organization._**

:::info
When a match is present, you will see the history of the Credit State from the matched institution.

:::

:::info
Information on the matched organization is not and never will be present in Consumer Match Records.

:::

---

### Updates

The Credit State of your Consumer Credit records remains dynamic and evolving post-initial interaction with Clearlinc. Changes in Credit State are reflected within Clearlinc via the use of the API or Data ETL. As other lenders update their Consume Credit records, your Consumer Match records may change. You can know these changes via either webhooks or the API.

:::info
ClearProfile requires participating organizations to update the credit state of their consumer credit records as they change. This allows for matches to be made and insight to be driven off the matches.

:::

---

### API Integration

The Clearlinc system operates as illustrated

<p align="center">
    <img src={API} alt="API" style={{maxWidth: 600, width: '100%', height:'auto'}} />
</p>

---

:::info
For more detailed information on the API, Clearsync, and Clearwatch, check out the following links:

- [Clearsync](./clearsync.md)
- [Clearwatch](./clearwatch.md)

:::
