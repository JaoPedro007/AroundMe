import { View , StyleSheet } from "react-native";
import { Logo } from "../components/logo";

export function Home(){
  return (
    <View style={styles.container}>
      <Logo/>
    </View>
  )
  
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      backgroundColor: 'white'
    }
})