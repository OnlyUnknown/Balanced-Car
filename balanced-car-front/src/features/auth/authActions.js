import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const backendURL = 'http://localhost:3001';

const registerUser = createAsyncThunk(
  'auth/register',
  /* eslint-disable */
  async ({ email, password }, { rejectWithValue }) => {
    /* eslint-enable */
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await axios.post(
        `${backendURL}/api/v1/users/tokens/sign_up`,
        { email, password },
        config,
      );
    } catch (error) {
    // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  },
);

export default registerUser;
