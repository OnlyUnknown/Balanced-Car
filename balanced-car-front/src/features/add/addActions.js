import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
/* eslint-disable */
const backendURL = 'http://localhost:3001/api/v1';

export const addItem = createAsyncThunk(
  'add/item',
  async ({ item, classname, car_id }, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.userToken; // Retrieve token from the state
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const data = await axios.post(
        `${backendURL}/user/create_item`,
        { resource: classname, item, car_id: car_id},
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

export const addGroup = createAsyncThunk(
  'add/group',
  async ({ item }, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.userToken; // Retrieve token from the state
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const data = await axios.post(
        `${backendURL}/user/create_group`,
        {item},
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
