// options available here : https://www.jqueryscript.net/gallery/Responsive-Photo-Viewer.html
$(document).ready(function() {
 
  $('[data-gallery=pictures]').photoviewer({
    // .navbar is 1030
    zIndex: 1100,
    draggable: true,
    resizable: true,
    movable: true,
    keybord: true,
    initMaximized: false,
    gapThreshold: 0.10
  });

  $('[data-gallery=pictures]').click(function (e) {
    e.preventDefault();
  });

});
