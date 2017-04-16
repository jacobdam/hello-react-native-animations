import React, { Component } from 'react';
import { View, StyleSheet, Animated, PanResponder } from 'react-native';

class DragSimple extends Component {
  positionAnim = new Animated.ValueXY();

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: this._handlePanResponderGrant,
      onPanResponderMove: Animated.event([
        null,
        { dx: this.positionAnim.x, dy: this.positionAnim.y }
      ]),
      onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderTerminate: this._handlePanResponderEnd,
    });
  }

  _handlePanResponderGrant = (e: Object, gestureState: Object) => {
    this.positionAnim.extractOffset();
  };

  _handlePanResponderEnd = (e: Object, gestureState: Object) => {
    this.positionAnim.flattenOffset();
  };


  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          {...this._panResponder.panHandlers}
          style={[
            styles.draggable,
            this.positionAnim.getLayout()
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  draggable: {
    width: 64,
    height: 64,
    backgroundColor: 'red',
    position: 'absolute'
  }
});

export default DragSimple;
