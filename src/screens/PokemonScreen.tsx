import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { RootStackParams } from '../navigator/Navigator';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { style } from '../theme/appTheme';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetails } from '../compoents/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {};

export const PokemonScreen = ({navigation, route}: Props) => {
    
    const navigations = useNavigation();
    const {SimplePokemon, color} = route.params;
    
    const {isLoading, pokemon: FullPokemon} = usePokemon(SimplePokemon.id);

    console.log(FullPokemon);
    console.log(FullPokemon.name);

    return (
        <View style={{flex:1}}>
        <View style={{
            ...styles.header,
            backgroundColor: color,

            
        }}>
            <View style={style.globalMargin}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={()=> navigations.goBack()}>
                    <Icon name='arrow-back-outline' size={40}/>
                </TouchableOpacity>
                
                <Text style={styles.pokemonName}>{SimplePokemon.name[0].toUpperCase()+SimplePokemon.name.substring(1)} {'\n#'+SimplePokemon.id} </Text>
            </View>
            
            <Image 
                source={require('../assets/pokebola-blanca.png')}
                style={styles.pokeballImage}/>
            <Image 
                source={{uri: SimplePokemon.picture} }
                style={styles.pokemonImage}/>
            
           
        </View>

            {/* Detalles y loading */}
            {
                isLoading ? (
                    <View style={styles.loading}>
                        <ActivityIndicator
                            color={color}
                            size={50}
                        />
                    </View>
                ) : <PokemonDetails pokemon={FullPokemon}/>
            }
            
        
        
        </View>
    )
}


const styles = StyleSheet.create({
    header:{
        borderBottomLeftRadius: 500,
        borderBottomRightRadius: 500,
        height: 370,
        //backgroundColor: color,
        zIndex: 999,
    },
    pokemonName:{
        fontSize: 40,
        color: 'white',
    }
    ,
    pokemonImage:{
        height: 200,
        width: 200,
        position:'absolute',
        bottom: 0,
        alignSelf: 'center',
    },
    pokeballImage:{
        height: 250,
        width: 250,
        position:'absolute',
        bottom: 0,
        alignSelf: 'center',
        opacity: 0.5
    },
    loading:{
        flex:1,
        //backgroundColor: 'red',
        justifyContent:'center',
        alignItems:'center'
    }
})