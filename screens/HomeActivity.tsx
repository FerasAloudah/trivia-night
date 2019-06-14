import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { Input } from 'native-base';

export default class HomeActivity extends React.Component {

    state = {
        email: "",
        password: "",

    }

    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#303F9F',
        },

        headerTintColor: '#303F9F',

        headerTitleStyle: {
            color: '#FFFFFF',
            fontWeight: 'bold',
        },
    };

    render() {
        return (
            <View style={styles.container}>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3F51B5',
        alignItems: 'center',
    },
    
});

