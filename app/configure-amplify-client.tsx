'use client';

import { Amplify } from 'aws-amplify';
import outputs from '@/amplify_outputs.json';

// Configure Amplify on the client before any Auth usage.
// References:
// - SSR guidance (client configure + server APIs):
//   https://docs.amplify.aws/react/build-a-backend/server-side-rendering/
// - Next.js App Router quickstart (Authenticator in layout):
//   https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/
Amplify.configure(outputs, { ssr: true });

export default function ConfigureAmplifyClient() {
  return null;
}
