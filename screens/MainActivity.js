import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
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
        ),
        headerLeft: null
    };

    render() {
        return (
            <View style={styles.con}>
                <View style={styles.optionsCon}>
                    <View style={styles.buttonView}>
                        <Button style={styles.SquareShapeView} title="here" >
                            <Text>Hell</Text>
                        </Button>
                        <Button style={styles.SquareShapeView} title="here" >
                            <Text>Hell</Text>
                        </Button>
                    </View>
                    <View style={styles.buttonView}>
                        <Button style={styles.SquareShapeView} title="here" >
                            <Text>Hell</Text>
                        </Button>
                        <Button style={styles.SquareShapeView} title="here" >
                            <Text>Hell</Text>
                        </Button>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    con: {
        flex: 1,
        backgroundColor: '#2c3e50',
        justifyContent: 'center',
    },

    optionsCon: {
        flex: 1,
        backgroundColor: '#2c3e50',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonView: {
        flexDirection: 'row',
    },

    SquareShapeView: {
        width: 170,
        height: 100,
        backgroundColor: '#9C27B0',
        elevation: 8,
        borderRadius: 10,
        margin: 5,
    },

});

export default HomeActivity;