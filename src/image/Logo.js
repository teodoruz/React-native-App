import { View, Image, StyleSheet } from "react-native";
import React from "react";


export default function Logo(){
    return(
        <View style={styles.containerLogo}>
            <Image 
                source={require('../../img/logobus.png')}
                style={styles.logo}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    logo:{
        width: 80,
        height: 80,
        
        
        
        


    },
    containerLogo:{
        display:'flex',
        

    }
})