import React from "react";
import { Button } from "react-native";

const PlaceButton = props => (
  <Button style={{ width: "30%" }} title="Add" onPress={props.handlePress} />
);

export default PlaceButton;
