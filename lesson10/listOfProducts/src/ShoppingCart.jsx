import React from 'react';
import CardTitle from './CardTitle';
import ProductsList from './ProductsList';

export default class ShoppingCart extends React.Component {
  state = {
    cartItems: [
      {
        id: '1',
        name: 'iPhone 11',
        price: 999,
      },
      {
        id: '2',
        name: 'iPad Pro',
        price: 799,
      },
    ],
  };

  render() {
    const count = this.state.cartItems.length;

    return (
      <div className="column">
        <CardTitle userName={this.props.userName} count={count} />
        <ProductsList cartItems={this.state.cartItems} />
      </div>
    );
  }
}
