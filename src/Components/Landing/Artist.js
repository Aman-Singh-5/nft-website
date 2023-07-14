
import React from 'react'
import { FaDiscord, FaTwitter,} from 'react-icons/fa'
export const Artist = () => {
    return (
        <>
            <section className="artist-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="mint-section-heading">
                                <h1 className="title">Meet the artists</h1>
                            </div>
                        </div>
                    </div>
                    <div className="team__grid-wrapper">
                        <div className="team__item text-centre">
                            <div className="team__item-thumb">
                                <img src={"images/artist1.png"} />
                            </div>
                            <div className="team__item-content">
                                <h4 className="name">Steps Jobs</h4>
                                <span className="designation">Artist</span>
                                <ul class="team__social-list list-wrap">
                                    <li><a href="#"></a><FaDiscord/></li>

                                    <li><a href="#"></a><FaTwitter/></li>
                                    <li><a href="#"></a><FaDiscord/></li>
                                </ul>
                            </div>
                        </div>
                        <div className="team__item text-centre">
                            <div className="team__item-thumb">
                                <img src={"images/artist2.png"} />
                            </div>
                            <div className="team__item-content">
                                <h4 className="name">Steps Jobs</h4>
                                <span className="designation">Artist</span>
                                <ul class="team__social-list list-wrap">
                                    <li><a href="#"></a><FaDiscord/></li>

                                    <li><a href="#"></a><FaTwitter/></li>
                                    <li><a href="#"></a><FaDiscord/></li>
                                </ul>
                            </div>
                        </div>
                        <div className="team__item text-centre">
                            <div className="team__item-thumb">
                                <img src={"images/artist3.png"} />
                            </div>
                            <div className="team__item-content">
                                <h4 className="name">Steps Jobs</h4>
                                <span className="designation">Artist</span>
                                <ul class="team__social-list list-wrap">
                                    <li><a href="#"></a><FaDiscord/></li>

                                    <li><a href="#"></a><FaTwitter/></li>
                                    <li><a href="#"></a><FaDiscord/></li>
                                </ul>
                            </div>
                        </div>
                        <div className="team__item text-centre">
                            <div className="team__item-thumb">
                                <img src={"images/artist4.png"} />
                            </div>
                            <div className="team__item-content">
                                <h4 className="name">Steps Jobs</h4>
                                <span className="designation">Artist</span>
                                <ul class="team__social-list list-wrap">
                                    <li><a href="#"></a><FaDiscord/></li>

                                    <li><a href="#"></a><FaTwitter/></li>
                                    <li><a href="#"></a><FaDiscord/></li>
                                </ul>
                            </div>
                        </div>
                        <div className="team__item text-centre">
                            <div className="team__item-thumb">
                                <img src={"images/artist5.png"} />
                            </div>
                            <div className="team__item-content">
                                <h4 className="name">Steps Jobs</h4>
                                <span className="designation">Artist</span>
                                <ul class="team__social-list list-wrap">
                                    <li><a href="#"></a><FaDiscord/></li>

                                    <li><a href="#"></a><FaTwitter/></li>
                                    <li><a href="#"></a><FaDiscord/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}