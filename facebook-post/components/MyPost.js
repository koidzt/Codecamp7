import React, { Component } from 'react';

class MyPost extends Component {
  render() {
    const styPost = {
      border: '2px solid gray',
      width: '40%',
      margin: '15px auto',
      textAlign: 'left',
      backgroundColor: 'lightgray',
    };
    const picsum = 'https://picsum.photos/seed/picsum/';
    const imgsrc = picsum + this.props.width + '/' + this.props.height;

    return (
      <div className="MyPost" style={styPost}>
        <div className="box-user" style={{ color: 'blue', fontWeight: 'bold' }}>
          {this.props.name}
        </div>
        <div className="box-date" style={{ borderBottom: '2px solid gray' }}>
          <p>{new Date().toDateString()}</p>
          <p>{new Date().toLocaleTimeString()}</p>
        </div>
        <div className="box-message">
          <p>Happy time</p>
          <img src={imgsrc}></img>
        </div>
        <div className="post-button" style={{ borderTop: '2px solid gray', textAlign: 'right' }}>
          <button>Post</button>
        </div>
      </div>
    );
  }
}

export default MyPost;
