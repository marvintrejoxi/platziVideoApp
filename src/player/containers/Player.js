import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Video from 'react-native-video'
import PlayerLayout from '../components/PlayerLayout';

class Player extends Component {
  render() {
    return(
      <PlayerLayout>
        <Video 
          url={{uri:'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
          style={styles.video}
        />
      </PlayerLayout>
    )
  }
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute', 
    top: 0, 
    bottom: 0, 
    left: 0, 
    right: 0,
  }
})

export default Player;