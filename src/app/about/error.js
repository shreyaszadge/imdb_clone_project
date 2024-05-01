
"use client" 
import { Suspense } from 'react';

function MyComponent() {
  const params = useSearchParams();

  return (
    <Suspense fallback={<div>Loading...</div>}>
  Something went wrong
    </Suspense>
  );
}
