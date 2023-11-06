import React, { useState } from 'react';
import '../components/home.css';


export default function Home() {
    const images = {
      image1: require('../asstets/images/image-1.webp'),
      image2: require('../asstets/images/image-2.webp'),
      image3: require('../asstets/images/image-3.webp'),
      image4: require('../asstets/images/image-4.webp'),
      image5: require('../asstets/images/image-5.webp'),
      image6: require('../asstets/images/image-6.webp'),
      image7: require('../asstets/images/image-7.webp'),
      image8: require('../asstets/images/image-8.webp'),
      image9: require('../asstets/images/image-9.webp'),
      image10: require('../asstets/images/image-10.jpeg'),
      image11: require('../asstets/images/image-11.jpeg'),
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
        <div style={{padding: "30px"}}>
          <div style={containerStyle}>
            <div style={{ flex: 1 }}>
              <h1>Image Gallery</h1>
            </div>
            <div>
              <h1 style={{ flex: 1, textAlign: 'right' }}> {selected} : files selected </h1>
            </div>
          </div>
          <hr></hr>
          <div className="images-container">
            {Object.values(images).map((image, index) => (
              <div className="image-container" style={{ backgroundImage: `url(${image})` }}>
                <input class="checkbox" type="checkbox" onChange={handleCheckboxChange}></input>
              </div>
            ))}
            <div className="image-upload-container" >
              <input type="file" accept="image/*"  />
            </div>
          </div>
        </div>
    </>
  )
}