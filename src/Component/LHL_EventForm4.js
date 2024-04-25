import React, { Component } from 'react'

class LHL_EventForm4 extends Component {
    constructor(props){
        super(props);
        this.state={
            Name:"Long Dragon"
        }
    }
    handelGetName = ()=>{
        alert(this.props.Name);
        this.setState({
            Name:this.props.Name
        })
    }
  render() {
    return (
      <div className='alert alert-info'>
        <h2>Lấy dữ liệu từ props</h2>
        <button onClick={this.handelGetName}>Get Name</button>
        <h2>Welcome to , {this.state.Name}</h2>
      </div>
    )
  }
}

export default LHL_EventForm4;
