import React, { Component } from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet } from 'react-native';

import DragSimple from './pages/DragSimple';
import DragReleaseReverse from './pages/DragReleaseReverse';

const PAGES = [
  DragSimple,
  DragReleaseReverse  
]

const MenuPage = ({ items, onItemPress }) => (
  <FlatList
    data={items}
    keyExtractor={(item, index) => index}
    renderItem={({ item, index }) => (
      <TouchableOpacity onPress={() => onItemPress({ item, index })}>
        <View style={styles.item}>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    )}
  />
);

const styles = StyleSheet.create({
  item: {
    borderColor: '#555',
    borderRadius: 4,
    borderWidth: 1,
    minHeight: 40,
    margin: 8,
    padding: 8
  }
});

export default MenuPage;
