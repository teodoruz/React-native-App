import { Text, TextInput, View, StyleSheet, Button } from "react-native";
import React from "react";
import styled from "styled-components";
import Botaodelogin from "../Buttons/Button_log_in/LoginButton";



export default function Input_login() {
    return (
        <View style={styles.container_principal} >
            <View style={styles.container}>
                <View>
                    <Text style={styles.textStyleLogin}>ACESSE</Text>
                </View>

                <View>
                    <Text style={styles.text_login}>Email</Text>
                    <TextInput placeholder="Email" style={styles.input_style}></TextInput>
                </View>

                <View>
                    <Text style={styles.text_login}>Senha</Text>
                    <TextInput placeholder="Senha" style={styles.input_style}></TextInput>
                </View>

                <View>
                    <Botaodelogin />
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#29343D',
        marginTop: 80,
        borderRadius: 12,
        width: 360,
        height: 270,
        borderWidth: 5,
        borderColor: '#2C97E4',
        marginStart: 25

    },
    container_principal: {

    },
    text_login: {
        color: '#fff',
        marginTop: 40


    },
    input_style: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: 300,
        borderRadius: 8,

    },
    textStyleLogin: {
        color: '#2CA5FC',
        fontSize: 24,
        fontWeight: 'bold',
        textShadowColor: '#000',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
        marginTop: 10

    },
    buttonStyle: {

    },




})

