import React, { Component } from 'react';
import axios from "axios"
const { Provider, Consumer } = React.createContext()

class DataProvider extends Component {
    constructor() {
        super()
        this.state = {
            results: ""
        }
    }

    getLove = (fName, sName) => {
        if (fName === undefined && sName === undefined) {
            axios.get(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${fName}&sname=${sName}`, { headers: { "X-RapidAPI-Host": `love-calculator.p.rapidapi.com`, "X-RapidAPI-Key": process.env.REACT_KEY } }).then(res => {
                this.setState({
                    results: res.data
                })
            }).catch(function (error) {
                window.location.reload()
            });

        } else {
            axios.get(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${fName}&sname=${sName}`, { headers: { "X-RapidAPI-Host": `love-calculator.p.rapidapi.com`, "X-RapidAPI-Key": process.env.REACT_KEY } }).then(res => {
                this.setState({
                    results: res.data
                })
            }).catch(function (error) {
                window.location.reload()
            });

        }
    }

    render() {
        return (
            <Provider value={{
                getLove: this.getLove,
                ...this.state
            }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export default DataProvider;

export function withData(C) {
    return props => <Consumer>{value => <C {...value}{...props} />}</Consumer>
}