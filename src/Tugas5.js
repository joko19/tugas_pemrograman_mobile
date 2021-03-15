import React, {useState} from 'react';
import {
  View,
  Text,
  Form,
  Item,
  Input,
  Label,
  Textarea,
  Button,
} from 'native-base';
import {StyleSheet, Modal, Pressable, ScrollView} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';
import RadioForm from 'react-native-simple-radio-button';

function Tugas5() {
  const [city, setCity] = useState('');
  const [date, setDate] = useState(new Date());
  const radio_props = [
    {label: 'Laki Laki', value: 0},
    {label: 'Perempuan', value: 1},
  ];
  const [gender, setGender] = useState('');
  const [modalVisible, setModal] = useState(false);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text
          style={{
            textAlign: 'center',
            paddingTop: 10,
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Tugas 5
        </Text>
        <Text style={{textAlign: 'center', fontSize: 14, fontStyle: 'italic'}}>
          Formulir
        </Text>
        <Form>
          <Item
            floatingLabel
            style={{
              margin: 25,
            }}>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item
            style={{
              margin: 25,
            }}>
            <Textarea
              rowSpan={5}
              bordered
              placeholder="Alamat"
              style={{width: 240}}
            />
          </Item>
          <DropDownPicker
            items={[
              {
                label: 'Sidoarjo',
                value: 'Sidoarjo',
              },
              {
                label: 'Surabaya',
                value: 'Surabaya',
              },
              {
                label: 'Mojokerto',
                value: 'Mojokerto',
              },
            ]}
            defaultValue={city}
            containerStyle={{height: 40}}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={(item) => setCity(item.value)}
          />
          <Item style={{margin: 25}}>
            <DatePicker date={date} onDateChange={setDate} />
          </Item>

          <RadioForm
            radio_props={radio_props}
            initial={0}
            onPress={(value) => {
              setGender(value);
            }}
          />
          <Button style={{alignSelf: 'center'}} onPress={() => setModal(true)}>
            <Text>Submit</Text>
          </Button>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Done</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModal(!modalVisible)}>
                  <Text style={styles.textStyle}>OK</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </Form>
      </View>
    </ScrollView>
  );
}

export default Tugas5;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'gainsboro',
    padding: 10
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
