import React from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Colors from '../components/colors';
import { Button } from 'native-base';
import Metrics from '../components/metrics';
import Strings from '../components/strings';

export default class catagoryActivity extends React.Component {
    static navigationOptions = {
        title: 'catagoryName',
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
    }

    render() {
        return (
            <View style={styles.container}>
                <Button style={styles.buttonAbove}>
                    <Text style={styles.buttonText}>Online</Text>
                </Button>

                <Button style={styles.buttonBottom}>
                    <Text style={styles.buttonText}>Offline</Text>
                </Button>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BACKGROUND_COLOR,
    },
    buttonAbove: {
        margin: 16,
        height: Metrics.DEVICE_HEIGHT / 2.5,
        borderRadius: 8,
        justifyContent: "center",
        alignSelf: "stretch",
        textAlignVertical: "center"
    },
    buttonBottom: {
        margin: 16,
        height: Metrics.DEVICE_HEIGHT / 2.5,
        width:330,
        borderRadius: 8,
        position:"relative",
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 48,
        color: Colors.WHITE,
    }

});

