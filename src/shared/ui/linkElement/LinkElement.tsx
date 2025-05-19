'use client'
import React, { FC } from 'react'
import './linkElement.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type LinkElementProps = {
  text: string;
  url: string;
}

const LinkElement: FC<LinkElementProps> = ({ text, url }) => {
  const pathname = usePathname();
  const isActive = pathname.endsWith(url);

  return (
    <Link href={ url } className={`link_element ${isActive ? 'active_link_element' : ''}`}>
      <span className='link_element_text'>
        {text}
      </span>
    </Link>
  )
}

export default LinkElement