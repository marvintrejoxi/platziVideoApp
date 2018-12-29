import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

// COMPONENTS
import Home from './screens/containers/Home'
import Header from './sections/components/Header';
import SuggestionList from './videos/containers/SuggestionsList'
import CategoriesList from './videos/containers/CategoriesList';
import API from '../utils/api'
import Movie from './screens/containers/Movie';

class AppLayout extends Component {
  async componentWillMount() {
    const categoriesList = await API.getMovies();
    this.props.dispatch({
      type: 'SET_CATEGORIES_LIST',
      payload: {
        categoriesList
      }
    })
    
    const suggestionsList = await API.getSuggestions(10);
    this.props.dispatch({
      type: 'SET_SUGGESTIONS_LIST',
      payload: {
        suggestionsList
      }
    })
  }

  render() {
    if (this.props.selectedMovie) {
      return <Movie />
    } else {
      return(
        <Home>
          <Header />
          <Text>BUSCADOR</Text>
          <CategoriesList />
          <SuggestionList />
        </Home>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    selectedMovie: state.selectedMovie
  }
}
export default connect(mapStateToProps)(AppLayout);