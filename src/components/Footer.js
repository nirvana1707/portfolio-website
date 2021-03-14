import React from "react";
import {
    FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, RedditShareButton, RedditIcon,
    LinkedinShareButton, LinkedinIcon
} from "react-share";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Sakore Nagar, Pune 411014</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:888-888-888">+91-888-888-888</a>
                        </div>
                        <div className="d-flex">
                            <p>footercomponent@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br />
                                <a className="footer-nav">About me</a>
                                <br />
                                <a className="footer-nav">Services</a>
                                <br />
                            </div>
                            <div className="col">
                                <a className="footer-nav">Experience</a>
                                <br />
                                <a className="footer-nav">Portfolio</a>
                                <br />
                                <a className="footer-nav">Services</a>
                                <br />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={"www.linkedin.com/in/shebin-scaria-82a63158"}
                                quote={"Intelligent and Scalable Software Development"}
                                hashtag="#machinelearning"
                            >
                                <FacebookIcon className="mx-3" size={36} />
                            </FacebookShareButton>

                            <TwitterShareButton
                                url={"www.linkedin.com/in/shebin-scaria-82a63158"}
                                quote={"Intelligent and Scalable Software Development"}
                                hashtag="#machinelearning"
                            >
                                <TwitterIcon className="mx-3" size={36} />
                            </TwitterShareButton>

                            <RedditShareButton
                                url={"www.linkedin.com/in/shebin-scaria-82a63158"}
                                quote={"Intelligent and Scalable Software Development"}
                                hashtag="#machinelearning"
                            >
                                <RedditIcon className="mx-3" size={36} />
                            </RedditShareButton>

                            <LinkedinShareButton
                                url={"www.linkedin.com/in/shebin-scaria-82a63158"}
                                quote={"Intelligent and Scalable Software Development"}
                                hashtag="#machinelearning"
                            >
                                <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>

                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;nirvana1707 | All Rights Reserved
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer;
