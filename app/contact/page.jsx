import Breadcumb from '@/components/contact/Breadcumb';
import Breadcumb2 from '@/components/contact/Breadcumb2';
import Contact from '@/components/contact/Contact';
import ContactInfo from '@/components/contact/ContactInfo';

import Footer from '@/components/footers/Footer';
import Header from '@/components/headers/Header';
import React from 'react';

export const metadata = {
  title: 'Contact || DG Visual Media - Design - Sign & Display',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <Breadcumb2 />
      <Breadcumb />
      <ContactInfo />
      <Contact />
      <Footer />
    </>
  );
}
