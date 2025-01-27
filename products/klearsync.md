---
sidebar_position: 2
---

import ETL from '/img/klearsync_etl.png';
import API from '/img/klearsync_api.png';

# KlearSync

:::info
Prior Reading: [KlearProfile](./klearprofile.md)

:::

## Overview

Obtaining Consumer Matches from KlearLink requires your lending organization to submit your consumer credit records. This process is called KlearSync, and it is done with the integration methods below:

1. API
2. Data ETL

Your organization can choose the method that best suits its needs. The API method is configurable and simple to use, but it requires development effort to integrate. The Data ETL integration is effortless, but it comes at an additional price.

## API

Integration with the API is a flexible and configurable way to submit your consumer credit records. You can control the frequency and specificity of the records. You are free to integrate the API calls into your digital underwriting journey using the tools and technologies your organization uses and understands.

The API for consumer credit record submission and consumer match consumption is a standard REST API.

<p align="center">
    <img src={API} alt="API" style={{maxWidth: 600, width: '100%', height:'auto'}} />
</p>

:::info
The API is detailed in the API Docs

:::

## Data ETL

Integration with the Data ETL interface is an alternative to using APIs to provide consumer credit records. Data ETL offers a convenient and low-overhead solution to supply KlearLink with your organization's data, so you can benefit from getting the consumer matches without having to set up code and systems to supply the consumer credit records.

<p align="center">
    <img src={ETL} alt="ETL" style={{maxWidth: 600, width: '100%', height:'auto'}} />
</p>

With Data ETL, KlearLink sets up an ETL pipeline connected to the source of your consumer data. The pipeline extracts and transforms your data into the required consumer credit record and populates it into the KlearLink database. From there, you can use API Steps 3 and 4 and/or KlearWatch to get your consumer matches.

:::info
KlearLink will pull new data from your database every 30 minutes when you use the KlearSync integration.

:::
