import React, {useState} from 'react';
import { View, Text, Switch} from 'react-native';

function Tugas2() {
  const [darkmode, setDarkmode] = useState(false);
  const toggleSwitch = () => setDarkmode((previousState) => !previousState);

  return (
    <View
      style={{
        backgroundColor: darkmode ? 'blue' : 'white',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        alignContent: 'center',
        alignSelf: 'center',
      }}>
      <Text
        style={{
          color: darkmode ? 'white' : 'black',
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
            TUGAS 2
      </Text>
      <Text
        style={{
          color: darkmode ? 'white' : 'black',
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
            Switch on/off
      </Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={darkmode ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={darkmode}
        style={{alignSelf: 'center'}}
      />
    </View>
  );
}

export default Tugas2;
