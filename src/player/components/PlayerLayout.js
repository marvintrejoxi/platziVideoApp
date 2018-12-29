import React from 'react';
import { View, StyleSheet } from 'react-native';

function PlayerLayout(props) {
  return(
    <View style={styles.container}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    height: 100,
    resizeMode: 'contain',
    backgroundColor: '#000',
  }
})

export default PlayerLayout;