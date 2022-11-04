// if (typeof jQuery == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file!')};

$(() => {
  //header with my name
  const $headerHP = $('<container>').addClass('header').appendTo('body').css('text-align', 'center');
  const $h1HP = $('<h1>').text("Kevin Souza").appendTo($headerHP);
  //carosel of pics
  const $carousel = $('<div>').addClass('carousel-container').appendTo('body');
  const $backBttn = $('<button>').addClass('back-button').text('<').appendTo($carousel);
  const $images = $('<div>').addClass('images').appendTo($carousel);
  const $image1 = $('<img>').attr('src', 'file:///Users/kevinsouza/Pictures/Photos%20Library.photoslibrary/resources/derivatives/9/9E594933-F9FE-47E9-A7B8-F6A23340FD62_1_105_c.jpeg').appendTo($images);
  const $image2 = $('<img>').attr('src', 'file:///Users/kevinsouza/Pictures/Photos%20Library.photoslibrary/resources/derivatives/9/99FC5513-684C-4E00-8D70-EFA6E100750D_1_105_c.jpeg').appendTo($images);
  const $image3 = $('<img>').attr('src', 'file:///Users/kevinsouza/Pictures/Photos%20Library.photoslibrary/resources/derivatives/6/6A26B518-4900-41A2-BBF8-C7C5B89F85CD_1_105_c.jpeg').appendTo($images);
  const $nextBttn = $('<button>').addClass('next-button').text('>').appendTo($carousel);
  const $h2HP = $('<h2>').text('Portfolio').appendTo('body').css('text-align', 'center');
  // footer
  const $footer = $('<div>').addClass('footer').appendTo('body');
  const $homePage = $('<button>').text('HOME').appendTo($footer);
  const $bioPage = $('<button>').text('BIO').appendTo($footer);
  const $resumePage = $('<button>').text('RESUME').appendTo($footer);
  const $projectPage = $('<button>').text('PROJECTS').appendTo($footer);
  const $gitHub = $('<button>').text('GITHUB').appendTo($footer);
  const $linkdPage = $('<button>').text('LINKEDIN').appendTo($footer);


  // carosel functions
  let numOfImg = $('.images').children().length -1
  let currentImgIndex = 0;
  // next button function
  $('.next-button').on('click', () => {
    $('.images').children().eq(currentImgIndex)
      .css('display', 'none')

    if (currentImgIndex < numOfImg) {
      currentImgIndex++;
    } else {
      currentImgIndex = 0
    }
    $('.images').children().eq(currentImgIndex)
      .css('display', 'block')
  })
  // back button function
  $('.back-button').on('click', () => {
    $('.images').children().eq(currentImgIndex)
      .css('display', 'none')
    if (currentImgIndex > 0) {
      currentImgIndex--;
    } else {
      currentImgIndex = numOfImg
    }
    $('.images').children().eq(currentImgIndex)
      .css('display', 'block')
  })

})
