import React, { Component } from 'react';

import Slide_1 from '../img/slide-1.jpg';
import Slide_2 from '../img/slide-2.jpg';
import Slide_3 from '../img/slide-3.jpg';
import Slide_4 from '../img/slide-4.jpg';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [
        {
          eachSlide: `url(${Slide_1})`
        },
        {
          eachSlide: `url(${Slide_2})`
        },
        {
          eachSlide: `url(${Slide_3})`
        },
        {
          eachSlide: `url(${Slide_4})`
        }
      ]
    }
  }
}
