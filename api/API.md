---
sidebar_position: 1
---

# API

## Authentication

All API requests must include authentication credentials in the request headers. We use API key-based authentication.

**Headers**:

| Header       | Value  | Description              |
| ------------ | ------ | ------------------------ |
| `X-API-Key`  | string | Your unique API key      |
| `X-Username` | string | Your registered username |

**Example**:

```http
X-API-Key: your_api_key_here
X-Username: your_username
```

:::warning
Keep your API key secure and never share it. If you believe your API key has been compromised, contact support immediately for a replacement.
:::

:::info
You can obtain your API credentials from the KlearLink dashboard under Settings → API Access.
:::

> Endpoints

## 1. Submit a consumer credit record

**Endpoint**: `/consumer-credit/{id}`

**Method**: `PUT`

**Description**: Create a new consumer credit record in the system.

**Path Parameters**:

| Parameter | Type   | Description                                      |
| --------- | ------ | ------------------------------------------------ |
| id        | string | Unique identifier for the consumer credit record |

**Response Codes**:

| Code | Description                                                          |
| ---- | -------------------------------------------------------------------- |
| 201  | Created - Consumer credit record successfully created                |
| 409  | Conflict - A consumer credit record with id of `{id}` already exists |

### Request Body

#### consumer_facts

| Field             | Type              | Description                                                             |
| ----------------- | ----------------- | ----------------------------------------------------------------------- |
| first_name        | string            | First name of the consumer                                              |
| last_name         | string            | Last name of the consumer                                               |
| email             | string            | RFC 5322 and RFC 822 format email address of the consumer               |
| date_of_birth     | string            | ISO 8601 date format of the consumer's date of birth                    |
| address           | string            | CAN/CSA-Z109.1-01 or USPS Publication 28 address format of the consumer |
| phone_number      | string            | E.164 international format phone number of the consumer                 |
| SIN/SSN           | string (optional) | SIN(`NNN-NNN-NNN`) or SSN(`NNN-NN-NNNN`) of the consumer                |
| consumer_state    | string            | State of the consumer                                                   |
| institution_names | array             | List of associated institutions                                         |

#### credit_facts

| Field                | Type   | Description                              |
| -------------------- | ------ | ---------------------------------------- |
| amount               | number | Amount requested by borrower, in dollars |
| credit_type          | string | Type of credit (`"PDL"` or `"BNPL"`)     |
| application_datetime | string | ISO 8601 datetime of application         |
| credit_state         | string | State of credit (see values below)       |

**Credit States**:

- `"applied"`
- `"originated"`
- `"declined"`
- `"non-compliant"`
- `"compliant"`
- `"bankrupt/insolvent"`

**Example**:

```json
{
  "consumer_facts": {
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "date_of_birth": "2010-10-10",
    "address": "101 1ST. S.W. Calgary AB T2P 2V6",
    "phone_number": "+11234567890",
    "consumer_state": "applied",
    "institution_names": ["TD", "RBC"]
  },
  "credit_facts": {
    "amount": 1000,
    "credit_type": "PDL",
    "application_datetime": "2024-09-23 21:47:12.023476",
    "credit_state": "applied"
  }
}
```

:::info
The KlearSync Data ETL interface automatically populates new consumer credit records from your system into KlearLink, effectively eliminating the need to submit your records via API.

:::

---

## 2. Update a consumer credit record

**Endpoint**: `/consumer-credit/{id}`

**Method**: `POST`

**Description**: Update the consumer_facts and/or credit_facts of a previously submitted consumer credit record

**Path Parameters**:

| Parameter | Type   | Description                               |
| --------- | ------ | ----------------------------------------- |
| id        | string | ID of the existing consumer credit record |

**Response Codes**:

| Code | Description                                          |
| ---- | ---------------------------------------------------- |
| 200  | OK - Consumer credit record successfully updated     |
| 404  | Not Found - No consumer match found for id of `{id}` |

