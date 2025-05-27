import MarqueeComponent from '@/components/common/Marquee';
import Footer from '@/components/footers/Footer';
import Header from '@/components/headers/Header';
import Breadcumb from '@/components/service/Breadcumb';
import Clients from '@/components/service/Clients';
import Faq from '@/components/service/Faq';

import React from 'react';

export const metadata = {
  title: 'Service 3 || DG Visual Media - Design - Sign & Display',
};

export default function ServicePage3() {
  return (
    <>
      <Header />
      <Breadcumb />
      <Faq />
      <Clients />
      <MarqueeComponent />
      <Footer />
    </>
  );
}
