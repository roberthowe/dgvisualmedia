import MarqueeComponent from '@/components/common/Marquee';
import Footer from '@/components/footers/Footer';
import Header from '@/components/headers/Header';
import Contact2 from '@/components/team/Contact2';

import TeamDetails from '@/components/team/TeamDetails';
import { teamData } from '@/data/team';

//For Static Side Genaration(SSG)

// export async function generateStaticParams() {
//   return teamData.map((elm) => ({
//     id: `${elm.id}`,
//   }));
// }

export const metadata = {
  title: 'Team Details || DG Visual Media - Design - Sign & Display',
};

export default function TeamPageDetails({ params }) {
  return (
    <>
      <Header />
      <TeamDetails teamId={params.id} />
      <Contact2 />
      <MarqueeComponent />
      <Footer />
    </>
  );
}
