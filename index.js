moment.fn.isZero = function() {
    var obj = this.toObject();
    return obj.years === 1 && obj.months === 1 && obj.date === 1 && obj.hours === 0 && obj.minutes === 0 && obj.seconds === 0;
};
