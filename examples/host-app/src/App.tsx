import { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { css } from '@emotion/react';

const RemoteApp1 = lazy(() => import('remoteApp1/App'));
const RemoteApp2 = lazy(() => import('remoteApp2/App'));

function App() {
  return (
    <div css={css({ width: '100%', height: '100%' })}>
      <ErrorBoundary fallback={<div> (RemoteApp1) Something went wrong. </div>}>
        <Suspense fallback={<div>loading remoteApp1</div>}>
          <RemoteApp1 />
        </Suspense>
      </ErrorBoundary>
      <br />
      <br />
      <br />
      <ErrorBoundary fallback={<div> (RemoteApp2) Something went wrong. </div>}>
        <Suspense fallback={<div>loading remoteApp2</div>}>
          <RemoteApp2 />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
