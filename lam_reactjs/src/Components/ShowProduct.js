import React, { Component } from 'react'
import axios from 'axios';


export default class ShowProduct extends Component {
    constructor (props){
        super(props);
        this.state= {
            products:[],
        };
    }
    async componentDidMount() {  
        await axios.get(`http://127.0.0.1:8000/api/get-product`)
        .then(res => {
          this.setState(()=>({products:res.data}));
        })
      }
  render() {
    return (
        <div className="col-md-8">
        <h1>List Products</h1>
        <table className="table">
           <thead>
              <tr>
                   <th>STT</th>
                   <th>Name</th>
                   <th>Description</th>
                   <th>Price Unit</th>
                   <th>Price Promotion</th>
                   <th>Ảnh</th>

              </tr>
           </thead>
           <tbody>
              {
                this.state.products.map((pro,index)=>(
                  <tr key={index}>
                      <td>{index +1 }</td>
                      <td>{pro.name}</td>
                      <td>{pro.description}</td>
                      <td>{pro.unit_price} VND</td>
                      <td>{pro.promotion_price} VND</td>
                      <td>{pro.image}</td>
                      <td><label className="badge badge-warning" >Edit</label></td>
                      <td><label className="badge badge-danger">Remove</label></td>
                  </tr>
                ))
              }
           </tbody>
        </table>
    </div>
    )
  }
}
