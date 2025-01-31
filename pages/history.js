import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

import Scroll from '@/components/scroll';

export default function history() {
  return (
    <div>
        <Navbar/>


        <section
      className="hero-history-section  d-flex align-items-center position-relative overflow-hidden text-white"
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
        </div>
        
    </section>

    <Scroll/>

    <section className="history">
<div className="container mt-5 mt-md-2">

  <div className="row text-center   history-head ">
    <h1>HISTORY</h1>
  </div>

  <div className="row">
    <div className="col-12 col-lg-4 text-center history-image">
      <img src="/img/history-img.png"  className="img-fluid"  alt=""/>
    </div>

    <div className="col-12 col-lg-8 my-5 history-text">
      <p className=" text-justify lh-base  ">Cardamom Auction.com – an online trading platform developed by Mr. Jeff Thomas in the year 2011 for the cardamom quality analysis and thereby to upgrade the then existing auction system to pure online auction. It was known as “Cardamom Marketing Information System”. The entire system is designed in a simple matrix (rows and column) format, so that it can be easily understood by everyone. Even with a persistent 9 years of effort didn’t bear fruit, and the system was not implemented in the cardamom trade till 2020. During the corvid-19 pandemic, when the entire cardamom trade was frozen to its core, Mr. Jeff Thomas; implemented the system in its new avatar as Cardamom Auction. Com and brought life back to the cardamom trade. Afterwards the entire history of cardamom trade has shifted to a new era. Even the spices board e-auction system was rearranged and redesigned due to the changes brought by him into the industry.</p>
    </div>
    
    
  </div>
</div>

</section>
<Footer/>


    
      
    </div>
  )
}
