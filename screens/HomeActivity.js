import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, KeyboardAvoidingView, TextInput } from 'react-native';
import Colors from '../components/colors';

const image = '../assets/icons/QuestionMark.png'

export default class HomeActivity extends React.Component {

    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: Colors.HEADER_COLOR,
        },

        headerTintColor: Colors.WHITE,

        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    onButtonPress = () => {
        this.props.navigation.navigate('Main')
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.container}>
                    <Image source={require(image)} style={styles.img} />
                    <TextInput style={styles.input}
                        autoCapitalize="none"
                        onSubmitEditing={() => this.passwordInput.focus()}
                        autoCorrect={false}
                        keyboardType='email-address'
                        returnKeyType="next"
                        placeholder='Email'
                        placeholderTextColor='rgba(225,225,225,0.7)' />

                    <TextInput style={styles.input}
                        returnKeyType="go"
                        ref={(input) => this.passwordInput = input}
                        placeholder='Password'
                        placeholderTextColor='rgba(225,225,225,0.7)'
                        secureTextEntry />

                    <TouchableOpacity style={styles.buttonContainer}
                        onPress={this.onButtonPress}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        ); F
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BACKGROUND_COLOR,
        padding: 20,
        justifyContent: 'space-between',
    },
    input: {
        height: 40,
        backgroundColor: Colors.INPUT_BACKGROUND,
        marginBottom: 10,
        padding: 10,
        color: Colors.WHITE
    },
    buttonContainer: {
        backgroundColor: Colors.BUTTON_COLOR,
        paddingVertical: 15
    },
    buttonText: {
        color: Colors.WHITE,
        textAlign: 'center',
        fontWeight: '700'
    },
    img: {
        flex: 1,
        justifyContent: 'center',
        width: '80%',
        height: '80%'
    }

});

