// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Response, Prompt, User, Admin } = initSchema(schema);

export {
  Response,
  Prompt,
  User,
  Admin
};