import { View, Text } from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'
import React from 'react'

const ToggleSwitchBtn = ({ value, onChange }) => {
  return (
    <View>
      <ToggleSwitch
      isOn={value}
      onColor={'#2e2f38'}
      offColor={'#ffffff'}
      thumbOnStyle={{
        backgroundColor: '#4e505f'
      }}
      thumbOffStyle={{
        backgroundColor: '#d2d3da'
      }}
      onToggle={ isOn => onChange(!value) }
      />
    </View>
  )
}

export default ToggleSwitchBtn