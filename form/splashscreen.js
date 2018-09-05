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

class SplashScreen extends Component {
  static navigationOptions = {
    header: null,
    headerBackTitle: null
  };
  constructor(props) {
    super(props);
    this.state = {
      selected: "key0",
      redirect: false
    };
  }
  componentWillMount() {
    setTimeout(() => {
      this.props.navigation.navigate("Login");
    }, 2000);
  }

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  render() {
    return (
      <Container style={styles.Container}>
        <View style={styles.view}>
          <View style={{ marginTop: 30 }}>
            <Text style={styles.textQ2Q}>Q2Q Health</Text>
          </View>
          <View style={styles.viewHelp} />
          <View style={{ marginBottom: 30, margin: 20 }}>
            <Text style={styles.textHealth}>
              Q2Q will help you to understand your numbres by using pictures and
              videos.
            </Text>
          </View>
        </View>
      </Container>
    );
  }
}
export default SplashScreen;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#14AAF0"
  },
  view: {
    flex: 1,
    justifyContent: "space-between"
  },
  viewHelp: {
    backgroundColor: "white",
    width: 300,
    height: 300,
    borderRadius: 200,
    alignSelf: "center"
  },
  textQ2Q: {
    fontSize: 50,
    textAlign: "center",
    color: "#f5f5f5",
    fontFamily: "Arial"
  },
  textHealth: {
    fontSize: 20,
    textAlign: "center",
    color: "#f5f5f5",
    fontFamily: "Arial"
  }
});
