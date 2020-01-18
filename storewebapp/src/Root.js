import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import productDetal from "./pages/ProductDetail";
import CarritoCompras from "./pages/Carrito";
import { connect } from "react-redux";
import Axios from "./utilites/AxiosInstance";
import {AddCategories,AddListProduct,SaveSesion,RestoreCar}from "./ReduxDB/Actions";
import update from "react-addons-update";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    withRouter
  } from "react-router-dom";


class RootComponent extends React.Component{

    state={
        page:{
            loading:false
        },
        productos:[],
        itemSelected:-1,
        GotoCar:false
        
    }

constructor(props){
    super(props)
}

componentDidMount(){
console.log("Root mound");
  let token = localStorage.getItem("sesionTemp");
 
  Axios.post("/Init",{TokenTemp:token}).then( (result)=>{
   // console.error(result.data);
   
    localStorage.setItem("sesionTemp" ,result.data.value.UsuarioToken );
    this.props.dispatch( AddCategories(result.data.value.Categorias) );

    this.props.dispatch( AddListProduct(result.data.value.Productos) );
    this.props.dispatch( SaveSesion(result.data.value.UsuarioToken) );
    this.props.dispatch( RestoreCar(result.data.value.Carrito) );
    this.setState( update(this.state,{
        productos:{$set:result.data.value.Productos}
    }) );

     
  }).catch(error=>{
    console.error(error);
  });
  
  



}

OnSelectedItemFilter = (index)=>{
    //this.state.itemSelected = index;
    console.log("indexed",index);
    this.setState(update(this.state,{
        itemSelected:{$set:index}
    }));


}
OnGotoCar = ()=>{

    this.setState(update(this.state,{
        GotoCar:{$set:!this.state.GotoCar}
    }));
    

}


render(){
   let navigateCar = this.state.GotoCar;
    return (<>
    <Header Carrito={ this.props.Carrito }  GotoCar={this.OnGotoCar}  onSelectedItem={this.OnSelectedItemFilter}  productos={this.state.productos}  />
    
    <div className='container' >
  
        <Router>
            <Switch>
                <Route exact path='/' component={Home} ></Route>
                <Route exact path='/productDetal/:IndexProd' component={productDetal} ></Route>
                <Route exact path='/Carrito' component={CarritoCompras} ></Route>
            </Switch>
            {
                navigateCar === true ?
                <Redirect to='/Carrito' />:
                <></>
            }

            { this.state.itemSelected !== -1 ?  
              <Redirect to={"/productDetal/"+this.state.itemSelected} />

            :<></> }
            



        </Router>

    </div>

    
    
    </>)

}




}


function MapProTypes(state){
 let newState= {...state};

return newState;

}


export default  connect(MapProTypes) (RootComponent);