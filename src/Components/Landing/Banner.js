
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";



const Banner = () => {
    return (
        <>
            <section className="section_padding banner-padding " id='main_banner' >
                <div className="container" >
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="banner_content" >
                                <img src='images/aminate.png' id='animate_img' />
                                <img decoding="async" src={"https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/ethereum-01.png"} width="44" alt="" style={{ top: "-25%", left: "38%", opacity: "1" }} data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;" />
                                <img decoding="async" src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/circle-01.png" width="16" alt="" style={{ top: "14%", left: "-12%", opacity: " 1", transform: "scale(1)" }} data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 420;" />
                                <h2 class="title">Supercharge your NFT Adventure</h2>
                                <p class="desc">Find the right NFT collections to buy within the platform.</p>
                                <a href="#" target="_blank" rel="nofollow" class="global_btn banner_btn btn">
                                    <span>View in OPENSEA</span>
                                    <IoIosArrowRoundForward />

                                </a>
                            </div>
                        </div>
                        {/*           .................... */}
                        <div className="col-xl-6">
                            <div classname="banner_images">
                                <img src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/bitcoin-01.png" width="44" class="shape" alt="" style={{ position: "relative", bottom: "-21rem", top: "67%", left: "-17%", opacity: "1", transform: "scale(1)" }} data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 460;" />
                                <div className="banner-images-grid" >
                                    <div class="left"><img src={"https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_09.jpg"} alt="" /></div>
                                    <div class="right"><img src={"https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_06.jpg"} alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    );
}

export default Banner;