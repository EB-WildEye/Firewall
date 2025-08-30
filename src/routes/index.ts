import { Router } from 'express';
import ipsRouter from './ips';
import urlsRouter from './urls';
import portsRouter from './ports';
import rulesRouter from './rules';

const router: Router = Router();

router.use('/ip', ipsRouter);
router.use('/url', urlsRouter);
router.use('/port', portsRouter);
router.use('/rules', rulesRouter);

export default router;