$(() => {
  // header
  const $headerPP = $('<container>').addClass('header').css('text-align', 'center');
  const $ppH1 = $('<h1>').text('Projects').appendTo($headerPP);
  // container where all future projects will go
  const $projects = $('<container>').addClass('projects');
  // project 1
  const $pro1 = $('<div>').appendTo($projects);
  const $pro1Img = $('<img>').attr('src', ' ').appendTo($pro1);
  const $pro1Name = $('<h2>').text('Project Name').appendTo($pro1);
  const $pro1Des = $('<p>').text('Quick description of project').appendTo($pro1);
  // project 2
  const $pro2 = $('<div>').appendTo($projects);
  const $pro2Img = $('<img>').attr('src', ' ').appendTo($pro2);
  const $pro2Name = $('<h2>').text('Project Name').appendTo($pro2);
  const $pro2Des = $('<p>').text('Quick description of project').appendTo($pro2);
  // project 3
  const $pro3 = $('<div>').appendTo($projects);
  const $pro3Img = $('<img>').attr('src', ' ').appendTo($pro3);
  const $pro3Name = $('<h2>').text('Project Name').appendTo($pro3);
  const $pro3Des = $('<p>').text('Quick description of project').appendTo($pro3);
  // project 4
  const $pro4 = $('<div>').appendTo($projects);
  const $pro4Img = $('<img>').attr('src', ' ').appendTo($pro4);
  const $pro4Name = $('<h2>').text('Project Name').appendTo($pro4);
  const $pro4Des = $('<p>').text('Quick description of project').appendTo($pro4);

  $('body').prepend($projects);
  $('body').prepend($headerPP);
})
