import React, { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { SWRConfig } from "swr";
import Pages from "./pages";

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <SWRConfig
          value={{
            suspense: true,
            fetcher: (resource, init) =>
              fetch(resource, init).then((res) => res.json()),
          }}
        >
          <Suspense fallback="Is loading...">
            <Pages />
          </Suspense>
        </SWRConfig>
      </HelmetProvider>
    </div>
  );
}

export default App;
