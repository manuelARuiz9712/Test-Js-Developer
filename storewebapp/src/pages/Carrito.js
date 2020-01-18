import React from "react";
import update from "react-addons-update";
import { connect } from "react-redux";
import { Link} from "react-router-dom";
import CarIcon from "../images/productos/games_audios_gamers.webp";
import {RemoveProductCar} from "../ReduxDB/Actions";
import Axios from "../utilites/AxiosInstance";

import {NotificationContainer, NotificationManager} from 'react-notifications';







function ProductCard(props){


    return ( 
        <div className='card' style={{marginLeft:"auto",marginRight:"auto"}}  >

           
               <div className='container-list-item' >
                   <div className='img-list-car-container' >

                     { props.data.Imagen !== undefined ? 
                    <img className='img-list-car'src={ require( "../images/productos/"+props.data.Imagen )} ></img>:
                    null 
                    }

                   </div>

                   <div className='container-info-prueba' >

    <h4 style={{textTransform:"lowercase"}} >{ props.data.Nombre }</h4>
                       
                       <h5 className='mt-2' >N° Items: {props.data.Cantidad}</h5>
                <h6 className='mt-2 color-green' >Price :{Intl.NumberFormat().format( props.data.Precio )}</h6>

                   </div>
                   <div className='container-delete-icon' >
                        <button onClick={(e)=>props.onDelete(props.data.productoId)}  className='btn btn-danger btn-delete' ><i className='fas fa-trash-alt' ></i></button>
                   </div>

               </div>

            

        </div>
    )
}




class CarritoCompras extends React.Component {


    constructor(props) {
        super(props)
    }

    state={
        productos:[],
        total:0
    }



    componentDidMount() {
        console.log(this.props);
     
     


       

    }
    

    RemoveProductFromCar = (productId)=>{

        let IndexP = -1;
     
        this.props.Carrito.forEach( (element,index)=>{
            if( element.ProductoId == productId ){
                IndexP = index;

            }
        });
     

        Axios.post("RemoveProductCar",{
            UserKey:this.props.Sesion,
            ProducId:productId
        }).then((result)=>{
            this.props.dispatch( RemoveProductCar(IndexP) ) ;
            NotificationManager.warning('product  removed');  
        }).catch( ()=>{
            NotificationManager.success('Error trying to remove item'); 

        });




    }



    render() {


        let newCar = [];
        let productos = [];
        this.props.Carrito.forEach(el => {
            newCar.push(el.ProductoId);
        });

     
        let countTotal = 0;
        this.props.Productos.forEach( element=>{
           if( newCar.indexOf( element.IdProducto )  !== -1 ){
               countTotal = countTotal + element.Precio;
                productos.push({
                    productoId:element.IdProducto,
                    Cantidad:1,
                    Nombre:element.Nombre,
                    Precio:element.Precio,
                    Imagen:element.ImagenName
                    
                });
           }


        })

        // this.setState(update(this.state,{
        //     productos:{$set:productos},
        //     total:{ $set:countTotal}  
        // }));
     
        return (
            <div className='content-view' >

                <div className='row' >

                    <div className='col-12 col-sm-12 col-md-12' >

                        <Link to='/' >back to home</Link>

                    </div>

                    <div className='col-12 col-sm-12 col-md-12' >

                        <h3>MY CAR </h3>

                    </div>

                    <div className='col-12 col-sm-12 col-md-12' >

                        <div className='row' >

                            <div className='col-12 col-sm-12 col-md-7' >

                             

                               <div className='row mb-3' >

                               
                                <div className='row  '  >

                                  
                                        { productos.map( (element,index)=>
                                          <div key={index} className='col-12 col-sm-12 col-md-12 mt-1' >

                                            <ProductCard  onDelete={this.RemoveProductFromCar}  data={element}  />
  
                                          </div>
                                         ) }

                                </div>

                                </div>

                               

                            </div>
                            <div className='col-12 col-sm-12 col-md-5' >

                                <div style={{padding:'10px'}} className='card' >
                                    <div className='row' >
                                        <div className='col-12 col-sm-12 col-md-12' >

                                            <h2>summary of your order</h2>

                                        </div>
                                        <div className='col-6 col-sm-6  col-md-6 mt-3' >
                                            <h5>Subtotal</h5>


                                        </div>
                                        <div className='col-6 col-sm-6  col-md-6 mt-3' >
                                        <h6> { new Intl.NumberFormat().format( countTotal ) }</h6>


                                        </div>
                                        <div className='col-6 col-sm-6  col-md-6 mt-3' >
                                            <h5>shipment</h5>


                                        </div>
                                        <div className='col-6 col-sm-6  col-md-6 mt-3' >
                                            <h6>10000</h6>


                                        </div>
                                        <div className='col-6 col-sm-6  col-md-6 mt-3' >
                                            <h5>To Pay</h5>


                                        </div>
                                        <div className='col-6 col-sm-6  col-md-6 mt-3' >
                                            <h6>{new Intl.NumberFormat().format( countTotal+10000 ) }</h6>


                                        </div>
                                        <div className='col-12 col-sm-12 col-md-12 ' >
                                            <button className='btn btn-dark btn-lg  mt-5  w-100 btn-rounded' >prossess order</button>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>



                <NotificationContainer/>
            </div>
        )


    }



}
function MapPropTypes(state) {
    let newState = { ...state };
    return {
        Carrito: newState.Carrito,
        Sesion: newState.Sesion.Token,
        Productos:newState.Produuctos

    }



}

export default connect(MapPropTypes)(CarritoCompras);
