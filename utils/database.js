import mongoose from 'mongoose';

let isConnected = false;

const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: 'second-starter-kit',
    });

    isConnected = true;
    console.log('MongoDB Successfully connected');
  } catch (error) {
    console.error('MongoDB connection error:', error); 
  }
}

export default connectToDB;