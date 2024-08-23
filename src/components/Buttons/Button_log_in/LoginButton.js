import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import React from "react";
import TelaDeRegistro from "../../registerScreen/telacadastro";
import { useNavigation } from '@react-navigation/native';


export default function BotaodeLogin() {
    const navigation = useNavigation();
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.buttonSpace}>
                    <TouchableHighlight style={styles.buttomloginStyle}>
                        <View style={styles.textPosition}>
                            <Text style={styles.textStyleButton}>Log-in</Text>
                        </View>
                    </TouchableHighlight>
                </View>

                <View>
                    <TouchableHighlight onPress={() => navigation.navigate('registro')} style={styles.buttomloginStyle}>
                        <View style={styles.textPosition}>
                            <Text style={styles.textStyleButton}>Cadastro</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 28
    },
    buttonSpace: {
        marginEnd: 70
    },
    buttomloginStyle: {
        backgroundColor: '#00CDC0',
        width: 120,
        height: 35,
        borderRadius: 15,

    },
    textStyleButton: {
        color: '#484848',
        fontWeight: 'bold',
        fontSize: 17,
    },
    textPosition: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 5
    }
})

