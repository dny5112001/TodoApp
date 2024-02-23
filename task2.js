// import React, {useState} from 'react';
// import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

// const Task2 = () => {
//   const [name, setName] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [age, setAge] = useState('');
//   const [email, setEmail] = useState('');

//   return (
//     <LinearGradient
//       colors={['#4c669f', '#3b5998', '#192f6a']}
//       style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Mobile"
//         onChangeText={setMobile}
//         keyboardType="numeric"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Age"
//         onChangeText={setAge}
//         keyboardType="numeric"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         onChangeText={setEmail}
//         keyboardType="email-address"
//       />
//       <Button
//         title="Submit"
//         onPress={() =>
//           alert(
//             `Your name is ${name}, your mobile number is ${mobile}, Your age is ${age} and email id is ${email}`,
//           )
//         }
//       />
//     </LinearGradient>
//   );
// };

// export default Task2;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//     width: '100%',
//     backgroundColor: 'white',
//   },
// });

import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import tw from 'twrnc';

const InputTextComponent = () => {
  const [name, setName] = useState('');
  const [roll, setRoll] = useState('');

  return (
    <View style={tw`p-4 android:pt-2 bg-white dark:bg-black`}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={text => setName(text)}
        placeholder="Enter Your Name"
      />
      <TextInput
        style={styles.input}
        value={roll}
        onChangeText={text => setRoll(text)}
        placeholder="Enter Your Roll No.: "
      />
      <Text style={tw`text-md text-blue-500 dark:text-white`}>
        Entered name: {name}
      </Text>
      <Text style={styles.text}>Entered Roll No.: {roll}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Light gray background color
  },
  input: {
    height: 40,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'white', // White background color for text input
    borderRadius: 5,
  },
  text: {
    textAlign: 'left',
    fontSize: 15,
    marginTop: 10,
  },
});

export default InputTextComponent;
