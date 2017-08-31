//= require jquery-ui/widget/datepicker

$(function() {
  $('.datepicker').datepicker({
    dateFormat: "dd-mm-yy",
    minDate: new Date()
  });
});
