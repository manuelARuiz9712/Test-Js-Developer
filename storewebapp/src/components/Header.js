import React from "react";
import CarIcon from "../images/ic_supermarket.png";
import Select from 'react-select';
import {connect} from "react-redux";
import update from "react-addons-update";
import {Redirect} from "react-router-dom";

class   Header extends React.PureComponent{

    state = {
        selectedOption: null,
        list:[]
      };

constructor(props){
super(props)



}

componentDidMount(){
console.log(  this.props );


}
componentDidUpdate(before,next){
   

}


handleChange = selectedOption => {
    
    this.setState(
      { selectedOption }
    );
    this.props.onSelectedItem(  selectedOption.value );
console.log(`Option selected:`, selectedOption.value, { selectedOption });

};



render(){
    let filtering = [];
    this.props.productos.forEach((element,index) => {
        filtering.push({
            value:index,
            label:element.Nombre
        });
        
    });
    return(
    <>
   
 
    <nav  className="navbar navbar-dark bg-dark">
           <div className='row bar-desing '  >
               <div className='col-4 col-md-2  d-none d-sm-none d-md-block ' >
                <label className='logo-app primary-color' >App store</label>
               </div>
               <div className='col-2 col-md-2  d-block d-sm-blok d-md-none ' >
                <label className='logo-app primary-color' >A.S</label>
               </div>
               <div className='col-8 col-sm-8 col-md-6' >
               {/*<input type='search' className='form-control'  /> */}
               <Select
             
        value={this.state.selectedOption}
        onChange={this.handleChange}
        options={filtering}
      
      />
                </div>
               <div className='col-2 col-sm-2 col-md-2' >

                    <div  onClick={(e)=>this.props.GotoCar() }  style={{flexDirection:"column"}} >
                      
                        <img  width={32} height={32} src={CarIcon} />
    <span className="badge badge-danger background-primary badge-car"> { this.props.Carrito.length }</span>
                    </div>

                </div>

           </div>
        </nav>
        </>
)

}

}




export default  Header ;