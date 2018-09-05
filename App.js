import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import {
  Container,
  Content,
  Button,
  Text,
  Label,
  Input,
  Item,
  Form,
  Card,
  ListItem,
  Body,
  CheckBox,
  Picker,
  Icon,
  Textarea
} from "native-base";
import { StackNavigator } from 'react-navigation'
import HealthProfile from './form/health';
import LoginPage from './form/login';
import CreateProfile from './form/createprofile';
import SignUpPage from './form/signin';
import SplashScreen from './form/splashscreen';
import Home from './form/homepage'

const AppNav = StackNavigator({
  SplashScreen: { screen: SplashScreen },
  Login: { screen: LoginPage },
  CreateProfile: { screen: CreateProfile },
  SignUpPage: { screen: SignUpPage },
  HealthProfile: { screen: HealthProfile },
  HomePage:{screen:Home},

})

class App extends Component {
  render() {
    return (
        <AppNav />
    );
  }
}
export default App;
