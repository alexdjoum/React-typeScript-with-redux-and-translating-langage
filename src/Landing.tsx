import React, { Component } from 'react';

type AppProps = {
    message: string;
};

type MyState = {
    count: number; // like this
};

class Landing extends Component<AppProps, MyState> {
    
    render() {
      const {message} = this.props
        return (
            <div>
                {message}
            </div>
        );
    }
}

export default Landing;