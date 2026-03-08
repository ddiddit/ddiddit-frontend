// import "./global.css"

// import { NewAppScreen } from '@react-native/new-app-screen';
// import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
// import {
//   SafeAreaProvider,
//   useSafeAreaInsets,
// } from 'react-native-safe-area-context';

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <SafeAreaProvider>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <AppContent />
//     </SafeAreaProvider>
//   );
// }

// function AppContent() {
//   const safeAreaInsets = useSafeAreaInsets();

//   return (
//     <View style={styles.container}>
//       <NewAppScreen
//         templateFileName="App.tsx"
//         safeAreaInsets={safeAreaInsets}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;
// import './global.css';
// import { Text, View } from 'react-native';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';

// export default function App() {
//   return (
//     <GestureHandlerRootView>
//       <View className="flex-1 items-center justify-center bg-white">
//         <Text className="text-xl font-bold text-blue-500">
//           Welcome to Nativewind!
//         </Text>
//       </View>
//     </GestureHandlerRootView>
//   );
// }

import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  AppleButton,
  appleAuth,
} from '@invertase/react-native-apple-authentication';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
async function handleAppleLogin() {
  try {
    const response = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
    });

    const { identityToken, user, email, fullName } = response;

    if (!identityToken) {
      throw new Error('No identity token returned');
    }

    console.log('User:', user);
    console.log('Email:', email);
    console.log('Full Name:', fullName);
    console.log('Token:', identityToken);
  } catch (error) {
    console.log('Apple login error:', error);
  }
}
export default function LoginScreen() {
  return (
    <GestureHandlerRootView>

      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <AppleButton
          buttonStyle={AppleButton.Style.BLACK}
          buttonType={AppleButton.Type.SIGN_IN}
          style={{ width: 200, height: 45 }}
          onPress={handleAppleLogin}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
