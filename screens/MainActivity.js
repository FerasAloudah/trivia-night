import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';
import Colors from '../components/colors';

export default class HomeActivity extends React.Component {

    static navigationOptions = {
        title: 'Main',
        headerStyle: {
            backgroundColor: Colors.HEADER_COLOR,
        },

        headerTintColor: Colors.WHITE,

        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerRight: (
            <TouchableOpacity onPress={() => console.log("Hell")}>
                <Image
                    source={{ uri: "https://pbs.twimg.com/profile_images/856988996504657920/zvk_0MeE_400x400.jpg" }}
                    style={{
                        height: 45,
                        width: 45,
                        borderRadius: 40,
                        overflow: 'hidden',
                        margin: 8,
                    }}

                />
            </TouchableOpacity>
        ),
        headerLeft: null

    };

    onCatagoryPress = () => {
        this.props.navigation.navigate('Catagory')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonView}>

                        <Button style={styles.button} onPress={this.onCatagoryPress}>
                            <Text style={styles.buttonText}>Hell</Text>
                        </Button>

                        <Button style={styles.button} onPress={this.onCatagoryPress}>
                            <Text style={styles.buttonText}>Hell</Text>
                        </Button>

                    </View>
                    <View style={styles.buttonView}>

                        <Button style={styles.button} onPress={this.onCatagoryPress}>
                            <Text style={styles.buttonText}>Hell</Text>
                        </Button>

                        <Button style={styles.button} onPress={this.onCatagoryPress}>
                            <Text style={styles.buttonText}>Hell</Text>
                        </Button>

                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BACKGROUND_COLOR,
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 36,
    },
    buttonView: {
        flexDirection: "row",
    },
    button: {
        margin: 5,
        height: 100,
        width: 165,
        borderRadius: 8,
        justifyContent: "center",
        alignSelf: "stretch",
        textAlignVertical: "center"
    },
    buttonText: {
        fontSize: 18,
        color: Colors.WHITE,
    }

});

