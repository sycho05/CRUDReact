import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import FIREBASE from '../../config/FIREBASE'

export default class DetailKontak extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             kontak: {}
        }
    }
    
    componentDidMount(){
        FIREBASE.database()
        .ref("Kontak/"+ this.props.route.params.id)
        .once('value', (querySnapShot)=>{
            
            let data = querySnapShot.val() ? querySnapShot.val() :{};
            let KontakItem = {...data}
        
        this.setState({
            kontak: KontakItem,
        })

        })
    }

    render() {
        const {kontak}= this.state
        return (
            <View style={styles.pages}>
                <Text>Nama  </Text>
                <Text style={styles.text}> {kontak.nama} </Text>

                <Text>Nomor  </Text>
                <Text style={styles.text}> {kontak.nomor} </Text>

                <Text>Alamat </Text>
                <Text style={styles.text}> {kontak.alamat} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pages:{
        padding:20,
        margin:30,
        backgroundColor:'white'
    },
    text:{
        marginBottom:10,
        fontSize:15,
        fontWeight:'bold'
    }

})