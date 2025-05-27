import BlogList1 from '@/components/blog/BlogList1';
import Breadcumb from '@/components/blog/Breadcumb';
import Breadcumb2 from '@/components/blog/Breadcumb2';
import MarqueeComponent from '@/components/common/Marquee';

import Footer from '@/components/footers/Footer';
import Header from '@/components/headers/Header';
import React from 'react';

export const metadata = {
  title: 'Blog 1 || DG Visual Media - Design - Sign & Display',
};
export default function BlogPage1() {
  return (
    <>
      <Header />
      <Breadcumb2 />
      <Breadcumb />
      <BlogList1 />
      {/* <MarqueeComponent /> */}
      <Footer />
    </>
  );
}
