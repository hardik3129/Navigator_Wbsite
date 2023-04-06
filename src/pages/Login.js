
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Provider, auth } from "../firebase";
import withRouter from "../utils/withRouter";
import { GoogleLoginButton } from "react-social-login-buttons";

class Login extends React.Component {

  constructor(props,state) {

    super(props);
    state = {
      submitted : false,
    } 
    // console.info("this.props ++ ",this.props)
  }
    
  OnSubmitLogin = async (e) => {
    e.preventDefault()

    const { email, password } = {
        email : e.target.email.value,
        password : e.target.password.value
    }
    
    console.log(email, password);
    
    try {
      const res = await signInWithEmailAndPassword(auth, email, password)
      const obj = {
        email : res?.user?.email,
        id : res?.user?.uid
      }
      localStorage.setItem('userLogin',JSON.stringify(obj))
      this.props.router.navigate('/')
    } catch (error) {
      toast.error(new Error(error).message)
      console.log(error);
    }
      // let logobj = obj
      // if (logobj.email === 'admin@gmail.com') {
      //     logobj = {...obj, role : 'admin'}
      // } else {
      //     logobj = {...obj, role : 'user'}
      // }
      // localStorage.setItem('userLogin',JSON.stringify(logobj)) 
      // this.setState({submitted: true});
      // this.props.router.navigate('/')
  }

  onClickGoogleLogin = async () => {
    try {
      const res = await signInWithPopup(auth, Provider)
      const obj = {
        name : res.user.displayName,
        photourl : res.user.photoURL,
        email : res.user.email
      }
      localStorage.setItem('userLogin', JSON.stringify(obj))
      this.props.router.navigate('/')
    } catch (error) {
      toast.error(new Error(error).message)
      console.warn(error);
    }
  }

  render() {

    return (
      <div className="card login-pge shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light col-md-6">
        <div className="card-header bg-transparent border-0 text-center text-uppercase">
          <h3>User Login</h3>
        </div>
        <div className="card-body">
          <form
            onSubmit={this.OnSubmitLogin}
              
            encType="multipart/form-data"
          >
            <div className="form-group">
              <GoogleLoginButton onClick={this.onClickGoogleLogin} />
            </div>
            <div className="form-group">
              <label className="mb-0">
                Email<span className="text-danger">*</span>
              </label>
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Email"
                required
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
                required
              />
            </div>
            <Link to={'/registerd'} className="d-inline-block mb-2">register here</Link>
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

export default  withRouter(Login);
