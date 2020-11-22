import { findUserById } from '../users/service';

export const authenticate = (req, res, next) => {
  console.log('paso por aqui', req.method);
  console.log('req.url: ', req.url);
  const idToFind: number = Number(req.headers.id);
  const user = findUserById(idToFind);
  console.log('Usuario:', user);
  if (req.url.includes('admin')) {
    if (user && user.rol === 'admin') {
      next();
      return;
    } else {
      res.sendStatus(404);
      return;
    }
  }
  if (req.method == 'GET') {
    next();
    return;
  }
  if (req.headers.clavesupersegura === '1234') {
    next();
  } else {
    console.log('no puede pasar');
    res.sendStatus(403);
  }
};
