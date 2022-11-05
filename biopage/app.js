// if (typeof jQuery == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file!')};


$(() => {
  // header
  const $headerBP = $('<div>').addClass('header');
  const $h1BP = $('<h1>').text('Background').appendTo($headerBP).css('text-align', 'center');
  // first pic that will also be modal and top half of page
  const $topSec = $('<div>').addClass('topSection');
  const $image1 = $('<div>').addClass('image').appendTo($topSec)
  const $img1 = $('<img>').attr('src', 'file:///Users/kevinsouza/Downloads/IMG_4129.jpg').appendTo($image1);
  const $text1 = $('<p>').text('Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants.').appendTo($topSec);
  // sec pic that will be modal and bottom half of page
  const $bttmSec = $('<div>').addClass('bottomSection');
  const $image2 = $('<div>').addClass('image').appendTo($bttmSec)
  const $img2 = $('<img>').attr('src', 'file:///Users/kevinsouza/Downloads/IMG_4130%202.jpg').appendTo($image2);
  const $text2 = $('<p>').text('Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants.').appendTo($bttmSec);
  $('body').prepend($bttmSec);
  $('body').prepend($topSec);
  $('body').prepend($headerBP);







})
