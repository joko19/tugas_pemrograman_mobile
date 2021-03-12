import React, {useState} from 'react';
import {StyleSheet, View, Text, Switch} from 'react-native';
import {Thumbnail} from 'native-base';

function Aboutme() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Developed By :</Text>
      <Text style={styles.text}>Joko Slamet | 18050974030</Text>
      <Text style={styles.text}>Pemrograman Mobile</Text>
      <Text style={styles.text}>S1 Pendidikan Teknologi Informasi</Text>
    </View>
  );
}

export default Aboutme;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gainsboro',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    alignContent: 'center',
    alignSelf: 'center',
  },
  title: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
});
