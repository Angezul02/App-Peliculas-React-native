import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Movie} from '../interfaces/mobieinterface';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

const MoviePoster = ({movie, height = 420, width = 300}: Props) => {
  // console.log(movie);

  const urlImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const navigation = useNavigation(); 

  return (
    <TouchableOpacity
    onPress={()=>navigation.navigate("DetailScreen", movie)}
    activeOpacity={0.8}
    style={{width, height, marginHorizontal: 2, paddingBottom:20, paddingHorizontal:7, marginTop: 5, borderRadius:20}}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: urlImage,
          }}
          style={styles.imageMovie}
        />
      </View>
    </TouchableOpacity>
  );
};

export default MoviePoster;

const styles = StyleSheet.create({
  imageMovie: {
    flex: 1,
    borderRadius: 20,
  },

  imageContainer: {
    flex: 1,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.4,

    elevation: 10,
  },
});
