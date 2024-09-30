let isConnected = false;

export const connectToDB = async () => {
  if (typeof window !== 'undefined') {
    // Prevent this code from running on the client-side
    return;
  }

  const mongoose = require('mongoose'); // Use require to load Mongoose only on the server side
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
};
