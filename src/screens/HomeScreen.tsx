import React, { useContext } from 'react';
import {View, ActivityIndicator, Dimensions} from 'react-native';
import MoviePoster from '../components/MoviePoster';
import useMovies from '../hooks/useMovies';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {ScrollView} from 'react-native';
import HorizontalSlider from '../components/HorizontalSlider';
import GradientBackground from '../components/GradientBackground';
import ImageColors from 'react-native-image-colors'
import { getImageColors } from '../helpers/getColors';
import { GradientContext } from '../context/GradientContext';
import { useEffect } from 'react';

const {width: windowWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const {nowPlaying, isLoading, popular, topRated, upComing} = useMovies();
  const {top} = useSafeAreaInsets();
  const {setMainColors} = useContext(GradientContext)
  
  const getPosterColors = async (index: number)=>{ 
    const movie = nowPlaying[index];
    const urlImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    
    const [primary="aquamarine", secondary = "white" ]=await getImageColors(urlImage)
    setMainColors({primary, secondary});
    
    

  }

  useEffect(() => {
   if(nowPlaying.length > 0 ){
      getPosterColors(0)
   }
  }, [nowPlaying])
  

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="blue" size={100} />
      </View>
    );
  }
  // console.log(peliculasEnCartelera[0]?.title)
  return (
    <GradientBackground>

      <ScrollView>
        <View style={{marginTop: top + 20}}>
          <View style={{height: 440}}>
            <Carousel
              renderItem={({item}: any) => <MoviePoster movie={item} />}
              data={nowPlaying}
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={1}
              onSnapToItem= {index=> getPosterColors(index)}
            />
          </View>

          <HorizontalSlider title="Popular" movies={popular} />
          <HorizontalSlider title="Top Rated" movies={topRated} />
          <HorizontalSlider title="Upcoming" movies={upComing} />

          {/* <MoviePoster movie={peliculasEnCartelera[0]}/> */}
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

export default HomeScreen;
