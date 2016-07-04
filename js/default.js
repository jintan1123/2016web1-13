var separate_time = function(time){
  var sec = time.getSeconds();
  var min = time.getMinutes();
  var hours = time.getDate();
  var month = time.getMonth();
  var year = time.getFullYear();
  return [sec,min,hours,month,year];
}
