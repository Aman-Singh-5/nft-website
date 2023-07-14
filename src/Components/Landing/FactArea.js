
const FactArea = () => {
    return(
        <>
            <section className="fact-area-section">
                <div className="container">
                <img decoding="async" class="shape" src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/bitcoin-01.png" width="32" alt="" style={{bottom: "-32%",top: "13rem", position:"relative", left: "30%", opacity: "1", transform: "scale(1)"}} data-anime="opacity:[0, 1]; scale:[0, 1]; onview: -250; delay: 200"/>
                <img decoding="async" class="shape" src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/ethereum-01.png" width="24" alt="" style={{top: "-25%", right: "-72%",position:"relative", opacity: "1", transform: "scale(1)"}} data-anime="opacity:[0, 1]; scale:[0, 1]; onview: -250, delay: 200"/>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="fact-item text-centre">
                                <h2 className="text-gradient fact-count">
                                    4000+
                                </h2>
                                <p className="meta">Wallets Connected</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="fact-item text-centre">
                                <h2 className="text-gradient fact-count">
                                20000+
                                </h2>
                                <p className="meta">Collections Indexed every 5 mins.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="fact-item text-centre">
                                <h2 className="text-gradient fact-count">
                                    2.5x
                                </h2>
                                <p className="meta">Difference in Floor & Estimated Value</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default FactArea;