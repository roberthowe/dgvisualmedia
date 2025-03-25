import Footer from '@/components/footers/Footer';
import Header from '@/components/headers/Header';
import Breadcumb from '@/components/portfolio/Breadcumb';

import Projects2 from '@/components/portfolio/Projects2';
import React from 'react';
export const metadata = {
  title: 'Our Work || Frisk - Creative Agency & Portfolio Nextjs Template',
};
export default function WorkPage() {
  return (
    <>
      <Header />
      <Breadcumb />
      <Projects2 />
      <Footer />
    </>
  );
}
