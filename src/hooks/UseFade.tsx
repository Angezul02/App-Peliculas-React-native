import React, { useRef } from 'react'
import { Animated } from 'react-native';


const UseFade = () => {
    const opacity = useRef(new Animated.Value(0)).current; 
    const fadeIn = (callback?:Function)=>{
        Animated.timing(opacity, 
            {
            toValue:1,
            duration: 100, 
            useNativeDriver:true
        }).start(()=> callback? callback() : null);
    }

    const fadeOut =()=>{
        Animated.timing(opacity, 
            {
            toValue:0,
            duration: 100, 
            useNativeDriver:true
        }).start();
    }

    return{
        fadeIn,
        fadeOut,
        opacity
    }
}

export default UseFade