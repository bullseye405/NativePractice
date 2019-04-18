import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const PlaceInput = props => (
  <TextInput
    style={{ width: "70%" }}
    value={props.placeName}
    placeholder="An awesome place"
    onChangeText={props.onChangeText}
  />
);

export default PlaceInput;
