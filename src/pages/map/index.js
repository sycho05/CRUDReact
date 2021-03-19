import React, { Component } from 'react'
import { Text, View, StyleSheet,Linking } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Callout } from 'react-native-maps';
import { Marker } from 'react-native-maps';


export default class MapsKontak extends Component {
    render() {
        return (
            <View style={styles.container}>
            <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles.map}
              region={{
                latitude: 51.5079145,
                longitude: -0.0899163,
                latitudeDelta: 0.02,
                longitudeDelta: 0.04
                
              }}
            >

            <MapView.Marker
                onPress={() => Linking.openURL('google.navigation:q=-7.4192242+109.2198008')}
                coordinate={{
                    latitude: 51.4999969,
                    longitude: -0.109278,}}
                title="Norman Disini"
                description="217 Waterloo Rd, South Bank, London SE1 8XH, Inggris Raya"
                    />  
            <MapView.Marker
               onPress={() => Linking.openURL('google.navigation:q=-7.427928, 109.277892')}
                coordinate={{
                    latitude: 51.4998687,
                    longitude: -0.0951529,}}
                title="Rizal Disini"
                description="7-14 Great Dover St, London SE1 4YR, Inggris Raya"
                    />
            </MapView>
            
          </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: '100%',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });
   
