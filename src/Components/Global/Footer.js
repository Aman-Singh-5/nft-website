import React from 'react';
import { TfiAngleUp } from "react-icons/tfi";
import { FaDiscord, FaTwitter,} from 'react-icons/fa';
export const Footer = () => {
    return (
        <>
            <footer class="footer-area section-py-80">
                <div class="container">
                    <div class="footer__wrapper">
                    <img decoding="async" src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/ethereum-01.png" width="32" alt="" style={{top: "32%", left: "16%",bottom: "-10rem", position: "absolute"}}/>
                    <img decoding="async" src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/x.png" width="16" alt="" style={{top: "8%" ,right: "16%", position: "absolute"}}/>
                    <img decoding="async" src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/circle-01.png" width="16" alt="" style={{bottom: "24%", right: "40%", position: "absolute"}}/>
                    <img decoding="async" src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/circle-03.png" width="24" alt="" style={{bottom: "-8%", left: "30%", position: "absolute"}}/>
                        <div class="row justify-content-center">
                            <div class="col-xl-5 col-lg-7 col-md-9 col-sm-11">
                                <div class="footer__info text-center">

                                    <div class="footer-logo">
                                        <a href="#">
                                            <img src={"https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/nerko.svg"} width="200" alt="Logo" />

                                        </a>
                                    </div>

                                    <p>We make it easy to Discover, Invest and manage all your NFTs at one place.</p>
                                    <ul class="list-wrap footer__social">

                                        <li><a href="#"><FaDiscord/></a></li>

                                        <li><a href="#"><FaTwitter/></a></li>

                                        <li><a href="#"><FaTwitter/></a></li>

                                        <li><a href="#"><FaDiscord/></a></li>


                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="copyright__wrapper">
                            <div class="row">

                                <div class="col-md-6">
                                    <div class="copyright__text">
                                        <p>© 2023 Nerko. All rights reserved.</p>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="copyright__menu">
                                        <ul class="list-wrap">


                                            <li><a href="#">Privacy policy</a></li>


                                            <li><a href="#">Terms of use</a></li>
                                            <li><a href="#main_banner" dataTarget='html'><TfiAngleUp/></a></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    );
}