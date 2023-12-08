import * as Joi from 'joi';
import { ConfigModuleOptions } from '@nestjs/config';

/**
 * @returns Validated environment variables using JOI npm package
 */
export const dotenvConfig = (): ConfigModuleOptions => ({
  validationSchema: Joi.object({
    NODE_ENV: Joi.string().required(),
    API_VERSION: Joi.string().required(),
    SERVER_PORT: Joi.number().required(),
    RDB_DATABASE: Joi.alternatives().conditional('DATABASE_TYPE', {
      is: 'RDB',
      then: Joi.string().required(),
      otherwise: Joi.optional(),
    })
  }),
  envFilePath: ['.env.local', '.env.development', '.env.production'],
  isGlobal: true,
  cache: true,
});
