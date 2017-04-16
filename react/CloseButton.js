import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const CloseButton = ({ onPress }) => (
  <TouchableOpacity style={styles.closeButton} onPress={onPress}>
    <Text>Close</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.3)'
  }
});

export default CloseButton;
