$(() => {
  // header
  const $headerPP = $('<container>').addClass('header').css('text-align', 'center');
  const $ppH1 = $('<h1>').text('Projects').appendTo($headerPP);
  // container where all future projects will go
  const $projects = $('<container>').addClass('projects');
  // project 1
  const $pro1 = $('<div>').addClass('project').appendTo($projects);
  const $pro1Img = $('<img>').attr('src', 'https://www.gamblingsites.org/app/uploads/2020/04/blackjack-cards-image-new-1.jpg').appendTo($pro1);
  const $pro1Name = $('<h2>').text('Blackjack').appendTo($pro1);
  const $pro1Des = $('<p>').text('Virtual blackjack where the dealer always gets 21.').appendTo($pro1);
  const $pro1Link = $('<div>').addClass('link').html('<a href="#">Blackjack Game</a>').appendTo($pro1);
  // project 2
  const $pro2 = $('<div>').addClass('project').appendTo($projects);
  const $pro2Img = $('<img>').attr('src', 'https://cdn2.vectorstock.com/i/thumb-large/74/21/black-chess-bishop-piece-on-white-background-vector-35207421.jpg').appendTo($pro2);
  const $pro2Name = $('<h2>').text('Chess Game').appendTo($pro2);
  const $pro2Des = $('<p>').text('Virtual game of chess where you always win so you can feel smart.').appendTo($pro2);
  const $pro2Link = $('<div>').addClass('link').html('<a href="#">Chess Game</a>').appendTo($pro2);
  // project 3
  const $pro3 = $('<div>').addClass('project').appendTo($projects);
  const $pro3Img = $('<img>').attr('src', 'https://pngimg.com/uploads/facebook_logos/small/facebook_logos_PNG19761.png').appendTo($pro3);
  const $pro3Name = $('<h2>').text('FaceBook').appendTo($pro3);
  const $pro3Des = $('<p>').text('Yes, I created facebook. Mark stole it from me. Not cool Mark.').appendTo($pro3);
  const $pro3Link = $('<div>').addClass('link').html('<a href="https://www.facebook.com/">FaceBook</a>').appendTo($pro3);
  // project 4
  const $pro4 = $('<div>').addClass('project').appendTo($projects);
  const $pro4Img = $('<img>').attr('src', 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_221,h_221/v1618459302/assets/8e/cbcd2e-e7f1-4bd1-ae4e-5343b99ff22f/original/Driver-App-logo.png').appendTo($pro4);
  const $pro4Name = $('<h2>').text('Uber').appendTo($pro4);
  const $pro4Des = $('<p>').text('Yes I also created Uber in my spare time.').appendTo($pro4);
  const $pro4Link = $('<div>').addClass('link').html('<a href="https://www.uber.com/us/en/s/d/kochab/?ad_id=619191988920&adg_id=139968575959&campaign_id=18209768604&cre=619191988920&dev=c&dev_m=&fi_id=&gclid=CjwKCAjwtp2bBhAGEiwAOZZTuAfT7yTLCzN1ZQFG_7o1tEYnQkL1O1hu7VGxeA7vJF-blGsDnG1moxoCPCoQAvD_BwE&gclsrc=aw.ds&kw=uber&kwid=kwd-12633382&match=b&net=g&placement=&tar=&utm_campaign=CM2200161-search-google-brand_1_-99_US-National_o-d_web_acq_cpc_en_T3_Generic_BM_uber_kwd-12633382_619191988920_139968575959_b_c&utm_source=AdWords_Brand">Uber</a>').appendTo($pro4)

  $('body').prepend($projects);
  $('body').prepend($headerPP);
})
