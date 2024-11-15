import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useGlobalContext } from "../context/GlobalProvider";

const ButtonComponent = ({ char, style }) => {
    const { darkMode, setValue, value, expression, setExpression, calculation, setCalculation } = useGlobalContext();

    const themeColor = {
        high: darkMode? '#4b5efc' : '4b5efc',
        medium: darkMode? '#4e505f' : '#d2d3da',
        low: darkMode? '#2e2f38' : '#ffffff',
    };

    const handlePress = ( char ) => {
      try {
        switch (char) {
          case '=':
            setValue(eval(calculation));
            setExpression('0');
            setCalculation('');
            break;
          case 'C':
            setExpression('0');
            if (expression == '0'){
               setValue('');
              setCalculation('');
              }
            break;
          case 'del':
            if (expression == '0') break;
            setExpression(expression.slice(0,-1));
            break;
          case '\u00f7':
            if (value !== '0' || value !== ''){
              setExpression(value + '\u00f7');
              setCalculation(calculation + value + '/' );
            } else {
              setCalculation(calculation + '/')
              setExpression(expression + char);
            }
            break;
          case '+/-':
            
            break;
          case '\u00d7':
            if (value !== '0' || value !== ''){
              setExpression(value + '\u00d7');
              setCalculation(calculation + value + '*' );
            } else {
              setCalculation(calculation + '*')
              setExpression(expression + char);
            }
            break;
          default:
            if ( (char === '+' || char === '-') && (value !== '0' || value !== '')){
              setExpression(value + char);
              setCalculation(calculation + value + char );
              setValue('');
              break;
            };
            if( expression === '0') setExpression(char);
            else setExpression(expression + char);
            setCalculation(calculation + char);
            break;
        }
      } catch (error) {
        console.log(calculation,error);
        setValue('');
        setExpression('0');
        setCalculation('0');
      }
    }

  return (
    <TouchableOpacity
    onPress={() => handlePress(char)}
    >
      <View
        className="w-[72px] h-[72px] rounded-[20px] justify-center items-center"
        style={{
          backgroundColor: 
          style === 'hi' ? themeColor.high : 
          style === 'mid'? themeColor.medium : 
          style === 'lo'? themeColor.low : ''
        }}
      >
        <Text className={`${darkMode || style === 'hi' ? 'text-white':'text-black'} text-3xl font-wRegular`}>{char}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
