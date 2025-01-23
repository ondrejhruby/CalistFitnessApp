// import React, { useState, useEffect } from "react";
// import { View, Text, Button, TextInput } from "react-native";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// import { auth } from './firebaseConfig'; // Import 'auth' from your firebaseConfig


// // const auth = getAuth(app);

// function App() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [user, setUser] = useState(null);

//   // Sign up with email and password
//   const handleSignUp = () => {
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         setUser(user);
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.error(errorCode, errorMessage);
//       });
//   };

//   // Sign in with email and password
//   const handleSignIn = () => {
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         setUser(user);
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.error(errorCode, errorMessage);
//       });
//   };

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser(user);
//       } else {
//         setUser(null);
//       }
//     });
//   }, []);

//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       {user ? (
//         <View>
//           <Text>Welcome, {user.email}</Text>
//           <Button title="Sign Out" onPress={() => auth.signOut()} />
//         </View>
//       ) : (
//         <View>
//           <TextInput
//             placeholder="Email"
//             value={email}
//             onChangeText={(text) => setEmail(text)}
//           />
//           <TextInput
//             placeholder="Password"
//             value={password}
//             onChangeText={(text) => setPassword(text)}
//             secureTextEntry
//           />
//           <Button title="Sign Up" onPress={handleSignUp} />
//           <Button title="Sign In" onPress={handleSignIn} />
//         </View>
//       )}
//     </View>
//   );
// }

// export default App;
