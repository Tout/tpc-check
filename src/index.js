const Checker = require('./Checker');

module.exports = (callback, options={}) => {
  if (!callback) {
    throw new Error('Please provide callback');
  }

  return new Checker(callback, options).execute();
}
