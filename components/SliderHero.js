import { StyleSheet, Text, View } from 'react-native'

import React, { useState } from 'react';
// import ImageSlider from 'react-native-image-slider';
import { SliderBox } from "react-native-image-slider-box";

const images = [
  require('../resources/1_slider.png'),
  require('../resources/2_slider.jpg'),
  ];


const SliderHero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSlideChange = (newIndex) => {
      setCurrentIndex(newIndex);
    };
  
    return (
    
      <SliderBox
        images={images}
        index={currentIndex}
        sliderBoxHeight={100}
        style={styles.image}
        resizeMode="contain"
        paginationBoxVerticalPadding={0}
        ImageComponentStyle={styles.image_component}
        paginationBoxStyle={{
            position: "absolute",
            bottom: 0,
            padding: 0,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            paddingVertical: 10
          }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            marginTop: -40,
            padding: 0,
            margin: 0,
            backgroundColor: "rgba(128, 128, 128, 0.92)"
          }}

          autoplay={true}
          autoplayInterval={1000}

      />
    );
  };

export default SliderHero


const styles = StyleSheet.create({
    image: {
      width: '100%',
      height: 200,
      verticalAlign: 'top',
      marginTop: 40
    },
    image_component: {
        width: '50%',
        backgroundColor: 'red',
        resizeMode: 'cover'
    }
  });