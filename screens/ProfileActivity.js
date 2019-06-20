import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '../components/colors';
import Strings from '../components/strings';
import { Button } from 'native-base';

export default class Profile extends React.Component {

    static navigationOptions = {
        title: 'Profile',
        headerStyle: {
            backgroundColor: Colors.HEADER_COLOR,
        },

        headerTintColor: Colors.WHITE,

        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        const { navigation } = this.props;
        const name = navigation.getParam('name', 'NO-NAME');
        return (
            <View style={styles.Container}>
                <Image
                    source={{ uri: "https://pbs.twimg.com/profile_images/856988996504657920/zvk_0MeE_400x400.jpg" }}
                    style={styles.Pic}
                />
                <Text style={styles.Text}>{JSON.stringify(name)}</Text>
                <Text style={styles.Text}>{JSON.stringify(name)}</Text>
                <Text style={styles.Text}>{JSON.stringify(name)}</Text>
                <Text style={styles.Text}>{JSON.stringify(name)}</Text>
                <Button style={styles.Button}><Text style={styles.ButtonText}>{Strings.SIGN_OUT}</Text></Button>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors.BACKGROUND_COLOR,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Button: {
        width: 120,
        borderRadius: 8,
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 16,
    },
    ButtonText: {
        fontSize: 18,
        color: Colors.WHITE,
    },
    Text: {
        fontSize: 36,
        color: Colors.WHITE,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 24,
    },
    Pic: {
        height: 150,
        width: 150,
        borderRadius: 80,
        overflow: 'hidden',
        margin: 8,
        alignSelf: 'center',
    },

});