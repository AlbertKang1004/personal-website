import React from 'react';
import ContactButton from "../ui/ContactButton.js";
import githubIcon from "../../assets/img/github-icon.png";
import emailIcon from "../../assets/img/email-icon.png";
import linkedinIcon from "../../assets/img/linkedin-icon.png";

type Contact = {
  id: string;
  title: string;
  link: string;
  imgSrc: string;
};

const ContactData: Contact[] = [
  {
    id: "contact-github",
    title: "GitHub",
    link: "https://github.com/albertkang1004",
    imgSrc: githubIcon,
  },
  {
    id: "contact-email",
    title: "Email",
    link: "mailto:albertkang1004@gmail.com",
    imgSrc: emailIcon,
  },
  {
    id: "contact-linkedin",
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/albertkang1004/",
    imgSrc: linkedinIcon,
  },
];

export default function Contacts(): React.ReactElement {
  return (
    <div
      id="contact"
      className="flex flex-col md:flex-row items-center justify-center h-screen scroll-mt-16"
    >
      {ContactData.map((contact) => (
        <ContactButton
          key={contact.id}
          id={contact.id}
          title={contact.title}
          link={contact.link}
          imgSrc={contact.imgSrc}
        />
      ))}
    </div>
  );
}
