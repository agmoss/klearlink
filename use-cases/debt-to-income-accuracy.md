---
slug: debt-to-income-accuracy
title: Debt-To-Income Accuracy
---

**Problem**

Current aggregation data provides a limited view of customer's debt obligations over the last 60 days.

**Profile**

- The customer obtained his first payday loan in July from XYZ Cash Ltd.
- At the time of decisioning, he has one other payday loan, confirmed via Clearlinc match data
  - The customer has two payday loan cycles with XYZ and is late in both cycles
- Obtains his 3rd payday loan with XYZ in late August
- XYZ performs match data pull from Clearlinc on 3rd payday loan application
  - Data match confirms a 2x increase in debt-to-income ratio with four other active payday loans
  - Two payday loans obtained in the last 48 hours
  - Two recent loans are non-compliant
- Customer declares bankruptcy in the next 14 days

**Solution**

XYZ Cash Ltd checks for a consumer match in Clearlinc to see the applicants true DTI ratio based on the current loans the applicant has.

**Outcome**

XYZ Cash Ltd. declines the application due to the recent DTI increase and non-compliance, eliminating chargeoff risk by not issuing a loan to the customer.
