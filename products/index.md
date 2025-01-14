---
sidebar_position: 1
---

import Quickstart from '/img/quickstart.png';

# Quick Start

Welcome to the [Clearlinc.io](http://Clearlinc.io) documentation site! This site is designed to help you understand our products, explore the technical details, and discover how [Clearlinc.io](http://Clearlinc.io) can empower your lending business. Below, you'll find a high-level overview of each section in our documentation.

Take a look at our [Products](./category/products) section for detailed information on how each facet of Clearlinc works!

---

## How It Works

A consumer applies for a loan with your lending institution. As part of your existing underwriting process (account aggregation, credit check, cashflow underwriting, etc.), you submit the consumer information and loan application information (together called a consumer credit record) to Clearlinc via [Clearsync](./products/clearsync.md). We return the presence or absence of a consumer match record to you via [Clearprofile](./products/clearprofile.md). You incorporate the consumer match result as part of your broader underwriting policy.

Subsequently, as your applicant goes from application to originated or declined and or from originated to compliant or non-compliant \[changes [credit state](./products/clearprofile.md#credit-state)\], you update this information in Clearlinc via [Clearsync.](./products/clearsync.md)

<p align="center">
    <img src={Quickstart} alt="Quickstart" style={{maxWidth: '100%', width: '100%', height: 'auto'}} />
</p>

---

## Steps

1. A consumer applies for a loan with your lending institution
2. During underwriting, you submit the consumer information and their loan information ([consumer credit record](./products/clearprofile.md#clearprofile))
3. Clearlinc returns a [consumer match record](./products/clearprofile.md#consumer-match-record)
4. You incorporate the presence or absence of the consumer match record in your underwriting decisioning
   1. If a consumer match record is returned, it means that the consumer has other loans with Clearlinc affiliated lenders. You will want to take note of how many loans, the delinquency status of these loans, and the timing of origination, amongst other factors that you deem essential for payment compliance.
   2. If a consumer match record is not returned, it means that the consumer does not and has not had loans with Clearlinc affiliated lenders. The absence of a consumer match record is meaningful, just as the presence of one is.
5. As your applicant changes credit state, you update this information in Clearlinc via your Clearsync integration method.
