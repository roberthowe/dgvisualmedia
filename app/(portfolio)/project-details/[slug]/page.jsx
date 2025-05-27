import MarqueeComponent from '@/components/common/Marquee';
import Footer from '@/components/footers/Footer';
import Header from '@/components/headers/Header';
import Breadcumb2 from '@/components/portfolio/Breadcumb2';
import ContactForm from '@/components/contact/ContactForm';

import ProjectDetails from '@/components/portfolio/ProjectDetails';
import { allPortfolio } from '@/data/portfolio';

//For Static Side Genaration(SSG)

export async function generateStaticParams() {
  return allPortfolio.map((elm) => ({
    slug: `${elm.slug}`,
  }));
}

export async function generateMetadata({ params }) {
  const portfolioItem = allPortfolio.filter(
    (elm) => elm.slug === params.slug
  )[0];

  if (!portfolioItem) {
    return {
      title: 'Service Not Found | DG Visual Media',
      description: 'The requested service could not be found.',
    };
  }

  return {
    title: `${portfolioItem.title} | DG Visual Media`,
    description: portfolioItem.metaDescription,
  };
}

export default function ProjectPageDetails({ params }) {
  const portfolioItem =
    allPortfolio.filter((elm) => elm.slug == params.slug)[0] || allPortfolio[1];

  return (
    <>
      <Header />
      <Breadcumb2 pageTitle={portfolioItem.title} />
      <ProjectDetails portfolioItem={portfolioItem} />
      <ContactForm />

      <Footer />
    </>
  );
}
