import React, { useState } from 'react';
// import * as images from '../images';
// import image from '../asstets/images/image1.jpg';
// const images = await import('../images');
import '../components/home.css';


export default function Home() {
    const images = {
        image1: require('../asstets/images/image1.jpg'),
        image2: require('../asstets/images/image1.jpg'),
        image3: require('../asstets/images/image1.jpg'),
        image4: require('../asstets/images/image1.jpg'),
        image5: require('../asstets/images/image1.jpg'),
        image6: require('../asstets/images/image1.jpg'),
        image7: require('../asstets/images/image1.jpg'),
        image8: require('../asstets/images/image1.jpg'),
        image9: require('../asstets/images/image1.jpg'),
        image10: require('../asstets/images/image1.jpg'),
        image11: require('../asstets/images/image1.jpg'),
        image12: require('../asstets/images/image1.jpg'),
    }

    const containerStyle = {
      display: 'flex',
      flexDirection: 'row',
    };

    const [selected, setSelected] = useState(0);

    const handleCheckboxChange = (event) => {
      if (event.target.checked) {
        setSelected(selected + 1);
      } else {
        setSelected(selected - 1);
      }
    };
   
  return (
    <>
        <div style={{padding: "20px"}}>
          <div style={containerStyle}>
            <div>
              <h1>Image Gallery</h1>
            </div>
            <div>
              <h1>Selected: {selected} </h1>
            </div>
          </div>
          <hr></hr>
          <div >
            {Object.values(images).map((image, index) => (
              <div>
                <input type="checkbox" onChange={handleCheckboxChange} ></input>
                <img key={index} src={image} alt={`Image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
    </>
  )
}