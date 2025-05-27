import MarqueeComponent from '@/components/common/Marquee';
import Footer from '@/components/footers/Footer';
import Header from '@/components/headers/Header';
import Breadcumb from '@/components/service/Breadcumb';
import Breadcumb2 from '@/components/service/Breadcumb2';

import Features1 from '@/components/service/Features1';

import Video from '@/components/service/Video';
export const metadata = {
  title: 'Services We Offer || DG Visual Media - Design - Sign & Display',
};

export default function ServicePage1() {
  return (
    <>
      <Header />
      <Breadcumb2 />
      <Breadcumb />
      <Features1 />
      {/* <Video /> */}
      {/* <MarqueeComponent /> */}
      <Footer />
    </>
  );
}
