import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
/* eslint-disable */
const backendURL = 'http://localhost:3001/api/v1';

export const removeItem = createAsyncThunk(
  'remove/item',
  async ({ item, classname,  id }, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.userToken; // Retrieve token from the state
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const data = await axios.delete(
        `${backendURL}/user/delete_resource/${id}`,
        { resource: classname, item},
        config,
      );
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  },
);