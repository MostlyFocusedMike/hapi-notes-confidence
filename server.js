require('dotenv').config();
const Confidence = require('confidence');

const store = new Confidence.Store({
    a: 1,
    b: 2,
    c: {
        $filter: 'NODE_ENV',
        development: 100,
        $default: 50
    }
});

const value = store.get('/', process.env);
console.log(value);
