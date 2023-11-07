import Container from "../components/container";
import Layout from "../components/layout";
import SectionHero from "../components/home/SectionHero";
import SectionPrinting from "../components/home/SectionPrinting";
import SectionTable from "../components/home/SectionTable";

export default function Index() {
  return (
    <>
      <Layout>
        <Container>
          <SectionHero />
        </Container>
        {/* <div className="w-full px-6 md:px-24">
          <SectionCompany />
        </div> */}
        <SectionPrinting />
        <SectionTable />
        {/* {/* <SectionMainFeatures /> */}
        {/* <SectionRemoteDevice /> */}
        {/* <SectionZeroSetup />
        <SectionFeatureList /> 
        <SectionTestimonials /> */}
        <Container>{/* <SectionCTA /> */}</Container>
      </Layout>
    </>
  );
}
