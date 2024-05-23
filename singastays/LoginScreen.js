import React, { useState } from 'react';
import { Text, View, TextInput, Button, Alert } from 'react-native';

export default LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Dummy credentials for comparison
    const dummyEmail = 'user@example.com';
    const dummyPassword = 'password';

    if (email === dummyEmail && password === dummyPassword) {
      // Navigate to Profile screen on successful login
      navigation.navigate('ProfileScreen');
    } else {
      Alert.alert('Invalid Credentials', 'Please check your email and password and try again.');
    }
  };

  return (
    <View>
      <Text>Login Account</Text>
      <TextInput
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Sign In" onPress={handleLogin} />
      <Text>Forgot password? Click here</Text>
      <Button title="Login with Gmail" onPress={() => {}} />
      <Button title="Login with Facebook" onPress={() => {}} />
    </View>
  );
};

//export default LoginScreen;