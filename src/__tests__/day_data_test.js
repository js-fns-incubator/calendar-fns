var dayData = require('../day_data');

describe('dayData', function() {
  beforeEach(function() {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* Sep */, 25).getTime()
    );
  });

  afterEach(function() {
    this.clock.restore();
  });

  it('returns day object for given date', function() {
    var date = new Date(2014, 8 /* Sep */, 2);
    var result = dayData(date);
    expect(result).to.be.eql({
      date: new Date(2014, 8 /* Sep */, 2),
      isToday: false,
      isWeekend: false,
      isFirstDayOfMonth: false,
      isLastDayOfMonth: false,
      isFuture: false
    });
  });

  it('trims time', function() {
    var date = new Date(2014, 8 /* Sep */, 2);
    var result = dayData(date);
    expect(result).to.be.eql({
      date: new Date(2014, 8 /* Sep */, 2),
      isToday: false,
      isWeekend: false,
      isFirstDayOfMonth: false,
      isLastDayOfMonth: false,
      isFuture: false
    });
  });

  it('trims time', function() {
    var date = new Date(2014, 8 /* Sep */, 2);
    var result = dayData(date);
    expect(result).to.be.eql({
      date: new Date(2014, 8 /* Sep */, 2),
      isToday: false,
      isWeekend: false,
      isFirstDayOfMonth: false,
      isLastDayOfMonth: false,
      isFuture: false
    });
  });

  it('accepts string', function() {
    var date = '2014-09-02';
    var result = dayData(date);
    expect(result).to.be.eql({
      date: new Date(2014, 8 /* Sep */, 2),
      isToday: false,
      isWeekend: false,
      isFirstDayOfMonth: false,
      isLastDayOfMonth: false,
      isFuture: false
    });
  });

  it('calculates isToday', function() {
    var date = new Date(2014, 8 /* Sep */, 25);
    var result = dayData(date);
    expect(result).to.be.eql({
      date: new Date(2014, 8 /* Sep */, 25),
      isToday: true,
      isWeekend: false,
      isFirstDayOfMonth: false,
      isLastDayOfMonth: false,
      isFuture: false
    });
  });

  it('calculates isWeekend', function() {
    var date = new Date(2014, 8 /* Sep */, 21);
    var result = dayData(date);
    expect(result).to.be.eql({
      date: new Date(2014, 8 /* Sep */, 21),
      isToday: false,
      isWeekend: true,
      isFirstDayOfMonth: false,
      isLastDayOfMonth: false,
      isFuture: false
    });
  });

  it('calculates isFirstDayOfMonth', function() {
    var date = new Date(2014, 8 /* Sep */, 1);
    var result = dayData(date);
    expect(result).to.be.eql({
      date: new Date(2014, 8 /* Sep */, 1),
      isToday: false,
      isWeekend: false,
      isFirstDayOfMonth: true,
      isLastDayOfMonth: false,
      isFuture: false
    });
  });

  it('calculates isLastDayOfMonth', function() {
    var date = new Date(2014, 7 /* Aug */, 31);
    var result = dayData(date);
    expect(result).to.be.eql({
      date: new Date(2014, 7 /* Aug */, 31),
      isToday: false,
      isWeekend: true,
      isFirstDayOfMonth: false,
      isLastDayOfMonth: true,
      isFuture: false
    });
  });

  it('calculates isFuture', function() {
    var date = new Date(2015, 1 /* Feb */, 11);
    var result = dayData(date);
    expect(result).to.be.eql({
      date: new Date(2015, 1 /* Feb */, 11),
      isToday: false,
      isWeekend: false,
      isFirstDayOfMonth: false,
      isLastDayOfMonth: false,
      isFuture: true
    });
  });
});