**Request Body**:

Same schema as Submit endpoint, with additional optional fields in credit_facts:

| Field               | Type   | Description                           |
| ------------------- | ------ | ------------------------------------- |
| originated_datetime | string | ISO 8601 datetime of origination      |
| payment_due_date    | string | ISO 8601 datetime of payment due date |
| payment_amount_due  | number | Amount due for payment, in dollars    |

**Example**:

```json
{
  "consumer_facts": {
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "date_of_birth": "2010-10-10",
    "address": "101 1ST. S.W. Calgary AB T2P 2V6",
    "phone_number": "+11234567890",
    "consumer_state": "applied",
    "institution_names": ["TD", "RBC"]
  },
  "credit_facts": {
    "amount": 1000,
    "credit_type": "PDL",
    "application_datetime": "2024-09-23 21:47:12.023476",
    "originated_datetime": "2024-09-24 15:43:12.023476",
    "payment_due_date": "2024-09-30 15:43:12.023476",
    "payment_amount_due": 1000,
    "credit_state": "originated"
  }
}
```

:::info
The KlearSync Data ETL interface will automatically update your existing consumer credit records in KlearLink, effectively eliminating the need to update them via API.

:::

---

## 3. View a submitted consumer credit record

**Endpoint**: `/consumer-credit/{id}`

**Method**: `GET`

**Description**: View the data associated with a submitted consumer credit record

**Path Parameters**:

| Parameter | Type   | Description                      |
| --------- | ------ | -------------------------------- |
| id        | string | ID of the consumer credit record |

**Response Codes**:

| Code | Description                                          |
| ---- | ---------------------------------------------------- |
| 200  | OK - Request successful                              |
| 404  | Not Found - No consumer match found for id of `{id}` |

**Response Body**:

Includes all fields from consumer_facts and credit_facts, plus:

| Field      | Type    | Description                          |
| ---------- | ------- | ------------------------------------ |
| created_at | string  | ISO 8601 datetime of record creation |
| updated_at | string  | ISO 8601 datetime of last update     |
| processed  | boolean | Whether record has been processed    |

**Example**:

```json
{
  "consumer_facts": {
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "date_of_birth": "2010-10-10",
    "address": "101 1ST. S.W. Calgary AB T2P 2V6",
    "phone_number": "+11234567890",
    "consumer_state": "applied",
    "institution_names": ["TD", "RBC"]
  },
  "credit_facts": {
    "amount": 1000,
    "credit_type": "PDL",
    "application_datetime": "2024-09-23 21:47:12.023476",
    "originated_datetime": "2024-09-24 15:43:12.023476",
    "payment_due_date": "2024-09-30 15:43:12.023476",
    "payment_amount_due": 1000,
    "credit_state": "originated"
  },
  "created_at": "datetime",
  "updated_at": "datetime",
  "processed": true
}
```

---

## 4. View Consumer Match

**Endpoint**: `/consumer-credit/{id}/consumer-match`

**Method**: `GET`

**Description**: View the results of inter-organizational consumer match results on your previously submitted consumer-credit

**Path Parameters**:

| Parameter | Type   | Description                      |
| --------- | ------ | -------------------------------- |
| id        | string | ID of the consumer credit record |

**Response Codes**:

| Code | Description                                          |
| ---- | ---------------------------------------------------- |
| 200  | OK - Consumer match identified                       |
| 404  | Not Found - No consumer match found for id of `{id}` |

**Response Body**:

Includes consumer_facts and credit_facts from original record, plus:

#### matched_on

| Field             | Type    | Description                              |
| ----------------- | ------- | ---------------------------------------- |
| first_name        | boolean | Whether first name matched               |
| last_name         | boolean | Whether last name matched                |
| email             | boolean | Whether email matched                    |
| date_of_birth     | boolean | Whether date of birth matched            |
| address           | boolean | Whether address matched                  |
| phone_number      | boolean | Whether phone number matched             |
| institution_names | array   | List of institutions from matched record |

