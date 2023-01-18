var homeLinkEl = $('#tab-home');
var resumeLinkEl = $('#tab-resume');
var contactLinkEl = $('#tab-contact');




// Click event on Resume Nav Link 
homeLinkEl.on('click', function () {
    $('#home-tab').attr('aria-selected', true);
    $('#resume-tab').attr('class', "nav-link");
    $('#home-tab').attr('class', "nav-link active");
    $('#contact-tab').attr('class', "nav-link");
    $('#resume').attr('class', "tab-pane fade");
    $('#home').attr('class', "tab-pane fade show active");
    $('#contact').attr('class', "tab-pane fade");
  });
  
  
// Click event on Resume Nav Link 
resumeLinkEl.on('click', function () {
    $('#resume-tab').attr('aria-selected', true);
    $('#resume-tab').attr('class', "nav-link active");
    $('#home-tab').attr('class', "nav-link");
    $('#contact-tab').attr('class', "nav-link");
    $('#resume').attr('class', "tab-pane fade show active");
    $('#home').attr('class', "tab-pane fade");
    $('#contact').attr('class', "tab-pane fade");
  });
  
  // Click event on Resume Nav Link 
  contactLinkEl.on('click', function () {
    $('#contact-tab').attr('aria-selected', true);
    $('#resume-tab').attr('class', "nav-link");
    $('#home-tab').attr('class', "nav-link");
    $('#contact-tab').attr('class', "nav-link active");
    $('#resume').attr('class', "tab-pane fade");
    $('#home').attr('class', "tab-pane fade");
    $('#contact').attr('class', "tab-pane fade show active");
  });
  
  

  
// Click event causes refresh
contactLinkEl.on('click', function () {
    $('#contact-tab').attr('aria-selected', true);
  });
  
  
  
  




