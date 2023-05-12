import React, { Component } from 'react'
import { withParams, withRedirect } from '../hocs'

class ShowParams extends Component {
    


  render() {
    return (
      <div>
        <h1>
            {this.props.params.page}
        </h1>
        <button onClick={()=>{this.props.redirect('/shop')}} > Click Me</button>
      </div>
    )
  }
}
export default withRedirect(withParams(ShowParams))