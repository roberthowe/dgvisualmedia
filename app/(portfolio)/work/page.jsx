import Footer from '@/components/footers/Footer';
import Header from '@/components/headers/Header';
import Breadcumb from '@/components/portfolio/Breadcumb';
import Breadcumb2 from '@/components/portfolio/Breadcumb2';

import Projects2 from '@/components/portfolio/Projects2';
import React from 'react';
export const metadata = {
  title: 'Our Work || DG Visual Media - Design - Sign & Display',
};
export default function WorkPage() {
  return (
    <>
      <Header />
      <Breadcumb2 />
      <Breadcumb />
      <Projects2 />
      <Footer />
    </>
  );
}
