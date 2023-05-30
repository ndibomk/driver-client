import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const baseURL = "https://erytyu.onrender.com/";

const initialState = {
  invoice: [],
  addTodoStatus: "",
  addTodoError: "",
  getTodosStatus: "",
  getTodosError: "",
  deleteTodoStatus: "",
  deleteTodoError: "",
  updateTodoStatus: "",
  updateTodoError: "",
};

export const invoiceAdd = createAsyncThunk(
  "invoice/invoiceAdd",
  async (todo, { rejectWithValue }) => {
    try {
      const response = await axios.post(baseURL + "invoice", todo);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data);
    }
  }
);

export const getTodos = createAsyncThunk(
  "invoice/getinvoice",
  async (id = null, { rejectWithValue }) => {
    try {
      const response = await axios.get(baseURL1 + "pending");
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "invoice/deleteTodo",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(baseURL + "invoice/" + id);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data);
    }
  }
);

export const updateTodo = createAsyncThunk(
  "invoice/updateTodo",
  async (todo, { rejectWithValue }) => {
    try {
      const { _id, task, author, isComplete, date, uid } = todo;

      const response = await axios.put(baseURL + "invoice/" + _id, {
        task,
        author,
        
        isComplete,
        date,
        uid,
      });
      toast.success("user rejected Successfully");

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data);
    }
  }
);
export const rejectUser = createAsyncThunk(
  "invoice/rejectUser",
  async (todo, { rejectWithValue }) => {
    try {
      const { _id, task, author, isComplete, date, uid } = todo;

      const response = await axios.put(baseURL + "invoice/status/" + _id, {
        task,
        author,
        isComplete,
        date,
     
        uid,
      });
      toast.success("user activated Successfully");

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data);
    }
  }
);
const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {},
  extraReducers: {
    [invoiceAdd.pending]: (state, action) => {
      return {
        ...state,
        addTodoStatus: "pending",
        addTodoError: "",
        getTodosStatus: "",
        getTodosError: "",
        deleteTodoStatus: "",
        deleteTodoError: "",
        updateTodoStatus: "",
        updateTodoError: "",
      };
    },
    [invoiceAdd.fulfilled]: (state, action) => {
      // state.todos.push(action.payload);
      return {
        ...state,
        todos: [action.payload, ...state.todos],
        addTodoStatus: "success",
        addTodoError: "",
        getTodosStatus: "",
        getTodosError: "",
        deleteTodoStatus: "",
        deleteTodoError: "",
        updateTodoStatus: "",
        updateTodoError: "",
      };
    },
    [invoiceAdd.rejected]: (state, action) => {
      return {
        ...state,
        addTodoStatus: "rejected",
        addTodoError: action.payload,
        getTodosStatus: "",
        getTodosError: "",
        deleteTodoStatus: "",
        deleteTodoError: "",
        updateTodoStatus: "",
        updateTodoError: "",
      };
    },
    [getTodos.pending]: (state, action) => {
      return {
        ...state,
        addTodoStatus: "",
        addTodoError: "",
        getTodosStatus: "pending",
        getTodosError: "",
        deleteTodoStatus: "",
        deleteTodoError: "",
        updateTodoStatus: "",
        updateTodoError: "",
      };
    },
    [getTodos.fulfilled]: (state, action) => {
      return {
        ...state,
        todos: action.payload,
        addTodoStatus: "",
        addTodoError: "",
        getTodosStatus: "success",
        getTodosError: "",
        deleteTodoStatus: "",
        deleteTodoError: "",
        updateTodoStatus: "",
        updateTodoError: "",
      };
    },
    [getTodos.rejected]: (state, action) => {
      return {
        ...state,
        addTodoStatus: "",
        addTodoError: "",
        getTodosStatus: "rejected",
        getTodosError: action.payload,
        deleteTodoStatus: "",
        deleteTodoError: "",
        updateTodoStatus: "",
        updateTodoError: "",
      };
    },
    [deleteTodo.pending]: (state, action) => {
      return {
        ...state,
        addTodoStatus: "",
        addTodoError: "",
        getTodosStatus: "",
        getTodosError: "",
        deleteTodoStatus: "pending",
        deleteTodoError: "",
        updateTodoStatus: "",
        updateTodoError: "",
      };
    },
    [deleteTodo.fulfilled]: (state, action) => {
      const currentTodos = state.todos.filter(
        (todo) => todo._id !== action.payload._id
      );
      return {
        ...state,
        todos: currentTodos,
        addTodoStatus: "",
        addTodoError: "",
        getTodosStatus: "",
        getTodosError: "",
        deleteTodoStatus: "success",
        deleteTodoError: "",
        updateTodoStatus: "",
        updateTodoError: "",
      };
    },
    [deleteTodo.rejected]: (state, action) => {
      state = {
        ...state,
        addTodoStatus: "",
        addTodoError: "",
        getTodosStatus: "",
        getTodosError: "",
        deleteTodoStatus: "rejected",
        deleteTodoError: action.payload,
        updateTodoStatus: "",
        updateTodoError: "",
      };
    },
    [updateTodo.pending]: (state, action) => {
      return {
        ...state,
        addTodoStatus: "",
        addTodoError: "",
        getTodosStatus: "",
        getTodosError: "",
        deleteTodoStatus: "",
        deleteTodoError: "",
        updateTodoStatus: "pending",
        updateTodoError: "",
      };
    },
    [updateTodo.fulfilled]: (state, action) => {
      const updatedTodos = state.todos.map((todo) =>
        todo._id === action.payload._id ? action.payload : todo
      );
      return {
        ...state,
        todos: updatedTodos,
        addTodoStatus: "",
        addTodoError: "",
        getTodosStatus: "",
        getTodosError: "",
        deleteTodoStatus: "",
        deleteTodoError: "",
        updateTodoStatus: "success",
        updateTodoError: "",
      };
    },
    [updateTodo.rejected]: (state, action) => {
      return {
        ...state,
        addTodoStatus: "",
        addTodoError: "",
        getTodosStatus: "",
        getTodosError: "",
        deleteTodoStatus: "",
        deleteTodoError: "",
        updateTodoStatus: "rejected",
        updateTodoError: action.payload,
      };
      
    },
    [rejectUser.pending]: (state, action) => {
      return {
        ...state,
        addTodoStatus: "",
        addTodoError: "",
        getTodosStatus: "",
        getTodosError: "",
        deleteTodoStatus: "",
        deleteTodoError: "",
        updateTodoStatus: "pending",
        updateTodoError: "",
      };
    },
    [rejectUser.fulfilled]: (state, action) => {
      const updatedTodos = state.todos.map((todo) =>
        todo._id === action.payload._id ? action.payload : todo
      );
      return {
        ...state,
        todos: updatedTodos,
        addTodoStatus: "",
        addTodoError: "",
        getTodosStatus: "",
        getTodosError: "",
        deleteTodoStatus: "",
        deleteTodoError: "",
        updateTodoStatus: "success",
        updateTodoError: "",
      };
    },
    [rejectUser.rejected]: (state, action) => {
      return {
        ...state,
        addTodoStatus: "",
        addTodoError: "",
        getTodosStatus: "",
        getTodosError: "",
        deleteTodoStatus: "",
        deleteTodoError: "",
        updateTodoStatus: "rejected",
        updateTodoError: action.payload,
      };
      
    },
  },
});

export default invoiceSlice.reducer;