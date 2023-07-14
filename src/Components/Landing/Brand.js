import ScrollAnimation from 'react-animate-on-scroll';

const Brand = () => {
    return (
        <>
            <section className="brand-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-12">
                            <h6 class="brand__title">POWERED BY AMAZING INVESTORS:</h6>
                            <div className="brand-list">
                            <ScrollAnimation animateIn="fadeInLeft">
                                <div class="brand__item elementor">

                                    <a href="#"><img decoding="async" src={"images/wallet-01.svg"} alt=""/></a>
                                </div>
                                </ScrollAnimation>
                                <div class="brand__item elementor">

                                    <a href="#"><img decoding="async" src={"images/wallet-02.svg"} alt=""/></a>
                                </div>
                                <div class="brand__item elementor">

                                    <a href="#"><img decoding="async" src={"images/wallet-03.svg"} alt=""/></a>
                                </div>
                                <div class="brand__item elementor">

                                    <a href="#"><img decoding="async" src={"images/wallet-04.svg"} alt=""/></a>
                                </div>
                                <div class="brand__item elementor">

                                    <a href="#"><img decoding="async" src={"images/wallet-05.svg"} alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Brand;