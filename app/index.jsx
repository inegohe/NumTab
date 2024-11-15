import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { StatusBar } from "expo-status-bar";

import { useGlobalContext } from "../context/GlobalProvider";
import ToggleSwitchBtn from "../components/ToggleSwitchBtn";
import ButtonComponent from "../components/ButtonComponent";

const App = () => {
  const { darkMode, setDarkMode, value, setValue, expression, setExpression } =
    useGlobalContext();

  return (
    <SafeAreaView
      className={`${darkMode ? "bg-background-dark" : "bg-background-light"} 
            h-full`}
    >
      <View className="justify-end h-full items-center">
        <View className="mt-2 mb-2 absolute z-10 top-3">
          <ToggleSwitchBtn value={darkMode} onChange={setDarkMode} />
        </View>

        <View className="flex-col w-full h-[30vh] justify-end items-end mr-4">
          <Text
            className={`${
              darkMode ? "text-white" : "text-black"
            } font-wLight text-3xl opacity-40`}
          >
            {expression}
          </Text>
          <Text
            className={`${
              darkMode ? "text-white" : "text-black"
            } font-wLight text-7xl mt-2`}
          >
            {value}
          </Text>
        </View>

        <View className='flex-row justify-evenly w-full pb-5 pt-3'>
          <ButtonComponent char={'C'} style='mid'/>
          <ButtonComponent char={'+/-'} style='mid'/>
          <ButtonComponent char={'%'} style='mid'/>
          <ButtonComponent char={'\u00f7'} style='hi'/>
        </View>
        
        <View className='flex-row justify-evenly w-full pb-5'>
          <ButtonComponent char={'7'} style='lo'/>
          <ButtonComponent char={'8'} style='lo'/>
          <ButtonComponent char={'9'} style='lo'/>
          <ButtonComponent char={'\u00d7'} style='hi'/>
        </View>
        
        <View className='flex-row justify-evenly w-full pb-5'>
          <ButtonComponent char={'4'} style='lo'/>
          <ButtonComponent char={'5'} style='lo'/>
          <ButtonComponent char={'6'} style='lo'/>
          <ButtonComponent char={'-'} style='hi'/>
        </View>
        
        <View className='flex-row justify-evenly w-full pb-5'>
          <ButtonComponent char={'1'} style='lo'/>
          <ButtonComponent char={'2'} style='lo'/>
          <ButtonComponent char={'3'} style='lo'/>
          <ButtonComponent char={'+'} style='hi'/>
        </View>
        
        <View className='flex-row justify-evenly w-full pb-5'>
          <ButtonComponent char={'.'} style='lo'/>
          <ButtonComponent char={'0'} style='lo'/>
          <ButtonComponent char={'del'} style='lo'/>
          <ButtonComponent char={'='} style='hi'/>
        </View>

      </View>

      <StatusBar backgroundColor="#17171c" style="light" />
    </SafeAreaView>
  );
};

export default App;
