import React from "react";
import author from "../images/me.jpg";

/* container, row are bootstrap classes */
/* py => adding padding top and bottom e.g. py adding 5 top and bottom */

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="author..." />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">about me</h1>
                    <p>
                        Hey ! This is Shebin. I am a ML + BigData-savvy and versatile ML/CV engineer with over 5 years of industry experience in analytics and ICT domain, especially within the space of managed service assurance, delivery and field operations.

                        An analytics professional with a blend of business acumen, analytics technology stack expertise and telecom domain knowledge. Often entrusted by Leadership to drive mission critical programs. Proven expertise in solving customer challenges through implementing realizable, robust and fault-tolerant analytics pipelines.

                        I graduated with a B.Tech (Bachelor of Technology) degree in Electrical Engineering from IIT Roorkee. My major areas of interest include data science, machine learning, deep learning, natural language processing, computer vision and statistics.

If you have a challenging problem which includes data-sets and numbers and are looking for innovating solutions - you have my attention ! </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
