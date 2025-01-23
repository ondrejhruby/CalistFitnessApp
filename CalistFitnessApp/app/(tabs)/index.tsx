import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../../firebaseConfig'; // The path to your firebaseConfig

export default function HomeScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<User | null>(null); // Allow both `null` and `User` type

  // Sign up with email and password
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user); // Set the user object
      })
      .catch((error) => {
        console.error(error.code, error.message);
      });
  };

  // Sign in with email and password
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user); // Set the user object
      })
      .catch((error) => {
        console.error(error.code, error.message);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update the state with the current user or null
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  return (
    <View style={styles.container}>
      {user ? (
        <View>
          <Text style={styles.text}>Welcome, {user.email}</Text>
          <Button title="Sign Out" onPress={() => auth.signOut()} />
        </View>
      ) : (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
          <Button title="Sign Up" onPress={handleSignUp} />
          <Button title="Sign In" onPress={handleSignIn} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 8,
    borderRadius: 4,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
});
