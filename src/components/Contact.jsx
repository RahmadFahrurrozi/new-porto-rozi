import { CONTACT } from "../constants/data-content";

const Contact = () => {
  return (
    <div className="relative border-t border-stone-800 pb-20">
      <h2 className="my-10 text-center text-4xl bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text tracking-tight text-transparent">
        Contact Me
      </h2>
      <div className="flex flex-col items-center tracking-tighter gap-2">
        <p className="">{CONTACT.address}</p>
        <a href={`https://wa.me/${CONTACT.phone}`}>{CONTACT.phone}</a>
        <a href={CONTACT.email}>{CONTACT.email}</a>
      </div>
    </div>
  );
};

export default Contact;
