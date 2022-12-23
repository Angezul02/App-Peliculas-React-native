import React, { useContext } from 'react';

import { Animated, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';
import { useEffect } from 'react';
import UseFade from '../hooks/UseFade';



interface Props {
    children: JSX.Element | JSX.Element[]
}

const GradientBackground = ({children}:Props) => {

const {colors, prevColors,setPrevMainColors} = useContext (GradientContext);

const {opacity, fadeIn, fadeOut}=UseFade()
useEffect(() => {
 fadeIn(()=>{
      setPrevMainColors(colors);
      fadeOut()
 })
  
}, [colors])


  return (
    <View style={{flex:1}}>

        <LinearGradient
        colors={[prevColors.primary, prevColors.secondary, 'white']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x:0.1, y:0.1}}
        end={{ x:0.5 , y:0.8}}
        />

        <Animated.View
        style={{...StyleSheet.absoluteFillObject, opacity}}
        >

            <LinearGradient
            colors={[colors.primary, colors.secondary, 'white']}
            style={{...StyleSheet.absoluteFillObject}}
            start={{x:0.1, y:0.1}}
            end={{ x:0.5 , y:0.8}}
            />


        </Animated.View>

       {/* <LinearGradient
            colors={['#4c669f', '#3b5998', '#192f6a']} 
            style={{...StyleSheet.absoluteFillObject}}
        /> */}

       {children}
    </View>
  )
}

export default GradientBackground

