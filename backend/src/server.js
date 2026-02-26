import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});
