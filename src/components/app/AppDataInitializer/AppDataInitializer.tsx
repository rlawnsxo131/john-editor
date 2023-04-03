import type { PropsWithChildren } from 'react';
import { Suspense } from 'react';
import { Await } from 'react-router-dom';

import Loading from '@/components/common/Loading';
import { initializeDatabase } from '@/db';
import { domainService } from '@/domain';

function AppDataInitializer({ children }: Required<PropsWithChildren>) {
  const initialData = initializeDatabase().then(() =>
    domainService.initializeSupportLanguageRecords(),
  );

  return (
    <Suspense fallback={<Loading />}>
      <Await
        resolve={initialData}
        errorElement={<div>error</div>}
        children={children}
      />
    </Suspense>
  );
}

export default AppDataInitializer;
