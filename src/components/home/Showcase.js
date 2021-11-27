import React from "react";
import showcaseimage from '../../assets/showcase.png'

const Showcase = () => {
    return (
        <section className='showcase'>
            <aside className='leftShowcase'>
                <div className='forPeople'>
                    <h4>"For the people"</h4>
                    <p>The pain itself is love, it has been resolved over the years</p>
                </div>
                <div className='forAnimal'>
                <h4>"For Animals"</h4>
                <p>The pain itself is love, it has been resolved over the years</p>

                </div>
                <div className='easyUpload'>
                <h4>"Easy Upload"</h4>
                <p>The pain itself is love, it has been resolved over the years</p>

                </div>

            </aside>
            <div className='showcaseImage'>
                <img src={showcaseimage} alt='showcaseimage'></img>

            </div>
        </section>
    )
}


export default Showcase;