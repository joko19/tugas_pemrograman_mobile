import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';

function Menu({navigation}) {
  const toDetail = (params) => {
    navigation.navigate(params);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={() => toDetail('Tugas2')}>
        <Text style={styles.title}>Tugas 2</Text>
        <Text style={styles.desc}>on/off</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => toDetail('Tugas3')}>
        <Text style={styles.title}>Tugas 3</Text>
        <Text style={styles.desc}>Kalkulator</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => toDetail('Tugas5')}>
        <Text style={styles.title}>Tugas 5</Text>
        <Text style={styles.desc}>Formulir</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => toDetail('Aboutme')}>
        <Text style={styles.title}>About me</Text>
        <Text style={styles.desc}>Joko Slamet</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Menu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#09F',
    height: '100%',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: 'gainsboro',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: 150,
  },
  title: {
    fontWeight: 'bold',
  },
  desc: {
    fontStyle: 'italic',
  },
});
