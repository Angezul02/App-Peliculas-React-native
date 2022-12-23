import React from 'react'
import { Cast } from '../interfaces/creditsinterface';
import { Image, StyleSheet, Text, View } from 'react-native';

interface Props {
    actor: Cast
}

const CastActorItem = ({actor}:Props) => {
    const uriImageActor = `https://image.tmdb.org/t/p/w500${actor.profile_path}`
  return (
    <View style={{marginTop:5}}>
        <View style={styles.containerItems}>
            <Image
            source={{uri: uriImageActor}}
            style={{width:50 , height:50 , borderRadius:10}}
            />
            <View style={styles.actorInfo}>
            <Text style={{fontSize:18 , fontWeight:"bold" , color:"black"}}>
                {actor.name}
            </Text>
            <Text style={{fontSize:16 , color:"grey"}}>
                {actor.character}
            </Text>

            </View>
        </View>
    </View>
  )
}

export default CastActorItem

const styles = StyleSheet.create({
    containerItems : {
        flexDirection:"row",
        backgroundColor:"white",
        borderRadius:10,
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 10,
        },
        shadowOpacity: 0.9,
        shadowRadius: 5,

        elevation: 5,
        marginRight:5,
        marginHorizontal:20,
        padding:5
    },

    actorInfo:{
        marginLeft:10
    }


});