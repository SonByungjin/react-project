import { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { languageMap } from './translations';

function App() {
  const locale = navigator.language;
  const LayOutComponent = lazy(() => import('./routes').then(({ RoutesComponent })=>({ default: RoutesComponent })));

  return (
    <IntlProvider locale={locale} messages={languageMap[locale]}>
      <BrowserRouter>
        <Suspense fallback={null}>
          <LayOutComponent />
        </Suspense>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;
