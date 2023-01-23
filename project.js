$(() => {
  // header
  const $headerPP = $('<container>').addClass('header').css('text-align', 'center');
  const $ppH1 = $('<h1>').text('Projects').appendTo($headerPP);
  // container where all future projects will go
  const $projects = $('<container>').addClass('projects');
  // project 1
  const $pro1 = $('<div>').addClass('project').appendTo($projects);
  const $pro1Name = $('<h2>').text('MovieDex').appendTo($pro1);
  const $pro1Des = $('<p>').text("App to track and rate movies you've seen or keep track of movies you wanna see.").appendTo($pro1);
  const $pro1Link = $('<div>').addClass('link').html('<a href="https://limitless-everglades-58767.herokuapp.com/">MovieDex</a>').appendTo($pro1);
  // project 2
  const $pro2 = $('<div>').addClass('project').appendTo($projects);
  const $pro2Name = $('<h2>').text('ONPARO').appendTo($pro2);
  const $pro2Des = $('<p>').text("Social media app where users can sign up and make posts and like and comment on others posts.").appendTo($pro2);
  const $pro2Link = $('<div>').addClass('link').html('<a href="https://unit-3-frontend.herokuapp.com/">ONPARO</a>').appendTo($pro2);
  // project 3
  const $pro3 = $('<div>').addClass('project').appendTo($projects);
  const $pro3Name = $('<h2>').text('Forgeddit').appendTo($pro3);
  const $pro3Des = $('<p>').text('Social media app similar to reddit where users make posts and can up and down vote said posts on their feed.').appendTo($pro3);
  const $pro3Link = $('<div>').addClass('link').html('<a href="https://forgeddit.netlify.app/">Forgeddit</a>').appendTo($pro3);
  // project 4
  const $pro4 = $('<div>').addClass('project').appendTo($projects);
  const $pro4Name = $('<h2>').text('Movie Bay').appendTo($pro4);
  const $pro4Des = $('<p>').text('App where users can sign in and make and update list of their favorite movies leave comments on movies and see what other people are watching.').appendTo($pro4);
  const $pro4Link = $('<div>').addClass('link').html('<a href="https://mighty-fortress-29931.herokuapp.com/">Movie Bay</a>').appendTo($pro4)

  $('body').prepend($projects);
  $('body').prepend($headerPP);
})
