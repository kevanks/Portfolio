// if (typeof jQuery == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file!')};


$(() => {
  const $headerBP = $('<div>').addClass('header').appendTo('body');
  const $h1BP = $('<h1>').text('Background').appendTo($headerBP).css('text-align', 'center');
  // first pic that will also be modal
  const $topImg = $('<div>').appendTo('body')
  const $img1 = $('<img>').attr('src', '').appendTo($topImg);
  const $text1 = $('<p>').text('').appendTo($topImg)


  // footer
  const $footer = $('<div>').addClass('footer').appendTo('body');
  const $homePage = $('<button>').text('HOME').appendTo($footer);
  const $bioPage = $('<button>').text('BIO').appendTo($footer);
  const $resumePage = $('<button>').text('RESUME').appendTo($footer);
  const $projectPage = $('<button>').text('PROJECTS').appendTo($footer);
  const $gitHub = $('<button>').text('GITHUB').appendTo($footer);
  const $linkdPage = $('<button>').text('LINKEDIN').appendTo($footer);

})
