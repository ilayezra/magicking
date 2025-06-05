
  document.addEventListener("DOMContentLoaded", function() {
    var key = location.pathname.replace(/\W/g, "_");
    document.getElementById("viewCounter").setAttribute("key", key);
    document.getElementById("likeButton").setAttribute("key", key + "_like");
    document.getElementById("likeButton").setAttribute("behavior", "vote");
  });
