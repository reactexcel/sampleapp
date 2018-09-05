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

class HealthProfile extends Component {
  static navigationOptions = {
    header: null,
    headerBackTitle: null
  };
  constructor(props) {
    super(props);
    this.state = {
      selected: "key0",
      Weight: "",
      height: "",
      Age: "",
      decease: ""
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  onPress = () => {
    if (
      this.state.Weight == "" ||
      this.state.height == "" ||
      (this.state.height == "" || this.state.Age == "")
    ) {
      alert("please fill all the datails");
    } else if (this.state.selected == "key0") {
      alert("please select gender");
    } else if (this.state.decease == "") {
      alert("please tell us about your decease breifly");
    } else {
      this.props.navigation.navigate("HomePage");
    }
  };
  render() {
    return (
      <Container style={styles.Container}>
        <View style={styles.parentView}>
          <View style={{ paddingBottom: 50 }}>
            <Text style={styles.childView}>Health Profile</Text>
            <View style={styles.border} />
          </View>
          <View style={{ flex: 1, margin: 20 }}>
            <Form>
              <View style={styles.weight}>
                <Item inlineLabel last>
                  <Label>Weight</Label>
                  <Input
                    value={this.state.userEntry}
                    onChangeText={e => {
                      this.setState({ Weight: e });
                    }}
                    style={{ height: 40 }}
                  />
                </Item>
              </View>
              <View style={styles.userEntry}>
                <Item inlineLabel last>
                  <Label>Height</Label>
                  <Input
                    value={this.state.height}
                    onChangeText={e => {
                      this.setState({ height: e });
                    }}
                    style={{ height: 40 }}
                  />
                </Item>
              </View>
              <View style={styles.userEntry}>
                <Item inlineLabel last>
                  <Label>Age</Label>
                  <Input
                    value={this.state.Age}
                    onChangeText={e => {
                      this.setState({ Age: e });
                    }}
                    style={{ height: 40 }}
                  />
                </Item>
              </View>
              <View style={styles.picker}>
                <Picker
                  mode="dropdown"
                  iosHeader="Select your SIM"
                  iosIcon={
                    <Icon
                      name="ios-arrow-down-outline"
                      style={{ paddingRight: 20 }}
                    />
                  }
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}
                >
                  <Picker.Item label="Select Your Gender" value="key0" />
                  <Picker.Item label="Male" value="key1" />
                  <Picker.Item label="Female" value="key2" />
                </Picker>
              </View>
              <View>
                <Textarea
                  style={styles.textarea}
                  rowSpan={5}
                  bordered
                  placeholder="Cronic Dieases"
                  value={this.state.decease}
                  onChangeText={e => {
                    this.setState({ decease: e });
                  }}
                />
              </View>
            </Form>
            <View style={styles.buttonView} />
            <Button style={styles.button} onPress={this.onPress}>
              <Text style={{ textAlign: "center" }}>Submit</Text>
            </Button>
          </View>
        </View>
      </Container>
    );
  }
}
export default HealthProfile;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#14AAF0"
  },
  parentView: {
    flex: 1,
    flexDirection: "column"
  },
  childView: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "#f5f5f5",
    paddingTop: 50
  },
  border: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#D0D3D4",
    width: 300,
    alignSelf: "center",
    marginTop: 10
  },
  userEnter: {
    backgroundColor: "white",
    marginBottom: 20,
    borderRadius: 5
  },
  picker: {
    height: 40,
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 20
  },
  textarea: {
    backgroundColor: "white",
    height: 40,
    borderRadius: 5
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
  }
});
