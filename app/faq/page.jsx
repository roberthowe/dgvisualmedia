import MarqueeComponent from '@/components/common/Marquee';
import Breadcumb from '@/components/faq/Breadcumb';
import ContactInfo from '@/components/faq/ContactInfo';
import Faq from '@/components/faq/Faq';

import Footer from '@/components/footers/Footer';
import Header from '@/components/headers/Header';
import React from 'react';

export const metadata = {
  title: 'Faq || Frisk - Creative Agency & Portfolio Nextjs Template',
};
export default function FaqPage() {
  return (
    <>
      <Header />
      <Breadcumb />
      <Faq />
      <ContactInfo />
      <MarqueeComponent />
      <Footer />
    </>
  );
}
