$(() => {
  // header
  const $headerRP = $('<container>').addClass('header').css('text-align', 'center');
  const $h1RP = $('<h1>').text('Resume').appendTo($headerRP);
  // resume is gunna be carousel of my experience, skills, and education
  const $resume = $('<container>').addClass('resume');
  const $backBttn = $('<button>').addClass('back-button').text('<').appendTo($resume);
  const $carousel = $('<div>').addClass('skill-exp-edc').appendTo($resume);
  // experience
  const $experience = $('<div>').addClass('exp').css('display', 'block').appendTo($carousel);
  const $expH2 = $('<h2>').text('Experience').css('text-align', 'center').appendTo($experience);
  const $expUl = $('<ul>').appendTo($experience);
  const $expLi1 = $('<li>').text("Dunkin' Donuts cir. May 2016 - Sept 2016").css('list-style-type', 'none').appendTo($experience);
  const $expLi2 = $('<li>').text("Tommy's Pub & Grill cir. April 2017 - Sept 2018").css('list-style-type', 'none').appendTo($experience);
  const $expLi3 = $('<li>').text("Aeropostale cir. June 2017 - Dec 2017").css('list-style-type', 'none').appendTo($experience);
  const $expLi4 = $('<li>').text("Amazon cir. May 2019 - Sept 2019").css('list-style-type', 'none').appendTo($experience);
  const $expLi5 = $('<li>').text("Target cir. May 2020 - June 2021").css('list-style-type', 'none').appendTo($experience);
  const $expLi6 = $('<li>').text("Dominos cir. Oct 2020 - April 2021").css('list-style-type', 'none').appendTo($experience);
  const $expLi7 = $('<li>').text("InstaCart cir. August 2021 - Present").css('list-style-type', 'none').appendTo($experience);
  // skills
  const $skills = $('<div>').addClass('skill').css('display', 'none').appendTo($carousel);
  const $skillH2 = $('<h2>').text('Skills').css('text-align', 'center').appendTo($skills);
  const $skillsUl = $('<ul>').appendTo($skills);
  const $skillLi1 = $('<li>').text("Time Mangement").css('list-style-type', 'none').appendTo($skills);
  const $skillLi2 = $('<li>').text("Customer Service").css('list-style-type', 'none').appendTo($skills);
  const $skillLi3 = $('<li>').text("Critical Thinking").css('list-style-type', 'none').appendTo($skills);
  const $skillLi4 = $('<li>').text("JavaScript").css('list-style-type', 'none').appendTo($skills);
  const $skillLi5 = $('<li>').text("JQuery").css('list-style-type', 'none').appendTo($skills);
  const $skillLi6 = $('<li>').text("HTML").css('list-style-type', 'none').appendTo($skills);
  const $skillLi7 = $('<li>').text("CSS").css('list-style-type', 'none').appendTo($skills);
  const $skillLi8 = $('<li>').text("GitHub").css('list-style-type', 'none').appendTo($skills);
  // education
  const $education = $('<div>').addClass('edc').css('display', 'none').appendTo($carousel);
  const $eduH2 = $('<h2>').text('Education').css('text-align', 'center').appendTo($education);
  const $eduUl = $('<ul>').appendTo($education);
  const $eduLi1 = $('<li>').text("Brockton High School - Diploma").css('list-style-type', 'none').appendTo($education);
  const $eduLi2 = $('<li>').text("UMass Amherst - Math with a Concentration in Computing - Unfinished").css('list-style-type', 'none').appendTo($education);
  const $eduLi3 = $('<li>').text("General Assembly - Software Engineering Immersive Program - Present").css('list-style-type', 'none').appendTo($education);

  const $nextBttn = $('<button>').addClass('next-button').text('>').appendTo($resume);
  // button that brings you to my full resume on a pdf
  const $fullResume = $('<div>').addClass('full-resume').html('<a href="https://docs.google.com/document/d/1gIp2tVqdERVrQOacBsQh0Dcl8OscRE2w/edit#">Full Resume</a>');
  $('body').prepend($fullResume);
  $('body').prepend($resume);
  $('body').prepend($headerRP);

  // carousel function
  let numOfImg = $('.skill-exp-edc').children().length -1;
  // console.log(numOfImg);
  let currentImgIndex = 0;
  // next button
  $('.next-button').on('click', () => {
    $('.skill-exp-edc').children().eq(currentImgIndex).css('display', 'none');

    if (currentImgIndex < numOfImg) {
      currentImgIndex++;
    } else {
      currentImgIndex = 0;
    }
    $('.skill-exp-edc').children().eq(currentImgIndex).css('display', 'block');
  })
  // back button
  $('.back-button').on('click', () => {
    $('.skill-exp-edc').children().eq(currentImgIndex).css('display', 'none');

    if (currentImgIndex > 0) {
      currentImgIndex--;
    } else {
      currentImgIndex = numOfImg;
    }
    $('.skill-exp-edc').children().eq(currentImgIndex).css('display', 'block');
  })

})
