import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
const Mint = () => {
    return (
        <>
            
            <section className="mint-section reveal-animation">
                <img decoding="async" class="shape" width="16" src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/circle-01.png" alt="" style={{ top: "-16%", left: "22%", bottom: "-6rem", position: "relative", opacity: "1", transform: "translateY(0px)" }} />
                <img decoding="async" class="shape" width="28" src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/circle-02.png" alt="" style={{ bottom: "16%", left: "10%", position: "relative", top: "34rem", opacity: "1", transform: "translateY(0px)" }} />
                <img decoding="async" class="shape" width="24" src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/x.png" alt="" style={{ bottom: "16%", right: "-83%", top: "34rem", position: "relative", opacity: "1", transform: "translateY(0px)" }} />
               
                <div className="container reveal-animation">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                        <ScrollAnimation animateIn="fadeInDown">
                            <div className="mint-section-heading">
                                <h1 className="title">How To Mint</h1>
                            </div>
                            </ScrollAnimation>
                        </div>
                    </div>

                    <div className="mint-list">
                        <div className="row justify-content-center">
                            <div className="col-md-6 col-sm-9">
                                <div class="mint__item">
                                    <div class="mint__icon">
                                        <img decoding="async" class="light" src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/mint-01.png" alt="" />
                                    </div>
                                    <ScrollAnimation animateIn="fadeIn">
                                    <div class="mint__content">

                                        <h2 class="title">Connect your wallet</h2>

                                        <p class="desc">Use Trust Wallet, Metamask or any wallet to connect to the app.</p>

                                    </div>
                                    </ScrollAnimation>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-9">
                                <div class="mint__item">

                                    <div class="mint__icon">
                                        <img decoding="async" class="light" src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/mint-02.png" alt="" />
                                    </div>
                                    <ScrollAnimation animateIn="fadeIn">
                                    <div class="mint__content">

                                        <h2 class="title">Select your quantity</h2>

                                        <p class="desc">Use Trust Wallet, Metamask or any wallet to connect to the app.</p>

                                    </div>
                                    </ScrollAnimation>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-9">
                                <div class="mint__item">

                                    <div class="mint__icon">
                                        <img decoding="async" class="light" src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/mint-03.png" alt="" />
                                    </div>
                                    <ScrollAnimation animateIn="fadeIn">
                                    <div class="mint__content">

                                        <h2 class="title">Confirm transaction</h2>

                                        <p class="desc">Earn ETH and BIT for all your NFTs that you sell on our marketplace.</p>

                                    </div>
                                    </ScrollAnimation>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-9">
                                <div class="mint__item">

                                    <div class="mint__icon">
                                        <img decoding="async" class="light" src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/mint-04.png" alt="" />
                                    </div>
                                    <ScrollAnimation animateIn="fadeIn">
                                    <div class="mint__content">

                                        <h2 class="title">Receive your NFTs</h2>

                                        <p class="desc">Latin professor at Hampden-Sydney College in Virginia.</p>

                                    </div>
                                    </ScrollAnimation>
                                </div>
                            </div>
                            {/* 11111111111111111111111111111111111111111111111111111 */}
                        </div>
                    </div>
                </div>
                
            </section>
           
            
        </>
    );
}

export default Mint;