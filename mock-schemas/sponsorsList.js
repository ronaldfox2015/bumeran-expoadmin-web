export const sponsorsList = {
  "type": "array",
  "minItems": 1,
  "maxItems": 4,
  "items": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "unique": true,
        "minimum": 1
      },
      "company": {
        "type": "string",
        "faker": "company.companyName"
      },
      "image": {
        "type": "string",
        "pattern": "http:\/\/placehold\\.it\/158x78"
      },
      "url": {
        "type": "string",
        "faker": "internet.url"
      },
      "coords": {
        "type": "object",
        "properties": {
          "desktop": {
            "type": "string",
            "pattern": "1023,412,1066,412,1066,542,1023,542|1085,413,1128,413,1128,542,1085,542|1146,412,1187,412,1187,542,1146,542|1252,105,1260,96,1277,87,1307,83,1341,89,1374,101,1399,117,1401,125,1389,132,1361,141,1316,142,1285,135,1266,126,1255,115"
          },
          "tablet": {
            "type": "string",
            "pattern": "622,411,665,411,665,542,622,542|683,411,727,411,727,542,683,542|744,411,786,411,786,542,744,542|809,94,817,84,831,75,859,71,901,77,935,91,958,108,958,114,942,122,911,130,863,129,837,122,821,112,813,103"
          }
        },
        "required": ["desktop", "tablet"]
      }
    },
    "required": ["id", "company", "image", "url", "coords"]
  }
};
