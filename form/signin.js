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
  CheckBox
} from "native-base";

class SignUpPage extends Component {
  static navigationOptions = {
    header: null,
    headerBackTitle: null
  };
  constructor(props) {
    super(props);
    this.state = { Username: "", Email: "", Password: "", ConfirmPassword: "" };
  }
  onPress = () => {
    if (
      (this.state.Username == "" || this.state.Email == "") ||
      (this.state.Password == "" || this.state.ConfirmPassword=='')
    ) {
      alert("please fill all the details");
    } else if (this.state.Password !== this.state.ConfirmPassword) {
      alert("Confirm password is not matched");
    } else {
      this.props.navigation.navigate("HomePage");
    }
  };
  render() {
    return (
      <Container style={{ flex: 1, backgroundColor: "#14AAF0" }}>
        <View
          style={{
            flex: 1,
            flexDirection: "column"
          }}
        >
          <View style={{ marginBottom: 60 }}>
            <Text
              style={{
                fontSize: 40,
                fontWeight: "bold",
                textAlign: "center",
                color: "#f5f5f5"
              }}
            >
              SignUp Form
            </Text>
            <View
              style={{
                borderBottomWidth: 0.5,
                borderBottomColor: "#D0D3D4",
                width: 300,
                alignSelf: "center",
                marginTop: 10
              }}
            />
          </View>
          <View style={{ flex: 1, margin: 10 }}>
            <Form>
              <View
                style={{
                  backgroundColor: "white",
                  marginBottom: 20,
                  borderRadius: 5
                }}
              >
                <Item inlineLabel last>
                  <Label>Username</Label>
                  <Input
                    value={this.state.Username}
                    onChangeText={e => {
                      this.setState({ Username: e });
                    }}
                    style={{ height: 40 }}
                  />
                </Item>
              </View>
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 5,
                  marginBottom: 20
                }}
              >
                <Item inlineLabel last>
                  <Label>Email</Label>
                  <Input
                    value={this.state.Email}
                    onChangeText={e => {
                      this.setState({ Email: e });
                    }}
                    style={{ height: 40 }}
                  />
                </Item>
              </View>
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 5,
                  marginBottom: 20
                }}
              >
                <Item inlineLabel last>
                  <Label>Password</Label>
                  <Input
                    value={this.state.Password}
                    onChangeText={e => {
                      this.setState({ Password: e });
                    }}
                    secureTextEntry={true}
                    style={{ height: 40 }}
                  />
                </Item>
              </View>
              <View style={{ backgroundColor: "white", borderRadius: 5 }}>
                <Item inlineLabel last>
                  <Label>Confirm Password</Label>
                  <Input
                    value={this.state.ConfirmPassword}
                    onChangeText={e => {
                      this.setState({ ConfirmPassword: e });
                    }}
                    secureTextEntry={true}
                    style={{ height: 40 }}
                  />
                </Item>
              </View>
            </Form>
            <View
              style={{
                margin: 20,
                borderRadius: 5,
                width: 400,
                alignSelf: "center"
              }}
            />
            <Button
              style={{
                marginBottom: 40,
                width: 200,
                alignSelf: "center",
                textAlign: "center",
                justifyContent: "center",
                backgroundColor: "#656768"
              }}
              onPress={this.onPress}
            >
              <Text style={{ textAlign: "center" }}>SignUp</Text>
            </Button>
            <Text
              onPress={() => this.props.navigation.navigate("Login")}
              style={{ textAlign: "center", marginTop: 10, color: "#F2F3F4" }}
            >
              Do you have already an account?
            </Text>
            <View
              style={{
                borderBottomWidth: 0.5,
                borderBottomColor: "#D0D3D4",
                width: 330,
                alignSelf: "center",
                marginTop: 10
              }}
            />
          </View>
        </View>
      </Container>
    );
  }
}
export default SignUpPage;
