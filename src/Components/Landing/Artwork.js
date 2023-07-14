
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
export const Artwork = () => {
    return (
        <>
            <section className="artwork-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="mint-section-heading">
                                <h1 className="title">Latest Artwork</h1>
                            </div>
                        </div>
                        <div class="row collection__items-list">

                            <div class="col-lg-3 col-md-4 col-sm-6 col-11">
                                <div class="collection__item">

                                    <div class="collection__item-thumb">
                                        <a href="#"><img src={"https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_01.jpg"} alt="" /></a>
                                    </div>

                                    <div class="collection__item-content">

                                        <h4 class="name"><a href="#">#Metaverse</a></h4>

                                        <span class="author">By <a href="#">TheSalvare</a></span>

                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6 col-11">
                                <div class="collection__item">

                                    <div class="collection__item-thumb">
                                        <a href="#"><img src={"https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_02.jpg"} alt="" /></a>
                                    </div>

                                    <div class="collection__item-content">

                                        <h4 class="name"><a href="#">#Polly Doll</a></h4>

                                        <span class="author">By <a href="#">TheNative</a></span>

                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6 col-11">
                                <div class="collection__item" >

                                    <div class="collection__item-thumb">
                                        <a href="#"><img src={"https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_03.jpg"} alt="" /></a>
                                    </div>

                                    <div class="collection__item-content">

                                        <h4 class="name"><a href="#">#Alec Art</a></h4>

                                        <span class="author">By <a href="#">GeorgZvic</a></span>

                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6 col-11">
                                <div class="collection__item" >

                                    <div class="collection__item-thumb">
                                        <a href="#"><img src={"https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_04.jpg"} alt="" /></a>
                                    </div>

                                    <div class="collection__item-content">

                                        <h4 class="name"><a href="#">#Toxic Poeth</a></h4>

                                        <span class="author">By <a href="#">YazoiLup</a></span>

                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6 col-11">
                                <div class="collection__item" >

                                    <div class="collection__item-thumb">
                                        <a href="#"><img src={"https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_05.jpg"} alt="" /></a>
                                    </div>

                                    <div class="collection__item-content">

                                        <h4 class="name"><a href="#">#Saphyre</a></h4>

                                        <span class="author">By <a href="#">CryptoX</a></span>

                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6 col-11">
                                <div class="collection__item" >

                                    <div class="collection__item-thumb">
                                        <a href="#"><img src={"https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_06.jpg"} alt="" /></a>
                                    </div>

                                    <div class="collection__item-content">

                                        <h4 class="name"><a href="#">#Charcuterie</a></h4>

                                        <span class="author">By <a href="#">Texira</a></span>

                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6 col-11">
                                <div class="collection__item" >

                                    <div class="collection__item-thumb">
                                        <a href="#"><img src={"https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_07.jpg"} alt="" /></a>
                                    </div>

                                    <div class="collection__item-content">

                                        <h4 class="name"><a href="#">#Paradise</a></h4>

                                        <span class="author">By <a href="#">CryptoX</a></span>

                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-6 col-11">
                                <div class="collection__item" >

                                    <div class="collection__item-thumb">
                                        <a href="#"><img src={"https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/art_08.jpg"} alt="" /></a>
                                    </div>

                                    <div class="collection__item-content">

                                        <h4 class="name"><a href="#">#HighTown</a></h4>

                                        <span class="author">By <a href="#">TheSalvare</a></span>

                                    </div>

                                </div>
                            </div>
                            {/* nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn */}

                        </div>
                        <div class="collection__btn text-center" >
                                <a href="#" target="_blank"  class="btn gradient-btn">
                                    <span>View more in OPENSEA</span>
                                    <IoIosArrowRoundForward/>
                                </a>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}