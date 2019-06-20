import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';
import Colors from '../components/colors';

export default class HomeActivity extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Main',
        headerStyle: {
            backgroundColor: Colors.HEADER_COLOR,
        },

        headerTintColor: Colors.WHITE,

        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate('Profile', { name: 'Cat' })}>
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

    });

    onCatagoryPress = () => {
        this.props.navigation.navigate('Catagory');
    }



    render() {
        return (
            <View style={styles.Container}>
                <Text style={styles.Text}>Choose A catagory</Text>
                <View style={styles.ButtonContainer}>
                    <View style={styles.ButtonView}>

                        <Button style={styles.Button} onPress={this.onCatagoryPress}>
                            <Text style={styles.ButtonText}>Hell</Text>
                        </Button>

                        <Button style={styles.Button} onPress={this.onCatagoryPress}>
                            <Text style={styles.ButtonText}>Hell</Text>
                        </Button>

                    </View>
                    <View style={styles.ButtonView}>

                        <Button style={styles.Button} onPress={this.onCatagoryPress}>
                            <Text style={styles.ButtonText}>Hell</Text>
                        </Button>

                        <Button style={styles.Button} onPress={this.onCatagoryPress}>
                            <Text style={styles.ButtonText}>Hell</Text>
                        </Button>

                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors.BACKGROUND_COLOR,
    },
    ButtonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 36,
    },
    ButtonView: {
        flexDirection: "row",
    },
    Button: {
        margin: 5,
        height: 100,
        width: 165,
        borderRadius: 8,
        justifyContent: "center",
        alignSelf: "stretch",
        textAlignVertical: "center"
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
        marginTop: 48,
    }

});

