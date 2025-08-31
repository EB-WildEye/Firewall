import { Router, Request, Response } from 'express';
import { addRules, removeRules } from '../services/firewall';
import { RuleMode } from '../interfaces/firewall';
import { createIPRule } from '../controllers/ip.controller';
import { inspectIPInput } from '../middleware/routesValidators';


const router: Router = Router();

router.post('/', inspectIPInput, createIPRule);

router.delete('/', (req: Request, res: Response) => {
  const { values, mode } = req.body as { values: string[], mode: RuleMode };
  const result = removeRules('ips', values, mode);
  res.status(200).json(result);
});  // TODO: same thing like post 

export default router;