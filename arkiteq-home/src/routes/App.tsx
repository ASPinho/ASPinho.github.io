import React from 'react';
import DefaultLayout from "../components/layouts/default-layout";
import PageTitleBar from "../components/page-structure/page-title-bar";

export default App;

function App() {

  return (
      <>
          <DefaultLayout>
              <PageTitleBar title="HomePage"/>
          </DefaultLayout>
      </>
  );
}
