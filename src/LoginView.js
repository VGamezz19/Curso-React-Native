import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken
} = FBSDK;



export default class LoginView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Bienvenidos a PlatziMusic</Text>
        <LoginButton
          readPermissions={["public_profile", 'email']}
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.error("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    alert(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("logout.")}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcom: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20
  }
});