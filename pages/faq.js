import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Scroll from "@/components/scroll";
import Modal from "@/components/modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AccordionComponent from '../components/AccordionComponent';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Script from "next/script";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



export default function Faq() {



    return (
 <div>
  <Script
  src="/modalScript.js"
  
/>
  <Navbar/>


  <section
      className="hero-faq-section vh-100 d-flex align-items-center position-relative overflow-hidden text-white"
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
    

<div className="container  py-3">
<Modal/>
<AccordionComponent />


<div class="row g-3 grid-faq mt-3 g-md-4 pb-md-5">
    <div class="col-12 col-md-6">
      <div class="grid-item square">
        <div class="content">
          <h1 class="mt-md-3 big-square-head">What is the objective of the company?</h1>
          <p class="big-square-p">
            Our objective is into “Organizing Information About the ‘Value’ And ‘Market’ Of Green Cardamom produced in India and making it accessible to everyone”.
          </p>
          <button class="read-more" id="readMoreBtn">Read more</button>
        </div>
      </div>
    </div>

    <div class="col-12 col-md-6">
      <div class="row g-3 g-md-4">
        <div class="col-6">
          <div class="grid-item square">
            <div class="content">
              <h3 class="small-square-profile text-start">What is <br />profile <br />mapping?</h3>
             <FontAwesomeIcon icon={faChevronRight} className="read-more-small" id="readMoreBtn2"></FontAwesomeIcon>
            </
            div>
          </div>
        </div>
        <div class="col-6">
          <div class="grid-item square">
            <div class="content">
              <h4 class="text-start small-square-profile2">What are the<br />informations<br />that we get<br />from profile<br />mapping?</h4>
             <FontAwesomeIcon icon={faChevronRight} className="read-more-small" id="readMoreBtn3"></FontAwesomeIcon>
            </div>

          </div>
        </div>
        <div class="col-6">
          <div class="grid-item square">
            <div class="content">
              <h3 class="small-square-buy text-start">How to <br />buy and sell?</h3>
             <FontAwesomeIcon icon={faChevronRight} className="read-more-small" id="readMoreBtn4"></FontAwesomeIcon>
            </div>

          </div>
        </div>
        <div class="col-6">
          <div class="grid-item square">
            <div class="content">
              <h3 class="small-square-sell text-start">How to<br />Use the App?</h3>
             <FontAwesomeIcon icon={faChevronRight} className="read-more-small" id="readMoreBtn5"></FontAwesomeIcon>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="col-12 col-md-4">
      <div class="grid-item square">
        <div class="content">
          <h3 class="text-start large-square1">How to read <br />and understand <br />data in mobile <br />application?</h3>
         <FontAwesomeIcon icon={faChevronRight} className="read-more-small" id="readMoreBtn6"></FontAwesomeIcon>
        </div>

      </div>
    </div>
    <div class="col-12 col-md-4">
      <div class="grid-item square">
        <div class="content">
          <h3 class="text-start large-square2">What are Cardamom <br />Auction.com <br />Services?</h3>
         <FontAwesomeIcon icon={faChevronRight} className="read-more-small" id="readMoreBtn7"></FontAwesomeIcon>
        </div>

      </div>
    </div>
    <div class="col-12 col-md-4">
      <div class="grid-item square">
        <div class="content">
          <h3 class="text-start large-square3">What are<br />Cardamom Auction.com <br />Unique Features?</h3>
         <FontAwesomeIcon icon={faChevronRight} className="read-more-small" id="readMoreBtn8"></FontAwesomeIcon>
        </div>

      </div>
    </div>
    <div class="col-12 col-md-4">
      <div class="grid-item square">
        <div class="content">
          <h3 class="text-start large-square4">What about <br />Cardamom<br />Auction.com <br />Team?</h3>
         <FontAwesomeIcon icon={faChevronRight} className="read-more-small" id="readMoreBtn9"></FontAwesomeIcon>
        </div>

      </div>
    </div>
    <div class="col-12 col-md-4">
      <div class="grid-item square">
        <div class="content">
          <h3 class="text-start large-square5">What are the <br />documents <br />needed to be a<br />buyer in <br />Cardamom <br />Auction.com?</h3>
         <FontAwesomeIcon icon={faChevronRight} className="read-more-small" id="readMoreBtn10"></FontAwesomeIcon>
        </div>

      </div>
    </div>
    <div class="col-12 col-md-4">
      <div class="grid-item square">
        <div class="content">
          <h3 class="text-start large-square6">What are the <br />cardamom <br />qualities available <br />in wholesale and <br />retail manner?</h3>
         <FontAwesomeIcon icon={faChevronRight} className="read-more-small" id="readMoreBtn11"></FontAwesomeIcon>
        </div>

      </div>
    </div>
  </div>


  </div>
  <Footer/>
 
 </div>
 

    );
}
