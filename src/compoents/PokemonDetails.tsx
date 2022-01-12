import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { style } from '../theme/appTheme';


interface Props{
    pokemon: PokemonFull
}


export const PokemonDetails = ({pokemon}: Props) => {
    return (
        <ScrollView
            style={{
                ...StyleSheet.absoluteFillObject,
                
            }}
        >
            <View style={{
                ...styles.container,
                marginTop: 370,
            }}> 
            
            <Text style={styles.title}>Types</Text>
            <View style={{ flexDirection: 'row' }}>
                {
                    pokemon.types.map(({type})=>(
                        <Text
                        style={{...styles.regularText,
                            marginRight: 10}}
                        key={type.name}
                        >
                            {type.name}
                        </Text>
                        ))
                }
            </View>

            <Text style={styles.title}>Peso</Text>
            <Text style={styles.regularText}>{pokemon.weight} kg</Text>
            
            {/* Sprites */}
            <Text style={ styles.title }>Sprites</Text>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <Image 
                        source={ {uri:pokemon.sprites.front_default} }
                        style={ styles.basicSprite }
                    />
                <Image 
                        source={ {uri:pokemon.sprites.back_default} }
                        style={ styles.basicSprite }
                    />
                <Image 
                        source={ {uri:pokemon.sprites.front_shiny} }
                        style={ styles.basicSprite }
                    />
                <Image 
                        source={ {uri:pokemon.sprites.back_shiny} }
                        style={ styles.basicSprite }
                    />

            </ScrollView>

            {/* Habilidades */}
            
                <Text style={ styles.title }>Habilidades base</Text>
                <View style={{ flexDirection: 'row' }}>
                {
                    pokemon.abilities.map( ({ ability }) => (
                        <Text
                            style={{ 
                                ...styles.regularText,
                                marginRight: 10
                            }}
                            key={ ability.name }
                        >
                            { ability.name }
                        </Text>
                    ))
                }
                </View>

            
            {/* Movimientos */}
            
            <Text style={ styles.title }>Movimientos</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
                {
                    pokemon.moves.map( ({ move }) => (
                        <Text
                            style={{ 
                                ...styles.regularText,
                                marginRight: 10
                            }}
                            key={ move.name }
                        >
                            { move.name }
                        </Text>
                    ))
                }
                </View>


            {/* Stats */}
            
                <Text style={ styles.title }>Stats</Text>
                <View>
                {
                    pokemon.stats.map( ( stat, i ) => (
                        <View 
                            key={ stat.stat.name + i }
                            style={{ flexDirection: 'row' }}
                        >
                            <Text
                                style={{ 
                                    ...styles.regularText,
                                    marginRight: 10,
                                    width: 150
                                }}
                                key={ stat.stat.name }
                            >
                                { stat.stat.name }
                            </Text>

                            <Text
                                style={{ 
                                    ...styles.regularText,
                                    fontWeight: 'bold'
                                }}
                            >
                                { stat.base_stat }
                            </Text>
                        </View>
                    ))
                }
                </View>



                {/* Sprite final */}
                <View style={{
                    marginBottom: 20,
                    alignItems: 'center'
                }}>
                    <Image 
                        source={ {uri:pokemon.sprites.front_default} }
                        style={ styles.basicSprite }
                    />
                </View>
            

            
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container:{
        marginHorizontal:20,
    },
    title:{
        marginTop:10,
        fontSize: 20,
        fontWeight:'bold',
        color: 'black',
    },
    regularText:{
        fontSize: 17,
        //fontWeight:'bold',
        color: 'black',
    },
    basicSprite: {
        width: 100,
        height: 100
    }

});