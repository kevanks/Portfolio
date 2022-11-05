// if (typeof jQuery == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file!')};


$(() => {
  const $headerBP = $('<div>').addClass('header');
  const $h1BP = $('<h1>').text('Background').appendTo($headerBP).css('text-align', 'center');
  // first pic that will also be modal
  const $topSec = $('<div>')
  const $img1 = $('<img>').attr('src', '').appendTo($topImg);
  const $text1 = $('<p>').text('').appendTo($topImg)
  $('body').prepend($topSec)
  $('body').prepend($headerBP)

  // footer
  const $footer = $('<div>').addClass('footer').appendTo('body');


})
