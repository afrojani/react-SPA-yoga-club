import React from 'react';

const Blog = () => {
    return (

        <div className="mt-5">
            <div className="text-center d-flex flex-column justify-content-center align-items-center">
                <h1>Frequently Asked Questions</h1>
                <p className="w-50"> Here are some FAQs that you might be curious about.</p>
            </div>
            <div className=" px-5 ">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item m-3">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> What are
                                the differences between Flexbox and Grid?</button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body"> CSS Grid and Flexbox are layout models that share similarities
                                and can be used together. The key difference is that CSS Grid can be used to create
                                two-dimensional layouts, while Flexbox can only be used to create one-dimensional
                                layouts. That means you can place components along the X- and Y-axis in CSS Grid and
                                only one axis in Flexbox. </div>
                        </div>
                    </div>
                    <div className="accordion-item m-3">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> What
                                are the differences between Bootstrap and Tailwind?</button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body"> Tailwind offers predesigned widgets to build a site from
                                scratch with fast UI development. Bootstrap comes with a set of pre-styled responsive,
                                mobile-first components that possess a definite UI kit. Tailwind CSS uses a set of
                                utility classes to create a neat UI with more flexibility and uniqueness. Sites created
                                using Bootstrap follow the generic pattern that makes them look identical. </div>
                        </div>
                    </div>
                    <div className="accordion-item m-3">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                What is CSS box model? </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body"> In web development, the CSS box model refers to how HTML
                                elements are modeled in browser engines and how the dimensions of those HTML elements
                                are derived from CSS properties. It is a fundamental concept for the composition of HTML
                                webpages.CSS determines the size, position, and properties (color, background, border
                                size, etc.) of these boxes. Every box is composed of four parts (or areas), defined by
                                their respective edges: the content edge, padding edge, border edge, and margin edge.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item m-3">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"> What
                                are semantic tags? </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body"> The HTML semantics refers to the tags that provide meaning to
                                an HTML page rather than just presentation. It makes HTML more comprehensible by better
                                defining the different sections and layout of web pages. The core characteristic of a
                                semantic element is that it clearly communicated its meaning to both the developer and
                                the browser. Header, Nav, Section, Article, Aside, Footer; these are examples of
                                semantic tags. </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;