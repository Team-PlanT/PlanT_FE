import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Plan } from '../types';

export const loadPlanById = createAsyncThunk(
  'detail/loadById',
  async (p_id: string) => {
    const response = await axios.get<Plan[]>(
      `http://localhost:8080/api/detail/${p_id}`,
    );
    return response.data;
  },
);
