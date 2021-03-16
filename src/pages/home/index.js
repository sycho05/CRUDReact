import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Alert } from 'react-native'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faPlus, faMapPin, faMapMarked} from '@fortawesome/free-solid-svg-icons'
import FIREBASE from '../../config/FIREBASE'
import CardKontak from '../../component/cardkontak'

export default class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             kontaks:{},
             kontaksKey:[]
        }
    }
    
    
    componentDidMount(){
        this.ambilData()
    }

    ambilData = ()=>{
            FIREBASE.database()
            .ref("Kontak")
            .once('value', (querySnapShot)=>{
                
                let data = querySnapShot.val() ? querySnapShot.val() :{};
                let KontakItem = {...data}
            
            this.setState({
                kontaks: KontakItem,
                kontaksKey: Object.keys(KontakItem)
            })
    
            })
    }
    


    removeData =(id)=>{
        Alert.alert(
            "Indo",
            "Anda Yakin Menghapus Data Kontak?",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () =>  {
                  FIREBASE.database()
                  .ref('Kontak/'+id)
                  .remove()
                  this.ambilData()
                    Alert.alert('Hapus', 'Hapus Sukses')
              }}
            ],
            { cancelable: false }
          );
    }

    render() {
        const{kontaks, kontaksKey} = this.state
        return (
            <View style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.title}>Daftar Kontak</Text>
                    <View style={styles.garis}></View>
                </View>

                <View style={styles.listKontak}>
                    {kontaksKey.length > 0 ? (
                        kontaksKey.map((key)=>(
                            <CardKontak key={key} kontakItem={kontaks[key]} id={key}
                            {...this.props} removeData={this.removeData}></CardKontak>
                    ))
                    ): (
                        <Text>Daftar Kosong</Text>
                    )}
                    
                </View>
                <View style={styles.wrapperButton}>
                <TouchableOpacity 
                style={styles.button}
                onPress={()=>this.props.navigation.navigate('MapsKontak')}>
                    <FontAwesomeIcon icon={faMapMarked} size={20} color={'white'}/>
                </TouchableOpacity>
                </View>
                <View style={styles.wrapperButton2}>
                <TouchableOpacity 
                style={styles.button2}
                onPress={()=>this.props.navigation.navigate('TambahKontak')}>
                    <FontAwesomeIcon icon={faPlus} size={20} color={'white'}/>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    page:{
        flex:1,
    },
    header:{
        paddingHorizontal:30,
        paddingTop:30
    },
    title:{
        fontSize:20,
        fontWeight:'bold'
    },
    garis:{
        borderWidth:1,
        marginTop:10
    },
    listKontak:{
        paddingHorizontal:30,
        marginTop:10
    },
    wrapperButton:{
        flex:1,
        position:'absolute',
        bottom:0,
        right:0,
        margin:30
    },
    button:{
        padding:20,
        backgroundColor:'skyblue',
        borderRadius:50,
    },
    wrapperButton2:{
        flex:1,
        position:'absolute',
        bottom:0,
        right:240,
        margin:30
    },
    button2:{
        padding:20,
        backgroundColor:'skyblue',
        borderRadius:50,
    }
})
