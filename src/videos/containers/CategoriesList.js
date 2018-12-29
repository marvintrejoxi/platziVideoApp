import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Empty from '../components/Empty';
import HorizontalSeparator from '../components/HorizontalSeparator';
import CategoriesListLayout from '../components/CategoriesListLayout';
import Category from '../components/Category';
import { connect } from 'react-redux';

class CategoriesList extends Component {
  renderEmpty = () => {
    return <Empty text='No hay sugerencias' />
  }
  
  itemSeparator = () => {
    return <HorizontalSeparator />
  }

  renderItem = ({item}) => {
    return <Category {...item} />
  }

  keyExtractor = (item) => {
    return(item.id.toString());
  }

  render() {
    return(
      <CategoriesListLayout
        title='Categorias'
      >
        <FlatList 
          horizontal
          data={this.props.list}
          keyExtractor={this.keyExtractor}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </CategoriesListLayout>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.categoriesList
  }
}
export default connect(mapStateToProps)(CategoriesList);