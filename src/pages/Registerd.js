import React from "react";
import withRouter from "../utils/withRouter";

class Registerd extends React.Component {


  constructor(props,state) {

    super(props);
    state = {
      submitted : false,
    } 
    console.info("this.props ++ ",this.props)
  }
    OnSubmitLogin = (e) => {
      e.preventDefault()
        const obj = {
            email : e.target.email.value,
            pasword : e.target.password.value
        }
        let logobj = obj
        if (logobj.email === 'admin@gmail.com') {
            logobj = {...obj, role : 'admin'}
        } else {
            logobj = {...obj, role : 'user'}
        }
        localStorage.setItem('userLogin',JSON.stringify(logobj)) 
        this.setState({submitted: true});
        this.props.router.navigate('/')
    }

  render() {

    return (
      <div className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light col-md-6">
        <div className="card-header bg-transparent border-0 text-center text-uppercase">
          <h3>User Registerd</h3>
        </div>
        <div className="card-body">
          <form
            onSubmit={this.OnSubmitLogin}
              
            encType="multipart/form-data"
          >
            <div className="form-group">
              <label className="mb-0">
                Email<span className="text-danger">*</span>
              </label>
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label className="mb-0">
                Password<span className="text-danger">*</span>
              </label>
              <input
                name="password"
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <p className="text-center mb-0">
              <button
                type="submit"
                className="btn btn-primary btn-lg w-100 text-uppercase"
              >Login</button>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default  withRouter(Registerd);
