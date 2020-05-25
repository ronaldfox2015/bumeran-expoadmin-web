export const rucInvalid = {
  "type": "array",
  "minItems": 1,
  "maxItems": 1,
  "items": {
    "type": "object",
    "properties": {
      "data": {
        "nameBusiness": "",
        "company": ""
      },
      "message": "Error"
    },
    "required": ["data", "message"]
  }
};