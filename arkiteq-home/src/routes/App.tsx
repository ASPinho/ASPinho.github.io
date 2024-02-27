import React from 'react';
import DefaultLayout from "../components/layouts/default-layout";
import PageTitleBar from "../components/page-title-bar";

export default App;

function App() {

  return (
      <>
          <DefaultLayout>
              <PageTitleBar title="HomePage" subtitle="Work In Progress"/>
          </DefaultLayout>
      </>
  );
}
