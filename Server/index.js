// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import exerciseRoutes from './routes/exercisesRoutes.js';
// import blogRoutes from './routes/blogRoutes.js'

// dotenv.config(); // Load environment variables

// const app = express();
// app.use(cors());
// app.use(express.json());
// MONGODB_URI = "mongodb+srv://fitquest6969:M93zwS2896cBZ0YR@fitquest.yocqh.mongodb.net/fitnessapp?retryWrites=true&w=majority"
// // Connect to MongoDB
// // eslint-disable-next-line no-undef
// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('MongoDB Connected'))
// .catch(err => console.log('Error connecting to MongoDB:', err));

// // Use the exercise routes
// app.use('/api', exerciseRoutes);
// app.use('/api',blogRoutes);

// // Basic route
// app.get('/', (req, res) => {
//   res.send('Backend server is running!');
// });

// // eslint-disable-next-line no-undef
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import exerciseRoutes from './routes/exercisesRoutes.js';
import blogRoutes from './routes/blogRoutes.js'

dotenv.config(); // Load environment variables

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));

app.use(express.json());
// const MONGO_URI = "mongodb+srv://fitquest6969:M93zwS2896cBZ0YR@fitquest.yocqh.mongodb.net/fitnessapp?retryWrites=true&w=majority";
// Connect to MongoDB
// eslint-disable-next-line no-undef
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('Error connecting to MongoDB:', err));

// Use the exercise routes
app.use('/api', exerciseRoutes);
app.use('/api',blogRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
