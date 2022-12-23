import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View, Image, StyleSheet, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// import { Movie } from '../interfaces/mobieinterface';
import { RootStackParams } from '../navigation/Navigation';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import useMoviesDetails from '../hooks/useMoviesDetails';
import MovieDetails from '../components/MovieDetails';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';


const screenHeight= Dimensions.get('screen').height
interface Props extends StackScreenProps <RootStackParams, 'DetailScreen'>{}



const DetailScreen = ({route, navigation}: Props ) => {

const movie = route.params
const urlImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

const {isLoadig, cast, movieFull}=useMoviesDetails(movie.id)


  return (

    <ScrollView>
        <View style={styles.imageContainer}>
            <Image
                source={{
                uri: urlImage,        
                }}
                style={styles.posterImage}
            />
        </View>
        <View style={styles.marginContainer}>
            <Text style={styles.subtitleMovie}>{movie.original_title}</Text>
            <Text style={styles.titleMovie}>{movie.title}</Text>
        </View>
        
          {
            isLoadig 
              ? <ActivityIndicator size={30} color="aquamarine" style={{marginTop: 25}}/>
              : <MovieDetails movieFull={movieFull!} cast={cast}/>
          }
          
        {/* <FontAwesome5 name="star" solid/> */}
        <TouchableOpacity
            onPress={()=> navigation.goBack()}
            style={styles.backButton}
        >

                <FontAwesome5Icon
                  name={'arrow-circle-left'} solid
                  color="gray"
                  size={50}
                  
                  />
        </TouchableOpacity>
    </ScrollView>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
    posterImage:{
      flex:1
      
    },

    imageContainer:{
      width:"100%",
      height: screenHeight * 0.7, //70% de la pantalla
      overflow:"hidden",
      shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.4,

    elevation: 10,
    borderBottomEndRadius:25,  
    borderBottomStartRadius:25, 
    },

    marginContainer:{
      marginHorizontal:20,
      marginTop: 20,
    },

    subtitleMovie :{
      fontSize:16,
      opacity:0.8,

    },

    titleMovie:{
      fontSize:20,
      fontWeight:"bold",
      color:"black"
      
    },
    backButton:{
      position:"absolute",
      opacity: 0.5, 
      marginVertical:20,
      marginHorizontal:20

    }
});