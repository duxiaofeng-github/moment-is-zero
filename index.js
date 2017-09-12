moment.fn.isZero = function() {
    var obj = this.toObject();
    var isGolangZero = obj.years === 1 && obj.months === 1 && obj.date === 1 && obj.hours === 0 && obj.minutes === 0 && obj.seconds === 0;
    var isUnixZero = this.unix() === 0;
    return isGolangZero || isUnixZero;
};
