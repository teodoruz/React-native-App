import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Title() {
    return (
        <View style={styles.titleDesign}>
            <Text style={styles.textTitle}>Tech Ride</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    textTitle: {
        fontSize: 44,
        color: "#2C95E1",
        margin: 10,
        textShadowOffset: { width: 2, height: 2 },
        textShadowColor: '#000',
        textShadowRadius: 6

    },
})