import { Router, Request, Response } from 'express';
import { getAllRules, toggleRuleStatus } from '../services/firewall';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  const rules = getAllRules();
  res.status(200).json(rules);
});

router.patch('/', (req: Request, res: Response) => {
  const updatedRules = toggleRuleStatus(req.body);
  res.status(200).json({ updated: updatedRules });
});

export default router;
