import "./contactForm.css";

const ContactForm = () => {
  return (
    <section className="contact" id="contact">
      <h3>Get in Touch</h3>
      <form className="contact-form">
        <input placeholder="Name" />
        <input placeholder="Mobile" />
        <input placeholder="Email" />
        <textarea placeholder="Address" />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
