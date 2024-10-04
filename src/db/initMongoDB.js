import mongoose from 'mongoose';

// import { env } from '../utils/env.js';

export const initMongoDB = async () => {
  try {
    // const user = env('MONGODB_USER');
    // const pwd = env('MONGODB_PASSWORD');
    // const url = env('MONGODB_URL');
    // const db = env('MONGODB_DB');

    await mongoose.connect(
      'mongodb+srv://morugakatya:CbFWnD0fSTVComgD@cluster0.scvrq.mongodb.net/students?retryWrites=true&w=majority&appName=Cluster0',
    );
    console.log('Mongo connection successfully established!');
  } catch (e) {
    console.log('Error while setting up mongo connection', e);
    throw e;
  }
};

initMongoDB();