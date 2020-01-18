import {Filters} from "./Actions";
import update from "react-addons-update";





const Estado = {
    Categories:[],
    Produuctos:[],
    Sesion:{},
    Carrito:[],
    CategoriaSeleccionada:0

}


export default function StoreApp( state = Estado,action ){
   // let newState = {...state};
    console.log( action );
    switch (action.type) {
        case Filters.ADD_CATEGORIES:
           // newState.Categories = action.payload;
            return update(state,{
                Categories:{$set:action.payload}
            });
            
            break;

        case Filters.ADD_LIST_PROD:
               // newState.Produuctos = action.payload;
                return update(state,{
                    Produuctos:{$set:action.payload}
                });
                
                break;

                case Filters.ADD_PRODUCT_TO_CAR:
                
                    return update(state,{
                        Carrito:{$push:[action.payload]}
                    });
                    
                    break; 
                    
                case Filters.REMOVE_PRODUCT_TO_CAR:
                   let newRes =[];
                   state.Carrito.forEach((ele,index)=>{
                        if( index !== action.payload  ){
                            newRes.push(ele);
                        }
                   });
                      
                   
                    return update(state,{
                        Carrito:{$set:newRes}
                    });
                    
                    break;     

                
        case Filters.SAVE_SESION:
                   // newState.Sesion.Token = action.payload;
                    return update(state,{
                        Sesion:{
                            Token:{$set:action.payload}  
                        }
                    });
                    
         break;  
         
         case Filters.RESTORE_CAR:
                   // newState.Sesion.Token = action.payload;
                    return update(state,{
                        Carrito:{$set: action.payload}
                    });
                    
         break;  
    
        default:
            return state;
    }

   
}
