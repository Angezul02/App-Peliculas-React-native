import React from 'react'
import { FlatList, Text, View } from 'react-native';
import { MovieFull } from '../interfaces/mobieinterface';
import { Cast } from '../interfaces/creditsinterface';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CastActorItem from './CastActorItem';
// import currencyFormatter from 'currency-formatter';


interface Props {
    movieFull: MovieFull,
    cast: Cast[]
}

const MovieDetails = ({movieFull, cast}:Props) => {
  return (
    <>
    
    <View style={{ }}>
        <View style={{flexDirection:"row", marginHorizontal:20,}}>
            <FontAwesome5 name="star" solid size={16}/>
            <Text style={{marginLeft:5}}>{movieFull.vote_average}</Text>
            <Text style={{marginLeft:5}}>
                 { movieFull.genres.map(genre=> genre.name).join(", ") }
            </Text>
        </View>
        <View style={{}}>
            <Text style={{marginLeft:20,fontSize:22,color:"black", marginTop:10, fontWeight:"bold", }}>
                Historia
            </Text>
            <Text style={{fontSize:16, textAlign:"justify",marginRight:20,marginLeft:20}}>
                {movieFull.overview}
            </Text>
            <View style={{flexDirection:"row",marginLeft:20}}>
            <Text style={{fontSize:16,color:"black", fontWeight:"bold"}}>
                Presupuesto:
            </Text>
            <Text style={{fontSize:15, padding:2}}>
                $ {movieFull.budget}
                {/* new Intl.NumberFormat('de-DE', style={{ currency: 'EUR' }}).format({movieFull.budget}) */}
            </Text>

            </View>
            <View style={{marginBottom:50,}}>
            <Text style={{fontSize:22,color:"black", fontWeight:"bold",marginLeft:20}}>
                Actores
            </Text>
            <FlatList
                data= {cast}
                keyExtractor={(item)=> item.id.toString()}
                renderItem={({item})=><CastActorItem actor={item}/>}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{height:100}}
            />
            </View>
           
        </View>
    </View>
    </>
  )
}

export default MovieDetails