"use strict";

$(function () {
  $('button[name="daterange"]').daterangepicker({
    opens: 'right',
    startDate: moment()
  }, function (start, end, label) {// console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });
  $('#guests').click(function () {
    $('#guests_options').toggleClass('show-guests_options');
  });
  $('.search-btn').click(function () {
    window.location.href = './search-result.html';
  });
});
//# sourceMappingURL=all.js.map
