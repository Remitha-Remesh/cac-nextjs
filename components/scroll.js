

const Scroll = () => {
    return (
      <div>
        <section
          className="scroll-buttons chero-section d-flex align-items-center position-relative overflow-hidden"
          style={{ backgroundColor: '#414042' }}
        >
          <div className="container">
            <div className="row justify-content-around my-5">
              <div className="col text-center">
                <img
                  className="scroll-img"
                  src="./img/online-auction.svg"
                  alt="Online Auction"
                />
                <p className="mt-3">ONLINE AUCTIONS</p>
              </div>
              <div className="col text-center">
                <img
                  className="scroll-img"
                  src="./img/wholesale.svg"
                  alt="Wholesale"
                />
                <p className="mt-3">WHOLESALE</p>
              </div>
              <div className="col text-center">
                <img
                  className="scroll-img"
                  src="./img/retail.svg"
                  alt="Retail"
                />
                <p className="mt-3">RETAIL</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Scroll;
  