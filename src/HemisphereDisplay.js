import React from "react";
import './Hemisphere.css'
import northernPic from './images/northernPic.jpg';
import southernPic from './images/southernPic.jpg';

const hemisphereCongif = {
    'Northern': {
        'text': 'Northern Hemisphere',
        'picture': northernPic
    },
    'Southern': {
        'text': 'Southern Hemisphere',
        'picture': southernPic
    }
}

const HemisphereDisplay = ({ latitude, errorMes }) => {
    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    const { text, picture } = hemisphereCongif[hemisphere]
    return (
        <div className={hemisphere}>
            <div className="ui raised text container segment">
                <div className="image">
                    <img src={picture} alt='hemispher_pic'/>
                </div>
                <div className="ui teal bottom attached lable">
                    <h2>{latitude} - { text }</h2>
                    <h3>{ errorMes ? 'Errors: ' + errorMes : 'No Errors in Finding' }</h3>
                </div>
            </div> 
        </div>
    )
}

export default HemisphereDisplay