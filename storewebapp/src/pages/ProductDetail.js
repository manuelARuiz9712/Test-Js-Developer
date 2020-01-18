import React from "react";
import { Link,withRouter } from "react-router-dom";
import {connect} from "react-redux";
import Axios from "../utilites/AxiosInstance";
import {AddProductToCar as SaveToLocale} from "../ReduxDB/Actions";
import {NotificationContainer, NotificationManager} from 'react-notifications';


class ProductDetail extends React.Component{


state={
    articulo:{}
}


constructor(props){
    super(props)


}

componentDidMount(){
   
    console.log(this.props);
    this.setState({
        articulo:this.props.Productos[ this.props.match.params.IndexProd ]   
    });
}


AddProductToCard = ()=>{
   let params= {
    UserKey:this.props.Sesion,
    ProducId:this.state.articulo.IdProducto
   }
    let found = false;
    this.props.Carrito.forEach( element=>{

         if (element.ProductoId  === this.state.articulo.IdProducto ){
             found = true;

         }

    } );

     if( found ){
        NotificationManager.warning('this product is in the car');  
     }else{


        Axios.post("AddProduct",params).then( result=>{
            console.log(result);
            if( result.data.state == true ){
   
              
               this.props.dispatch( SaveToLocale({
                   ProductoId:this.state.articulo.IdProducto,
                   Cantdad:1,
                   IdItem:result.data.value.insertId
                   
               }));
               NotificationManager.success('product  added');  
            }else{
               NotificationManager.error('Error adding the product');
            }
   
           console.log(result);
       }).catch(error=>{
           console.log(error);
        NotificationManager.error('Error adding the product');
       });

     }

    


}



render(){

return (
<div className='content-view' >

<div className='row' >
    <div className='col-12 col-sm-12 col-md-12' >

        <Link to='/' >back to home</Link>

    </div>

    <div className='col-12 col-sm-12 col-md-12' >

<h3>PRODUCT DETAIL </h3>

    </div>


    <div className='col-12 col-sm-12 col-md-7 ' >
    {this.state.articulo.ImagenName !== undefined?
     <img src={ require("../images/productos/"+this.state.articulo.ImagenName) } alt={this.state.articulo.ImagenName}  className='img-product-detail'  />
    :
    null}
       

        

    </div>
    <div className='col-12 col-sm-12 col-md-5' >

        <div className='card' >

            <div className='card-header' >

<p className='detail-product-title' >{this.state.articulo.Nombre }</p>
<p className='product-price' >$ {  new Intl.NumberFormat().format( this.state.articulo.Precio ) }</p>
                <p className='detail-product-stock' >Available </p>

                <p className='indicators-text' ><i className='fas fa-shield-alt' ></i> Purchase Protected, receive the product you expected or your money back.</p>

                <button  onClick={ this.AddProductToCard }  className='btn btn-lg btn-dark w-100' >Add to car</button>
    
            </div>

        </div>
         
    </div>

</div>
<NotificationContainer/>
</div>

)

}


}

function mapPropTypes(state){
    let newState = {...state};
    return {
        Productos:newState.Produuctos,
        Sesion:newState.Sesion.Token,
        Carrito:newState.Carrito
    }
}

export default  connect(mapPropTypes) (withRouter(ProductDetail)) ;