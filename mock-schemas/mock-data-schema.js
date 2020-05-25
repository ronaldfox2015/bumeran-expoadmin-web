/* https://github.com/json-schema-faker/json-schema-faker#example-usage
   http://json-schema.org/learn/miscellaneous-examples.html
  */

// import {users} from './test-users'
import { companyList } from './companyList';
import { industriesList } from './industriesList';
import { sponsorsList } from './sponsorsList';
import { rucValid } from './rucValid';
import { rucInvalid } from './rucInvalid';

export const schema = {
  "type": "object",
  "properties": {},
  "required": ["companyList", "industriesList", "sponsorsList", "rucValid", "rucInvalid"]
};

// schema.properties.users = users;
schema.properties.companyList = companyList;
schema.properties.industriesList = industriesList;
schema.properties.sponsorsList = sponsorsList;
schema.properties.rucValid = rucValid;
schema.properties.rucInvalid = rucInvalid;
