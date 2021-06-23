// import React, { Component } from 'react';
// import axios from 'axios';
// import '../../style/sign_up.css';
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import DatePicker from 'react-date-picker'
// class Registration extends Component {
    
//     constructor(props){
//         super(props);
//         this.state = {
//             email: "",
//             username: "",
//             name: "",
//             password: "",
//             password_confirmation: "",
//             bio: "",
//             dob: "",
//             avatar: "",
//             formErrors: {}

//         }
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
        
        
//     }
    
//     handleSubmit(event){
//         console.log("submitted");
//         axios.post("http://localhost:3000/users", {
//             user: {
//                 email: this.state.email,
//                 password: this.state.password,
//                 password_confirmation: this.state.password_confirmation,
//                 username: this.state.username,
//                 name: this.state.name,
//                 bio: this.state.bio
//             }
//         },
//         {withCredentials: false}
//         )
//         .then(response => {
//             console.log(response.data);
//             if (response.data.message === 'Register success'){
//                 console.log("reg successful");
//                 this.handleSuccessfulAuth(response.data);
//             }
//             else if (response.data.message === 'Something went wrong'){
//                 this.setState({
//                     formErrors: response.data.errors
//                 })

//             }
//         })
//         .catch(error =>{
//             console.log("reg error", error);
//         });
//         event.preventDefault();
//     }

//     handleChange(event){
//         this.setState({
//             [event.target.name]: event.target.value
//         });
//     }
//     handleSuccessfulAuth(data){
//         this.props.handleLogin(data);
//         this.props.history.push("/");
//     }
   
//     render() { 
//         var errors=[];
//         if(this.state.formErrors){
//             for(const error in this.state.formErrors){
//                 for(const [i,detail] of this.state.formErrors[error].entries()){
//                     errors.push(<li>{error} {detail}</li>);
//                 }
//             }
//         }
//         return ( 
//             <div className="outer">
                    
//             <div className="mt-3 inner">
//             <div className="alert alert-danger m-4">
//                         {errors}
//                     </div>
//                 <form onSubmit={this.handleSubmit}>
//                 <h3>Register</h3>
//                 <br/>

//                 <div className="form-group">
//                     <label>Full name</label>
//                     <input 
//                     type="text" 
//                     className="form-control" 
//                     name="name" 
//                     placeholder="Full Name" 
//                     value={this.state.name} 
//                     onChange={this.handleChange}  />
//                 </div>

//                 <div className="form-group">
//                     <label>Username</label>
//                     <input 
//                     type="text" 
//                     className="form-control" 
//                     name="username" 
//                     placeholder="Username" 
//                     value={this.state.username} 
//                     onChange={this.handleChange}
//                     required  />
//                 </div>

//                 <div className="form-group">
//                     <label>Email</label>
//                     <input 
//                     type="email" 
//                     className="form-control" 
//                     name="email" 
//                     placeholder="email@example.com" 
//                     value={this.state.email} 
//                     onChange={this.handleChange}
//                     required  />
//                 </div>

//                 <div className="form-group">
//                     <label>Password</label>
//                     <input 
//                     type="password" 
//                     className="form-control" 
//                     name="password" 
//                     placeholder="Your Password" 
//                     value={this.state.password} 
//                     onChange={this.handleChange}
//                     required/>
//                 </div>

//                 <div className="form-group">
//                     <label>Confirm Password</label>
//                     <input 
//                     type="password" 
//                     className="form-control" 
//                     name="password_confirmation" 
//                     placeholder="Type Password Again" 
//                     value={this.state.password_confirmation} 
//                     onChange={this.handleChange}
//                     required/>
//                 </div>

//                 <div className="form-group mb-5">
//                     <label>Bio</label>
//                     <textarea
//                     rows="8"
//                     className="form-control" 
//                     name="bio"
//                     value={this.state.bio} 
//                     onChange={this.handleChange}></textarea>
//                 </div>

//                 <div className="form-group mb-5">
//                     <label>Date of birth</label>
//                     <DatePicker
//                     className="form-control" 
//                     name="dob"
//                     onChange={this.handleChange}
//                     value={this.state.dob} 
//                     />
//                 </div>
                

//                 <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
//                 <p className="forgot-password text-right">
//                     Already registered <a href="/login">log in?</a>
//                 </p>
//             </form>
            
//         </div>
//         </div>);
//     }
// }
 
// export default Registration;