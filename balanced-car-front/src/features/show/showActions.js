/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const backendURL = 'http://localhost:3001';

export const showItem = createAsyncThunk(
  'show/item',
  async ({ id, classname }, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.userToken; // Retrieve token from the state
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(
        `${backendURL}/api/v1/user/show/${classname}/${id}`,
        config,
      );
      return { data }; // Return a success message or an object
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  },
);

export const indexItems = createAsyncThunk(
  'show/index',
  async ({ classname }, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.userToken; // Retrieve token from the state
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(
        `${backendURL}/api/v1/user/index/${classname}`,
        config,
      );
      return { data }; // Return a success message or an object
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  },
);

export const indexGroups = createAsyncThunk(
  'show/groups',
  async ({ groups }, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.userToken; // Retrieve token from the state
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(
        `${backendURL}/api/v1/user/index/${groups}`,
        config,
      );
      return { data }; // Return a success message or an object
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  },
);

export const indexItemsOfItem = createAsyncThunk(
  'show/index',
  async ({ classname, id }, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.userToken; // Retrieve token from the state
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(
        `${backendURL}/api/v1/user/index/${classname}/${id}`,
        config,
      );
      return { data }; // Return a success message or an object
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  },
);

/* eslint-enable import/prefer-default-export */
