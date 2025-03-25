import MarqueeComponent from '@/components/common/Marquee';
import Footer from '@/components/footers/Footer';
import Header from '@/components/headers/Header';
import Breadcumb from '@/components/service/Breadcumb';
import Contact from '@/components/service/Contact';
import Features2 from '@/components/service/Features2';

export const metadata = {
  title: 'Service 2 || Frisk - Creative Agency & Portfolio Nextjs Template',
};

import React from 'react';

export default function ServicePage2() {
  return (
    <>
      <Header />
      <Breadcumb />
      <Features2 />
      <Contact />
      <MarqueeComponent />
      <Footer />
    </>
  );
}
