import { Router, Request, Response } from 'express';
import { addRules } from '../services/firewall';
// import { RuleMode } from '../interfaces/firewall';
import { addIpService } from '../models/ip.model';
import { Rule, RuleMode } from '../interfaces/firewall';

const createIPRule = async (req: Request, res: Response) => {
  const { values, mode } = req.body as { values: string[], mode: RuleMode };
  const result = await addRules('ips', values, mode); // sync operation and should be an async operation
  //const result = await addIpService(values, mode);
  res.status(200).json(result);
};
// add data validation & errors handelling 

export { createIPRule };

// you can change the syntax after exploring ^^