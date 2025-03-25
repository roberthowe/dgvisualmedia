import MarqueeComponent from '@/components/common/Marquee';
import Footer from '@/components/footers/Footer';
import Header from '@/components/headers/Header';
import Breadcumb from '@/components/service/Breadcumb';
import Features1 from '@/components/service/Features1';

import Video from '@/components/service/Video';
export const metadata = {
  title: 'Service 1 || Frisk - Creative Agency & Portfolio Nextjs Template',
};

export default function ServicePage1() {
  return (
    <>
      <Header />
      <Breadcumb />
      <Features1 />
      <Video />
      <MarqueeComponent />
      <Footer />
    </>
  );
}
