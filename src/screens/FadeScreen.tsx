import React, { useRef } from 'react'
import { Animated, Button, View } from 'react-native';
import UseFade from '../hooks/UseFade';


const FadeScreen = () => {

   const {fadeIn, fadeOut, opacity}= UseFade()   


  return (
    <View 
    style={{
        flex:1, 
        backgroundColor:"grey", 
        justifyContent:"center", 
        alignItems:"center"
    }}>

        <Animated.View 
        style={{
            backgroundColor:"#084F6A", 
            width:150, 
            height:150, 
            borderColor:"white", 
            borderWidth:10, 
            opacity, 
            marginBottom:10,
        }}>
        </Animated.View>
        
        <Button
            title='FadeIn'
            onPress={()=>fadeIn()}
        />

        <Button
            title='FadeOut'
            onPress={()=>fadeOut()}
            
        />
    </View>
  )
}

export default FadeScreen