import MarqueeComponent from '@/components/common/Marquee';
import Footer from '@/components/footers/Footer';
import Header from '@/components/headers/Header';
import Breadcumb from '@/components/team/Breadcumb';
import Contact from '@/components/team/Contact';

import Team from '@/components/team/Team';
import React from 'react';

export const metadata = {
  title: 'Team || DG Visual Media - Design - Sign & Display',
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
