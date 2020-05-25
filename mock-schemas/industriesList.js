export const industriesList = {
  "type": "array",
  "minItems": 3,
  "maxItems": 10,
  "items": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "faker": "random.number"
      },
      "name":{
        "type" : "string",
        "faker": "name.firstName"
      }
    },
    "required": ["id", "name"]
  }
};