import React from 'react'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FaDiscord, FaTwitter,} from 'react-icons/fa'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-transparent sticky-top">
                <div class="container">
                    <a class="navbar-brand" href="#"><img src="images/logo.svg" alt="Logo" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Home
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Minting</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Collection</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Roadmap</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Blog</a>
                            </li>
                        </ul>
                        <div class="d-flex" role="search">
                            <div className='tgmenu__action'>
                                <ul class="list-wrap">

                                    <li class="header-social">
                                        <a href="#" class="d-none d-sm-block nav-icon"><FaTwitter /></a>

                                        <a href="#" className='nav-icon'><FaDiscord/></a>
                                    </li>

                                    <li class="header-btn"><button class="btn global_btn" data-bs-toggle="modal" data-bs-target="#connectModal">Connect wallet</button></li>

                                </ul>
                            </div>

                            {/* <div><FontAwesomeIcon icon={faCoffee} /></div>
                            <button class="btn global_btn" type="submit">Search</button> */}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;