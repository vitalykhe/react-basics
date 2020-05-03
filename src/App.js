import React from 'react';
import logo from './logo.svg';
import './App.css';



class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr><th colSpan="2">{category}</th></tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
    product.name : <span style={{color: 'red'}}>{product.name}</span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}
class SearchBar extends React.Component {
  render() {
    let isChecked = this.props.isChecked;
    let searchQuery = this.props.searchQuery;
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery} />
        <p>
          <input
            type="checkbox"
            checked={isChecked} />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const searchQuery = this.props.searchQuery;
    const isChecked = this.props.isChecked;
    const rows = [];
    return (
      <div>

      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      isChecked : false
    }
  }
  render() {
    return (
      <div>
        <SearchBar searchQuery={this.state.searchQuery} isChecked={this.state.isChecked}/>
        <ProductTable products={PRODUCTS} />
      </div>
    );
  }
}

const PRODUCTS = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

export default App;
