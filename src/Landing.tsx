import React, { Component } from 'react';

type AppProps = {
    message: boolean;
};

type MyState = {
    count: number; 
    firstname: string;
    [field: string]: any;
};

class Landing extends Component<AppProps, MyState> {
    state: MyState ={
        count: 0,
        firstname: ""
    }

    increment = (amt: number) => {
        // like this
        this.setState((prevState) => ({
          count: prevState.count + amt,
        }));
    };

    updateField = (value: string, field: string) => {
        this.setState({[field]: value})
    }
    /**my render function which return JSX */
    render() {
        const {message} = this.props
        const {count} = this.state
        //console.log('my boolean ===>> ', message)
        return (
            <>
                <div style={{display: "block"}}>
                    {message} {count}
                    <button onClick={() => this.increment(1)}>
                        Click here
                    </button>
                </div>
                <div>
                    <input type="text" onChange={e => this.updateField(e.target.value, 'firstname')} />
                </div>
            </>
           
        );
    }
}

export default Landing;