import { Router } from 'express';
import bmiRouter from './bmi';

// Export the base-router
const baseRouter = Router();
baseRouter.use('/bmi', bmiRouter);
export default baseRouter;
