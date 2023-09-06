import React from 'react'
import NearbySlider from './nearby section slider/NearbySlider'

function NearbySection() {
    return (<>


        <section className=" card-grid pb-0 pt-3">
            <div className="container-fluid px-4">
                <div className="row g-4 ">
                    <div className="section-heading">
                        <h2>Nearby Place</h2>
                    </div>
                    <NearbySlider />
                </div>
            </div>
        </section></>
    )
}

export default NearbySection