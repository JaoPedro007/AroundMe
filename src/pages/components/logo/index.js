import { Image } from "react-native";

export function Logo(){
    return (
    <Image
        style={{
        width: 350,
        height: 350}}
        source = {require('../../../assets/logo/logo.png')}
      />

    )
}