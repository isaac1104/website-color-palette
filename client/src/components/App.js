import React, { Suspense, lazy } from 'react';
import Spinner from './Spinner/Spinner';

const Home = lazy(() => import('./Home/Home'));

const App = () => {
  return (
    <Suspense fallback={<Spinner />}> 
      <Home />
    </Suspense>
  );
};

export default App;
