$(document).ready(function() {
  $("#time1").countdown({
    htmlTemplate: "<ul class='counter'><li>%d <span class='counter-text'>days</span></li><li> %h <span class='counter-text'>hours</span> <li>%i <span class='counter-text'>minutes</span></li><li> %s <span class='counter-text'>seconds</span></li></ul>",
    date: "January 1, 2013",
    yearsAndMonths: false,
    hoursOnly: false,
    leadingZero: false
  });

  //$("#time2").countdown('pause');
  //$("#time2").countdown('resume');

});
