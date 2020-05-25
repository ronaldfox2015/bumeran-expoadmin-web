export const companyList = {
  "type": "array",
  "minItems": 10,
  "maxItems": 30,
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
      "industry": {
        "type": "string",
        "pattern": "Empleo|Educación"
      },
      "ruc": {
        "type": "string",
        "pattern": "12345678912|98765432198"
      },
      "standType": {
        "type": "string",
        "pattern": "Oro|Plata|Bronce"
      },
      "modelType": {
        "type": "string",
        "pattern": "A|B|C|D"
      }
    },
    "required": ["id", "businessName", "industry", "ruc", "standType", "modelType"]
  }
};

