---
sidebar_position: 1
---

# API

### Endpoints

### 1. Submit a consumer credit record

**Endpoint**: `/consumer-credit/{id}`

**Method**: `PUT`

**Path Parameters**:

- `id (string)`: The ID of the consumer credit record. This is a unique identifier that you provide for future reference of the consumer credit record and subsequent matches.

**Description**: Create a new consumer credit record in the system.

**Request Body**:

```json
{
  "consumer_facts": {
    "first_name": "John",
    "last_name": "Doe",
    "date_of_birth": "10/10/2010",
    "address": "101 1ST. S.W. Calgary AB",
    "phone_number": "+11234567890",
    "consumer_state": "applied",
    "bankrupt/insolvent": false,
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

**Response**:

- `201 Created`: consumer credit record successfully created.

:::info
The Klearsync Data ETL interface automatically populates new consumer credit records from your system into Klearlink, effectively eliminating the need to submit your records via API.

:::

---

### 2. Update a consumer credit record

**Endpoint**: `/consumer-credit/{id}`

**Method**: `POST`

**Path Parameters**:

- `id (string)`: The ID of the consumer credit record to which the original consumer credit record record corresponds to

**Description**: Update the consumer_facts and or credit_facts of a previously submitted consumer credit record

**Request Body**:

```json
{
  "consumer_facts": {
    "first_name": "John",
    "last_name": "Doe",
    "date_of_birth": "10/10/2010",
    "address": "101 1ST. S.W. Calgary AB",
    "phone_number": "+11234567890",
    "consumer_state": "applied",
    "bankrupt/insolvent": false,
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

**Response**:

- `200 Ok`: consumer credit record successfully updated.

:::info
The Klearsync Data ETL interface will automatically update your existing consumer credit records in Klearlink, effectively eliminating the need to update them via API.

:::

---

### 3. View a submitted consumer credit record

**Endpoint**: `/consumer-credit/{id}`

**Method**: `GET`

**Path Parameters**:

- `id (string)` : The ID of the consumer credit record to which the original consumer credit record record corresponds to

**Description**: View the data associated with a submitted consumer credit record

**Response**:

```json
{
  "consumer_facts": {
    "first_name": "John",
    "last_name": "Doe",
    "date_of_birth": "10/10/2010",
    "address": "101 1ST. S.W. Calgary AB",
    "phone_number": "+11234567890",
    "consumer_state": "applied",
    "bankrupt/insolvent": false,
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

### 4. View Consumer Match

**Endpoint**: `/consumer-credit/{id}/consumer-match`

**Method**: `GET`

**Path Parameters**:

- `id (string)`: The ID of the consumer credit record to which the original consumer credit record record corresponds to

**Description**: View the results of inter-organizational consumer match results on your previously submitted consumer-credit

- `404 not found`: No consumer match has been found for the consumer credit record

- `201 Ok`: Consumer match identified

```json
{
  "consumer_facts": {
    "first_name": "John",
    "last_name": "Doe",
    "date_of_birth": "10/10/2010",
    "address": "101 1ST. S.W. Calgary AB",
    "phone_number": "+11234567890",
    "consumer_state": "applied",
    "bankrupt/insolvent": false,
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
        "date_of_birth": true,
        "address": true,
        "phone_number": false
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
For real-time updates on consumer matches, use the Klearwatch interface.

:::

---

##
