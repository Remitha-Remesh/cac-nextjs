import { useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Bootstrap's JavaScript on the client side
const Bootstrap = dynamic(() => import('bootstrap/dist/js/bootstrap.bundle.min.js'), { ssr: false });

const AccordionComponent = () => {
  useEffect(() => {
    // Ensure this runs only on the client side
    if (typeof window !== "undefined") {
      // Initialize Bootstrap JS components only when the page is rendered on the client
      import('bootstrap/dist/js/bootstrap.bundle.min.js').then(() => {
        console.log('Bootstrap JS loaded successfully');

        const faqAccordion = document.getElementById("faqAccordion");

        if (faqAccordion) {
          faqAccordion.addEventListener("hide.bs.collapse", (event) => {
            const iframe = event.target.querySelector("iframe");
            if (iframe) {
              const src = iframe.src;
              iframe.src = ""; // Remove src to stop the video
              iframe.src = src; // Reset src to reload the video
              console.log("Video stopped");
            }
          });

          faqAccordion.addEventListener("show.bs.collapse", (event) => {
            const iframe = event.target.querySelector("iframe");
            if (iframe) {
              const url = new URL(iframe.src);
              url.searchParams.set("autoplay", "1");
              url.searchParams.set("mute", "1");
              iframe.src = url.toString();
              console.log("Video started with autoplay and mute");
            }
          });
        } else {
          console.error("faqAccordion element not found");
        }
      }).catch((error) => {
        console.error("Failed to load Bootstrap JS:", error);
      });
    }

    // Cleanup function to remove event listeners
    return () => {
      const faqAccordion = document.getElementById("faqAccordion");
      if (faqAccordion) {
        faqAccordion.removeEventListener("hide.bs.collapse", () => {});
        faqAccordion.removeEventListener("show.bs.collapse", () => {});
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
     <div className="accordion accordion-faq  " id="faqAccordion">

<div className="accordion-item ">
    <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            What is the objective of the company?
        </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
        <div className="accordion-body  bg-dark text-white">
            Our objective is to “Organize Information About the ‘Value’ And ‘Market’ Of Green Cardamom produced in India and make it accessible to everyone.”
        </div>
    </div>
</div>


<div className="accordion-item bg-light">
    <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            What is profile mapping?
        </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
        <div className="accordion-body text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet a voluptatibus inventore cupiditate fugiat modi facere explicabo fugit eius suscipit!
        </div>
    </div> 
</div> 

<div className="accordion-item bg-light">
    <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          What are the informations that we get from profile mapping?
        </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
        <div className="accordion-body text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quibusdam repudiandae? Eos vitae vero aperiam dolorem exercitationem! Sed facilis corrupti, labore quam nobis fugit, vel, dolor delectus optio doloremque nemo!
        </div>
  </div>
</div>

<div className="accordion-item bg-light">
    <h2 className="accordion-header" id="headingFour">
        <button className="accordion-button collapsed bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
          How to buy and sell?
        </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
        <div className="accordion-body text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, molestias ab maiores ipsum libero enim odit tempora necessitatibus veritatis? Illum.
        </div>
    </div>
</div>

<div className="accordion-item bg-light">
    <h2 className="accordion-header" id="headingFive">
        <button className="accordion-button collapsed bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
          How to use the App?
        </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
        <div className="accordion-body text-dark">
          <iframe
          width="90%" 
          height="600" 
          src="https://www.youtube.com/embed/y-KicubgMLE?autoplay=1&mute=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          style={{
            maxWidth: '1380px',
            maxHeight: '300px',
            margin: '0 auto',
            display: 'block'
          }}
          
        ></iframe>
        </div>
    </div>
</div>

<div className="accordion-item bg-light">
    <h2 className="accordion-header" id="headingSix">
        <button className="accordion-button collapsed bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
          How to read and understand data in mobile application?
        </button>
    </h2>
    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
        <div className="accordion-body text-white">
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint blanditiis facilis provident impedit repudiandae quo cum optio mollitia eaque vero.
        </div>
    </div>
</div>

<div className="accordion-item bg-light">
    <h2 className="accordion-header" id="headingSeven">
        <button className="accordion-button collapsed bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
          
          What are Cardamom Auction.com Services?
        </button>
    </h2>
    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#faqAccordion">
        <div className="accordion-body text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus mollitia alias facere rerum molestias possimus qui est corrupti. Dolore debitis veritatis eligendi dicta assumenda! Accusantium!
        </div>
    </div>
</div>
<div className="accordion-item bg-light">
    <h2 className="accordion-header" id="headingEight">
        <button className="accordion-button collapsed bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
          What are the documents needed to be a buyer in Cardamom Auction.com?
        </button>
    </h2>
    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#faqAccordion">
        <div className="accordion-body text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus mollitia alias facere rerum molestias possimus qui est corrupti. Dolore debitis veritatis eligendi dicta assumenda! Accusantium!
        </div>
    </div>
</div>
<div className="accordion-item bg-light">
    <h2 className="accordion-header" id="headingNine">
        <button className="accordion-button collapsed bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
          What are Cardamom Auction.com Unique Features?
        </button>
    </h2>
    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#faqAccordion">
        <div className="accordion-body text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus mollitia alias facere rerum molestias possimus qui est corrupti. Dolore debitis veritatis eligendi dicta assumenda! Accusantium!
        </div>
    </div>
</div>
<div className="accordion-item bg-light">
    <h2 className="accordion-header" id="headingTen">
        <button className="accordion-button collapsed bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
          What about Cardamom Auction.com Team?
        </button>
    </h2>
    <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#faqAccordion">
        <div className="accordion-body text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus mollitia alias facere rerum molestias possimus qui est corrupti. Dolore debitis veritatis eligendi dicta assumenda! Accusantium!
        </div>
    </div>
</div>
<div className="accordion-item bg-light">
    <h2 className="accordion-header" id="headingEleven">
        <button className="accordion-button collapsed bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
          What are the cardamom qualities available in wholesale and retail manner?
        </button>
    </h2>
    <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#faqAccordion">
        <div className="accordion-body  text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus mollitia alias facere rerum molestias possimus qui est corrupti. Dolore debitis veritatis eligendi dicta assumenda! Accusantium!
        </div>
    </div>
</div>

</div>
    </div>
  );
};

export default AccordionComponent;
