import React, {useState} from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
const Splash = () => {

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../assets/images/digiimage.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
    </View>
  );
};

export default Splash;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.4;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#070550',
    height: '100%',
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
});
