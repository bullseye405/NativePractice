import React from "react";
import { FlatList } from "react-native";
import ListItem from "../ListIems/ListItem";

const PlaceList = props => {
  return (
    <FlatList
      style={{ width: "100%" }}
      data={props.places}
      renderItem={info => (
        <ListItem
          placeName={info.item.name}
          image={info.item.image}
          onItemPressed={() => props.onItemSelected(info.item.key)}
        />
      )}
    />
  );
};

export default PlaceList;