**Example**:

```json
{
  "consumer_facts": {
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "date_of_birth": "2010-10-10",
    "address": "101 1ST. S.W. Calgary AB T2P 2V6",
    "phone_number": "+11234567890",
    "consumer_state": "applied",
    "institution_names": ["TD", "RBC"]
  },
  "credit_facts": {
    "amount": 1000,
    "credit_type": "PDL",
    "application_datetime": "2024-09-23 21:47:12.023476",
    "originated_datetime": "2024-09-24 15:43:12.023476",
    "payment_due_date": "2024-09-30 15:43:12.023476",
    "payment_amount_due": 1000,
    "credit_state": "originated"
  },
  "created_at": "datetime",
  "updated_at": "datetime",
  "processed": true,
  "consumer_match": [
    {
      "matched_on": {
        "first_name": true,
        "last_name": true,
        "email": true,
        "date_of_birth": true,
        "address": true,
        "phone_number": false,
        "institution_names": ["CIBC"]
      },
      "credit_facts": {
        "amount": 1200,
        "credit_type": "PDL",
        "application_datetime": "2024-09-23 11:47:12.023476",
        "originated_datetime": "2024-09-24 12:43:12.023476",
        "payment_due_date": "2024-09-30 07:43:12.023476",
        "payment_amount_due": 1200,
        "credit_state": "non-compliant"
      }
    }
  ]
}
```

:::info
Here, we see an inter-organizational match indicating that your applicant is non-compliant on a loan originated by another organization.

You do not see what organization the non-compliant loan originated from, nor do you obtain any additional information on the organization, nor do you see any consumer_facts or credit_facts that you do not already have.

:::

:::info
For real-time updates on consumer matches, use the KlearWatch interface.

:::

---

## Appendix

### A. Definitions

| Term              | Definition                                                                                                                           |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Consumer Credit   | A financial product extended to consumers for personal use, including both Pay Day Loans (PDL) and Buy Now Pay Later (BNPL) products |
| Consumer Facts    | Identifying information about a consumer that can be used for matching and verification purposes                                     |
| Credit Facts      | Details about a specific credit product, including amount, type, and current state                                                   |
| Institution Names | Financial institutions or lenders that have a relationship with the consumer                                                         |
| Consumer State    | The current status of a consumer in relation to their credit products                                                                |
| Credit State      | The current status of a specific credit product                                                                                      |

### B. Data Standards

| Data Type        | Standard            | Format Example                        | Description                                              |
| ---------------- | ------------------- | ------------------------------------- | -------------------------------------------------------- |
| Date             | ISO 8601            | `YYYY-MM-DD`                          | International date format                                |
| Email            | RFC 5322/822        | `john.doe@example.com`                | RFC 5322 and RFC 822 format email address                |
| DateTime         | ISO 8601            | `YYYY-MM-DD HH:mm:ss.SSSSSS`          | International datetime format with microsecond precision |
| Phone Number     | E.164               | `+1XXXXXXXXXX`                        | International phone number format                        |
| Address (Canada) | CAN/CSA-Z109.1-01   | `101 1ST. S.W. Calgary AB T2P 2V6`    | Canadian postal address format                           |
| Address (USA)    | USPS Publication 28 | `1234 MAIN ST NW WASHINGTON DC 20500` | US postal address format                                 |
| SIN              | CRA Standard        | `NNN-NNN-NNN`                         | Canadian Social Insurance Number format                  |
| SSN              | SSA Standard        | `NNN-NN-NNNN`                         | US Social Security Number format                         |

:::info
All data sent to klearlink must be valid json.
:::

:::info
All monetary values in this API are expressed in the local currency (CAD for Canadian transactions, USD for US transactions) and should be provided as decimal numbers with up to 2 decimal places.
:::
