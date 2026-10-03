// auth.config.ts
import type { NextAuthOptions } from 'next-auth';

export const authConfig = {
  providers: [], // Keep this empty here; add actual providers (Google, Credentials, etc.) in your main auth.ts file
} satisfies NextAuthOptions;
