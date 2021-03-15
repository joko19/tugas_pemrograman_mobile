import React from 'react';
import {View, Text} from 'native-base';
import {TouchableOpacity, StyleSheet} from 'react-native';

export default class Tugas3 extends React.Component {
  state = {
    value: null,
    displayValue: '0',
    colorView: true,
    waitingForOperand: false,
    operator: null,
    bts: ' ',
  };

  inputDigit = (digit) => {
    const {displayValue, waitingForOperand} = this.state;

    if (waitingForOperand) {
      this.setState({
        displayValue: String(digit),
        waitingForOperand: false,
      });
    } else {
      this.setState({
        displayValue:
          displayValue === '0' ? String(digit) : displayValue + digit,
      });
    }
  };

  inputDot = () => {
    const {displayValue, waitingForOperand} = this.state;

    if (waitingForOperand) {
      this.setState({
        displayValue: '.',
        waitingForOperand: false,
      });
    } else if (displayValue.indexOf('.') === -1) {
      this.setState({
        displayValue: displayValue + '.',
        waitingForOperand: false,
      });
    }
  };
  
  clearDisplay = () => {
    this.setState({
      displayValue: '0',
      bts: ' ',
    });
  };

  toggleSign = () => {
    const {displayValue} = this.state;

    this.setState({
      displayValue:
        displayValue.charAt(0) === '-'
          ? displayValue.substr(1)
          : '-' + displayValue,
    });
  };

  inputPercent = () => {
    const {displayValue} = this.state;
    const value = parseFloat(displayValue);
    this.setState({
      displayValue: String(value / 100),
    });
  };

  performOperation = (nextOperator) => {
    const {displayValue, operator, value} = this.state;

    const nextValue = parseFloat(displayValue);

    const operations = {
      '/': (prevValue, nextValue) => prevValue / nextValue,
      x: (prevValue, nextValue) => prevValue * nextValue,
      '+': (prevValue, nextValue) => prevValue + nextValue,
      '-': (prevValue, nextValue) => prevValue - nextValue,
      '=': (prevValue, nextValue) => nextValue,
    };

    if (value == null) {
      this.setState({
        value: nextValue,
      });
    } else if (operator) {
      const currentValue = value || 0;
      const computedValue = operations[operator](currentValue, nextValue);

      this.setState({
        value: computedValue,
        displayValue: String(computedValue),
        bts:
          operator === '=' ? ' ' : `${currentValue} ${operator} ${nextValue}`,
      });
    }

    this.setState({
      waitingForOperand: true,
      operator: nextOperator,
    });
  };

  render() {
    const {displayValue} = this.state;
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.top}>
            <Text
              style={
                this.state.colorView ? styles.numberBTS : styles.numberBTSL
              }>
              {this.state.bts}
            </Text>
            <Text style={styles.number}>{displayValue}</Text>
          </View>
        </View>

        <View style={styles.bottom}>
          <View style={styles.row}>
            <Btn text="AC" onPress={this.clearDisplay} />
            <Btn text="±" onPress={this.toggleSign} />
            <Btn text="%" onPress={this.inputPercent} />
            <Btn text="/" onPress={() => this.performOperation('/')} />
          </View>

          <View style={styles.row}>
            <Btn text="7" onPress={() => this.inputDigit(7)} />
            <Btn text="8" onPress={() => this.inputDigit(8)} />
            <Btn text="9" onPress={() => this.inputDigit(9)} />
            <Btn text="x" onPress={() => this.performOperation('x')} />
          </View>
          <View style={styles.row}>
            <Btn text="4" onPress={() => this.inputDigit(4)} />
            <Btn text="5" onPress={() => this.inputDigit(5)} />
            <Btn text="6" onPress={() => this.inputDigit(6)} />
            <Btn text="-" onPress={() => this.performOperation('-')} />
          </View>
          <View style={styles.row}>
            <Btn text="1" onPress={() => this.inputDigit(1)} />
            <Btn text="2" onPress={() => this.inputDigit(2)} />
            <Btn text="3" onPress={() => this.inputDigit(3)} />
            <Btn text="+" onPress={() => this.performOperation('+')} />
          </View>

          <View style={styles.row}>
            <Btn text="0" onPress={() => this.inputDigit(0)} zero />

            <Btn text="." onPress={this.inputDot} />
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.performOperation('=')}>
              <Text
                style={{color: '#fff', fontSize: 36}}
                colorText={this.state.colorView}>
                {'='}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  number: {
    color: '#FFF',
    textAlign: 'right',
    padding: 10,
    fontSize: 36,
    // borderBottomWidth: 0.5,
    // borderColor: "#19153E"
  },
  top: {
    paddingTop: 120,
  },
  bottom: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 0.2,
    borderColor: '#19153E',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    borderRadius: 50,
    margin: 5
  },
  numberBTS: {
    color: '#6191FF',
    textAlign: 'right',
    padding: 10,
    fontSize: 26,
  },
  numberBTSL: {
    color: '#FDFCFC',
    textAlign: 'right',
    padding: 10,
    fontSize: 26,
  },
});

const Btn = ({text, colorText, onPress, zero}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={zero ? stylesBtn.zeroContainer : stylesBtn.container}>
      <Text style={{color: 'white', fontSize: 34}}>{text}</Text>
    </TouchableOpacity>
  );
};

const stylesBtn = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth:1,
    borderRadius: 50,
    borderColor: '#19153E',
    backgroundColor: 'blue',
    margin: 5
  },
  zeroContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderColor: '#19153E',
    backgroundColor: 'blue',
    borderRadius: 50,
    margin: 5
  },
});
