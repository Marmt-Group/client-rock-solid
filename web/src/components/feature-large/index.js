import React from "react"
import './style.scss'

const FeatureLarge = () => (
    <section id="feature-large" className="feature-large">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-lg-4">
                    <div className="text">
                        <h2>Coated concrete?</h2>
                        <p className="lead"> Yes, we take your existing patios, walkways, pool decks and more, and coat over it with concrete. No tear out needed! What you get from us is absolutely beautiful craftsmanship that's built to last. We've been in business since 1994 and employ a hard working team from around the San Francisco Bay area.</p>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-8">
                    <div className="boxed boxed--lg boxed--border">
                        <div className="feature feature-2"> <i className="icon green icon-Money-Smiley" icon-class=" icon-Money-Smiley" title="icon-Money-Smiley"></i>
                            <div className="feature__body">
                                <h5>No tear out needed!</h5>
                                <p> Save time and money by avoiding demolition with existing walkways, patios, or pull decks.</p>
                            </div>
                        </div>
                        <div className="feature feature-2"> <i className="icon yellow icon-Running" icon-class=" icon-Running" title="icon-Running"></i>
                            <div className="feature__body">
                                <h5>Fast Construction</h5>
                                <p>The installation process takes approximately 5 days to complete (depending on your project of course). Just 5 days to a
                                        completely new, beautiful front drive, pool deck or backyard patio!</p>
                            </div>
                        </div>
                        <div className="feature feature-2"> <i className="icon red icon-Geo2" icon-class=" icon-Geo2" title="icon-Geo2"></i>
                            <div className="feature__body">
                                <h5>Anywhere in the San Francisco Bay Area</h5>
                                <p>We've been serving the greater Bay Area for over 25 years.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default FeatureLarge