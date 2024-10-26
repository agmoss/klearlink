---
sidebar_position: 1
---

### Endpoints

### 1. Submit a lending instance

**Endpoint**: `/lending-instance/{id}`

**Method**: `PUT`

**Path Parameters**:

- `id (string)`: The ID of the lending instance. This is a unique identifier that you provide for future reference of the lending instance and subsequent matches

**Description**: Create a new user in the system.

**Request Body**:

```json
{
  "loan_facts": {
    "first_name": "John",
    "last_name": "Doe",
    "date_of_birth": "10/10/2010",
    "address": "101 1ST. S.W. Calgary AB"
  },
  "credit_state": "applied",
  "consumer_state": "indeterminate"
}
```

**Response**:

- `201 Created`: Lending instance successfully created.

:::info
The use of the Data ETL interface will automatically populate new loan records from your system into Clearlinc, effectively eliminating the need to submit your records via API.

:::

---

### 2. Update a lending instance

**Endpoint**: `/lending-instance/{id}`

**Method**: `POST`

**Path Parameters**:

- `id (string)`: The ID of the lending instance to which the original lending instance record corresponds to

**Description**: Update the loan_facts, loan_lifecycle, or consumer_state of a previously submitted lending-instance.

**Request Body**:

```json
{
  "loan_facts": {
    "first_name": "John",
    "last_name": "Doe",
    "date_of_birth": "10/10/2001",
    "address": "101 1ST. S.W. Calgary AB"
  },
  "credit_state": "applied",
  "consumer_state": "indeterminate"
}
```

**Response**:

- `200 Ok`: Lending instance successfully updated.

:::info
The use of the Data ETL interface will automatically update your existing loan records in Clearlinc, effectively eliminating the need to update your records via API.

:::

---

### 3. View a submitted lending instance

**Endpoint**: `/lending-instance/{id}`

**Method**: `GET`

**Path Parameters**:

- `id (string)` : The ID of the lending instance to which the original lending instance record corresponds to

**Description**: View the data associated with a submitted lending-instance

**Response**:

```json
{
  "loan_facts": {
    "first_name": "John",
    "last_name": "Doe",
    "date_of_birth": "10/10/2001",
    "address": "101 1ST. S.W. Calgary AB"
  },
  "credit_state": "applied",
  "consumer_state": "indeterminate",
  "created_at": "datetime",
  "updated_at": "datetime",
  "processed": true
}
```

---

### 4. View Consumer Match

**Endpoint**: `/lending-instance/{id}/lending-match`

**Method**: `GET`

**Path Parameters**:

- `id (string)`: The ID of the lending instance to which the original lending instance record corresponds to

**Description**: View the results of inter-organizational consumer match results on your previously submitted lending-instance

- `404 not found`: No consumer match has been found for the lending instance

- `201 Ok`: Consumer match identified

```json
{
  "loan_facts": {
    "first_name": "John",
    "last_name": "Doe",
    "date_of_birth": "10/10/2001",
    "address": "101 1ST. S.W. Calgary AB"
  },
  "credit_state": "applied",
  "consumer_state": "indeterminate",
  "created_at": "datetime",
  "updated_at": "datetime",
  "processed": true,
  "lending_match": [
    {
      "matched_on": {
        "first_name": true,
        "last_name": true,
        "date_of_birth": false,
        "address": false
      },
      "date_matched": "datetime",
      "loan_lifecycle": "non-compliant",
      "consumer_state": "bankrupt/insolvent",
      "created_at": "datetime",
      "updated_at": "datetime"
    }
  ]
}
```

:::info
Here we see an inter-organizational match indicating that your applicant is non-compliant on a loan originated by another organization. You do not see what organization the non-compliant loan originated from, nor do you obtain any additional information on the organization. The information you see within the loan facts are the submitted loan facts. You will not see any loan facts that other organizations submitted.

:::

:::info
For real-time updates on consumer matches, use the webhook interface

:::

---

##
