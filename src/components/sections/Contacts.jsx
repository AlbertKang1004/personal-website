import ContactButton from "../ui/ContactButton";
import githubIcon from "../../assets/img/github-icon.png";
import emailIcon from "../../assets/img/email-icon.png";
import linkedinIcon from "../../assets/img/linkedin-icon.png";

const ContactData = [
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

export default function Contacts() {
  return (
    <div
      id="contacts-container"
      className="flex flex-row items-center justify-center h-screen scroll-mt-16"
    >
      {ContactData.map((contact) => (
        <ContactButton
          id={contact.id}
          title={contact.title}
          link={contact.link}
          imgSrc={contact.imgSrc}
        />
      ))}
    </div>
  );
}
