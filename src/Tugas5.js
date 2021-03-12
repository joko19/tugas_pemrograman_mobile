import React, {useState} from 'react';
import {
  View,
  Text,
  Form,
  Item,
  Input,
  Label,
  Textarea,
  Picker,
} from 'native-base';
import {StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker'


function Tugas5() {
  const [city, setCity] = useState('');
  return (
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
        <Item floatingLabel>
          <Label>Username</Label>
          <Input />
        </Item>
        <Item>
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
        <DatePicker
      date={date}
      onDateChange={setDate}
    />
      </Form>
    </View>
  );
}

export default Tugas5;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'gainsboro',
  },
});
