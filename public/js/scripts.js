"use strict",
$(function () {
$("#loginBtn").on("click", function () {
   window.location.href="users/login";
  });

  $("#homeBtn").on("click", function () {
   window.location.href="/";
  });
  
$("#registerBtn").on("click", function () {
    window.location.href="users/register";
   });  
});