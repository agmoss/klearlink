---
sidebar_position: 3
---

import Klearwatch from '/img/klearwatch.png';

# Klearwatch

:::info
Prior Reading: [Klearrofile](./klearprofile.md)

:::

## Abstract

Integration with the Klearwatch webhook interface allows for real-time notifications when another organization submits a consumer credit record that either matches one of your consumer credit records (creating a consumer match) or causes the update or removal of a previous consumer match.

<p align="center">
    <img src={Klearwatch} alt="API" style={{maxWidth: 600, width: '100%', height:'auto'}} />
</p>

---

## Use Cases

1. **You submit a consumer credit record, but you don't get a match.**

When providing a consumer credit record with Klearsync and you don't receive a consumer match record, your applicant does not have any other loans with Klearlink affiliates, this is good! However, you may want to know if that changes. This may change your collections strategy or your decision to re-lend to the consumer.

2. **Your match grows**

Let's say you submit a consumer credit record with Klearsync, and you get a consumer match. Imagine this match has one entry in the consumer matches array. This means they have only one record with Klearlink affiliates. If this consumer applies or obtains a loan from another affiliate after your original consumer credit record submission, you may want to know this information. This may change your collections strategy, underwriting strategy, or your decision to re-lend to the consumer.

3. **Your match changes credit state**

- `originated → non-compliant` : If your match begins in the originated state and then moves to non-compliant, it means they have become delinquent on one of their other loans. Knowing this may change your collections strategy or your decision to re-lend to the consumer.
- `non-compliant → compliant` : If your match begins as non-compliant, you likely have chosen to decline a loan to this consumer. However, if they move to compliant, they have paid off their delinquent loan at another institution. Knowing this, you may want to re-target this consumer for a loan.

## Integration

### 1. Creation/update of a consumer match

**Endpoint**: `yourwebsite.com Klearlink-webhook-callback`

**Method**: `POST`

**Description**: Notification of created or updated consumer match

**Request Body**:

```json
{
  "id": "string",
  "type": "updated | created",
  "created_at": "datetime",
  "updated_at": "string"
}
```

:::info
The Klearlink API server will send your server POST requests with the aforementioned request body. From there, you can re-call the Klearprofile API to see what has been created or updated.

:::
