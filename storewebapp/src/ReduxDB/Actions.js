

export  const Filters = {
ADD_LIST_PROD:'ADD_LIST_PRODUCT',
ADD_CATEGORIES:"ADD_CATEGORIES",
ADD_PRODUCT_TO_CAR:"ADD_PRODUCT_TO_CAR",
REMOVE_PRODUCT_TO_CAR:"REMOVE_PRODUCT_TO_CAR",
SAVE_SESION:"SAVE_SESION",
SAVE_CAT_SELECTED:"SAVE_CAT_SELECTED",
RESTORE_CAR:"RESTORE_CAR"
    

}




export function AddListProduct (List){

    return{
        type:Filters.ADD_LIST_PROD,
        payload:List
    }

}

export function RestoreCar (ItemList){

    return{
        type:Filters.RESTORE_CAR,
        payload:ItemList
    }

}

export function RemoveProductCar (index){

    return{
        type:Filters.REMOVE_PRODUCT_TO_CAR,
        payload:index
    }

}

export function SaveSesion (Token){

    return{
        type:Filters.SAVE_SESION,
        payload:Token
    }

}
export function AddCategories (Cats){

    return{
        type:Filters.ADD_CATEGORIES,
        payload:Cats
    }

}
export function AddProductToCar (pruduct){

    return{
        type:Filters.ADD_PRODUCT_TO_CAR,
        payload:pruduct
    }

}

export function SelectCat (CatId){

    return{
        type:Filters.SAVE_CAT_SELECTED,
        payload:CatId
    }

}