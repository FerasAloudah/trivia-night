import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';

class HomeActivity extends React.Component {

    static navigationOptions = {
        title: 'Main',
        headerStyle: {
            backgroundColor: '#03A9F4',
        },

        headerTintColor: '#fff',

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

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonView}>

                        <Button style={styles.button}>
                            <Text style={styles.buttonText}>Hell</Text>
                        </Button>

                        <Button style={styles.button}>
                            <Text style={styles.buttonText}>Hell</Text>
                        </Button>

                    </View>
                    <View style={styles.buttonView}>

                        <Button style={styles.button}>
                            <Text style={styles.buttonText}>Hell</Text>
                        </Button>

                        <Button style={styles.button}>
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
        backgroundColor: '#2c3e50',
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
        color: 'white',
    }

});

export default HomeActivity;