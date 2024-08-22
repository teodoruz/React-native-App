import React from "react";
import { View, StyleSheet } from "react-native";
import Logo from "../../image/Logo";
import Title from "../../tittle";
import Input_login from "../inputs/inputs_login";

export default function TelaDeLogin() {
    return (
      <View>
            <View style={styles.logo_login}>
              <Logo/>
              <Title/>
            </View>
  
            <View>
              <Input_login/>
            </View>
      </View>
    )
}
const styles = StyleSheet.create({
    logo_login: {
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      marginTop:90,
      
    },
  });
  