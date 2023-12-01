import Container from "../components/container";
import Layout from "../components/layout";
import SectionHero from "../components/home/SectionHero";
import SectionPrinting from "../components/home/SectionPrinting";

export default function Index() {
  return (
    <>
      <Layout preview={{}}>
        <Container>
          <SectionHero />
        </Container>
        <SectionPrinting />
      </Layout>
    </>
  );
}
