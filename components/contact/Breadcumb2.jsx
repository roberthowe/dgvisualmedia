import Link from 'next/link';
import React from 'react';

export default function Breadcumb2({ pageTitle = null }) {
  return (
    <div className='breadcumb-wrapper style2 bg-smoke'>
      <div className='container-fluid'>
        <div className='breadcumb-content'>
          <ul className='breadcumb-menu'>
            <li>
              <Link scroll={false} href='/'>
                Home
              </Link>
            </li>
            <li>
              <Link scroll={false} href='/project'>
                Contact
              </Link>
            </li>
            {pageTitle && <li>{pageTitle}</li>}
          </ul>
        </div>
      </div>
    </div>
  );
}
