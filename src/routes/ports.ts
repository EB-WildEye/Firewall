import { Router, Request, Response } from 'express';
import { addRules, removeRules } from '../services/firewall';
import { RuleMode } from '../interfaces/firewall';

const router: Router = Router();

router.post('/', (req: Request, res: Response) => {
  const { values, mode } = req.body as { values: number[], mode: RuleMode };
  const result = addRules('ports', values, mode);
  res.status(200).json(result);
});

router.delete('/', (req: Request, res: Response) => {
  const { values, mode } = req.body as { values: number[], mode: RuleMode };
  const result = removeRules('ports', values, mode);
  res.status(200).json(result);
});

export default router;