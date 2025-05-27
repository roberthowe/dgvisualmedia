import MarqueeComponent from '@/components/common/Marquee';
import Footer from '@/components/footers/Footer';
import Header from '@/components/headers/Header';
import Breadcumb from '@/components/pricing/Breadcumb';
import Faq from '@/components/pricing/Faq';

import Pricing from '@/components/pricing/Pricing';
import React from 'react';

export const metadata = {
  title: 'Pricing || DG Visual Media - Design - Sign & Display',
};
export default function PricingPage() {
  return (
    <>
      <Header />
      <Breadcumb />
      <Pricing />
      <Faq />
      <MarqueeComponent />
      <Footer />
    </>
  );
}
