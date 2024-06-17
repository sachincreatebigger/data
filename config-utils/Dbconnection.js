
import mongoose from 'mongoose';
 let mongoURI="mongodb+srv://user222:user222@sachin.y0vat3i.mongodb.net/?retryWrites=true&w=majority&appName=sachin"
//let mongoURI="mongodb://localhost:27017/perfectdb"

const connectiondb = async () => {
    
  try {
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit the process with an error code
  }
};

export default connectiondb;
