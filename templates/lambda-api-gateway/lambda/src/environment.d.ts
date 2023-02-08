declare global {
  namespace NodeJS {
    /* Extending the NodeJS.ProcessEnv interface with the new properties. */
    export interface ProcessEnv extends NodeJS.ProcessEnv {
      /**
       * `API_KEY`: Secret Key for API Request.
       */
      API_KEY: string;
      /**
       * `NODE_ENV`: NodeJS environment (`production`, `development`, `test`)
       */
      NODE_ENV?: string;
    }
  }
}

export {};
