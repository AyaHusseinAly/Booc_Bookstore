import React, { Component } from 'react';
import '../style/admin.css';
import BookRow from './BookRow';
import AdminReports from './AdminReports';
import AdminBookStores from './AdminBookStores';
import 'antd/dist/antd.css';
import axios from 'axios';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;


class Admin extends Component {
      state={
        fiction:[],
        thriller:[],
        horror:[]
    }

    componentDidMount(){
        axios.get("https://www.googleapis.com/books/v1/volumes?q=+subject:Fiction&startIndex=0&orderBy=newest&key=AIzaSyAzt2S4sYkZLX6fAAWM6OMeUVH4h8l_bdg")
        .then(response => {
            this.setState({fiction:response.data.items});
        });
        axios.get("https://www.googleapis.com/books/v1/volumes?q=+subject:thriller&startIndex=0&orderBy=newest&key=AIzaSyAzt2S4sYkZLX6fAAWM6OMeUVH4h8l_bdg")
        .then(response => {
            this.setState({thriller:response.data.items});
        });
        axios.get("https://www.googleapis.com/books/v1/volumes?q=+subject:horror&startIndex=0&orderBy=newest&key=AIzaSyAzt2S4sYkZLX6fAAWM6OMeUVH4h8l_bdg")
        .then(response => {
            this.setState({horror:response.data.items});
        });
 


      }
    render() {

        return (
                      
        <div className="p-5">
          <Tabs defaultActiveKey="1" type="card" size='large'>
                    <TabPane tab="Reports" key="1">
                          <AdminReports></AdminReports>
                    </TabPane>  
                    <TabPane tab="Bookstores" key="2">
                    {/* <div className="container books_container">
                            <BookRow items={this.state.fiction.slice(0,6)}></BookRow>
                            <BookRow items={this.state.thriller.slice(0,6)}></BookRow>
                            <BookRow items={this.state.horror.slice(0,6)}></BookRow>

                        <div className="row d-flex justify-content-center " style={{textAlign: "center"}} >

                          <a href="#collapse" style={{textAlign: "center"}} >  More... </a>

                        </div>
                      </div> */}
                      <AdminBookStores></AdminBookStores>
                    </TabPane>
                                      
          </Tabs>
      
        <hr/>

        </div>

  	
	

    );
    }
}


export default Admin;