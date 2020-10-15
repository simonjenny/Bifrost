$('document').ready(function() {
  function currentTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.querySelector(".clock").innerHTML = hour + ":" + min + ":" + sec;
    var t = setTimeout(function () {
      currentTime();
    }, 1000);
  }
  
  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    } else {
      return k;
    }
  }

  $('input').focus(function(e) {
    $('input').val('')
  });

  function loadApplications(){
    $.getJSON('applications.json', function(data){
      $.each(data.applications, function(i,v){
        $('#applications').append(
          $('#app')
          .html()
          .replaceAll('{{url}}', v)
          .replaceAll('{{name}}', i)
        );
      })
    })
  }

  currentTime();
  loadApplications();
})
