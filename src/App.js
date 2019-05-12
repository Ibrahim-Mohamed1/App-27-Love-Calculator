import React, { Component } from 'react';
import "./App.css"
import { withData } from './DataProvider';

class App extends Component {
  constructor() {
    super()
    this.state = {
      fName: "",
      sName: "",
      loading: ""
    }
  }

  componentDidMount() {
    this.props.getLove()
  }

  handlefNameChange = (e) => {
    e.preventDefault()
    this.setState({
      fName: e.target.value
    })
  }
  handlesNameChange = (e) => {
    e.preventDefault()
    this.setState({
      sName: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.getLove(this.state.fName, this.state.sName)
    this.setState({
      sName: "",
      fName: "",
      loading: "searching"
    })
  }

  render() {
    const styles = {
      box: {
        textAlign: "center",
        width: 300,
        display: "block",
        margin: "auto",
        height: 350,
        overflowY: 'scroll',
        marginTop: 30,
        border: "white solid",
        borderRadius: 10
      },
      form: {
        textAlign: "center",
        zoom: 2,
        marginTop: 5
      },
      button: {
        display: "block",
        margin: "auto",
        marginTop: ".5em",
        zoom: .9,
        border: "white solid",
        borderRadius: 5,
        backgroundColor: "red"
      },
      title: {
        textAlign: "center",
        width: "90%",
        display: "block",
        margin: "auto",
        color: "red"
      }
    }
    return (
      <div>
        <h1 style={styles.title}><img style={{ width: 100, margin: 0, padding: 0 }} src="https://i.pinimg.com/originals/ca/69/f2/ca69f2feeb21f89136bfd7fea9083929.png" alt="" /> <img style={{ width: 100, margin: 0, padding: 0 }} src="https://i.pinimg.com/originals/2d/7a/95/2d7a95092208219e09be86e42807a09c.png" alt="" /></h1>
        <form style={styles.form} onSubmit={this.handleSubmit} action="">
          <input
            style={{ outline: "none", borderRadius: 2, border: "white", textAlign: "center" }}
            type="text"
            name="fName"
            value={this.state.fName}
            onChange={this.handlefNameChange}
            autoComplete='off'
            placeholder="Your name"
            autoFocus
            required
          />
          <br />
          <input
            style={{ outline: "none", borderRadius: 2, border: "white", textAlign: "center" }}
            type="text"
            name="sName"
            value={this.state.sName}
            onChange={this.handlesNameChange}
            autoComplete='off'
            placeholder="Crushes name"
            required
          />
          <br />
          <button className='button' style={styles.button}>Search</button>
        </form>
        {this.state.loading === "" || this.props.results.fname === "undefined" ? null :
          <>
            <div style={{ paddingTop: 25 }}>
              <span style={{ textTransform: "capitalize", color: 'white', fontFamily: "cursive" }}>{this.props.results.fname} </span>
              <img style={{ width: 50, margin: 0, padding: 0 }} src="https://i.pinimg.com/originals/e4/15/0b/e4150b231f85f9a18697ee41adda4999.png" alt="" />
              <span style={{ textTransform: "capitalize", color: 'white', fontFamily: "cursive" }}> {this.props.results.sname}</span>
            </div>
            {this.props.results.percentage < 75 && this.props.results.percentage > 25 ?
              <h1 style={{ textTransform: "capitalize", color: 'orange', fontFamily: "cursive", margin: 0 }}>{this.props.results.percentage}%</h1> : this.props.results.percentage < 25 ?
                <h1 style={{ textTransform: "capitalize", color: 'red', fontFamily: "cursive", margin: 0 }}>{this.props.results.percentage}%</h1> :
                <h1 style={{ textTransform: "capitalize", color: 'lime', fontFamily: "cursive", margin: 0 }}>{this.props.results.percentage}%</h1>
            }
            <h2 style={{ textTransform: "capitalize", color: 'white', padding: 0 }}><span style={{ color: "red", fontSize: "1em" }}>Advice:</span> {this.props.results.result}</h2>
          </>
        }
      </div>
    );
  }
}

export default withData(App);