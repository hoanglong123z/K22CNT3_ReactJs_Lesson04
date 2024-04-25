import React, { Component } from 'react'

 class LHL_EventForm extends Component {

    //Hàm xử lý sự kiện
    eventHandleClick1 = ()=>{
        alert("Event handle 1");
    }
    eventHandleClick2(){
        alert("Event Click 2");
    }

  render() {
    return (
      <div className='alert alert-danger'>
        <h2>Event handle</h2>
        {/* gọi hàm xử lý sự kiện khi render */}
        <button onClick={this.eventHandleClick1()}>Click1</button>
        {/* Gọi Hàm xử lý khi Click */}
        <button onClick={this.eventHandleClick2}>Click2</button>
      </div>
    )
  }
}

export default LHL_EventForm;