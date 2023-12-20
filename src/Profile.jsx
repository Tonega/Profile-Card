import React from 'react'
import './App.css'
import img1 from './assets/images/bg-pattern-card.svg'
import img2 from './assets/images/image-victor.jpg'

const Profile = () => {
    return(
        <>
        <section className='container'>
            <div className='card-top'> <img src={img1} alt="" /> </div>
            <div className="vicimg"> <img src={img2} alt="" /> </div>
            <h2>Victor Crest <span>26</span></h2>
            <h3>London</h3>

            <div className="activity">
                <h4>80k <br/> <span>Followers</span> </h4>
                <h4>803k <br/> <span>Likes</span> </h4>
                <h4>1.4k <br/> <span>Photos</span> </h4>
            </div>
        </section>

         <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/Tonega">Tony</a>.
         </div>
        </>
    )
}

export default Profile