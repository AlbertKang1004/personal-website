import React from 'react';

interface ContactButtonProps {
  id?: string;
  title: string;
  link: string;
  imgSrc: string;
}

export default function ContactButton({ id, title, link, imgSrc }: ContactButtonProps): React.ReactElement {
  return (
    <div id={id} className="w-20 md:w-40 h-20 md:h-40 my-5 md:mx-15">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={imgSrc}
          alt={title}
          className="opacity-60 hover:opacity-100 transition-opacity duration-300"
        />
      </a>
    </div>
  );
}
