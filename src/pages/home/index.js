import { View , StyleSheet , Alert} from "react-native";
import { Logo } from "../components/Logo/Logo";
import { ItemList } from "../components/ItemList/ItemList";


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
      backgroundColor: 'white',
    }
})

