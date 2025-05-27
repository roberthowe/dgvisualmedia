import MarqueeComponent from '@/components/common/Marquee';
import Footer from '@/components/footers/Footer';
import Header from '@/components/headers/Header';
import ContactForm from '@/components/contact/ContactForm';
import ServiceDetails from '@/components/service/ServiceDetails';
import { allFeatures } from '@/data/features';

// For Static Site Generation (SSG)
export async function generateStaticParams() {
  return allFeatures.map((elm) => ({
    slug: `${elm.slug}`,
  }));
}

// Dynamic metadata based on params
export async function generateMetadata({ params }) {
  const service = allFeatures.filter((elm) => elm.slug === params.slug)[0];

  if (!service) {
    return {
      title: 'Service Not Found | DG Visual Media',
      description: 'The requested service could not be found.',
    };
  }

  return {
    title: `${service.title} | DG Visual Media`,
    description:
      service.text ||
      `Learn more about our ${service.title.toLowerCase()} at DG Visual Media.`,
  };
}

export default function ServicePageDetails({ params }) {
  return (
    <>
      <Header />
      <ServiceDetails serviceSlug={params.slug} />
      <ContactForm />
      <Footer />
    </>
  );
}
