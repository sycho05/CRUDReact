import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faEdit, faTimes} from '@fortawesome/free-solid-svg-icons'

const  CardKontak = ({id, kontakItem, navigation, removeData}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('DetailKontak', {id: id})}>
            <View>
            <Text style={styles.nama}>{kontakItem.nama}</Text>
            <Text style={styles.nomor}>No Hp {kontakItem.nomor}</Text>
            </View>
            <View style={styles.icon}>
                <FontAwesomeIcon icon={faEdit} color={'black'} size={20} 
                onPress={()=>navigation.navigate('UpdateKontak', {id: id})}/>
                <FontAwesomeIcon icon={faTimes} color={'red'} size={20} onPress={
                    ()=> removeData(id)} />
            </View>
        </TouchableOpacity>
    )
}

export default CardKontak

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:15,
        backgroundColor:'white',
        borderRadius:5,
        marginBottom:20,
        elevation:10
    },
    nama:{
        fontSize:20,
        fontWeight:'bold'
    },
    nomor:{
        fontSize:14,
        color:'gray'
    },
    icon:{
        flex:1,
        flexDirection:'row',
        elevation:5,
        justifyContent:'flex-end',
        alignItems:'center'
    }
})
