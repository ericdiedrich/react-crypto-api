import React from 'react';

class Form extends React.Component {
    render() {
        return(
            <form onSubmit={this.props.getCrypto}>
                <input type="text" name="coin" placeholder="Crypto Coin Ranking 1 - 12026" />
                {/* <input type="text" name="coin" placeholder="Coin..." /> */}
                <button>Get Crypto</button>
            </form>
        );
    }
}

export default Form;