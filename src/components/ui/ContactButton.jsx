import React from "react";

export default function ContactButton({ id, title, link, imgSrc }) {
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
