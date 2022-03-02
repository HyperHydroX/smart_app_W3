import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import {
  EdgeInsetsPropType,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import { calculator } from './style/style'
import { numberToRoman } from './utils/romanCalculator'

export default function App() {
  const [arab, setArab] = useState<number>()
  const [roman, setRoman] = useState<string>()
  const [romanBreakdown, setRomanBreakdown] = useState<string>()

  // useEffect(() => {})

  const handleArabTextinput = (input: string) => {
    setArab(parseInt(input))
    setRoman(numberToRoman(parseInt(input)))
  }

  return (
    <SafeAreaView style={calculator.container}>
      <StatusBar style="auto" />
      <Text style={calculator.title}>Roman number converter</Text>
      <TextInput
        placeholder={'eg. 798'}
        style={calculator.input}
        onChangeText={handleArabTextinput}
        keyboardType="numeric"
        value={arab?.toString()}
      ></TextInput>
      <TextInput
        style={calculator.input}
        onChangeText={(str) => setRoman(str)}
      ></TextInput>
      <FlatList data={setRoman}></FlatList>
      <Text style={calculator.detail}>In detail</Text>
      <Text></Text>
    </SafeAreaView>
  )
}
