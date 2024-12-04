import Navbar from "@/components/navbar";


export default function home(){

return(

<div>
<Navbar/>
  <section
  id="download-sec"
  className="hero-section d-flex align-items-center position-relative overflow-hidden text-white"
>
  <div className="container d-flex flex-column custom-gap text-start">
    <div className="row">
      <div className="col-12 text-center text-md-start">
        <h1 className="display-4 fw-normal text-white hero-text">
          INDIA’S FIRST & LARGEST<br />ONLINE CARDAMOM AUCTION<br />TRADING
          PLATFORM.
        </h1>
      </div>
    </div>

    <div className="row mt-4">
      <div
        className="col-12 d-flex justify-content-center justify-content-md-start gap-3 download__links"
      >
        <a
          href="https://play.google.com/store/apps/details?id=com.CardamomAuction.cad_mobile&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/img/01 Button 05 Google Play.svg"
            alt="Google Play"
          />
        </a>

        <a
          href="https://apps.apple.com/us/app/cardamom-auction/id1553410114?platform=ipad"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/img/01 Button 04 Apple Store.svg"
            alt="Apple Store"
          />
        </a>
      </div>
    </div>
  </div>

 
</section>

<section id="auction-scroll" class="online-auction py-5">
        <div class="container mx-lg-5 px-lg-5">
          <div class="row align-items-center flex-row-reverse">
            <div class="col-12">
              <h1
                class="auction-heading text-center mb-4"
                style={{ color: '#414042', fontSize: '35px', fontWeight: 600 }}
              >
                ONLINE AUCTION
              </h1>
            </div>

            <div
              class="col col-lg order-md-1 auction-img order-lg-2 text-center me-sm-0 pe-sm-0 mb-4"
            >
              <a href="">
                <img
                  id="online-auction-img"
                  src="./img/auction.svg"
                  alt="Online Auction Image"
                />
              </a>
            </div>

            <div class="col-lg-8 order-md-1 ps-lg-5">
              <p class="auction__text text-justify line lh-base">
                Auctions are conducted every Wednesday and Saturday 9.30 am
                onwards. To perform auctions we introduced a user friendly app
                -CARDAMOM AUCTION.COM, which is available in ios app store &
                google play store. A time period of 1.5 minutes is allowed to
                every lot. One of the main advantage of our system is profile
                mapping. These scientifically labelled data can make your task
                easier. A 100 gram sample is analysed carefully for its liter
                weight, moisture content, grade, color & rejection types and is
                recorded with each 100 gram sample
              </p>

              <div
                class="d-flex justify-content-center justify-content-md-start mt-4"
              >
                <button id="see-more" class="custom-see-more">See More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="Buy-page" class="buy-sell-section">
        

        <div class="container mb-md-3 mx-lg-5 px-lg-5">
          <div class="row buy-sell-row mt-2">
            <div class="col-md-6 order-md-2 align-content-md-end buy-text">
              <div>
                <h1 class="text-center fw-bold text-md-start">
                  <span class="buy-head">BUYING</span>
                </h1>
                <p class="text-justify line lh-base buy-p">
                  You get maximum 1.5 minute to negotiate with a lot. There is
                  an auto bid button in each lot number to place your bid and
                  have an option to increase up to RS 100 from the current rate.
                </p>
              </div>
            </div>

            <div class="col-md-6 order-md-1 buy-img" style={{height: '300px'}}>
              <div class="row buy-row1"></div>
              <div class="row buy-row2">
                <div class="circle-wrapper">
                  <div class="circle-buy">
                    <img src="img/buying.png" id="buying-img" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 sell-text order-md-3 align-content-md-start">
              <div>
                <h1 class="text-center fw-bold text-md-start mt-4 mt-md-0">
                  <span class="buy-head">SELLING</span>
                </h1>
                <p class="text-justify line lh-base">
                  We gather a number of traders in a single, transparent
                  platform to perform cardamom trading rather than going to many
                  shops to buy/sell cardamom. It provides an opportunity to see
                  the product by many people and negotiate the price. We sell
                  the goods only after getting confirmation from the sellers. We
                  are responsible for the goods that are sold through our
                  platform.
                </p>
              </div>
            </div>

            <div class="col-md-6 sell-img order-md-4" style={{height: '300px' }}>
              <div class="row h-50" style={{ backgroundColor: '#39b54a' }}></div>
              <div class="row h-50">
                <div class="circle-wrapper">
                  <div class="circle-sell">
                    <img src="img/selling.png" id="selling-img" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>  

      <section id="wholesale-scroll" className="wholesale">
        <div className="container ml-lg-5 mb-0 pb-0">
          <div className="row whole-head-text">
            <div className="col-12">
              <p
                className="wholesale-head text-center text-md-start mt-4 mb-md-2 pb-0"
              >
                WHOLESALE
              </p>
            </div>
          </div>
          <div className="row whole-head-text mt-0 pt-0">
            <div className="col-lg-11 col ms-md-4 mb-lg-3 ps-md-5">
              <p className="lead" id="wholesale-para">
                Cardamom can also be bought in a wholesale manner with the below
                qualities:
              </p>
            </div>
          </div>
        </div>
        <div className="yellow-box">
          <div className="container yellow-text pb-md-1">
            <div className="row text-center tight-row yellow-text-one ms-md-5">
              <div className="col-4 col-lg-auto mb-2">
                <p className="px-2 m-0">8.5mm+</p>
              </div>
              <div className="col-4 col-lg-auto mb-2">
                <p className="px-2 m-0">8mm+</p>
              </div>
              <div className="col-4 col-lg-auto mb-2">
                <p className="px-2 m-0">7.5-8.5mm</p>
              </div>
              <div className="col-4 col-lg-auto mb-2">
                <p className="px-2 m-0">7.5mm+</p>
              </div>
              <div className="col-4 col-lg-auto mb-2">
                <p className="px-2 m-0">7-8mm</p>
              </div>
              <div className="col-4 col-lg-auto mb-2">
                <p className="p-0 px-2 m-0">6.5mm-7.5mm</p>
              </div>
            </div>
          </div>

          <div className="container yellow-text yellow-text2">
            <div
              className="row row-cols-auto text-center me-md-4 tight-row ms-md-5 ps-md-5"
            >
              <div className="col-4 col-lg-auto mb-2">
                <p className="m-0 px-4">6-7mm</p>
              </div>
              <div className="col-5 col-lg-auto mb-2">
                <p className="m-0 px-4">5.5-6.5mm</p>
              </div>
              <div className="col-3 col-lg-auto mb-2">
                <p className="m-0 px-4">Pan</p>
              </div>
              <div className="col-md-auto text-center mb-2" id="joint-seed">
                <p className="m-0 px-4">Joint Seed & Single Seeds</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="container pb-5 mt-3">
          <div id="slider1" class="slider-container swiper">
            <div class="slider-content">
              <div class="card-wrapper swiper-wrapper">
                <div class="card1 swiper-slide">
                  <div class="d-flex justify-content-center">
                    <img src="./img/Thumbnail Image 1.png" alt="" />
                  </div>
                </div>
                <div class="card1 swiper-slide">
                  <div class="image-content">
                    <div class="d-flex justify-content-center">
                      <img src="./img/Thumbnail Image 2.png" alt="" />
                    </div>
                  </div>
                </div>

                <div class="card1 swiper-slide">
                  <div class="image-content">
                    <div class="d-flex justify-content-center">
                      <img src="./img/Thumbnail Image 3.png" alt="" />
                    </div>
                  </div>
                </div>

                <div class="card1 swiper-slide">
                  <div class="image-content">
                    <div class="d-flex justify-content-center">
                      <img src="./img/Thumbnail Image 4.png" alt="" />
                    </div>
                  </div>
                </div>

                <div class="card1 swiper-slide">
                  <div class="d-flex justify-content-center">
                    <img src="./img/Thumbnail Image 1.png" alt="" />
                  </div>
                </div>
                <div class="card1 swiper-slide">
                  <div class="image-content">
                    <div class="d-flex justify-content-center">
                      <img src="./img/Thumbnail Image 2.png" alt="" />
                    </div>
                  </div>
                </div>

                <div class="card1 swiper-slide">
                  <div class="image-content">
                    <div class="d-flex justify-content-center">
                      <img src="./img/Thumbnail Image 3.png" alt="" />
                    </div>
                  </div>
                </div>

                <div class="card1 swiper-slide">
                  <div class="image-content">
                    <div class="d-flex justify-content-center">
                      <img src="./img/Thumbnail Image 4.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="swiper-pagination"></div>
            <div class="swiper-button-next swiper-navBtn"></div>
            <div class="swiper-button-prev swiper-navBtn "></div>
          </div>

        </div> */}
      </section>

      <section id="retail-scroll" className="retail">
        <div className="container pt-md-4 pb-md-2 mb-0 pb-0">
          <div className="col-12">
            <p className="wholesale-head text-center ms-lg-5  ps-lg-5 text-md-start pb-0">RETAIL</p>
          </div>

          <div className="row whole-head-text mt-0 pt-0">
            <div className="col-lg-11 col ms-md-4 ps-md-5 my-md-3">
              <p className="lead " id="retail-para">
                Cardamom packets available with 1 KG, 5KG, 50 KG quantities.
              </p>
            </div>
          </div>
          <div className="row whole-head-text mt-0 pt-0">
            <div className="col-lg-9 col ms-md-4 ms-lg-5 ps-md-5">
              <p className="lead text-white " id="retail-para-white">
                And also we provide cardamom with grades, Pan, Joint Seed and
                single seeds in desirable quantities.
              </p>
            </div>
          </div>
        </div>
        <div className="container yellow-text">
          <div className="row"></div>
          <div className="row text-center tight-row yellow-text-one pb-md-1 ms-md-5">
            <div className="col-4 col-lg-auto mb-2">
              <p className="px-2 m-0">8.5mm+</p>
            </div>
            <div className="col-4 col-lg-auto mb-2">
              <p className="px-2 m-0">8mm+</p>
            </div>
            <div className="col-4 col-lg-auto mb-2">
              <p className="px-2 m-0">7.5-8.5mm</p>
            </div>
            <div className="col-4 col-lg-auto mb-2">
              <p className="px-2 m-0">7.5mm+</p>
            </div>
            <div className="col-4 col-lg-auto mb-2">
              <p className="px-2 m-0">7-8mm</p>
            </div>
            <div className="col-4 col-lg-auto mb-2">
              <p className="p-0 px-2 m-0">6.5mm-7.5mm</p>
            </div>
          </div>
        </div>

        <div className="container yellow-text yellow-text2 ">
          <div
            className="row row-cols-auto text-center me-md-4 tight-row ms-md-5 ps-md-5"
          >
            <div className="col-4 col-lg-auto mb-2">
              <p className="m-0 px-4 pan">6-7mm</p>
            </div>
            <div className="col-5 col-lg-auto mb-2">
              <p className="m-0 px-4 pan">5.5-6.5mm</p>
            </div>
            <div className="col-3 col-lg-auto mb-2">
              <p className="m-0 px-4 pan">Pan</p>
            </div>
            <div className="col-md-auto text-center mb-2" id="joint-seed">
              <p className="m-0 px-4">Joint Seed & Single Seeds</p>
            </div>
          </div>
        </div>
        </section>

        <section class="map" style="background-color: #f4fffb">
      <div class="map_container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.4662906236404!2d77.15322727402183!3d9.72651087768298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07aa365da2caed%3A0xbc209b8c60f19ed5!2sState%20Ware%20House!5e0!3m2!1sen!2sin!4v1732457869699!5m2!1sen!2sin"
          width="100%"
          height="400"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>



</div>
);


}


// export defualt function faq(){

//   return(
//     <div>
    
//     </div>
//   )
// }




// components
// nav
// scroll
// footer



// create css file for pages eg :faq.css in Styles folder

// import it _app.js


// img =  ../img/logos/nthelum.png   normal
// img =  /img/logos/nthelum.png 

// style=" backgroundColor: #39b54a"  normal


// style={{ backgroundColor: '#39b54a' }} react   key: 'value'

