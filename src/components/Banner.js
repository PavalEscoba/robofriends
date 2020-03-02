import React from 'react';
import Slider from "react-slick";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import 'tachyons';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./banner.css";

const  Banner = () => {
  var settings = {
    dots: true
  };
  return (
    <Container maxWidth='lg'>
      <h1 className='tc'>Hello!</h1>
      <div className='container'>
        <Slider {...settings} >
        <div>
            <Grid container justify="center" alignItems="center">
              <img src="https://picsum.photos/200/300" alt="slide"/>
            </Grid>
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" alt="slide"/>
          </div>
          <div>
            <img src="http://placekitten.com/g/500/500" alt="slide"/>
          </div>
          <div>
            <img src="https://picsum.photos/200/400" alt="slide"/>
          </div>
        </Slider>
      </div>
    </Container>
  )
};

export default Banner;
