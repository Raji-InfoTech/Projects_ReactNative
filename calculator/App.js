import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [state, setstate] = useState("");
  const [state1, setstate1] = useState("");


  const touchable = (text) => {
    
    console.log(text)
    if(text == '='){
      return calculation()
    }
    setstate(state + text);

  }
  const calculation = () => {

    setstate1(eval(state))
  }
  const operte = (text) => {
    console.log(text)
 
    if(text == "ac"){
      setstate("");
      setstate1(0);
      return;
    }
    if(text == "DEL"){
      setstate(state.toString().substring(0,state.length-1));
      return;
    }
    let name = ["DEL","AC","+","-","*","/"]
    if(name.includes(state.toString().split("").pop()))
    return;

    setstate (state + text)
  }

  return (
    <View style={styles.container}>
      <View style ={styles.result}>
        <Text style ={styles.textstyle}>{state1}</Text>
      </View>
      <View style ={styles.calculation}>
      <Text style ={styles.textcalstyle}>{state}</Text>
      </View>
      <View style ={styles.buttons}>

      <View style ={styles.numbers}>
      <View style ={styles.row}>
        <TouchableOpacity onPress ={()=> touchable('1')}>
          <Text style ={styles.number}>1</Text>

        </TouchableOpacity>
        <TouchableOpacity  onPress ={()=> touchable('2')}>
          <Text style ={styles.number}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress ={()=> touchable('3')}>
          <Text style ={styles.number}>3</Text>
        </TouchableOpacity>
      </View>
      <View style ={styles.row}>
        <TouchableOpacity  onPress ={()=> touchable('4')}>
          <Text style ={styles.number}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress ={()=> touchable('5')}>
          <Text style ={styles.number}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress ={()=> touchable('6')}>
          <Text style ={styles.number}>6</Text>
        </TouchableOpacity>
      </View>
      <View style ={styles.row}>
        <TouchableOpacity  onPress ={()=> touchable('7')}>
          <Text style ={styles.number}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress ={()=> touchable('8')}>
          <Text style ={styles.number}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress ={()=> touchable('9')}>
          <Text style ={styles.number}>9</Text>
        </TouchableOpacity>
      </View>
      <View style ={styles.row}>
        <TouchableOpacity  onPress ={()=> touchable('.')}>
          <Text style ={styles.number}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress ={()=> touchable('0')}>
          <Text style ={styles.number}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress ={()=> touchable('=')}>
          <Text style ={styles.number}>=</Text>
        </TouchableOpacity>
      </View>
    
      </View>
      <View style ={styles.operations}>
      <View style ={styles.column}>
        <TouchableOpacity onPress ={()=> operte('DEL')}>
          <Text style ={styles.number1}>DEL</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress ={()=> operte('ac')}>
          <Text style ={styles.number1}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress ={()=> operte('+')}>
          <Text style ={styles.number1}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress ={()=> operte('-')}>
          <Text style ={styles.number1}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress ={()=> operte('*')}>
          <Text style ={styles.number1}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress ={()=> operte('/')}>
          <Text style ={styles.number1}>/</Text>
        </TouchableOpacity>
      </View>
      </View>

      </View>


   
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  row:{
    flexDirection:'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  column: {
    flexDirection:'column',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  number:
  {
    fontSize: 30,
    color: 'black',
    fontWeight: 'normal',
  },
  number1:
  {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  result: {
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end',
    
  },
  calculation:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'lightgray',
  },
  buttons: {
    flex: 4,
    flexDirection: 'row',

  },
  textcalstyle:{
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
  numbers: {
    flex: 3,
    backgroundColor: 'white',
  },
  operations: {
    flex: 1,
    backgroundColor: 'gray',
  },
  textstyle:{
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black'
  }



  

  
});
