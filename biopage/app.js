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
  const $modal1 = $('<div>').addClass('modal').css('display', 'none').appendTo($topSec);
  const $modalImg = $('<img>').addClass('modalImg').css('display', 'none').attr('src', 'file:///Users/kevinsouza/Downloads/IMG_4139.JPG').appendTo($modal1);
  const $closebttn = $('<div>').addClass('closeModal').css('display', 'none').html('<a href="#">Close</a>').appendTo($modal1);
  const $text1 = $('<p>').text('Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants.').appendTo($topSec);
  // sec pic that will be modal and bottom half of page
  const $bttmSec = $('<container>').addClass('bottomSection');
  const $image2 = $('<div>').addClass('image').appendTo($bttmSec)
  const $img2 = $('<img>').attr('src', 'file:///Users/kevinsouza/Downloads/IMG_4131.JPG').appendTo($image2);
  const $bttn2 = $('<button>').addClass('openModal').text('Expand').appendTo($bttmSec);
  const $modal2 = $('<div>').addClass('modal').css('display', 'none').appendTo($bttmSec);
  const $modalImg2 = $('<img>').addClass('modalImg').css('display', 'none').attr('src', 'file:///Users/kevinsouza/Downloads/IMG_4130%202.jpg').appendTo($modal2);
  const $closebttn2 = $('<div>').addClass('closeModal').css('display', 'none').html('<a href="#">Close</a>').appendTo($modal2);
  const $text2 = $('<p>').text('Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants. Kevin Souza was born in Brockton MA in 2000 to two Brazilian immigrants.').appendTo($bttmSec);
  $('body').prepend($bttmSec);
  $('body').prepend($topSec);
  $('body').prepend($headerBP);

  // modal 1
  const openModal = () => {
    $modal1.css('display', 'block')
    $modalImg.css('display', 'block')
    $closebttn.css('display', 'block')
  }

  const closeModal = () => {
    $modal1.css('display', 'none')
    $modalImg.css('display', 'none')
    $closebttn.css('display', 'none')
  }

  $bttn1.on('click', openModal)
  $closebttn.on('click', closeModal)

  // modal 2
  const openModal2 = () => {
    $modal2.css('display', 'block')
    $modalImg2.css('display', 'block')
    $closebttn2.css('display', 'block')
  }

  const closeModal2 = () => {
    $modal2.css('display', 'none')
    $modalImg2.css('display', 'none')
    $closebttn2.css('display', 'none')
  }

  $bttn2.on('click', openModal2)
  $closebttn2.on('click', closeModal2)

})
