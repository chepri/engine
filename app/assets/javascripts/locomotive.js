// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery-ui
//= require jquery_ujs
//= require bootstrap-sprockets
//= require underscore
//= require backbone
//= require codemirror
//= require codemirror/modes/markdown
//= require select2
//= require nprogress
//= require nprogress-ajax
//= require locomotive/vendor
//= require ./locomotive/application

$(document).ready(function() {
  $.datepicker.setDefaults($.datepicker.regional[window.locale]);
});

