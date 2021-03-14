import React from 'react';
import netflix from "../images/portfolio/netflix.png";
import portfolio from "../images/portfolio/portfolio.png";
import cityGuide from "../images/portfolio/city-guide-app.png";
import taskManager from "../images/portfolio/task-manager.png";
// FONT AWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOC
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css"

const Portfolio = () => {

    // Neflix
    const openPopupboxNetflix = () => {
        const content = (
            <div>
                <img className="portfolio-image-popupbox" src={netflix} alt="Netflix clone project" />
                <p>Add description about your project.
            Add description about your project. </p>
                <b>GitHub: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/nirvana1707/globalwheatdetection")}>https://github.com/nirvana1707/globalwheatdetection</a>
            </div>
        );
        PopupboxManager.open({ content });
    }
    const popupboxConfigNetflix = {
        titleBar: {
            enable: true,
            text: "Netflix clone project"
        },
        fadeIn: true,
        fadeInSpeed: 500,
    }

    // City Guide App
    const openPopupboxCityGuide = () => {
        const content = (
            <div>
                <img className="portfolio-image-popupbox" src={cityGuide} alt="City Guide App project" />
                <p>Add description about your project.
            Add description about your project. </p>
                <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/nirvana1707/melanomadetection", "_blank")}>https://github.com/nirvana1707/melanomadetection</a>
                <br />
                <b>GitHub: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/nirvana1707/melanomadetection")}>https://github.com/nirvana1707/melanomadetection</a>
            </div>
        );
        PopupboxManager.open({ content });
    }
    const popupboxConfigCityGuide = {
        titleBar: {
            enable: true,
            text: "City Guide App project"
        },
        fadeIn: true,
        fadeInSpeed: 500,
    }

    // Portfolio Project
    const openPopupboxPortfolio = () => {
        const content = (
            <div>
                <img className="portfolio-image-popupbox" src={portfolio} alt="Portfolio project" />
                <p>Add description about your project.
            Add description about your project. </p>
                <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/nirvana1707/pulmonary-fibrosis-progression", "_blank")}>https://github.com/nirvana1707/pulmonary-fibrosis-progression</a>
                <br />
                <b>GitHub: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/nirvana1707/pulmonary-fibrosis-progression")}>https://github.com/nirvana1707/pulmonary-fibrosis-progression</a>
            </div>
        );
        PopupboxManager.open({ content });
    }
    const popupboxConfigPortfolio = {
        titleBar: {
            enable: true,
            text: "Portfolio project"
        },
        fadeIn: true,
        fadeInSpeed: 500,
    }

    // Task Manager and Redux Project
    const openPopupboxTaskManager = () => {
        const content = (
            <div>
                <img className="portfolio-image-popupbox" src={taskManager} alt="Task Manager project" />
                <p>Add description about your project.
            Add description about your project. </p>
                <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/nirvana1707/connectx", "_blank")}>https://github.com/nirvana1707/connectx</a>
                <br />
                <b>GitHub: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/nirvana1707/connectx")}>https://github.com/nirvana1707/connectx</a>
            </div>
        );
        PopupboxManager.open({ content });
    }
    const popupboxConfigTaskManager = {
        titleBar: {
            enable: true,
            text: "Task Manager project"
        },
        fadeIn: true,
        fadeInSpeed: 500,
    }

    return (
        <div>
            <div id="portfolio" className="portfolio-wrapper">
                <div className="container">
                    <h1 className="text-uppercase text-center py-5">portfolio</h1>
                    <div className="image-box-wrapper row justify-content-center">
                        <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
                            <img className="portfolio-image" src={netflix} alt="Netflix Clone Project" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                        {/* */}

                        <div className="portfolio-image-box" onClick={openPopupboxCityGuide}>
                            <img className="portfolio-image" src={cityGuide} alt="City Guide Project" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                        {/* */}

                        <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
                            <img className="portfolio-image" src={portfolio} alt="Portfolio React and Material UI Project" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                        {/* */}

                        <div className="portfolio-image-box" onClick={openPopupboxTaskManager}>
                            <img className="portfolio-image" src={taskManager} alt="Task Manager Project" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                    </div>
                    {/* */}

                </div>
            </div>
            <PopupboxContainer {...popupboxConfigNetflix} />
            <PopupboxContainer {...popupboxConfigCityGuide} />
            <PopupboxContainer {...popupboxConfigPortfolio} />
            <PopupboxContainer {...popupboxConfigTaskManager} />
        </div>
    )
}

export default Portfolio
