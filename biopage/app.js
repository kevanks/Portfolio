// if (typeof jQuery == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file!')};


$(() => {
  // header
  const $headerBP = $('<container>').addClass('header');
  const $h1BP = $('<h1>').text('Background').appendTo($headerBP).css('text-align', 'center');
  // first pic that will also be modal and top half of page
  const $topSec = $('<container>').addClass('topSection');
  const $image1 = $('<div>').addClass('image').appendTo($topSec);
  const $img1 = $('<img>').attr('src', 'file:///Users/kevinsouza/Downloads/IMG_4134%202.jpg').appendTo($image1);
  const $bttn1 = $('<button>').addClass('openModal').text('Expand').appendTo($topSec);
  const $modal1 = $('<div>').addClass('modal').appendTo($bttn1);
  const $modalImg = $('<img>').addClass('modalImg').attr('src', 'file:///Users/kevinsouza/Downloads/IMG_4129.jpg').appendTo($modal1);
  const $closebttn = $('<div>').addClass('closeModal').html('<a href="#">Close</a>').appendTo($modal1)
  const $text1 = $('<p>').text('Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants.').appendTo($topSec);
  // sec pic that will be modal and bottom half of page
  const $bttmSec = $('<container>').addClass('bottomSection');
  const $image2 = $('<div>').addClass('image').appendTo($bttmSec)
  const $img2 = $('<img>').attr('src', 'file:///Users/kevinsouza/Downloads/IMG_4131.JPG').appendTo($image2);
  const $text2 = $('<p>').text('Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants.').appendTo($bttmSec);
  $('body').prepend($bttmSec);
  $('body').prepend($topSec);
  $('body').prepend($headerBP);

  // modal
  const openModal = () => {
    $modal1.css('display', 'block')
    $modalImg.css('display', 'block')
  }

  $bttn1.on('click', openModal)

  const closeModal = () => {
    $modal1.css('display', 'none')
    $modalImg.css('display', 'none')
  }

  $closebttn.on('click', closeModal)





})
