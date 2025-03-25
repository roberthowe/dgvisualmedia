import BlogList1 from '@/components/blog/BlogList1';
import Breadcumb from '@/components/blog/Breadcumb';
import MarqueeComponent from '@/components/common/Marquee';

import Footer from '@/components/footers/Footer';
import Header from '@/components/headers/Header';
import React from 'react';

export const metadata = {
  title: 'Blog 1 || Frisk - Creative Agency & Portfolio Nextjs Template',
};
export default function BlogPage1() {
  return (
    <>
      <Header />
      <Breadcumb />
      <BlogList1 />
      <MarqueeComponent />
      <Footer />
    </>
  );
}
