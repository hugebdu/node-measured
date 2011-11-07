exports.units = require('./lib/units');
exports.EWMA = require('./lib/EWMA');
exports.Collection = require('./lib/Collection');
exports.ExponentiallyDecayingSample = require('./lib/ExponentiallyDecayingSample');

var metrics = require('./lib/metrics');
for (var name in metrics) {
  exports[name] = metrics[name];
}
