import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { style } from '../theme/appTheme';



import ImageColors from 'react-native-image-colors'
import { useEffect, useRef } from 'react';
import { useNavigation, CommonActions } from '@react-navigation/native';



const {height,width} = Dimensions.get('window');


interface Props{
    pokemon: SimplePokemon;
}





export const PokemonCard = ({pokemon} : Props) => {
    
    const [bgColor, setbgColor] = useState('gray');

    const isMounted = useRef(true);

    const navigation = useNavigation();


        
    useEffect(() => {
        
    ImageColors.getColors(pokemon.picture, {fallback: 'grey'}).then(colors =>{

            if(!isMounted.current) return; 

                if(colors.platform === 'android'){
                    setbgColor(colors.dominant || 'gray')
                } else
                {
                    //setbgColor(colors.background || 'gray')
                }
            });
            console.log(bgColor);
    return() =>{
        isMounted.current = false;
    }

    }, [])

    return (
        <TouchableOpacity
        activeOpacity={0.9}
        onPress={()=> navigation.dispatch(
            CommonActions.navigate({
                name: 'PokemonScreen',
                params: {SimplePokemon: pokemon,
                        color:  bgColor,        
                },
            })
        )}
        >
        <View style={{
                ...styles.cardContainer,
                width: width * 0.4,
                backgroundColor: bgColor,

            }}>
                <View >
                    <Text style={styles.name} >
                        {pokemon.name[0].toUpperCase()+pokemon.name.substring(1)}
                        {'\n# '+ pokemon.id}
                        
                    </Text>
                </View>
                <Image 
                    source={require('../assets/pokebola-blanca.png')}
                    style={styles.pokebola}
                    />
                <Image 
                    source={{uri: pokemon.picture}}
                    style={styles.pokemonImage}
                    />

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        marginHorizontal: 10,
        //backgroundColor: 'gray',
        height: 100,
        width: 150,
        marginBottom:25,
        borderRadius: 10,
        shadowColor:'#000',
        shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
        //overflow: 'hidden'
    },
    name:{
        color:'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20, 
        left:10,
        

    },
    pokebola:{
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: -20,
        right: -20,
        opacity: 0.5
    },

    pokemonImage:{
        width: 100,
        height: 100,
        position: 'absolute',
        right: -20,
        bottom: -5,

    }
})