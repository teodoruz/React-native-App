import React from "react";
import { View, Text, StyleSheet,TextInput, Image, Button, Alert } from "react-native";
import Logo from "../../image/Logo";
import Title from "../../tittle";

export default function TelaDeRegistro(){
    return(
    <View>
        <View style={styles.principalContainer}>
            <View style={styles.logoregistro}>
                <View><Logo/></View>
                <View><Title/></View>
            </View>
        </View>
        
            <View style={styles.containerInput}>
                <View style={styles.inputposition}>
                    <View>
                        <Text style={styles.text_input_style}>Nome</Text>
                        <TextInput style={styles.input_name_Style} placeholder="Nome"></TextInput>
                        <Text style={styles.text_input_style}>Numero</Text>
                        <TextInput style={styles.input_number_style} placeholder="Numero"></TextInput>
                        <Text style={styles.text_input_style}>Email</Text>
                        <TextInput style={styles.input_email_style} placeholder="Email"></TextInput>
                        <Text style={styles.text_input_style}>Senha</Text>
                        <TextInput style={styles.input_password_style} placeholder="Senha"></TextInput>
                        <View>
                            <Button title="Cadastrar"></Button>
                        </View>
                        <View>
                            <Button title="Voltar"></Button>
                        </View>
                    </View>
                </View>
            </View>
            
    </View>
    
    )
}
const styles = StyleSheet.create({
    principalContainer:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:109
        
        
    },
    logoregistro:{
        flexDirection:'row',
        alignItems:'center',
    },
    inputposition:{
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor: '#29343D',
        marginEnd: 70,
        marginStart: 25,
        borderRadius:12,
        height:320,
        width:360,
        borderWidth:5,
        borderColor:'#2C97E4'

        
    },
    containerInput:{
        marginTop:50,
        
    },
    input_name_Style:{
        backgroundColor:'#fff',
        width:230,
        marginTop:5,
        borderRadius:10,
        width:300
        
    },
    input_number_style:{
        backgroundColor:'#fff',
        width:230,
        marginTop:10,
        borderRadius:10,
        width:300

    },
    input_email_style:{
        backgroundColor:'#fff',
        marginTop: 10,
        borderRadius:10

    },
    input_password_style:{
        backgroundColor:'#fff',
        marginTop:10,
        borderRadius:10,
        width:300

    },
    text_title_imputs:{
        marginTop:10
    },

    text_input_style:{
        color:'#fff',
        marginTop:10
    },
    button_view:{
        
    }
})
    
        
        
        
