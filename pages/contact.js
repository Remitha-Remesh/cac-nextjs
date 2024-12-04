import Navbar from "@/components/navbar"
import Scroll from "@/components/scroll"
import Footer from "@/components/footer"

export default function contact() {
  return (
    <div>
        <Navbar/>

        <section
      className="hero-section vh-100 d-flex align-items-center position-relative overflow-hidden text-white"
    >
      <div className="container d-flex flex-column custom-gap text-start">
        <div className="row">
          <div className="col-12 text-center text-md-end">
            <h1 className="display-4 fw-normal text-white hero-text">
              INDIA’S FIRST & LARGEST<br />ONLINE CARDAMOM AUCTION<br />TRADING
              PLATFORM.
            </h1>
          </div>
        </div>
        </div>
        
    </section>
    <Scroll/>

    <section className="contact">
  <div className="container mb-lg-3">
    {/* Contact Header */}
    <div className="row mx-lg-5 px-lg-5 text-center mt-5">
      <h1 className="contact-head">Contact Us!</h1>
    </div>

    {/* Contact Details and Form */}
    <div className="row mx-md-5 py-md-5">
      {/* Contact Details */}
      <div className="col-12 col-md-6">
        {/* Address */}
        <div className="d-flex align-items-center my-3">
          <img src="./img/location-icon.svg" alt="Location Icon" />
          <p className="contact-text ps-4 mb-0" style={{ color: '#8B8D8F' }}>
            Kerala State Warehousing Corporation<br />
            Vandenmedu, Kerala 685551, India
          </p>
        </div>

        {/* Email */}
        <div className="d-flex align-items-center my-3">
          <img src="./img/mail-icon.svg" alt="Mail Icon" />
          <p className="contact-text ps-3 mb-0" style={{ color: '#8B8D8F' }}>
            info@cardamomauction.com
          </p>
        </div>

        {/* Google Maps Embed */}
        <div className="my-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.4662906236404!2d77.15322727402183!3d9.72651087768298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07aa365da2caed%3A0xbc209b8c60f19ed5!2sState%20Ware%20House!5e0!3m2!1sen!2sin!4v1732205150687!5m2!1sen!2sin"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ width: '100%', height: 'auto', border: 0 }}
            allowFullScreen
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>

      {/* Contact Form */}
      <div className="col-12 col-md-6">
        <form className="contact-form">
          {/* Name Input */}
          <div className="mb-3">
            <input
              type="text"
              placeholder="NAME"
              className="contact-input form-control"
            />
          </div>

          {/* Email Input */}
          <div className="mb-3">
            <input
              type="email"
              placeholder="EMAIL"
              className="contact-input form-control"
            />
          </div>

          {/* Message Textarea */}
          <div className="mb-3">
            <textarea
              name="message"
              placeholder="MESSAGE"
              id="message-contact"
              rows="6"
              className="form-control"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn-contact btn btn-primary">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  </div>
</section>


<Footer/>
      
    </div>
  )
}

