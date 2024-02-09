// @refresh reload
import {
  Html,
  Head,
  Body,
  Meta,
  Link,
  Routes,
  FileRoutes,
  Scripts,
  ErrorBoundary,
} from 'solid-start';
import { Suspense } from 'solid-js';

import { initializeApp } from 'firebase/app';
import { FirebaseProvider } from 'solid-firebase';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);

export default function Root() {
  return (
    <FirebaseProvider app={app}>
      <Html id="root" lang="en">
        <Head>
          <Meta charset="utf-8" />
          <Meta name="viewport" content="width=device-width, initial-scale=1" />
          <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <Link rel="manifest" href="/site.webmanifest" />
          <Link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
        </Head>
        <Body>
          <ErrorBoundary>
            <Suspense>
              <Routes>
                <FileRoutes />
              </Routes>
            </Suspense>
          </ErrorBoundary>
          <Scripts />
        </Body>
      </Html>
    </FirebaseProvider>
  );
}
