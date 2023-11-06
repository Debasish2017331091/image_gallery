import React from 'react';
// import * as images from '../images';
import image from '../images/image1.jpg';
// const images = await import('../images');



export default function Home() {
    const images = {
        image1: require('../images/image1.jpg'),
        image2: require('../images/image2.jpg'),
        image3: require('../images/image3.jpg'),
        image4: require('../images/image4.jpg'),
        image5: require('../images/image5.jpg'),
        image6: require('../images/image6.jpg'),
        image7: require('../images/image7.jpg'),
        image8: require('../images/image8.jpg'),
        image9: require('../images/image9.jpg'),
        image10: require('../images/image10.jpg'),
        image11: require('../images/image11.jpg'),
        image12: require('../images/image12.jpg'),
    }
  return (
    <>
        <div style={{margin: "20px"}}>
            {Object.values(images).map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} width="150" height="150" style={{padding:'10px'}}/>
        ))}
        </div>
    </>
  )
}