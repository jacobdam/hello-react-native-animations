import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import MenuPage from './MenuPage';
import CloseButton from './CloseButton';

import DragSimple from './pages/DragSimple';
import DragReleaseReverse from './pages/DragReleaseReverse';

const PAGES = [
  DragSimple,
  DragReleaseReverse,
]

class App extends Component {
  state = {
    isMenuShowing: true,
    selectedPageIndex: null
  }

  _handleItemPress = ({ index: selectedPageIndex }) => {
    this.setState({ isMenuShowing: false, selectedPageIndex });
  }

  _handlePageClose = () => {
    this.setState({ isMenuShowing: true, selectedPageIndex: null });
  }

  _renderMenuPage() {
    return (
      <MenuPage items={PAGES} onItemPress={this._handleItemPress} />
    );  
  }

  _renderPage(index) {
    const PageComponentClass = PAGES[index];

    return (
      <View style={styles.container}>
        <PageComponentClass />
        <CloseButton onPress={this._handlePageClose} />
      </View>
    )
  }

  render() {
    const { isMenuShowing, selectedPageIndex } = this.state;

    if (isMenuShowing) {
      return this._renderMenuPage();
    }

    return this._renderPage(selectedPageIndex);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default App;
