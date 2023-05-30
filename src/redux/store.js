import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
import todosReducer from "./features/todosSlice";
import commentReducer from "./features/commentSlice";
import invoiceReducer from './features/invoiceSlice'
// import ProductReducer from "./features/productSlice";
// import cartReducer from "./features/cartSlice";
// import messageReducer from "./features/Message";
// import helpReducer from "./features/HelpSlice";
// import answerReducer from "./features/answerSlice";
const store=configureStore({
    reducer:{
        auth: AuthReducer,
        todosState: todosReducer,
        todos: commentReducer,
        invoice: invoiceReducer,
        // project: ProductReducer,
        // cart:cartReducer,
        // message:messageReducer,
        // help:helpReducer,
        // answer:answerReducer,
    }
    
})

export default store