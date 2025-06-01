import Header from '@/components/headers/Header';
import Blogs from '@/components/homes/home-2/Blogs';
import Features from '@/components/homes/home-2/Features';
import Hero from '@/components/homes/home-dg/Hero';
import Testimonials from '@/components/homes/home-dg/Testimonials';

import Projects from '@/components/homes/home-4/Projects';
import Skills from '@/components/homes/common/Skills';
import React from 'react';
import Cta from '@/components/homes/home-2/Cta';
import Footer from '@/components/footers/Footer';
export const metadata = {
  title:
    'DG Visual | Manchester Branding & Signage Experts | Shop Fronts, Vehicle Graphics & Web Design in Cheshire',
};
export default function HomePage2() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Skills />
      <Projects />
      <Cta />
      <Blogs />
      <Testimonials />
      <Footer />
    </>
  );
}
