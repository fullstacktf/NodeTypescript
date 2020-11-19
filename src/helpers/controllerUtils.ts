import { assertIsNumber } from '../utils';

export const getRequestParamAsNumber = (req, res, paramName: string): number | undefined => {
  try {
    return assertIsNumber(req.params[paramName]);
  } catch (e) {
    res.status(404).json({ message: `Invalid ${paramName}` });
  }
};
