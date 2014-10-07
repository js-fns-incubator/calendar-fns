var monthData = require('../month_data');

describe('monthData', function() {
  beforeEach(function() {
    this.clock = sinon.useFakeTimers(new Date(2014, 9, 25).getTime());
  });

  it('returns month object for given date', function() {
    var date = new Date(2014, 8 /* Sep */, 1);
    var result = monthData(date);
    expect(result).to.shallowDeepEqual([
      [
        {
          date: new Date(2014, 7 /* Aug */, 31),
          isWeekend: true,
          isLastDayOfMonth: true,
          isDummy: true
        },
        {
          date: new Date(2014, 8 /* Sep */, 1),
          isWeekend: false,
          isFirstDayOfMonth: true,
          isDummy: false
        },
        { /* ... */ },
        { /* ... */ },
        {
          date: new Date(2014, 8 /* Oct */, 4)
        },
        {
          date: new Date(2014, 8 /* Oct */, 5)
        },
        {
          date: new Date(2014, 8 /* Oct */, 6),
          isWeekend: true
        },
      ],
      [ /* 7 - 13 Sep */ ],
      [ /* 14 - 20 Sep */ ],
      [ /* 21 - 27 Sep */ ],
      [
        { /* ... */ },
        { /* ... */ },
        {
          date: new Date(2014, 8 /* Sep */, 30),
          isWeekend: false,
          isLastDayOfMonth: true,
          isDummy: false
        },
        {
          date: new Date(2014, 9 /* Oct */, 1),
          isFirstDayOfMonth: true,
          isDummy: true
        },
        { /* ... */ },
        { /* ... */ },
        {
          date: new Date(2014, 9 /* Oct */, 4),
          isDummy: true
        }
      ],
      [
        { /* ... */ },
        { /* ... */ },
        { /* ... */ },
        { /* ... */ },
        { /* ... */ },
        { /* ... */ },
        {
          date: new Date(2014, 9 /* Oct */, 11),
          isDummy: true
        }
      ]
    ]);
  });

  it('allows to pass first day of week', function() {
    var date = new Date(2014, 8 /* Sep */, 1);
    var result = monthData(date, 1);
    expect(result).to.shallowDeepEqual([
      [
        {
          date: new Date(2014, 8 /* Sep */, 1)
        },
        /* ... */
      ],
      [ /* 8 - 14 Sep */ ],
      [ /* 15 - 21 Sep */ ],
      [ /* 22 - 28 Sep */ ],
      [ /* 29 Sep - 5 Oct */ ],
      [
        { /* ... */ },
        { /* ... */ },
        { /* ... */ },
        { /* ... */ },
        { /* ... */ },
        { /* ... */ },
        {
          date: new Date(2014, 9 /* Oct */, 12),
          isDummy: true
        }
      ]
    ]);
  });
});
