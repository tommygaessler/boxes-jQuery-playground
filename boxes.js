// $(document).ready(function() {
//   console.log("hello world");
//
//   $('#secretBox').css('background', 'white');
//   $('<h1>Secret Box</h1>').appendTo('#secretBox');
//
//   $('#row1 .box').removeClass('boxType1');
//   $('#row1 .box').removeClass('boxType2');
//   $('#row1 .box').addClass('boxType3');
//
//   $('#row4 .box:last-of-type').css('display', 'none');
//
//   $('.boxType1').css('background', 'white');
//
//   $('#row2 .box:nth-child(1)').removeClass('box');
//   $('#row2 .box:nth-child(2)').removeClass('box');
//
//   $('.box:not(#secretBox)').css('width', '2px');
// });

$(document).ready(function() {
  console.log("hello world");

  $('#container').on('click', function(e){
    var offset = $(this).offset();
    var relativeX = (e.pageX - offset.left);
    var relativeY = (e.pageY - offset.top);

    console.log("X: " + relativeX + "  Y: " + relativeY);
  });

  $('.boxType1').append('<a href="http://www.galvanize.com/">galvanize</a>')
  $('.boxType1').on('click', function(e){
    alert('You can never leave the page!');
    e.preventDefault();
  });

  $('.box').on('click', function(){
    $(this).css({'background': 'url(http://images.all-free-download.com/images/graphiclarge/cute_dog_photo_picture_7_168843.jpg)', 'background-size': 'contain'});
  });

  $('#container').on('click', function(){
    // $('#container').css('background', 'lime');
    //
    // $('#container').css('background', 'black');


    if ($('div').hasClass('box'))
    {
      $('.box').css('background', 'white');
    }
  });
});
