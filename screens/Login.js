import React from 'react';
import { View, Text, SafeAreaView, Button, StyleSheet, TextInput, StatusBar } from 'react-native';

function Login({ route, navigation }) {

    const eventId = route.params.id;

    console.log("event id on Login page " + eventId);




    return (
        <SafeAreaView>

            <StatusBar
                backgroundColor={"#c7228e"}
            />





            <View style={styles.container}>
                <View style={styles.loginButton}>
                    <Button title="Register Deligate"
                        color="#4517b59c"
                        onPress={() => {
                            navigation.navigate('UserLogin', {
                                id: eventId
                            })
                        }}
                    />
                </View>
                <View style={styles.loginButton}>
                    <Button title="Guest Login"
                        color="#4517b59c"
                        onPress={() => { navigation.navigate('GuestLogin') }}
                    />
                </View>

                <View style={styles.loginButton}>
                    <Button title="Register"
                        color="#4517b59c"
                        onPress={() => { navigation.navigate('RegisterScreen') }}
                    />
                </View>
            </View>

        </SafeAreaView>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginHorizontal: 10,
        marginVertical: 50,
        padding: 10,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#CCC",
        marginBottom: 20,
        marginTop: 50
    },
    loginButton: {
        marginHorizontal: 10,
        marginTop: 15,
        marginBottom: 15,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})