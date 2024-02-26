import React from 'react';
import PageHeader from "./components/header";
import PageContent from "./components/page-content";


export default App;

function App() {

  return (
      <>
        <PageHeader />
        <PageContent title={"HomePage"} subtitle={"Work In Progress"}>
        </PageContent>
      </>
  );
}
