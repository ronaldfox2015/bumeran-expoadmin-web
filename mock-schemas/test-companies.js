export const companies = {
  "type": "array",
  "minItems": 3,
  "maxItems": 5,
  "items": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "unique": true,
        "minimum": 1
      },
      "businessName": {
        "type": "string",
        "faker": "company.companyName"
      },
      "email": {
        "type": "string",
        "format": "email",
        "faker": "internet.email"
      }
    },
    "required": ["id", "businessName", "email"]
  }
};