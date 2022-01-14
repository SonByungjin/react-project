import { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

function App() {
  const LayOutComponent = lazy(() => import('./routes').then(({ RoutesComponent })=>({ default: RoutesComponent })));

  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <LayOutComponent />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
