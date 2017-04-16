import React, { Component } from 'react';
import { View, StyleSheet, Animated, PanResponder } from 'react-native';

class DragReleaseReverse extends Component {
  static title = 'Drag and reverse to original position after releasing';

  positionAnim = new Animated.ValueXY();

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      // onPanResponderGrant: this._handlePanResponderGrant,
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
    Animated.spring(
      this.positionAnim,
      {
        toValue: { x: 0, y: 0 },
        useNativeDriver: true
      }
    ).start();
  };


  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          {...this._panResponder.panHandlers}
          style={[
            styles.draggable,
            {
              transform: this.positionAnim.getTranslateTransform()
            }
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  draggable: {
    width: 64,
    height: 64,
    backgroundColor: 'red'
  }
});

export default DragReleaseReverse;
