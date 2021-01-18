(function() {
  tests({
    'If precision equals to 0, it should round 100 to 100.': function() {
      eq(accounting.toFixedTwist(100, 0), '100');
    },
    'If precision equals to 2, it should round 100 to 100.00.': function() {
      eq(accounting.toFixedTwist(100, 2), '100.00');
    },
    'It should round 0.5 to 1.': function() {
      eq(accounting.toFixedTwist(0.5, 0), '1');
    },
    'If precision equals to 3, it should round 0.5 to 0.500.': function() {
      eq(accounting.toFixedTwist(0.5, 3), '0.500');
    },
    'It should round 0.615 to 0.62.': function() {
      eq(accounting.toFixedTwist(0.615, 2), '0.62');
    },
    'It should round 10.235 to 10.24.': function() {
      eq(accounting.toFixedTwist(10.235, 2), '10.24');
    },
    'It should round 1.005 to 1.01.': function() {
      eq(accounting.toFixedTwist(1.005, 2), '1.01');
    },
    'It should round -0.615 to -0.61.': function() {
      eq(accounting.toFixedTwist(-0.615, 2), '-0.61');
    }
  });
})();
