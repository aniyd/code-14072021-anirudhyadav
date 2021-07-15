import { body, validationResult } from 'express-validator';
import { NextFunction, Request, Response, Router } from 'express';

import BMIService from './../../services/bmi';

const router: Router = Router();

const validateBody = [
    body('data').exists().isArray(),
    body('data.*.Gender').isString().isIn(['Male', 'Female']),
    body('data.*.HeightCm').exists().isNumeric(),
    body('data.*.WeightKg').exists().isNumeric()
];

router.post('/count/overweight', validateBody, (req: Request, res: Response, next: NextFunction) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({errors: errors.array()});
        }
        res.json(BMIService.countOverWeightPeople(
            req.body.data
        ));
    } catch (err) {
        throw new Error(`Error in evaluating the number of overweight people.`);
    }
});

export default router;