import React from 'react';

interface ContactButtonProps {
  id?: string;
  title: string;
  link: string;
  imgSrc: string;
}

export default function ContactButton({ id, title, link, imgSrc }: ContactButtonProps): React.ReactElement {
  return (
    <div id={id} className="w-40 h-40 mx-15">
      <a href={link}>
        <img
          src={imgSrc}
          alt={title}
          className="opacity-60 hover:opacity-100 transition-opacity duration-300"
        />
      </a>
    </div>
  );
}
