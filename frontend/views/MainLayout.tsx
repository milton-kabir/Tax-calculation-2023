import { AppLayout } from '@hilla/react-components/AppLayout.js';
import Placeholder from 'Frontend/components/placeholder/Placeholder.js';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <AppLayout primarySection="drawer">
      <Suspense fallback={<Placeholder />}>
        <Outlet />
      </Suspense>
    </AppLayout>
  );
}
