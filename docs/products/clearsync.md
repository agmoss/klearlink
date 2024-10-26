---
sidebar_position: 2
---

# Clearsync

## Abstract

Integration with the Data ETL interface is an alternative to the use of API Step 1 and Step 2. Data ETL offers a convenient and low overhead solution to supply Clearlinc with your organization's data such that you can benefit from getting the consumer matches without having to set up code and systems to supply the lending instances.

```mermaidjs
graph TD;
    subgraph Your_Org
        PD1[Your Data System] --> ETL[ETL]
    end

    ETL --> BDW[Clearlinc Data System]

    subgraph Clearlinc
        Lookup[Clearlinc API] --> |Query| BDW
    end

    Your_Org --> |Request| Lookup
    Lookup --> |Response| Your_Org
```

With Data ETL, Clearlinc sets up an ETL pipeline that is connected to the source of your loan data. The ETL pipeline extracts the loan facts, consumer state, and credit state data and populates it into the Clearlinc database. From there, you can use API Steps 3, and 4 and webhooks to get your consumer matches.

Data ETL can be facilitated via the following integrations:

- TODO: Populate list
