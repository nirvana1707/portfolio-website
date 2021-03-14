import React, { useState } from "react";
import emailjs, { send } from "emailjs-com";
import { useForm } from "react-hook-form";

const Contacts = () => {

    // Creating hook for the message
    const [successMessage, setsuccessMessage] = useState("");

    const { register, handleSubmit, errors } = useForm();

    const serviceID = "service_3974yqj";
    const templateID = "template_ID";
    const userID = "user_kuFi1rGCRTwXpmyPvt59q";

    // Form submission - capturing information and removing data after click

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {

        emailjs.send(serviceID, templateID, variables, userID)
            .then(() => {
                setsuccessMessage("Form sent successfully! I will contact you ASAP");
            }).catch(err => console.error(`Something went wrong ${err}`));
    }


    return (
        <div id="contacts" className="contacts">
            <div className="text-center">
                <h1>contact me</h1>
                <p>Please fill out the form and describe your project needs and I'll contact you
                as soon as possible </p>
                <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            {/* NAME INPUT */}
                            <div className="text-center">
                                <input
                                    id="name"
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    name="name"
                                    ref={
                                        register({
                                            required: "Please enter your name",
                                            maxLength: {
                                                value: 20,
                                                message: "Please enter a name shorter than 20 characters"
                                            }
                                        })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.name && errors.name.message}
                            </span>

                            {/* PHONE INPUT */}
                            <div className="text-center">
                                <input
                                    id="phone"
                                    type="text"
                                    className="form-control"
                                    placeholder="Phone Number"
                                    name="phone"
                                    ref={
                                        register({
                                            required: "Please enter your phone number"
                                        })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.phone && errors.phone.message}
                            </span>

                            {/* EMAIL INPUT */}
                            <div className="text-center">
                                <input
                                    id="email"
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    ref={
                                        register({
                                            required: "Please enter your email",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid Email"
                                            }
                                        })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.email && errors.email.message}
                            </span>

                            {/* SUBJECT INPUT */}
                            <div className="text-center">
                                <input
                                    id="subject"
                                    type="text"
                                    className="form-control"
                                    placeholder="Subject"
                                    name="subject"
                                    ref={
                                        register({
                                            required: "Please enter a subject for your note"
                                        })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.subject && errors.subject.message}
                            </span>
                        </div>

                        <div className="col-md-6 col-xs-12">
                            {/* DESCRIPTION */}
                            <div className="text-center">
                                <textarea
                                    id="description"
                                    type="text"
                                    className="form-control"
                                    placeholder="Please describe your project in brief.."
                                    name="description"
                                    ref={
                                        register({
                                            required: "Please enter description"
                                        })
                                    }
                                ></textarea>
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.description && errors.description.message}
                            </span>
                            <button className="btn-main-offer contact-btn" type="submit">contact me</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts
