import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
import todosEeducer from "./features/todosSlice";

// import ProductReducer from "./features/productSlice";
// import cartReducer from "./features/cartSlice";
// import messageReducer from "./features/Message";
// import helpReducer from "./features/HelpSlice";
// import answerReducer from "./features/answerSlice";
const store=configureStore({
    reducer:{
        auth: AuthReducer,
        todosState: todosEeducer,

        // project: ProductReducer,
        // cart:cartReducer,
        // message:messageReducer,
        // help:helpReducer,
        // answer:answerReducer,
    }
    
})

export default store