export const rucValid = {
  "type": "array",
  "minItems": 1,
  "maxItems": 1,
  "items": {
    "type": "object",
    "properties": {
      "data": {
        "nameBusiness": "Company S.A.C.",
        "company": "Company1"
      },
      "message": "Satisfactorio"
    },
    "required": ["data", "message"]
  }
};