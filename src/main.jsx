import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { NotFound } from './pages';
import { ErrorBoundary } from 'react-error-boundary';
import { lazy, Suspense } from 'react';
import Loading from './components/SplashScreen/index.jsx';

const Routes = lazy(() => delayForDemo(import('./Routes/index.jsx')));

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary
      fallback={<NotFound />}
      onReset={() => window.location.replace('/')}>
        <Suspense fallback={<Loading />}>
      <Routes />
      </Suspense>
    </ErrorBoundary>
  </StrictMode>
);

async function delayForDemo(promise) {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return promise;
}