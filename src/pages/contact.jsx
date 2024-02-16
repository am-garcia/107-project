import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <p>Fill the next information</p>

      <fieldset>
        <legend>Personal Information</legend>
        <div className="input-container">
          <div class="input-item">
            <input type="text" placeholder="name" />
          </div>
          <div class="input-item">
            <input type="email" placeholder="email" />
          </div>
          <div class="input-item">
            <input type="tel" placeholder="phone number" />
          </div>
          <div class="input-item">
            <textarea placeholder="message" cols="30" rows="10"></textarea>
          </div>
        </div>
      </fieldset>
    </div>
  );
}

export default Contact;
