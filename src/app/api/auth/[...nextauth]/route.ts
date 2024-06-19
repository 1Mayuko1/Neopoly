import NextAuth from 'next-auth';
import { authConfig } from '@/src/configs/auth';

const handler = NextAuth(authConfig)

export {handler as GET, handler as POST}
