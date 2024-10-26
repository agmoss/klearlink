---
sidebar_position: 1
---

# Clearprofile

## Abstract

Clearprofile by Clearlinc is an API product for the controlled dissemination of cross-party lending statuses to consumers. Integration with the API allows lenders to understand their applicants' prior payment performance on loans sourced by other lenders.

With Clearlinc, a lender inputs three things on each loan:

1. **Loan facts**
2. **Credit State**
3. **Consumer State**

Together, these are referred to as a **lending instance**

in return, the lender is provided with a **consumer match** record

---

### Loan facts

Loan facts are a union of the subset of a [Loan](https://schema.org/LoanOrCredit) and a [Person](https://schema.org/LoanOrCredit) **\[TODO: Elaborate on this\]**. All fields of loan facts are optional, and lenders can pick and choose what data fields to provide based on their preferences and use cases. \[TODO: Pick this approach or go with prescriptive approach\]

Clearlinc will only ever return the exact loan facts submitted. The system allows for the determination of inter-organizational consumer matches. It does not allow for any possibility of inter-organizational data dissemination, viewership, or enrichment. Further, consumer matches do not contain any identifiable information about the lending institution.

Providing more loan fact fields will increase the likelihood of a match being found.

Examples of loan fact fields:

- Amount: Credit Limit extended
- Credit Type: the loan type. for the purposes of the pilot will default to payday
- Application Date: the date the consumer last applied for the credit
- Application Time: the time the consumer last applied for the credit
- Originated Date: date the credit was approved and funds advanced
- Originated Time: time of day the credit was extended
- Payment Due Date:
- Payment Amount Due
- Credit State (credit state status - see below)

---

### Credit State

A loan, any loan, can exist in any one of the following states.

```mermaidjs
graph TD
    A[application] --> B[originated]
    A --> C[declined]
    A --> E[pending]
    B --> F[compliant]
    B --> G[non-compliant]
```

---

### Consumer State

As a loan moves between credit states, the lender learns information about the lendees performance on the loan. The following consumer states represent these:

- **bankrupt/insolvent** - based on information captured from a credit state/loan fact, the consumer is flagged as bankrupt or insolvent
- **compliant** - all credit reported to Clearlinc has been paid as agreed in the last 60 days
- **noncompliant** - all, or some, credit reported to Clearlinc is past due in the last 60 days. Note that this state is dynamic based on the most recent data received. For example, a customer on day 50 may be non-compliant due to one loan that is past due, however following a fulfillment of all obligations on day 51, the consumer state would flip to compliant on any successful matches on day 51 or later. **\[NTD: consider static data that hold any status in the last 60 days? - this would likely be more beneficial to lenders\]**
- **indeterminate** - not enough data has been collected to determine the consumer state

Associated with Consumer State is bank institution information on the consumer:

- I**nstitution Names** - indicates the number of unique institutions utilized in the last 60 days.
- **FUTURE RELEASE:** Bank Account Rating - indicates the number of unique bank accounts utilized in the last 60 days. B1 = 1 account utilized….B2 = 2 accounts utilized, etc.

---

### Consumer Match Record

A consumer match is the result of the Clearlinc process. Clearlinc will return the matching information of the consumer and their associated loans with other lending organizations, to your lending instance. The data returned in a successful consumer match will allow the receiving lender to utilize the returned data in their decisioning. This data will assist in areas such as:

- **Credit performance in the last 60 days** - allowing the lender to see all compliant, and any outstanding issues of non-compliance by the consumer.
- **Added debt-to-income calculation enhancements** - This data allows lenders to calculate the consumer's borrowing ratio of debt to income if credit is still outstanding.
- **Credit stacking or fraud stacking determinations** - If the consumer has obtained multiple forms of credit in the last 30 days, this could be a further signal of risk, and even fraud risk, beyond traditional borrowing ratios.
- **Institution utilization** - allows lenders to determine how many institutions the consumer banks within the last 60 days.

The data returned in a consumer match is only ever the total amount of information in the submitted lending instance, or a subset of this information, with the accompanying flag of whether or not a match is present. This ensures that the information provided to the system is the only information that is returned from the system.

---

### Updates

The credit state remains dynamic and evolving post-initial interaction with Clearlinc. As your loan, either changes lifecycle or your consumer changes state, these updates are reflected within Clearlinc via the use of the API or Data ETL. As other lenders update records, your loan match records may change. You can know these changes via either webhooks or the API.

---

### API Integration

The Clearlinc system operates as illustrated. The specifics of the API, Webhooks, and Data ETL are provided below.

```mermaidjs
graph TD
    subgraph YourOrg_System
        YourOrg(YourOrg provides consumer + loan data)

    end

    subgraph Clearlinc_System
        API[Clearlinc processes loan_facts, consumer_state, and credit_state]
        Matcher[Check for consumer data match]
    end

    YourOrg -->|POST Request or Data ETL| API
    API --> Matcher
    Matcher -->|Match found/ not found| YourOrg_System
```

---
