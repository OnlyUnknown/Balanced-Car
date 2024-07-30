import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const backendURL = 'http://localhost:3001';

export const editUser = createAsyncThunk(
    'edit/profile',
    async ({ name, phone_number }, { rejectWithValue }) => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const response = await axios.patch(
          `${backendURL}/api/v1/user/update_profile`,
          { name, phone_number },
          config,
        );
        return response.data;
      } catch (error) {
        // return custom error message from backend if present
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message);
        }
        return rejectWithValue(error.message);
      }
    },
  );