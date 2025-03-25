import MarqueeComponent from '@/components/common/Marquee';
import Footer from '@/components/footers/Footer';
import Header from '@/components/headers/Header';
import Breadcumb from '@/components/team/Breadcumb';
import Contact from '@/components/team/Contact';

import Team from '@/components/team/Team';
import React from 'react';

export const metadata = {
  title: 'Team || Frisk - Creative Agency & Portfolio Nextjs Template',
};

export default function TeamPage() {
  return (
    <>
      <Header />
      <Breadcumb />
      <Team />
      <Contact />
      <MarqueeComponent />
      <Footer />
    </>
  );
}
