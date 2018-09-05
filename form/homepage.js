import React, { Component } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
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

class Home extends Component {
  static navigationOptions = {
    header: null,
    headerBackTitle: null
  };
  onPress = () => {
    this.props.navigation.navigate("SignUpPage");
  };
  onPres = () => {
    this.props.navigation.navigate("HealthProfile");
  };
  render() {
    return (
      <Container style={styles.Container}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <TouchableWithoutFeedback onPressIn={this.onPress}>
            <View style={styles.View}>
              <Text style={{ alignSelf: "center" }}>Create Profile</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPressIn={this.onPres}>
            <View style={styles.View}>
              <Text style={{ alignSelf: "center" }}>Health Profile</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Container>
    );
  }
}
export default Home;
const styles = StyleSheet.create({
  Container: { flex: 1, backgroundColor: "#14AAF0" },
  View: {
    width: 300,
    height: 70,
    backgroundColor: "white",
    margin: 30,
    borderRadius: 35,
    justifyContent: "center"
  }
});
