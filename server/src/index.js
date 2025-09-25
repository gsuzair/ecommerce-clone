import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import productsRouter from './routes/products.js';
import usersRouter from './routes/users.js';
import categoriesRouter from './routes/categories.js';


const app = express();
const PORT = process.env.PORT ?? 4000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN ?? 'http://localhost:5173';

// core middleware
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: CLIENT_ORIGIN, credentials: true }));

app.get('/', (_req, res) => {
    res.json({ ok: true, msg: 'API is running', endpoints: ['/health', '/api/products'] });
});

// health check
app.get('/health', (_req, res) => res.json({ ok: true }));
// app.get('/api/products', (_req, res) => res.json({ ok: false }));

app.use('/api/products', productsRouter);
app.use('/api/users', usersRouter);
app.use('/api/categories', categoriesRouter);

// 404 handler
app.use((req, res) => res.status(404).json({ error: 'Not found' }));


// error handler
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Server error' });
});


app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}`);
});
