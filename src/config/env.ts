// src/config/env.ts
interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  // add other environment variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

export const env = import.meta.env;
