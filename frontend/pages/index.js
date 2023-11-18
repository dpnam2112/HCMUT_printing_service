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
        <SectionPrinting />
        <SectionTable />
      </Layout>
    </>
  );
}
