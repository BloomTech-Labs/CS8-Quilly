import React, { Component } from 'react';
import CoverFlow from 'coverflow-react';
import './coverflow.css';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './im3.JPG';

class Coverflow extends Component {
  render() {
    const imagesArr = [img1, img2, img3];
    //places images in an array
    return (
      <div className="App">
        <div className="coverflow">
          <CoverFlow
            imagesArr={imagesArr}
            //calls images in array
            width="200"
            height="350"
            background="rgba(76, 175, 80, 0)"
            //makes background color transparent
            itemRatio="1:1"
            //sets the shape of the individual covers
          />
        </div>
      </div>
    );
  }
}

export default Coverflow;
