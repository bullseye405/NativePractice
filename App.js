import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import ListItem from "./src/components/ListIems/ListItem";
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceButton from "./src/components/PlaceButton/PlaceButton";
import PlaceList from "./src/components/PlaceList/PlaceList";
import placeImage from "./assets/React.png";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";

export default class App extends React.Component {
  state = {
    placeName: "",
    places: [],
    selectedPlace: null
  };

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return console.log("no Items");
    }

    this.setState(() => {
      return {
        places: this.state.places.concat({
          key: Math.random(),
          name: this.state.placeName,
          image: placeImage
        })
        // placeName: ""
      };
    });
  };

  placeSelectorHandeler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      };
    });
  };
  placeDeleteHander = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  };

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeleteHander}
          onModalClosed={this.modalClosedHandler}
        />
        <View style={styles.inputContainer}>
          <PlaceInput
            placeName={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
          />

          <PlaceButton handlePress={this.placeSubmitHandler} />
        </View>
        <View style={{ flex: 1 }}>
          <PlaceList
            places={this.state.places}
            onItemSelected={this.placeSelectorHandeler}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});
