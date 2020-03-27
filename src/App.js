import React from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Crypto from './components/Crypto';


class App extends React.Component {

  state = {
    coin: undefined,
    name: undefined,
    symbol: undefined,
    description: undefined,
    price: undefined,
    allTimeHigh: undefined,
    pricehistory1: undefined,
    pricehistory2: undefined,
    pricehistory3: undefined,
    pricehistory4: undefined,
    pricehistory5: undefined,
    error: undefined
  }

  getCrypto = async (e) => {
    e.preventDefault();
    const coinSearch = e.target.elements.coin.value


    
    const api_call = await fetch(`https://api.coinranking.com/v1/public/coin/${coinSearch}`);
    const data = await api_call.json();
    console.log(data);



    if (coinSearch) {
      this.setState({
        coin: data.data.coin.id,
        name: data.data.coin.name,
        symbol: data.data.coin.symbol,
        description: data.data.coin.description,
        price: data.data.coin.price,
        allTimeHigh: data.data.coin.allTimeHigh.price,
        pricehistory1: data.data.coin.history[25],
        pricehistory2: data.data.coin.history[24],
        pricehistory3: data.data.coin.history[23],
        pricehistory4: data.data.coin.history[22],
        pricehistory5: data.data.coin.history[21],
        error: ""
      });
    } else {
      this.setState({
        coin: undefined,
        name: undefined,
        symbol: undefined,
        description: undefined,
        price: undefined,
        allTimeHigh: undefined,
        pricehistory1: undefined,
        pricehistory2: undefined,
        pricehistory3: undefined,
        pricehistory4: undefined,
        pricehistory5: undefined,
        error: "Please enter the value"
      });
    }
  }

  render() {
    return(
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Title />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getCrypto={this.getCrypto} />
                  <Crypto 
                    coin={this.state.coin}
                    name={this.state.name}
                    symbol={this.state.symbol}
                    description={this.state.description}
                    price={this.state.price}
                    allTimeHigh={this.state.allTimeHigh}
                    pricehistory1={this.state.pricehistory1}
                    pricehistory2={this.state.pricehistory2}
                    pricehistory3={this.state.pricehistory3}
                    pricehistory4={this.state.pricehistory4}
                    pricehistory5={this.state.pricehistory5}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;