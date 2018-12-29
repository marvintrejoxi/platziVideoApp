import React, { Component } from 'react';
import { FlatList } from 'react-native';
import SuggestionsListLayout from '../components/SuggestionsListLayout';
import Suggestion from '../components/Suggestion';
import Empty from '../components/Empty';
import VerticalSeparator from '../components/VerticalSeparator';
import { connect } from 'react-redux'

class SuggestionsList extends Component {
  renderEmpty = () => {
    return <Empty text='No hay sugerencias' />
  }

  itemSeparator = () => {
    return <VerticalSeparator />
  }

  renderItem = ({item}) => {
    return(
      <Suggestion 
        {...item} 
        onPress={() => { this.viewMovie(item) }}
      />
    )
  }

  keyExtractor = (item) => {
    return(item.id.toString());
  }

  viewMovie = (item) => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: item
      }
    })
  }

  render() {
    return(
      <SuggestionsListLayout
        title='Recomendado para ti'
      >
        <FlatList 
          data={this.props.list}
          keyExtractor={this.keyExtractor}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </SuggestionsListLayout>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.suggestionsList
  }
}

export default connect(mapStateToProps)(SuggestionsList);