import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
  });
  const {firstName, lastName, address, phoneNumber} = registerData;

  const handleChangeState = (field, value) => {
    setRegisterData(
      prev =>
        (prev = {
          ...prev,
          [field]: value,
        }),
    );
  };

  const handleRegister = () => {
    console.log('this is first name', firstName);
    console.log('this is last name', lastName);
    console.log('this is address', address);
    console.log('this is phone number', phoneNumber);
  };

  return (
    <SafeAreaView style={styles.pages}>
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>

        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={text => handleChangeState('firstName', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={text => handleChangeState('lastName', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={text => handleChangeState('address', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={text => handleChangeState('phoneNumber', text)}
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pages: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  title: {
    textAlign: 'center',
    paddingVertical: 20,
    fontSize: 25,
    fontWeight: '600',
  },
  input: {
    width: '100%',
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: 'grey',
    padding: 10,
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: 'orange',
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
});

export default App;
