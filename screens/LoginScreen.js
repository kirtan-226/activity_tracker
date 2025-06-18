// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('Dashboard');
    } catch (err) {
      alert(err.message);
    }
  };

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.navigate('Dashboard');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <View>
      <Text>Email:</Text>
      <TextInput onChangeText={setEmail} value={email} />
      <Text>Password:</Text>
      <TextInput secureTextEntry onChangeText={setPassword} value={password} />
      <Button title="Login" onPress={login} />
      <Button title="Register" onPress={register} />
    </View>
  );
}
