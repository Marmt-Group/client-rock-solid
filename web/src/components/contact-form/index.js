import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react';
import './style.scss';

const ContactForm = ({ showContact, onHideContact }) => {

    const [nameInput, setNameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [companyInput, setCompanyInput] = useState('')
    const [messageInput, setMessageInput] = useState('')

    const mapDefaults = {
        center: {
            lat: 37.710541, lng: -121.9124001
        },
        zoom: 15
    }

    const resetForm = () => {
        setNameInput('')
        setEmailInput('')
        setCompanyInput('')
        setMessageInput('')
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData();

        formData.append('name', nameInput)
        formData.append('email', emailInput)
        formData.append('company', companyInput)
        formData.append('message', messageInput)

        let object = {};
        formData.forEach((value, key) => { object[key] = value });
        const json = JSON.stringify(object);

        let response = await fetch('https://qlts6whf7f.execute-api.us-east-2.amazonaws.com/default/rockSolidSendMailgunEmail', {
            method: 'POST', 
            body: json, 
            headers: {
                'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                'Content-Type': 'application/json'
            }})

        if (response.ok) {
            let text = await response.text();
            alert(text)
            resetForm()
        } else {
            alert("HTTP-Error: " + response.status);
            resetForm()
        }
    }

    return (
        <section className={showContact ? 'contact reveal' : 'contact'}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-5">
                        <div className="map-container border--round">
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: process.env.GATSBY_GMAP_KEY }}
                                defaultCenter={mapDefaults.center}
                                defaultZoom={mapDefaults.zoom}
                            >
                                {/* <AnyReactComponent
                                    lat={59.955413}
                                    lng={30.337844}
                                    text="My Marker"
                                /> */}
                            </GoogleMapReact>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6 text-container">
                        <div className="text-block">
                            <p className="lead"> Email: <a href="mailto:concretecoating@gmail.com">concretecoating@gmail.com</a></p>
                            <p className="lead">Toll Free: <a href="tel:+18889929948">888.992.9948</a></p>
                            <p className="lead">Local: <a href="tel:+19259999119">925.999.9119</a></p>
                            <p className="lead">Address: 6287 Dougherty Road, Dublin, CA 94568</p>
                            <p className="lead"> Give us a call or drop by anytime, we endeavour to answer all enquiries
                            within 24 hours on business days. </p>
                            <p className="lead"> We are open from 9am — 5pm week days. </p>
                        </div>
                        <div className="row">
                            <form className="form-email" data-success="Thanks for your enquiry, we'll be in touch shortly." data-error="Please fill in all fields correctly." onSubmit={handleSubmit}>
                                <div className="col-xs-12 form-group"> <label htmlFor="formName">Your Name:</label> 
                                    <input type="text" name="Name" value={nameInput} onChange={e => setNameInput(e.target.value)} id="formName" className="form-control validate-required" required /> 
                                </div>
                                <div className="col-xs-12 form-group"> <label htmlFor="formEmail">Email Address:</label> 
                                    <input type="email" name="email" value={emailInput} onChange={e => setEmailInput(e.target.value)} id="formEmail" className="form-control validate-required validate-email" required /> 
                                </div>
                                <div className="col-xs-12 form-group"> <label htmlFor="formCompany">Company:</label>
                                    <input type="text" name="company" value={companyInput} onChange={e => setCompanyInput(e.target.value)} id="formCompany" className="form-control validate-required validate-email" />
                                </div>
                                <div className="col-xs-12 form-group"> <label htmlFor="formMessage">Message:</label> 
                                    <textarea rows="3" name="Message" value={messageInput} onChange={e => setMessageInput(e.target.value)} id="formMessage" className="form-control validate-required" required></textarea> 
                                </div>
                                <button type="submit" className="btn btn-primary type--uppercase">Send Inquiry</button> 
                            </form>
                        </div>
                    </div>
                </div>
                <i className="icon  icon-Close" title="icon-Close" onClick={showContact ? onHideContact : null}></i>
            </div>
        </section>
    )
}

export default ContactForm