
import { StyleSheet, Text, View } from 'react-native';
import { UserProvider } from './context/UserContext';
import { Router } from './lib/Router';

export default function App() {
  return (
    <UserProvider>
        <Router />
    </UserProvider >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
