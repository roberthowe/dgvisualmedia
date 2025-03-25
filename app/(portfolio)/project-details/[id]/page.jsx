import MarqueeComponent from '@/components/common/Marquee';
import Footer from '@/components/footers/Footer';
import Header from '@/components/headers/Header';
import Breadcumb2 from '@/components/portfolio/Breadcumb2';

import ProjectDetails from '@/components/portfolio/ProjectDetails';
import { allPortfolio } from '@/data/portfolio';
export const metadata = {
  title:
    'Project Details || Frisk - Creative Agency & Portfolio Nextjs Template',
};

//For Static Side Genaration(SSG)

// export async function generateStaticParams() {
//   return allPortfolio.map((elm) => ({
//     id: `${elm.id}`,
//   }));
// }

export default function ProjectPageDetails({ params }) {
  return (
    <>
      <Header />
      <Breadcumb2 />
      <ProjectDetails portfolioId={params.id} />
      <MarqueeComponent />
      <Footer />
    </>
  );
}
