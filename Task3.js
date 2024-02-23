import {StatusBar} from 'react-native';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from 'twrnc';

export default function App() {
  return (
    <View style={tw` flex-1 justify-center item-center bg-black`}>
      <TouchableOpacity style={tw`bg-teal-500 p-3 rounded-lg`}>
        <Text style={tw`text-white text-center font-bold`}>
          Wellcome to IT-C{' '}
        </Text>
      </TouchableOpacity>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({});
