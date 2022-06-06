import React, { Suspense } from "react";
import { SWRConfig } from "swr";
import Pages from "./pages";

function App() {
  return (
    <div className="App bg-gray-100 h-full h-screen">
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
    </div>
  );
}

export default App;
