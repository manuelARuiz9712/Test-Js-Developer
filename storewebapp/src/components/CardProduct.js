import React from "react";
import CarIcon from "../images/ic_supermarket.png";
import {Link} from "react-router-dom";


function CardProduct (props){

    return(
        <div className='card-item-prod' >

                                <Link  style={{textDecoration:"none",color:"black"}}  to={"/productDetal/"+props.index} >
                                <div className='row' >

<div className='col-12 col-sm-12 col-md-12' >
  <div className='container-img-card' >
     <img   src={props.img} alt='producto' className='img-card-produc'  />
  </div>
</div>
<div className='col-12 col-sm-12 col-md-12' >
<div className='title-prod-card-p' >
<h5  className='mt-2 ' >{props.nombre}</h5>
</div>
</div>
<div className='col-12 col-sm-12 col-md-12' >

<div className='footer-item-article' >

  <p className='label-price' >$ {props.price}</p>
<button className='btn-add'  >
    <img src={CarIcon} className='img-btn-car' ></img>
</button>

</div>

</div>

</div>
                                
                                </Link>

                                 
                               
                              


                            
                              </div>
    )

}

export default CardProduct;