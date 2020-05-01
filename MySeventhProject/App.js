import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class TouchableButton extends Component {

  onPressButton(){
    alert("You tapped a button")
  }
  render(){
  return (
    <View style={styles.container}>
      <View style={styles.containerButton}>
        <Button
          onPress={this.onPressButton}
          title="Press Button 1"
        />
      </View>

      <View style={styles.containerLayoutButton}>
        <Button
          onPress={this.onPressButton}
          title="Press Button 2"
        />

        <Button
          onPress={this.onPressButton}
          title="Great!"
          color="green"
        /> 

      </View>

      <View style={styles.containerButton}>
        <Button
          onPress={this.onPressButton}
          title="Tap Me!"
        />
      </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  containerButton: {
    margin: 20
  },

  containerLayoutButton: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
