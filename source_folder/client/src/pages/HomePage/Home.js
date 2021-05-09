import React from "react";
import { homeSectionOne, homeSectionTwo, homeSectionThree} from "./Data";
import PageSection from "../../components/PageStructure/PageSection/PageSection";

function Home() {
  return (
    <>
      <PageSection {...homeSectionOne} />
      <PageSection {...homeSectionTwo} />
      <PageSection {...homeSectionThree} />

    </>
  );
}

export default Home;
