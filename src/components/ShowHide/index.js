import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {
    showFirstname: false,
    showLastname: false,
  }

  showFirstName = () => {
    this.setState(prevState => ({showFirstname: !prevState.showFirstname}))
  }

  showLastName = () => {
    this.setState(prevState => ({showLastname: !prevState.showLastname}))
  }

  renderfirstName = () => {
    const {showFirstname} = this.state
    if (showFirstname === true) {
      return <p className="name">Joe</p>
    }
    return null
  }

  renderLastName = () => {
    const {showLastname} = this.state
    if (showLastname === true) {
      return <p className="name">Jonas</p>
    }
    return null
  }

  render() {
    return (
      <div className="main-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="container">
          <div>
            <div className="button-container">
              <button
                className="label"
                type="button"
                onClick={this.showFirstName}
              >
                Show/Hide Firstname
              </button>
            </div>
            {this.renderfirstName()}
          </div>
          <div>
            <div className="button-container">
              <button
                className="label"
                type="button"
                onClick={this.showLastName}
              >
                Show/Hide Lastname
              </button>
            </div>
            {this.renderLastName()}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
