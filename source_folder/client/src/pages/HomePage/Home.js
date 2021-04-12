import React from 'react';
import { homeSectionOne, homeSectionTwo, homeSectionThree} from './Data';
import PageSection from "../../components/PageSection/PageSection";

function Home() {
  return (
    <>
     <PageSection {...homeSectionOne}/>
     <PageSection {...homeSectionTwo}/>
     <PageSection {...homeSectionThree}/>
   
     
    </>
  );
}

export default Home;
