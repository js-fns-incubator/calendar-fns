var dayData = require('../day_data');

describe('dayData', function() {
  beforeEach(function() {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 8 /* starts from 0 */, 25).getTime()
    );
  });

  afterEach(function() {
    this.clock.restore();
  });

  it('returns day object for given date', function() {
    var date = new Date('2014-09-02');
    var result = dayData(date);
    expect(result).to.be.eql({
      date: new Date(2014, 8 /* starts from 0 */, 2),
      isToday: false,
      isWeekend: false,
      isFirstDayOfMonth: false,
      isLastDayOfMonth: false
    });
  });

  it('trims time', function() {
    var date = new Date('2014-09-02T11:55:00');
    var result = dayData(date);
    expect(result).to.be.eql({
      date: new Date(2014, 8 /* starts from 0 */, 2),
      isToday: false,
      isWeekend: false,
      isFirstDayOfMonth: false,
      isLastDayOfMonth: false
    });
  });

  it('trims time', function() {
    var date = new Date('2014-09-02T11:55:00');
    var result = dayData(date);
    expect(result).to.be.eql({
      date: new Date(2014, 8 /* starts from 0 */, 2),
      isToday: false,
      isWeekend: false,
      isFirstDayOfMonth: false,
      isLastDayOfMonth: false
    });
  });

  it('accepts string', function() {
    var date = '2014-09-02';
    var result = dayData(date);
    expect(result).to.be.eql({
      date: new Date(2014, 8 /* starts from 0 */, 2),
      isToday: false,
      isWeekend: false,
      isFirstDayOfMonth: false,
      isLastDayOfMonth: false
    });
  });

  it('calculates isToday', function() {
    var date = new Date(2014, 8 /* starts from 0 */, 25);
    var result = dayData(date);
    expect(result).to.be.eql({
      date: new Date(2014, 8 /* starts from 0 */, 25),
      isToday: true,
      isWeekend: false,
      isFirstDayOfMonth: false,
      isLastDayOfMonth: false
    });
  });

  it('calculates isWeekend', function() {
    var date = new Date(2014, 8 /* starts from 0 */, 28);
    var result = dayData(date);
    expect(result).to.be.eql({
      date: new Date(2014, 8 /* starts from 0 */, 28),
      isToday: false,
      isWeekend: true,
      isFirstDayOfMonth: false,
      isLastDayOfMonth: false
    });
  });

  it('calculates isFirstDayOfMonth', function() {
    var date = new Date(2014, 8 /* starts from 0 */, 1);
    var result = dayData(date);
    expect(result).to.be.eql({
      date: new Date(2014, 8 /* starts from 0 */, 1),
      isToday: false,
      isWeekend: false,
      isFirstDayOfMonth: true,
      isLastDayOfMonth: false
    });
  });

  it('calculates isLastDayOfMonth', function() {
    var date = new Date(2014, 8 /* starts from 0 */, 30);
    var result = dayData(date);
    expect(result).to.be.eql({
      date: new Date(2014, 8 /* starts from 0 */, 30),
      isToday: false,
      isWeekend: false,
      isFirstDayOfMonth: false,
      isLastDayOfMonth: true
    });
  });
});

