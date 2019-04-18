import React from "react";
import { Modal, View, Image, Text, Button, StyleSheet } from "react-native";

const placeDetail = props => {
  let modalContent = null;
  if (props.selectedPlace) {
    modalContent = (
      <View style={{ flex: 1, alignItems: "center" }}>
        <Image
          source={props.selectedPlace.image}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.text}>{props.selectedPlace.name}</Text>
      </View>
    );
  }

  return (
    <Modal
      visible={props.selectedPlace !== null}
      animationType="slide"
      onRequestClose={props.onModalClosed}
    >
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <Button title="Delete" color="red" onPress={props.onItemDeleted} />
          <Button title="Close" onPress={props.onModalClosed} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22,
    flex: 1
  },
  image: {
    height: 100,
    width: 100
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  }
});
export default placeDetail;
