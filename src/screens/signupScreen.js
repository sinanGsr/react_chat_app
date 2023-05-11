

import React,{useContext, useState} from "react";
import {StyleSheet,View}  from 'react-native';
import { IconButton,Title } from "react-native-paper";

import FormButton from "../components/formButton";
import FormInput from "../components/formInput";
import Loading from "../components/loading";
import { AuthContext } from "../context/authProvider";


export default function SignupScreen({navigation}){

        const [displayName, setDispalyName] = useState('');
        const [email,setEmail] = useState('');
        const [password,setPassword] = useState('');

        const {register, loading} = useContext(AuthContext);
        
        if(loading){
            return <Loading/>
        }

        return(
            <View style = {styles.container}>
                <Title style = {styles.titleText}>lets get Started </Title>
                <FormInput
                labelName= 'DisplayName'
                value = {displayName}
                autoCapitalize='none'
                onChangedText={(userDisplayName) => setDispalyName(userDisplayName)}
                />
                <FormInput
                labelName='Email'
                value={email}
                securetextEntry={false}
                onChangedText={(userEmail) => setEmail(userEmail)}
                />
                <FormInput
                labelName= 'Password'
                value={password}
                securetextEntry={false}
                onChangedText={(userPassword) => setPassword(userPassword)}
                />
                <FormButton
                title='signUp'
                modeValue='contained'
                labelStyle={styles.loginButtonLabel}
                onPress={() => register(displayName,email,password)}
                />
                <IconButton
                icon='keyboard-backspace'
                size = {30}
                style = {styles.navButton}
                iconColor="#5b3a70"
                onPress={() => navigation.goBack()}
                />
            </View>
        );


}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f5f5f5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText:{
        fontSize:24,
        marginBottom:10,
    },
    loginButtonLabel:{
        fontSize:22
    },
    navButtonText:{
        fontSize:18
    },
    navButton:{
        marginTop:10
    }

})