import React, { Component } from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';

/* setting the initial state of inputs and binding the methods to the component */
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        inputUsernameValue: '',
        inputPasswordValue: '',
        }
        this.handleInputUserNameChange = this.handleInputUserNameChange.bind(this);
        this.handleInputPasswordChange = this.handleInputPasswordChange.bind(this);
    }  

    /* the handle change methods change the input value as the user types */
    handleInputUserNameChange(event) {
        this.setState({
        inputUsernameValue: event.target.value
        });
    }

    handleInputPasswordChange(event) {
        this.setState({
        inputPasswordValue: event.target.value
        });
    }


  render() {
    return (
      <div className='page'>
        <Header path1='/' link1='Home' path2='/register' link2='Register' path3='/login' link3='Login'/>
        <div className='main_container'>
        <div className='form_container'>
        <form
          className="login_form"
          onSubmit={this.props.handleLoginSubmit}
        >
          <label>Username:
          <input
            type="text"
            value={this.state.inputUserNameValue}
            name='username'
            onChange={this.handleInputUserNameChange}
          /></label><br/>
          <label>Password:
          <input
            type="password"
            value={this.state.inputPasswordValue}
            name='password'
            onChange={this.handleInputPasswordChange}
          /></label><br/>
          <button>Login</button>
        </form>
        </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;