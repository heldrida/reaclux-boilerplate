if (process.env.NODE_ENV === 'production') {
	module.exports = require('./containers/root.prod');
} else {
	module.exports = require('./containers/root.dev');
}