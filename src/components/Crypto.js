import React from 'react';

class Crypto extends React.Component {
    render() {
        return(
            <div className="crypto__info">
                {
                this.props.coin && <p className="crypto__key"> Coin ID: 
                    <span className="crypto__value "> {this.props.coin}</span>
                    </p>
                }
                {
                this.props.name && <p className="crypto__key"> Currency: 
                    <span className="crypto__value "> {this.props.name}</span>
                </p>
                }
                {
                this.props.symbol && <p className="crypto__key"> Symbol: 
                    <span className="crypto__value "> {this.props.symbol}</span>
                </p>
                }
                {
                this.props.description && <p className="crypto__key"> Description: 
                    <span className="crypto__value "> {this.props.description}</span>
                </p>
                }
                {
                this.props.price && <p className="crypto__key"> Price of Coin: 
                    <span className="crypto__value "> {this.props.price}</span>
                    </p>
                }
                {
                this.props.allTimeHigh && <p className="crypto__key"> Highest Recorded Price: 
                    <span className="crypto__value "> {this.props.allTimeHigh}</span>
                    </p>
                }
                {
                this.props.allTimeHigh && <p className="crypto__key"> Past 5 Days Price: 
                    <br/>
                    <span className="crypto__value "> {this.props.pricehistory1}</span>
                    <br/>
                    <span className="crypto__value "> {this.props.pricehistory2}</span>
                    <br/>
                    <span className="crypto__value "> {this.props.pricehistory3}</span>
                    <br/>
                    <span className="crypto__value "> {this.props.pricehistory4}</span>
                    <br/>
                    <span className="crypto__value "> {this.props.pricehistory5}</span>
                    </p>
                }
                {
                this.props.error && <p className="crypto__error">{this.props.error}
                </p>
                }
            </div>
        );
    }
}

export default Crypto;