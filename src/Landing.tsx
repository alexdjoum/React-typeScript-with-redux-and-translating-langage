import React, { Component } from 'react';
import {FormattedMessage} from "react-intl" 

type AppProps = {
    message: boolean;
};

type MyState = {
    count: number; 
    firstname: string;
    [field: string]: any;
    language: string
};

class Landing extends Component<AppProps, MyState> {
    state: MyState ={
        count: 0,
        firstname: "",
        language: ""
    }

    increment = (amt: number) => {
        // like this
        this.setState((prevState) => ({
          count: prevState.count + amt,
        }));
    };

    updateField = (value: string, field: string):void => {
        this.setState({[field]: value})
    }
    /**my render function which return JSX */
    render() {
        const {message} = this.props
        const {count, language} = this.state
        console.log("language < == > ", language)
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
                    <input 
                      type="text" 
                      onChange={e => this.updateField(e.target.value, 'firstname')} 
                    />
                </div>
                <label>
                        <select
                          value={language}
                          onChange={e => this.updateField(e.target.value, 'language')}
                        
                        >
                            <option value="EN">
                                <FormattedMessage
                                    //id="app.greeting"
                                    description="Greeting to welcome the user to the app"
                                    defaultMessage="English"
                                    
                                />
                            </option>
                            <option value="FR">French</option>
                        </select>
                </label>
            </>
           
        );
    }
}

export default Landing;