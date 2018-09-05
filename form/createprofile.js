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

class CreateProfile extends Component {
    static navigationOptions = {
        header: null,
        headerBackTitle: null
      }
  constructor(props) {
    super(props);
    this.state = {
      selected: "key0"
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  render() {
    return (
      <Container style={{ flex: 1, backgroundColor: "#14AAF0" }}>
        <View
          style={{
            flex: 1,
            flexDirection: "column"
          }}
        >
          <View style={{ paddingBottom: 50 }}>
            <Text
              style={{
                fontSize: 40,
                fontWeight: "bold",
                textAlign: "center",
                color: "#f5f5f5",
                paddingTop: 50
              }}
            >
              Create Profile
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
          <View style={{ flex: 1, margin: 20 }}>
            <Form>
              <View
                style={{
                  backgroundColor: "white",
                  marginBottom: 20,
                  borderRadius: 5
                }}
              >
                <Item inlineLabel last>
                  <Label>Firstname</Label>
                  <Input style={{ height: 40 }} />
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
                  <Label>Lastname</Label>
                  <Input style={{ height: 40 }} />
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
                  <Label>Email id</Label>
                  <Input style={{ height: 40 }} />
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
                  <Label>Mobile No</Label>
                  <Input style={{ height: 40 }} />
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
            >
              <Text style={{ textAlign: "center" }}>Submit</Text>
            </Button>
          </View>
        </View>
      </Container>
    );
  }
}
export default CreateProfile;
