import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, StyleSheet, FlatList, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { style } from '../theme/appTheme';
import { SearchInput } from '../compoents/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { PokemonCard } from '../compoents/PokemonCard';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';


export const SearchScreen = () => {
    const {top} = useSafeAreaInsets();
    const {isFetching, simplePokemonList} = usePokemonSearch();

    const [term, setTerm] = useState('Pika');

    const [pokemonFiltred, setpokemonFiltred] = useState<SimplePokemon[]>([])
    

    useEffect(() => {
        if (term.length === 0){
            return setpokemonFiltred([]);
        }
        if(isNaN(Number(term))){
         setpokemonFiltred(
            simplePokemonList.filter(poke => poke.name.toLocaleLowerCase().includes(term.toLowerCase()))
            
        );   
        }
        else{
            setpokemonFiltred(
                simplePokemonList.filter(poke => poke.id.includes(term) )
            );  
        }
        
        
    }, [term])

    if(isFetching){
        console.log(simplePokemonList);
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator
                    size={50}
                    color= 'gray'
                />
                <Text style={{color:'black'}}>Cargando...</Text>
            </View>
        );
        
        
    }

    

    return (
        <View style={{
            flex:1,
            marginTop: top+10,
            marginHorizontal: 20,
        }}>
            <SearchInput
                onDebounce={(value) => setTerm(value)}
            />

            {/*FlatList  */}
            <FlatList
                data={ pokemonFiltred }
                keyExtractor={ (pokemon) => pokemon.id }
                showsVerticalScrollIndicator={ false }
                numColumns={ 2 }

                    // Header
                    ListHeaderComponent={(
                        <Text style={{
                            ...style.title,
                            ...style.globalMargin,
                            //paddingBottom: 10,
                            //marginTop:  top + 10
                        }}>{term}</Text>
                    )}

                    renderItem={ ({ item }) => ( <PokemonCard pokemon={ item } /> )}
                />
            {/*FlatList ends */}
            
        </View>
    )
    
}

const styles = StyleSheet.create({
    loadingContainer:{
        flex:1,
        //backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    }
})
