$(function() {
  $('button[name="daterange"]').daterangepicker({
    opens: 'right',
    startDate: '12/16/2020',  
  }, function(start, end, label) {
    console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });

  $('#guests').click(() => {
    $('#guests_options').toggleClass('show-guests_options');
  })

  $('.search-btn').click(() => {
    window.location.href = './search-result.html'
  })
});



