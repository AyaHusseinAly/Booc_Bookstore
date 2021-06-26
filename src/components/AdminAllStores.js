import React, { Component } from 'react';
import Popup from "reactjs-popup";
import '../style/AllStores.css';
import axios from 'axios';

class AdminAllStores extends Component {
    constructor(props) {
        super(props);
        this.state={
        stores:[],
        index: 0,
        bookName: "",
    }}

    
    async componentDidMount(){
       await axios.get("http://localhost:3000/seach/store/",{ params: {q: this.state.bookName}})
        .then(response => {
        console.log(response)
        this.setState({stores:response.data.stores});
        }); 
    }

    
    handle= async () => {
       
       await axios.get("http://localhost:3000/seach/store/",{ params: {q: this.state.bookName}})
        .then(response => {
        console.log(response)
        this.setState({stores:response.data.stores});
        }); 
        
    }

    

    

    render() {
    
        /*const deleteStore=(id)=>{
            let data={id:id}
            axios.post("http://localhost:3000/deleteStore",data,
            {headers: {"Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT",
            "Access-Control-Allow-Headers": "Content-Type"}})
            .then(response => {
                console.log(response)
                axios.get("http://localhost:3000/stores")
                .then(response => {
                    console.log(response)
                    this.setState({stores:response.data.stores});
                });
                 
            });  
        }*/
       

        return (
            <div>
                <button className="py-1 px-3  my-4 mr-4 btn btn-lg float-right" style={{ backgroundColor: '#F8A488', borderColor: '#F8A488' }} ><i className="fa fa-plus-circle" style={{ color: 'black', border: 'none' }}><a href="/create/BookStores" style={{ color: 'black',textDecoration: 'none' }}>Add New Store</a></i></button>
                <br/>
                  <input type="text" className="form-control col-lg-4 col-xs-4 float-right mx-3 my-1" placeholder="Enter a book name" aria-label="Disabled input example" value={this.state.bookName}
                      onChange={(e) => this.setState({bookName: e.currentTarget.value} , this.handle ) } />
                <br/>
                <div className="px-5 py-2">
                    <h5 style={{color:'#F8A488',textDecoration:'underline',marginBottom:'1rem'}}>All Stores</h5>
                    <table  className="table">
                        <thead>
                            <tr>
                                <th scope="col">Store Name</th>
                                <th scope="col">Located</th>
                                <th scope="col">Store Type</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.stores.map(store =>
                            <tr>
                            {/* <td><a href={"/addbook/"+store.id} style={{ color: 'black',textDecoration: 'none' }}>{store.name}</a></td> */}
                                <td><a href="#" style={{ color: 'black',textDecoration: 'none' }}>{store.name}</a></td>
                                <td>{store.distict} </td>
                                <td>{store.kind}</td>
                                <td><a href="#"  className="adminLink"> Delete Store </a></td>
                                <td><a href={"/show_bookstore_books/"+store.id}  className="adminLink"> Show All Books </a></td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                    <div className="row d-flex justify-content-center " style={{textAlign: "center"}}></div>
                </div>
            </div>
    );
    }
}


export default AdminAllStores;