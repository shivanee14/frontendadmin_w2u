import React from 'react'
import SocialMediaSlider from './social media slider/SocialMediaSlider'

function SocialMediaSection() {
    return (
        <>
            <div className="container-fluid px-3">
                <div className="border-bottom border-primary border-2 opacity-1"></div>
            </div>

            {/* ========== Section START ==========  */}
            <section className=" pt-2 pb-2">
                <div className="container-fluid px-4">
                    <div className="row">
                        <div className="col-md-12">
                            {/* Title  */}
                            <div className="mb-4 d-md-flex justify-content-between align-items-center">
                                <div>
                                    <h2 className="m-0">
                                        <i className="bi bi-hand-thumbs-up me-2"></i> Social Media
                                    </h2>
                                    <p>Checkout the hand pick post by admin</p>
                                </div>
                                <a href="#" className="text-body small">
                                    <u>Content by: W2U</u>
                                </a>
                            </div>
                            <SocialMediaSlider />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SocialMediaSection