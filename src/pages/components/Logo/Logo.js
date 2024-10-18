import { Image , StyleSheet } from "react-native";

export function Logo(){
    return (
    <Image
        style={styles.logo}
        source = {require('../../../assets/logo/logo.png')}
      />

    );
}

const styles = StyleSheet.create({
  logo: {
    width: 350,
    height: 350,
    position: 'absolute',
    opacity: 0.1,
    alignItems: 'center',
    alignContent: 'center'
  }  
})