import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDebounceValue } from '../hooks/useDebounceValue';

interface Props{
    onDebounce: (value:string) => void;
}



export const SearchInput = ({onDebounce}:Props) => {

    const [textValue, setTextValue] = useState('');

    const debuncedValue = useDebounceValue(textValue, 500);
    
    useEffect(() => {
        console.log({debuncedValue});
        onDebounce(debuncedValue);

    }, [debuncedValue])
    
    return (
        <View style={styles.container}>
            <View style={styles.textBackground}>
                <TextInput placeholder='Buscar pokémon'
                    style={styles.textInput}
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholderTextColor='gray'
                    value = {textValue}
                    onChangeText={setTextValue}
                    >

                </TextInput>
                <Icon
                    name="search-outline"
                    color='gray'
                    size={30}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{

    },
    textBackground:{
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent:'center',
        alignItems: 'center',
        flexDirection:'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },
    textInput:{
        flex: 1,
        fontSize:18,
        color:'black'
        //textAlign:'center',
    }
})