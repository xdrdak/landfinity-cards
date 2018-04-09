import db from './db.json';
import slugify from '../utils/slugify';

export const getDomains = () =>
  db.powers.reduce((acc, val) => {
    if (acc.indexOf(val.domain) < 0) {
      acc.push(val.domain);
    }
    return acc;
  }, []);

export const getPowersForDomain =
  input => db.powers.filter(val => slugify(val.domain) === slugify(input));
