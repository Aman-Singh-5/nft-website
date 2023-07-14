
const About = () => {
    return (
        <>
            <section className="about-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10"></div>
                        <div className="about-title-div text-centre">
                            <h2 className="title">
                                About the platform
                            </h2>
                        </div>
                    </div>
                    {/* ......................................... */}
                    <div className="row">
                        <div class="row align-items-center">

                            <div class="col-lg-6">
                                <div class="about__img" >
                                    <img src={"https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/features-03.png"} alt="" />
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="about__content">
                                    <div class="section__title text-start">
                                        <span class="sub-title text-gradient">Create and Invest</span>
                                        <h2 class="title">Create your own NFT</h2>
                                    </div>

                                    <p>Multiple Chains, One Home. Stack up all your NFTs from across blockchains.</p>

                                    <div class="about__facts-list">

                                        <div class="about__fact-item">
                                            <h3 class="count">4,500+</h3>

                                            <p>Collections Indexed <br /> every 5mins.</p>
                                        </div>

                                        <div class="about__fact-item">
                                            <h3 class="count">2.5x</h3>

                                            <p>Difference in Floor &amp; Estimated NFT Value</p>
                                        </div>

                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="row align-item-centre" style={{ marginTop: "120px" }}>
                        <div className="col-lg-6">
                            <div className="about__content about-content">
                                <div class="section__title text-start">
                                    <span class="sub-title text-gradient">Sync and Track</span>
                                    <h2 class="title">Multiple Chains, One Home</h2>
                                </div><p>We make it easy to Discover, Invest and manage all your NFTs at one place, looked up one of the more obscure.Find the right NFT collections to buy within the platform.</p>
                                <div class="about__facts-list">

                                    <div class="about__icon-box">

                                        <div class="icon">
                                            <img src="images/manual1.png"/>                                               </div>

                                        <p>Collections Indexed every 5mins.</p>

                                    </div>

                                    <div class="about__icon-box">

                                        <div class="icon">
                                        <img src="images/manual1.png"/>                                              </div>

                                        <p>Difference in Floor &amp; Estimated Value</p>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div class="about__img about__img2">
                                <img src={"https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/features-02.png"} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default About;