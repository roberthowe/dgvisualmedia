import Awards from '@/components/about/Awards';
import Breadcumb from '@/components/about/Breadcumb';
import Clients from '@/components/about/Clients';
import Contact from '@/components/about/Contact';
import Facts from '@/components/about/Facts';
import Features from '@/components/about/Features';

import Team from '@/components/about/Team';
import MarqueeComponent from '@/components/common/Marquee';
import Footer from '@/components/footers/Footer';
import Header from '@/components/headers/Header';
import React from 'react';

export const metadata = {
  title: 'About || Frisk - Creative Agency & Portfolio Nextjs Template',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <Breadcumb />
      <Facts />
      <Features />
      <Awards />
      <Team />
      <Contact />
      <Clients />
      <MarqueeComponent />
      <Footer />
    </>
  );
}
