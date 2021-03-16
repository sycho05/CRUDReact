import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Alert} from 'react-native';
import {InputData} from '../../component';
import { faThumbsDown, faThList } from '@fortawesome/free-solid-svg-icons';
import FIREBASE from '../../config/FIREBASE';

export default class TambahKontak extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: '',
      nomor: '',
      alamat: '',
    };
  }

  onChangeText = (namaState, value) => {
    this.setState({
      [namaState]: value,
    });
  };

  onSubmit = () => {
    const kontakReferensi = FIREBASE.database().ref('Kontak')
    const kontak={
        nama: this.state.nama,
        nomor: this.state.nomor,
        alamat: this.state.alamat
    }

    kontakReferensi
        .push(kontak)
        .then((data)=>{
            Alert.alert('Sukses', 'Data tersimpan')
            this.props.navigation.replace('Home')
        })
        .catch((error)=>{
            console.log("Error: ",error)
        })
        
    if(this.state.nama && this.state.nomor && this.state.alamat){
    console.log('Masuk Submit');
    console.log(this.state);
  }else{
      Alert.alert('Erorr','Nama, Nomor, Alamat wajib diisi')
  }
} 

  render() {
    return (
      <View style={styles.pages}>
        <InputData
          label="Nama"
          placeholder="Masukkan Nama"
          onChangeText={this.onChangeText}
          value={this.state.nama}
          namaState="nama">
</InputData>

        <InputData
          label="No Hp"
          placeholder="Masukkan No. Hp"
          onChangeText={this.onChangeText}
          keyboardType='numeric'
          value={this.state.nomor}
          namaState="nomor"></InputData>

        <InputData
          label="Alamat"
          placeholder="Masukkan Alamat"
          isTextArea={true}
          onChangeText={this.onChangeText}
          value={this.state.alamat}
          namaState="alamat" ></InputData>

        <TouchableOpacity style={styles.submit} onPress={() => this.onSubmit()}>
          <Text style={styles.textSumbit}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    padding: 30,
  },
  submit: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  textSumbit: {
    color: 'white',
    textAlign: 'center',
  },
});
