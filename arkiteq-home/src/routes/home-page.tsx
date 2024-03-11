import React from 'react';
import DefaultLayout from "../components/layouts/default-layout";
import PageTitleBar from "../components/page-structure/page-title-bar";

export default HomePage;

function HomePage() {

  return (
      <>
          <DefaultLayout pageTitle={"Root"}>
              <PageTitleBar title="HomePage"/>
          </DefaultLayout>
      </>
  );
}
