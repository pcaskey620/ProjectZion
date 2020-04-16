var TIMEOUT = 8000;
 
//var interval = setInterval(handleNext, TIMEOUT);
 
function handleNext() {
  var $radios = $('input[class*="slide-radio"]');
  var $activeRadio = $('input[class*="slide-radio"]:checked');
 
  var currentIndex = $activeRadio.index();
  var radiosLength = $radios.length;
 
  $radios
    .attr('checked', false);
 
  if (currentIndex > radiosLength - 1) { 
    $radios
      .first()
      .attr('checked', true); 
  } else { 
    $activeRadio
      .next('input[class*="slide-radio"]')
      .attr('checked', true);
  }
}

function handlePrev() {
    var $radios = $('input[class*="slide-radio"]');
    var $activeRadio = $('input[class*="slide-radio"]:checked');
   
    var currentIndex = $activeRadio.index();
    var radiosLength = $radios.length;
   
    $radios
      .attr('checked', false);
   
    if (currentIndex > radiosLength - 1) { 
      $radios
        .first()
        .attr('checked', true); 
    } else { 
      $activeRadio
        .prev('input[class*="slide-radio"]')
        .attr('checked', true);
    }
}

$(document).ready(function() {
    $('.pager-right').click(handleNext);
    $('.pager-left').click(handlePrev);
});