/* IMAGINE GROUP AI — shared line-icon sprite (stroke 1.6, round joins)
   Include as first element of <body>:  <script src="icons.js"></script>
   Use:  <svg><use href="#i-globe"/></svg>                                  */
(function(){
var S='stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"';
function sym(id,inner){return '<symbol id="i-'+id+'" viewBox="0 0 24 24"><g '+S+'>'+inner+'</g></symbol>';}
var d={
globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.8 2.6 4 5.6 4 9s-1.2 6.4-4 9c-2.8-2.6-4-5.6-4-9s1.2-6.4 4-9z"/>',
users:'<circle cx="9" cy="8.5" r="3.2"/><path d="M3.2 19.5c.6-3.2 3-5 5.8-5s5.2 1.8 5.8 5"/><path d="M15.5 5.9a3.2 3.2 0 0 1 0 5.2M17.6 14.9c1.7.7 2.9 2.2 3.3 4.6"/>',
user:'<circle cx="12" cy="8" r="3.6"/><path d="M5 20c.8-3.8 3.6-5.8 7-5.8s6.2 2 7 5.8"/>',
gauge:'<path d="M4.5 17.5a8.5 8.5 0 1 1 15 0"/><path d="M12 13.5 16 9"/><circle cx="12" cy="14" r="1.3"/>',
puzzle:'<path d="M9 4h4v2.2a1.8 1.8 0 1 0 3.6 0V4H20v4h-2.2a1.8 1.8 0 1 0 0 3.6H20V20h-4v-2.2a1.8 1.8 0 1 0-3.6 0V20H9v-3.4H6.8a1.8 1.8 0 1 1 0-3.6H9V9"/>',
help:'<circle cx="12" cy="12" r="9"/><path d="M9.4 9.3a2.7 2.7 0 0 1 5.3.7c0 1.8-2.7 2.2-2.7 4"/><circle cx="12" cy="17.2" r=".4" fill="currentColor"/>',
bank:'<path d="M3 9.5 12 4l9 5.5M4.5 10v7M9.2 10v7M14.8 10v7M19.5 10v7M3.5 20h17"/>',
chartdown:'<path d="M4 5v14a1 1 0 0 0 1 1h15"/><path d="M7 8l4 4 3-2 5 5"/><path d="M19 12v3.4h-3.4"/>',
trophy:'<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 5H4.5v1.5A3.5 3.5 0 0 0 8 10M16 5h3.5v1.5A3.5 3.5 0 0 1 16 10"/><path d="M12 13v3M8.5 20h7M10 20c0-2 .6-4 2-4s2 2 2 4"/>',
grad:'<path d="M2.5 9 12 4.5 21.5 9 12 13.5z"/><path d="M6.5 11.2v4.3c0 1.4 2.5 2.8 5.5 2.8s5.5-1.4 5.5-2.8v-4.3"/><path d="M21.5 9v5"/>',
gear:'<circle cx="12" cy="12" r="3.1"/><circle cx="12" cy="12" r="6.7"/><path d="M12 2.9v2.4M12 18.7v2.4M2.9 12h2.4M18.7 12h2.4M5.6 5.6l1.7 1.7M16.7 16.7l1.7 1.7M18.4 5.6l-1.7 1.7M7.3 16.7l-1.7 1.7"/>',
film:'<rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M8 5v14M16 5v14M3.5 9.5H8M3.5 14.5H8M16 9.5h4.5M16 14.5h4.5"/>',
chartup:'<path d="M4 5v14a1 1 0 0 0 1 1h15"/><path d="M7 15l4-4 3 2 5-6"/><path d="M19 7h-3.4M19 7v3.4"/>',
shieldcheck:'<path d="M12 3.5 19 6v6c0 4.4-3 7.4-7 8.5-4-1.1-7-4.1-7-8.5V6z"/><path d="M9 12l2.2 2.2L15.5 10"/>',
shieldstar:'<path d="M12 3.5 19 6v6c0 4.4-3 7.4-7 8.5-4-1.1-7-4.1-7-8.5V6z"/><path d="M12 8.6l1 2.1 2.3.3-1.7 1.6.4 2.3-2-1.1-2 1.1.4-2.3-1.7-1.6 2.3-.3z"/>',
shieldlock:'<path d="M12 3.5 19 6v6c0 4.4-3 7.4-7 8.5-4-1.1-7-4.1-7-8.5V6z"/><rect x="9.4" y="10.6" width="5.2" height="4.6" rx="1"/><path d="M10.5 10.6V9.4a1.5 1.5 0 0 1 3 0v1.2"/>',
target:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/><path d="M12 3.5V7M12 17v3.5M3.5 12H7M17 12h3.5"/>',
cycle:'<path d="M5 12a7 7 0 0 1 11.9-5H14.5M19 12a7 7 0 0 1-11.9 5H9.5"/><path d="M16.9 3.6V7h-3.4M7.1 20.4V17h3.4"/>',
rocket:'<path d="M12 15c-1.5-4.5.5-9 4.5-11.5C18 6 18.5 11 15 15z"/><path d="M12 15l-3.5 3.5M12 15l3 3M9 12l-3.7 1.2L8 16M15.5 14.5l1.3 3.8L13 17"/><circle cx="14.6" cy="8.9" r="1.2"/>',
award:'<circle cx="12" cy="9" r="5"/><path d="M9.5 13.5 8 20l4-2 4 2-1.5-6.5"/><path d="M12 6.8l.8 1.6 1.8.3-1.3 1.2.3 1.8-1.6-.9-1.6.9.3-1.8-1.3-1.2 1.8-.3z"/>',
handshake:'<path d="M2.5 8.5 7 6.5l5 1.5 4.5-1.5 5 2M2.5 14.5 5 15M21.5 14.5 19 15"/><path d="M12 8l-3.8 3.5a1.3 1.3 0 0 0 1.8 1.9L11.5 12l4 3.5a1.4 1.4 0 0 0 2-.2M13.5 17l1 .9a1.3 1.3 0 0 0 1.9-.2M11 17.8l.8.7a1.3 1.3 0 0 0 1.9-.3"/>',
nodes:'<circle cx="12" cy="5.5" r="2"/><circle cx="5.5" cy="17" r="2"/><circle cx="18.5" cy="17" r="2"/><path d="M12 7.5v3M10.8 12.7 7 15.4M13.2 12.7 17 15.4M12 10.5a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z"/>',
coffee:'<path d="M5 8h11v6a4.5 4.5 0 0 1-4.5 4.5H9.5A4.5 4.5 0 0 1 5 14z"/><path d="M16 9.5h1.6a2.4 2.4 0 0 1 0 4.8H16M7.5 4.5c.8.9.8 1.6 0 2.5M11 4.5c.8.9.8 1.6 0 2.5"/>',
clapper:'<rect x="3.5" y="10" width="17" height="9.5" rx="1.5"/><path d="M3.5 10 20 6l-1-2.8L4.5 7.2 3.5 10zM8.5 8.2l2.6 2.8M13 7l2.6 2.8"/>',
chip:'<rect x="7" y="7" width="10" height="10" rx="1.6"/><rect x="10.2" y="10.2" width="3.6" height="3.6"/><path d="M9.5 7V4M14.5 7V4M9.5 20v-3M14.5 20v-3M7 9.5H4M7 14.5H4M20 9.5h-3M20 14.5h-3"/>',
building:'<rect x="6" y="4" width="12" height="16.5" rx="1"/><path d="M9.5 8h1.6M13 8h1.6M9.5 11.5h1.6M13 11.5h1.6M9.5 15h1.6M13 15h1.6M10.5 20.5v-2.6h3v2.6"/>',
code:'<path d="M8.5 8 4.5 12l4 4M15.5 8l4 4-4 4M13 5.5l-2 13"/>',
check:'<path d="M4.5 12.5 10 18 19.5 6.5"/>',
checkcoin:'<circle cx="12" cy="12" r="9"/><path d="M7.5 12.3 10.7 15.5 16.5 8.8"/>',
lock:'<rect x="5.5" y="10.5" width="13" height="9" rx="1.8"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/><circle cx="12" cy="15" r="1.3"/>',
dollar:'<circle cx="12" cy="12" r="9"/><path d="M15 8.8c-.6-1-1.6-1.5-3-1.5-1.7 0-2.8.8-2.8 2.1 0 3 6 1.6 6 4.8 0 1.4-1.3 2.3-3.2 2.3-1.6 0-2.7-.6-3.3-1.7M12 5.5v13"/>',
bolt:'<path d="M13 3 5.5 13.5H11L10 21l7.5-10.5H12z"/>',
book:'<path d="M4.5 5.5A2.5 2.5 0 0 1 7 3h12.5v15H7a2.5 2.5 0 0 0-2.5 2.5z"/><path d="M4.5 20.5A2.5 2.5 0 0 1 7 18h12.5M8.5 7.5h7"/>',
briefcase:'<rect x="3.5" y="7.5" width="17" height="12" rx="1.8"/><path d="M9 7.5V6a1.8 1.8 0 0 1 1.8-1.8h2.4A1.8 1.8 0 0 1 15 6v1.5M3.5 12.5h17M12 11.2v2.6"/>',
heart:'<path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 7.5 3c0 5.4-7.5 10-7.5 10z"/>',
plane:'<path d="M10.5 13.5 3.5 11l1.5-1.5 6.5 1L16 6a1.6 1.6 0 0 1 2.3 2.3l-4.5 4.5 1 6.5L13.5 21l-2.5-7z"/><path d="M6 18l2-2"/>',
home:'<path d="M4 11.5 12 4.5l8 7"/><path d="M6 10v9.5h12V10M10.2 19.5v-4.8h3.6v4.8"/>',
star:'<path d="M12 4l2.3 4.9 5.2.7-3.8 3.7.9 5.2L12 16l-4.6 2.5.9-5.2L4.5 9.6l5.2-.7z"/>',
play:'<circle cx="12" cy="12" r="9"/><path d="M10 8.5l6 3.5-6 3.5z"/>',
robot:'<rect x="5.5" y="8.5" width="13" height="9.5" rx="2.5"/><circle cx="9.5" cy="13" r="1.1" fill="currentColor" stroke="none"/><circle cx="14.5" cy="13" r="1.1" fill="currentColor" stroke="none"/><path d="M12 8.5V5.8M12 5.8a1.2 1.2 0 1 0-.1-2.4 1.2 1.2 0 0 0 .1 2.4zM5.5 12H3.8M20.2 12h-1.7M9.5 16h5"/>',
scale:'<path d="M12 4.5v15M7.5 19.5h9M12 6.5 6 8M12 6.5 18 8"/><path d="M3.5 13.5 6 8l2.5 5.5a2.7 2.7 0 0 1-5 0zM15.5 13.5 18 8l2.5 5.5a2.7 2.7 0 0 1-5 0z"/>',
flask:'<path d="M9.5 3.5h5M10.5 3.5v5L5.2 17.6A2 2 0 0 0 7 20.5h10a2 2 0 0 0 1.8-2.9L13.5 8.5v-5"/><path d="M7.5 14.5h9"/>',
palette:'<path d="M12 3.5a8.5 8.5 0 1 0 0 17c1.4 0 2-.8 2-1.8 0-1.6-1.4-1.9-1.4-3 0-1 .8-1.7 2-1.7h2A3.9 3.9 0 0 0 20.5 10c-.4-3.7-4-6.5-8.5-6.5z"/><circle cx="8" cy="9" r="1.1"/><circle cx="12.5" cy="7" r="1.1"/><circle cx="16.5" cy="9.5" r="1.1"/><circle cx="7.5" cy="13.5" r="1.1"/>',
bulb:'<path d="M9 18h6M10 21h4"/><path d="M12 3.5a6 6 0 0 1 3.5 10.9c-.8.6-1 1.4-1 2.1h-5c0-.7-.2-1.5-1-2.1A6 6 0 0 1 12 3.5z"/>',
monitor:'<rect x="3.5" y="4.5" width="17" height="11.5" rx="1.6"/><path d="M9.5 20h5M12 16v4M6.5 12.5l2.5-3 2 1.5 3-3.5 2.5 3"/>',
cube:'<path d="M12 3.5 19.5 8v8L12 20.5 4.5 16V8z"/><path d="M4.5 8 12 12.5 19.5 8M12 12.5v8"/>',
mail:'<rect x="3.5" y="5.5" width="17" height="13" rx="1.8"/><path d="M4.5 7.5 12 13l7.5-5.5"/>',
x:'<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>',
personsolid:'<g fill="currentColor" stroke="none"><circle cx="12" cy="5.4" r="2.6"/><path d="M8.2 9.4h7.6c.9 0 1.4.9 1.1 1.7l-1.4 4h-1.3V22h-2V16h-.4V22h-2v-6.9H8.5l-1.4-4c-.3-.8.2-1.7 1.1-1.7z"/></g>',
};
var out='<svg xmlns="http://www.w3.org/2000/svg" style="display:none">';
for(var k in d) out+=sym(k,d[k]);
out+='</svg>';
document.write(out);
})();
