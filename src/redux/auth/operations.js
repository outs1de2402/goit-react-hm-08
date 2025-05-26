import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import toast from "react-hot-toast";
import { api } from "../../services/api";
export { api } from "../../services/api";

// export const api = axios.create({
//   baseURL: "https://connections-api.goit.global",
// });

const setAuthHeader = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  delete api.defaults.headers.common.Authorization;
};
export const registerThunk = createAsyncThunk(
  "register",
  async (body, thunkAPI) => {
    try {
      const response = await api.post("/users/signup", body);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk("login", async (body, thunkAPI) => {
  try {
    const response = await api.post("/users/login", body);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    toast.error(error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logoutThunk = createAsyncThunk("logout", async (_, thunkAPI) => {
  try {
    await api.post("/users/logout");
    clearAuthHeader();
  } catch (error) {
    toast.error(error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const savedToken = thunkAPI.getState().auth.token;
      if (!savedToken) {
        return thunkAPI.rejectWithValue("Token does not exist");
      }
      setAuthHeader(savedToken);
      const response = await api.get("/users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
