import React from "react";



function CategoriaItem (props){

return(

    <div  onClick={ (e)=>props.onSelect(props.index) }  className={  props.selected === true? 'content-carrousel-item categoria-seleccionada' : "content-carrousel-item"  } >
                            <img src={props.img} width={32} height={32}  />
<label >{props.title}</label>
                                    
                        </div>
)

}

export default CategoriaItem;