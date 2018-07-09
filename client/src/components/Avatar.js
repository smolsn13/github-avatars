import React, { Component } from 'react';

class Avatar extends Component {

  render() {
    return(
      <div>
        <img src={this.props.image} alt='' />
      </div>
    )
  }

}

export default Avatar;
