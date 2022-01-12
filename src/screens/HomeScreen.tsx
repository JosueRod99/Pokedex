import React from 'react'
import { ActivityIndicator, Dimensions, FlatList, Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { style } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { PokemonCard } from '../compoents/PokemonCard';



export const HomeScreen = () => {
    const {top} =  useSafeAreaInsets();
    const {simplePokemonList, loadPokemons} = usePokemonPaginated();
    

    console.log(simplePokemonList);
    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style = {style.pokebolaBG}/>

            
            <View style={{
                ...style.globalMargin,
                alignItems:'center'
            }}>
                <FlatList
                data={simplePokemonList}
                keyExtractor={(pokemon) => pokemon.id}
                renderItem={ ({ item }) => (
                    
                    <PokemonCard pokemon={item} />
                    
                )}

                //Header
                ListHeaderComponent={(
                    <Text style={{
                        ...style.title,
                        ...style.globalMargin,
                        top: top+20,
                        marginBottom: top+20,
                        color: 'black',
                    }}>Pókedex
                    </Text>
                )}
    
                showsVerticalScrollIndicator={false}
                //Infinite scroll
                onEndReached={loadPokemons}
                onEndReachedThreshold={0.4}

                numColumns={2}

                ListFooterComponent={(
                <ActivityIndicator 
                    style={{height: 100, alignSelf:'center'}}
                    size={20}
                    color='gray'
                />)}
                />


            </View>
             
            
            
        </>
    )
}


export default HomeScreen;