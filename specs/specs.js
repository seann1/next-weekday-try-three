describe("weekday", function() {
  it ("should return the date 7 days from today if given the current day", function () {
    weekday("Monday").should.eql(["monday", 7, 21, 2014]);
  });
});


