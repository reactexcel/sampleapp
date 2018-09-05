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

class LoginPage extends Component {
  static navigationOptions = {
    header: null,
    headerBackTitle: null
  };

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      Password: ""
    };
  }

  onSubmit = () => {
    if (this.state.username == "" || this.state.Password == "") {
      alert("Please Fill Username and password");
    } else {
      this.props.navigation.navigate("HomePage", { name: "User" });
    }
  };

  render() {
    return (
      <Container style={styles.Container}>
        <View style={styles.parentView}>
          <View style={{ paddingBottom: 80 }}>
            <Text style={styles.login}>Login Form</Text>
            <View style={styles.childView} />
          </View>
          <View style={{ flex: 1, margin: 10 }}>
            <Form>
              <View style={styles.usernameView}>
                <Item inlineLabel last>
                  <Label>Username</Label>
                  <Input
                    value={this.state.username}
                    onChangeText={e => {
                      this.setState({ username: e });
                    }}
                  />
                </Item>
              </View>
              <View style={{ backgroundColor: "white", borderRadius: 5 }}>
                <Item inlineLabel last>
                  <Label>Password</Label>
                  <Input
                    secureTextEntry={true}
                    value={this.state.Password}
                    onChangeText={e => {
                      this.setState({ Password: e });
                    }}
                  />
                </Item>
              </View>
              <ListItem style={{ marginTop: 10 }}>
                <CheckBox />
                <Text style={styles.CheckBoxText}>Remember Me?</Text>
              </ListItem>
            </Form>
            <View style={styles.buttonView} />
            <Button style={styles.button} onPress={() => this.onSubmit()}>
              <Text style={{ textAlign: "center" }}>Login</Text>
            </Button>

            <Button
              style={styles.button}
              onPress={() =>
                this.props.navigation.navigate("HomePage", { name: "Guest" })
              }
            >
              <Text style={{ textAlign: "center" }}>Guest</Text>
            </Button>
            <Text
              onPress={() => this.props.navigation.navigate("SignUpPage")}
              style={{ textAlign: "center", marginTop: 10, color: "#F2F3F4" }}
            >
              Don't have an account? Sign Up
            </Text>
            <Text
              style={{ textAlign: "center", marginTop: 10, color: "#F2F3F4" }}
            >
              Forgot Password?
            </Text>
            <View style={styles.borderView} />
          </View>
        </View>
      </Container>
    );
  }
}
export default LoginPage;
const styles = StyleSheet.create({
  Container: { flex: 1, backgroundColor: "#14AAF0" },
  parentView: {
    flex: 1,
    flexDirection: "column"
  },
  login: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "#f5f5f5",
    paddingTop: 40
  },
  childView: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#D0D3D4",
    width: 300,
    alignSelf: "center",
    marginTop: 10
  },
  usernameView: {
    backgroundColor: "white",
    marginBottom: 30,
    borderRadius: 5
  },
  CheckBoxText: {
    textAlign: "center",
    justifyContent: "center",
    color: "#F2F3F4",
    marginLeft: 6
  },
  buttonView: {
    margin: 20,
    borderRadius: 5,
    width: 400,
    alignSelf: "center"
  },
  button: {
    marginBottom: 40,
    width: 200,
    alignSelf: "center",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#656768"
  },
  borderView: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#D0D3D4",
    width: 300,
    alignSelf: "center",
    marginTop: 10
  }
});
