// if (typeof jQuery == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file!')};


$(() => {
  // header
  const $headerBP = $('<container>').addClass('header');
  const $h1BP = $('<h1>').text('Background').appendTo($headerBP).css('text-align', 'center');
  // container that holds everything
  const $mainContain = $('<container>').addClass('main-container')
  // first pic that will also be modal and top half of page
  const $topSec = $('<container>').addClass('topSection').appendTo($mainContain);
  const $image1 = $('<div>').addClass('image').appendTo($topSec);
  const $img1 = $('<img>').attr('src', 'file:///Users/kevinsouza/Downloads/IMG_4134%202.jpg').appendTo($image1);
  const $bttn1 = $('<button>').addClass('openModal').text('Expand').appendTo($topSec);
  const $modal1 = $('<div>').addClass('modal').css('display', 'none').appendTo($topSec);
  const $modalImg = $('<img>').addClass('modalImg').css('display', 'none').attr('src', 'file:///Users/kevinsouza/Downloads/IMG_4139.JPG').appendTo($modal1);
  const $modalCap = $('<h3>').text('Young Kevin pictured with family in Brazil').appendTo($modal1);
  const $closebttn = $('<div>').addClass('closeModal').css('display', 'none').html('<a href="#">Close</a>').appendTo($modal1);
  // top text container
  const $topText = $('<container>').addClass('top-text').appendTo($mainContain);
  const $topUl = $('<ul>').appendTo($topText)
  const $topLi1 = $('<li>').text('Kevin Souza was born in Brockton MA to two Brazilian immigrants').appendTo($topText);
  const $topLi2 = $('<li>').text('He lived in Brazil from the ages of one till seven').appendTo($topText);
  const $topLi3 = $('<li>').text('After returning to america Kevin began school and fell in love with math').appendTo($topText);
  const $topLi4 = $('<li>').text('As a child Kevin was heavily interested in legos, numbers, and anime').appendTo($topText);
  // sec pic that will be modal and bottom half of page and just bottom section
  const $bttmSec = $('<container>').addClass('bottomSection').appendTo($mainContain);
  const $image2 = $('<div>').addClass('image').appendTo($bttmSec)
  const $img2 = $('<img>').attr('src', 'file:///Users/kevinsouza/Downloads/IMG_4131.JPG').appendTo($image2);
  const $bttn2 = $('<button>').addClass('openModal').text('Expand').appendTo($bttmSec);
  const $modal2 = $('<div>').addClass('modal').css('display', 'none').appendTo($bttmSec);
  const $modalImg2 = $('<img>').addClass('modalImg').css('display', 'none').attr('src', 'file:///Users/kevinsouza/Downloads/IMG_4130%202.jpg').appendTo($modal2);
  const $modalCap2 = $('<h3>').text('Kevin pictured with family and friends').appendTo($modal2);
  const $closebttn2 = $('<div>').addClass('closeModal').css('display', 'none').html('<a href="#">Close</a>').appendTo($modal2);
  // text container for botttom
  const $bttmText = $('<container>').addClass('bttm-text').appendTo($mainContain);
  const $bttmUl = $('<ul>').appendTo($bttmText);
  const $bttmLi1 = $('<li>').text('Afer graduating high school Kevin went on to studied Mathematics at UMass Amherst').appendTo($bttmText);
  const $bttmLi2 = $('<li>').text('Covid and other reasons casuesed Kevin to dropout but no time was wasted he went straight to work').appendTo($bttmText);
  const $bttmLi3 = $('<li>').text('Kevin worked various jobs in retail and customer service with periods of working two jobs at once').appendTo($bttmText);
  const $bttmLi4 = $('<li>').text('After talking about doing a coding bootcamp for a year Kevin finally took the leap').appendTo($bttmText);
  $('body').prepend($mainContain);
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
