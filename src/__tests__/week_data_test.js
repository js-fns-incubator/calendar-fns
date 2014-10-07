var weekData = require('../week_data');

describe('weekData', function() {
  beforeEach(function() {
    this.clock = sinon.useFakeTimers(
      new Date(2014, 9, 25).getTime()
    );
  });

  afterEach(function() {
    this.clock.restore();
  });

  it('returns week object for given date', function() {
    var date = new Date(2014, 8 /* Sep */, 2);
    var result = weekData(date);
    expect(result).to.shallowDeepEqual([
      {
        date: new Date(2014, 7 /* Aug */, 31),
        isWeekend: true
      },
      {
        date: new Date(2014, 8 /* Sep */, 1),
        isWeekend: false
      },
      { /* ... */ },
      { /* ... */ },
      { /* ... */ },
      { /* ... */ },
      {
        date: new Date(2014, 8 /* Sep */, 6),
        isWeekend: true
      }
    ]);
  });

  it('allows to specify start of week', function() {
    var date = new Date(2014, 8 /* Sep */, 2);
    var result = weekData(date, 1);
    expect(result).to.shallowDeepEqual([
      {
        date: new Date(2014, 8 /* Sep */, 1),
        isWeekend: false
      },
      { /* ... */ },
      { /* ... */ },
      { /* ... */ },
      { /* ... */ },
      { /* ... */ },
      {
        date: new Date(2014, 8 /* Sep */, 7),
        isWeekend: true
      }
    ]);
  });
});

