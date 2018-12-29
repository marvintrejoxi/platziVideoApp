import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

function Suggestion(props) {
  return(
    <TouchableOpacity
      onPress={props.onPress}
    >
      <View style={styles.container}>
        <View style={styles.left}>
          <Image 
            source={{uri: props.medium_cover_image}}
            style={styles.cover}
          />
          <View style={styles.genre}>
            <Text style={styles.genreText}>{props.genres[0]}</Text>
          </View>
        </View>
        <View style={styles.right}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.year}>2007</Text>
          <Text style={styles.rating}>{props.rating} estrellas</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  left: {

  },
  right: {
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  cover: {
    height: 150,
    width: 100,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 18,
    color: '#44546b'
  },
  year: {
    backgroundColor: '#70b124',
    paddingVertical: 4,
    color: '#fff',
    fontSize: 11,
    borderRadius: 5,
    overflow: 'hidden',
    paddingHorizontal: 6,
    alignSelf: 'flex-start',
  },
  rating: {
    color: '#6b6b6b',
    fontSize: 14,
    fontWeight: 'bold',
  },
  genre: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: '#000',
  },
  genreText: {
    color: '#fff',
    fontSize: 11,
    paddingVertical: 5,
    paddingHorizontal: 7
  }
});

export default Suggestion;