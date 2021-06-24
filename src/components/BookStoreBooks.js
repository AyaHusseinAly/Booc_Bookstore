import React, { Component } from 'react';
import '../style/search.css';
import '../style/ratingStars.css';
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import axios from 'axios';
import { Input, Space } from 'antd';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../style/headerFooter.css';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

class BookStoreBooks extends Component {
  constructor(props) {

    super(props);
    this.state = {
      deletedBook: "",
      mybooks:[]
        

    }
    this.handleDelete = this.handleDelete.bind(this);
  }

  // state={
    
        
  //   mybooks:[]

  // }

  async componentDidMount(){ //API Links will be edited to use from implemented Facade Class methods

    

    const res=await axios.get('http://localhost:3000/show_bookstore_books/'+this.props.match.params.id,
    {headers: {"Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT",
    "Access-Control-Allow-Headers": "Content-Type"}});
    
    console.log(res);
    this.setState({mybooks:res.data.bookstores});
    console.log(this.state.mybooks);
   
  }

    
  handleDelete =  async e => {
  // e.preventDefault();
  // console.log(param);

  const { param } = e.target.dataset;

     console.log(param);

       const res = await axios.delete('http://localhost:3000/destroyBook/'+param,{
           headers: {
               "Access-Control-Allow-Origin": "*",
               "Access-Control-Allow-Methods": "GET, POST, PUT , DELETE ",
               "Access-Control-Allow-Headers": "Content-Type",

           }
       });
       console.log(res);
       window.location.reload()
   
}

    render() {
    
      
      return(
        <div>
          <br></br>
          <div className="row " style={{backgroundColor: '#F8A488',marginLeft:"4px"}}>
            <div className="col-2">
                <h5> Index </h5>
            </div>
            <div className="col-2">
                <h5> Title </h5>
            </div>
            <div className="col-2">
                <h5> Isbn </h5>
            </div>
            <div className="col-2">
                <h5> Delete </h5>
            </div>

          </div>
          <br></br>

          <div >
                    {this.state.mybooks.map((mybook, index) => {
                           
                        return <div className="row " style={{marginLeft:"4px",paddingTop:"3px"}}>
                          <div className="col-2">
                          {index} 
                          </div>
                          <div className="col-2">
                          {mybook.book_title} 
                          </div>
                          <div className="col-2">
                            {mybook.book_isbn}
                          </div>
                          <div className="col-2">
                          <button type="button" data-param={mybook.id}onClick={this.handleDelete} className="btn ml-1" style={{backgroundColor:'#263044',width:'4.5rem'}}>
                            <i className="fas fa-trash" style={{color:'red'}}></i>
                          </button>
                          {this.state.deletedBook}

                          </div>
                           
                        </div>

                   
                    })}
              
          </div>
          <button className="py-1 px-3  my-3 ml-3 btn btn-lg" style={{ backgroundColor: '#F8A488', borderColor: '#F8A488' }} ><i className="fa fa-plus-circle" style={{ color: 'black', border: 'none' }} onClick={() => this.props.history.push('/addbook/'+this.props.match.params.id)}>Add New Book</i></button>

          


            

        </div>

      );
        
        
    
}
}


    export default BookStoreBooks;