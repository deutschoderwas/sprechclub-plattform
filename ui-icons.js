/* deutschoderwas club – Icon-System
   Einheitliche Linien-Icons (24×24, stroke 1.75) statt Emojis.
   Verwendung: ICON('home', 20) → <svg …>                                */
(function(){
var P = {
  home:      'M3 10.5 12 3l9 7.5M5.5 9.5V20a1 1 0 0 0 1 1H10v-6h4v6h3.5a1 1 0 0 0 1-1V9.5',
  book:      'M4 4.5A1.5 1.5 0 0 1 5.5 3H19v15H5.5A1.5 1.5 0 0 0 4 19.5zM4 19.5A1.5 1.5 0 0 0 5.5 21H19v-3',
  chat:      'M21 11.5a7.5 7.5 0 0 1-7.5 7.5H8l-4 3v-3.6A7.5 7.5 0 0 1 13.5 4a7.5 7.5 0 0 1 7.5 7.5Z',
  user:      'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8 8.5c0-3.6-3.6-5.5-8-5.5s-8 1.9-8 5.5',
  headset:   'M4 14v-2a8 8 0 0 1 16 0v2M4 14a2 2 0 0 1 2 2v2a2 2 0 0 1-4 0v-2a2 2 0 0 1 2-2Zm16 0a2 2 0 0 1 2 2v2a2 2 0 0 1-4 0v-2a2 2 0 0 1 2-2Z',
  cards:     'M8 7h11a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2ZM3.5 16.5V6a2 2 0 0 1 2-2h10',
  grammar:   'M4 20 9 4l5 16M6 15h6M15.5 20V9h3a3 3 0 0 1 0 6h-3',
  puzzle:    'M9 4.5a2 2 0 1 1 4 0V6h3.5a1 1 0 0 1 1 1v3.5h1.5a2 2 0 1 1 0 4H17.5V19a1 1 0 0 1-1 1H13v-1.5a2 2 0 1 0-4 0V20H5.5a1 1 0 0 1-1-1v-3.5H6a2 2 0 1 0 0-4H4.5V7a1 1 0 0 1 1-1H9V4.5Z',
  bookmark:  'M6.5 3.5h11a1 1 0 0 1 1 1V21l-6.5-4-6.5 4V4.5a1 1 0 0 1 1-1Z',
  mic:       'M12 3a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3ZM5.5 11.5A6.5 6.5 0 0 0 18.5 11.5M12 18v3',
  flag:      'M5 21V4m0 0h11l-2 3.5L16 11H5',
  play:      'M8 5.5v13l11-6.5-11-6.5Z',
  speaker:   'M4 9.5h3l4.5-4v13L7 14.5H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1ZM15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11',
  arrowR:    'M5 12h14m-6-6 6 6-6 6',
  arrowL:    'M19 12H5m6 6-6-6 6-6',
  lock:      'M7 10.5V8a5 5 0 0 1 10 0v2.5M5.5 10.5h13a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-8.5a1 1 0 0 1 1-1Z',
  check:     'M4.5 12.5 9.5 17.5 19.5 6.5',
  target:    'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-4.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z',
  clock:     'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-14v5.5l3.5 2',
  chart:     'M4 20V10m5 10V4m5 16v-7m5 7V8',
  spark:     'M12 3.5 13.9 9l5.6 1.9-5.6 1.9L12 18.5 10.1 12.8 4.5 10.9 10.1 9 12 3.5Z',
  briefcase: 'M4 8.5h16a1 1 0 0 1 1 1V19a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a1 1 0 0 1 1-1Zm5 0V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v2.5M3 13h18',
  house:     'M3 10.5 12 3l9 7.5M5.5 9.5V20a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V9.5',
  film:      'M3 6.5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-11Zm4-1v13m10-13v13M3 12h18',
  layers:    'M12 3 3 7.5l9 4.5 9-4.5L12 3ZM3 12.5 12 17l9-4.5M3 17 12 21.5 21 17'
};
window.ICON = function(name, size, cls){
  var d = P[name]; if(!d) return '';
  return '<svg class="ic'+(cls?' '+cls:'')+'" width="'+(size||20)+'" height="'+(size||20)+'" viewBox="0 0 24 24" fill="none" '
    + 'stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
    + '<path d="'+d+'"/></svg>';
};
window.ICON_PATHS = P;
})();
