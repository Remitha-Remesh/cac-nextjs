import { useEffect } from 'react';

const ModalComponent = () => {
  useEffect(() => {
    const modalConfig = [
      { modalId: "firstSquareModal", buttonId: "readMoreBtn" },
      { modalId: "secondSquareModal", buttonId: "readMoreBtn2" },
      { modalId: "thirdSquareModal", buttonId: "readMoreBtn3" },
      { modalId: "fourthSquareModal", buttonId: "readMoreBtn4" },
      { modalId: "fifthSquareModal", buttonId: "readMoreBtn5" },
      { modalId: "sixthSquareModal", buttonId: "readMoreBtn6" },
      { modalId: "seventhSquareModal", buttonId: "readMoreBtn7" },
      { modalId: "eighthSquareModal", buttonId: "readMoreBtn8" },
      { modalId: "ninthSquareModal", buttonId: "readMoreBtn9" },
      { modalId: "tenthSquareModal", buttonId: "readMoreBtn10" },
      { modalId: "eleventhSquareModal", buttonId: "readMoreBtn11" }
    ];

    // Client-side code only
    if (typeof window !== "undefined") {
      modalConfig.forEach(({ modalId, buttonId }) => {
        const modal = document.getElementById(modalId);
        const button = document.getElementById(buttonId);
        const closeBtn = modal ? modal.querySelector(".close-btn") : null;
        const iframe = modal ? modal.querySelector("iframe") : null;

        // Log to check if elements exist
        console.log(`modal: ${modalId}, button: ${buttonId}`, modal, button, iframe);

        // If modal or button is not found, log a warning and skip
        if (!modal || !button) {
          console.warn(`Modal or button with ID ${modalId} / ${buttonId} not found`);
          return;
        }

        // Function to restart the video (autoplay and mute)
        function restartVideo() {
          if (iframe) {
            const videoSrc = iframe.src.split('?')[0]; // Get the base URL of the iframe src
            iframe.src = `${videoSrc}?autoplay=1&mute=1`; // Set autoplay and mute parameters
          }
        }

        // Open modal on button click
        button.addEventListener("click", function () {
          console.log(`Button clicked for ${modalId}`);
          modal.style.display = "flex";
          restartVideo(); // Restart and mute the video when the modal is opened
        });

        // Close modal on close button click
        if (closeBtn) {
          closeBtn.addEventListener("click", function () {
            console.log(`Close button clicked for ${modalId}`);
            modal.style.display = "none";
            if (iframe) {
              iframe.src = iframe.src.split('?')[0]; // Remove query params, keeping the base URL
            }
          });
        }

        // Close modal on outside click
        window.addEventListener("click", function (event) {
          if (event.target === modal) {
            console.log(`Clicked outside for ${modalId}`);
            modal.style.display = "none";
            if (iframe) {
              iframe.src = iframe.src.split('?')[0]; // Remove query params when closed from outside
            }
          }
        });
      });
    }

    // Cleanup when component is unmounted
    return () => {
      modalConfig.forEach(({ modalId, buttonId }) => {
        const modal = document.getElementById(modalId);
        const button = document.getElementById(buttonId);
        const closeBtn = modal ? modal.querySelector(".close-btn") : null;

        if (modal) {
          modal.style.display = "none"; // Hide modal
        }

        if (button) {
          button.removeEventListener("click", function () {});
        }

        if (closeBtn) {
          closeBtn.removeEventListener("click", function () {});
        }

        window.removeEventListener("click", function () {});
      });
    };
  }, []); // Empty dependency array ensures this runs only once, like componentDidMount

  return (
    <div>
     <div class="container">
      <div class="modal bigmodal" id="firstSquareModal">
        <div class="modal-content bigmodal-content">
          <span class="close-btn">&times;</span>
          <h1 class="text-white">Objective of the Company</h1>
          <p class="text-white ">Our objective is into “Organizing Information About <br/> the ‘Value’ And ‘Market’ Of Green Cardamom produced in<br/> India and making it accessible to everyone”..</p>
        </div>
      </div>
    


<div class="modal bigmodal" id="secondSquareModal">
  <div class="modal-content bigmodal-content">
    <span class="close-btn">&times;</span>
    <h1 class="text-white">What is profile mapping?</h1>
    <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laborum modi, at ad quod doloribus perferendis nulla dolorem ipsam esse.</p>
  </div>
</div>


<div class="modal bigmodal" id="thirdSquareModal">
  <div class="modal-content bigmodal-content">
    <span class="close-btn">&times;</span>
    <h1 class="text-white">What are the informations <br/> that we get from profile mapping?</h1>
    <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo consequuntur quos velit modi in? Adipisci eveniet explicabo molestiae laboriosam veritatis?</p>
  </div>
</div>


<div class="modal bigmodal" id="fourthSquareModal">
  <div class="modal-content bigmodal-content">
    <span class="close-btn">&times;</span>
    <h1 class="text-white">How to buy and sell?</h1>
    <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nam nostrum dignissimos totam consequatur voluptas sunt quae laudantium ullam consectetur.</p>
  </div>
</div>


<div class="modal bigmodal" id="fifthSquareModal">
  <div class="modal-content bigmodal-content">
    <span class="close-btn">&times;</span>
    <iframe
      width="90%"
      height="600"
      src="https://www.youtube.com/embed/y-KicubgMLE?autoplay=1&mute=1"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      style={{ maxWidth: "1380px", margin: "0 auto", display: "block" }}
    ></iframe>
  </div>
</div>


<div class="modal bigmodal" id="sixthSquareModal">
  <div class="modal-content bigmodal-content">
    <span class="close-btn">&times;</span>
    <h1 class="text-white">How to read and understand data in mobile application?</h1>
    <p class="text-white">Connecting farmers and traders through workshops, webinars, and events.</p>
  </div>
</div>


<div class="modal bigmodal" id="seventhSquareModal">
  <div class="modal-content bigmodal-content">
    <span class="close-btn">&times;</span>
    <h1 class="text-white">What are Cardamom Auction.com Services?</h1>
    <p class="text-white">Conducting in-depth research to uncover the potential of the Green Cardamom market.</p>
  </div>
</div>


<div class="modal bigmodal" id="eighthSquareModal">
  <div class="modal-content bigmodal-content">
    <span class="close-btn">&times;</span>
    <h1 class="text-white">What are Cardamom Auction.com Unique Features?</h1>
    <p class="text-white">Leveraging modern technology to provide real-time insights and updates.</p>
  </div>
</div>


<div class="modal bigmodal" id="ninthSquareModal">
  <div class="modal-content bigmodal-content">
    <span class="close-btn">&times;</span>
    <h1 class="text-white">What about Cardamom Auction.com Team? </h1>
    <p class="text-white">Collaborating with agricultural experts and trade bodies for mutual growth.</p>
  </div>
</div>


<div class="modal bigmodal" id="tenthSquareModal">
  <div class="modal-content bigmodal-content">
    <span class="close-btn">&times;</span>
    <h1 class="text-white">What are the documents needed to be a buyer in Cardamom Auction.com?</h1>
    <p class="text-white">Expanding to global markets while ensuring value for Indian farmers.</p>
  </div>
</div>


<div class="modal bigmodal" id="eleventhSquareModal">
  <div class="modal-content bigmodal-content">
    <span class="close-btn">&times;</span>
    <h1 class="text-white">What are the cardamom qualities available in wholesale and retail manner?</h1>
    <p class="text-white">We value your feedback to improve our services continually.</p>
  </div>
</div>

    </div>
    </div>
  );
};

export default ModalComponent;
