---
sidebar_position: 3
---

# Clearwatch

## Abstract

Integration with the Clearwatch webhook interface allows for real-time notifications when another organization submits a lending instance that either matches one of your lending instances (creating a consumer match) or causes the update or removal of a previous consumer match.

```mermaidjs
graph TD
    subgraph YourOrg_System
        YourOrg_Webhook(Webhook endpoint on YourOrg API)
    end

    subgraph Clearlinc_System
        Matcher[Check for consumer data match]
        Webhook_Trigger[Trigger webhook to YourOrg if a match is found later]
    end

    Matcher -->|Match found later| Webhook_Trigger
    Webhook_Trigger -->|Webhook| YourOrg_Webhook

```

---

## 1. Creation/update of a consumer match

**Endpoint**: `yourwebsite.com/clearlinc-webhook-callback`

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
The Clearlinc API server will send your server POST requests with the aforementioned request body. From there, you can re-call the Clearprofile API to see what has been created or updated.

:::
