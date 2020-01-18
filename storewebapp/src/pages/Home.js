import React from "react";
import "../App.css"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CategoryItem from "../components/CategoryItem";
import CardProduct from "../components/CardProduct";
import {connect} from "react-redux";





const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };



class Home extends React.Component{

constructor(props){
    super(props)
}


state={
  CategoriaSeleccionada:-1,
  CategoriaNombre:"",
  CategoriaSeleccionadaId:-1
}


componentDidMount(){

  //  let temporalSesion = localStorage.getItem("sesionTemp");

  //  if( temporalSesion  == null && this.props.Sesion.Token == undefined ){
  //    console.log("El usuario no tiene sesion" );

  //  }else{
    
  //   console.log("el usuario tiene sesion");
   


  //  }
  

}









SeleccionarCategoria = (index)=>{
  console.log("Selected Click");

   let catg = this.props.Categories[index];
   this.setState({
    CategoriaSeleccionada:index,
    CategoriaNombre:catg.nameCat,
    CategoriaSeleccionadaId:catg.idCategoria
   });

}



render(){

        return(
          <>
        

   
            <div className='row' >

                <div className='col-12 cl-sm-12 col-md-12' >
                    <div className='container-categories' >
                      <h5><i className='fas fa-star primary-color' ></i>  Categories</h5>
                      <br/>
                        <Carousel 
                        arrows={false}
                        responsive={responsive}>
                         {
                           this.props.Categories.map( (element,index)=>
                            <CategoryItem key={index}  onSelect={this.SeleccionarCategoria}  selected={this.state.CategoriaSeleccionada == index} index={index}     key={element.idCategoria} img={ require("../images/"+element.nameIcon) } title={element.nameCat} />
                            )
                         }
                          
                       
                       
                            
                        </Carousel>
                    </div>

                </div>
                <div  className='col-12 col-sm-12 col-md-12' >
                    <div style={{marginBottom:'20%'}} >
                    <h4 className='mt-5 text-uppercase' > <i className='fas fa-box '  ></i> Todos los productos</h4>

                  

                      <div className='row' >

                        {
                          this.props.Produuctos.map( (element,index)=>
                            this.state.CategoriaSeleccionadaId === -1?
                            <div key={element.IdProducto } className='col-6 col-sm-6 col-md-3 mt-5' >
                             
                              
                              <CardProduct    index={index}  img={ require('../images/productos/'+element.ImagenName) } nombre={ element.Nombre } price={ new Intl.NumberFormat().format( element.Precio ) } />
                            
                           </div>
                            :
                            this.state.CategoriaSeleccionadaId === element.CategoriaId?
                              <div key={element.IdProducto }  className='col-6 col-sm-6 col-md-3 mt-5' >
                                
                                <CardProduct   index={index}  img={ require('../images/productos/'+element.ImagenName) } nombre={ element.Nombre } price={ new Intl.NumberFormat().format( element.Precio ) } />
                              
                            </div>
                            :<></>
                          )
                        }

                        

                

                      </div>
                    </div>

                  
                </div>


            </div>   
       
           </>
        )
    
}


}

function MapPropTypes(state){


return {...state};


}

export default connect(MapPropTypes) (Home);