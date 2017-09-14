var isZero = function () {
    var isGolangZero = this.unix() === -62135596800;
    var isUnixZero = this.unix() === 0;
    return isGolangZero || isUnixZero;
};

if (typeof moment !== 'undefined') moment.fn.isZero = isZero;

export default {
    install: function (_moment) {
        _moment.fn.isZero = isZero;
    }
};
