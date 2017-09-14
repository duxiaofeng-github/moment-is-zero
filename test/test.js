import moment from 'moment';
import momentIsZero from '../index';
import test from 'ava';

momentIsZero.install(moment);

test(t => {
    t.true(moment.unix(0).isZero());
    t.true(moment(0).isZero());
    t.true(moment('0001-01-01T00:00:00Z').isZero());
    t.false(moment('0001-01-01T00:00:00+08:00').isZero());
});