import React, { Component } from 'react'
//Xử lý sự kiện với props, state

class LHL_EventForm3 extends Component {
    constructor(props){
        super(props);
        //tạo đối tượng dữ liệu thông qua state
        this.state = {
            Name: "Lê Hoàng Long",
            Job: "Boss SuperMarket"
        }
    }
//hàm xử lý sự kiện 
      handleChangeName = (Event)=>{
        this.setState({
            Name:"I'm Boss"
        })
    }  
    handleChangeJob = (Event)=>{
        this.setState({
            Job:"WibuKing"
        })
    }
  render() {
    return (
      <div className='alert alert-primary'>
        <h2>Thay đổi dữ liệu trong state</h2>
        <p>Dữ liệu:{this.state.Name} - {this.state.Job}</p>
        <button onClick={this.handleChangeName}>Thay đối Name</button>
        <button onClick={this.handleChangeJob}>Thay đổi Job</button>
      </div>
    )
  }
}

export default LHL_EventForm3;
