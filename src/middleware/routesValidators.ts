// fix my name 
import { Request, Response, NextFunction } from "express";
import Joi from "joi";


const inspectIPInput = (req: Request, res: Response, next: NextFunction) => {
  const { error } = ipSchema.validate(req.body);
  if (error) {
    const errorMessage = error.details && error.details[0] ? error.details[0].message : "Invalid input";
    return res.status(400).json({ error: errorMessage }); 
  }
  next();
};

// think about global validation and errors handlling

const ipSchema = Joi.object({
  values: Joi.array().items(Joi.string().ip()).required(),
  mode: Joi.string().valid("blacklist", "whitelist").required(),
});

export { inspectIPInput };