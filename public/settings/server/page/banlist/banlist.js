var a0_0x578679=a0_0xb353;(function(_0x331f7f,_0x20ba44){var _0x1a68df=a0_0xb353,_0x1391e8=_0x331f7f();while(!![]){try{var _0x3e3ed0=parseInt(_0x1a68df(0x1fd))/0x1*(-parseInt(_0x1a68df(0x1e4))/0x2)+-parseInt(_0x1a68df(0x204))/0x3*(parseInt(_0x1a68df(0x1e7))/0x4)+-parseInt(_0x1a68df(0x200))/0x5*(parseInt(_0x1a68df(0x1ee))/0x6)+-parseInt(_0x1a68df(0x1de))/0x7*(parseInt(_0x1a68df(0x1d4))/0x8)+-parseInt(_0x1a68df(0x1ca))/0x9*(-parseInt(_0x1a68df(0x1ec))/0xa)+-parseInt(_0x1a68df(0x1d8))/0xb*(parseInt(_0x1a68df(0x1f3))/0xc)+parseInt(_0x1a68df(0x1ce))/0xd;if(_0x3e3ed0===_0x20ba44)break;else _0x1391e8['push'](_0x1391e8['shift']());}catch(_0x1a82fd){_0x1391e8['push'](_0x1391e8['shift']());}}}(a0_0x40aa,0xa955c),setupNotify());function a0_0xb353(_0x342018,_0x1622a3){var _0x40aae1=a0_0x40aa();return a0_0xb353=function(_0xb353fc,_0x3fa247){_0xb353fc=_0xb353fc-0x1ca;var _0x426ec9=_0x40aae1[_0xb353fc];return _0x426ec9;},a0_0xb353(_0x342018,_0x1622a3);}var servername=document['getElementById'](a0_0x578679(0x1f2)),serverdescription=document[a0_0x578679(0x1d5)](a0_0x578679(0x207)),saveButton=document['getElementById'](a0_0x578679(0x206)),serverconfigName,serverconfigDesc;socket[a0_0x578679(0x1fb)]('checkPermission',{'id':getID(),'token':getToken(),'permission':a0_0x578679(0x20f)},function(_0x1ab17d){var _0x477375=a0_0x578679;_0x1ab17d[_0x477375(0x1fa)]==_0x477375(0x1e3)?window['location'][_0x477375(0x1ed)]=window[_0x477375(0x1d7)][_0x477375(0x1e5)]+_0x477375(0x20a):document['getElementById'](_0x477375(0x1fe))[_0x477375(0x20b)]['display']=_0x477375(0x1e0);}),socket[a0_0x578679(0x1fb)]('userConnected',{'id':getID(),'name':getUsername(),'icon':getPFP(),'status':getStatus(),'token':getToken(),'aboutme':getAboutme(),'banner':getBanner()}),getBans();function getBanObject(_0x8bb8e2){var _0x188fe4=a0_0x578679,_0x2f51d3=bannedObj[_0x8bb8e2];document[_0x188fe4(0x1d6)]('#ban-reason-'+_0x8bb8e2)[_0x188fe4(0x1fc)]='<i>Reason:\x20'+_0x2f51d3[_0x188fe4(0x1e6)]+_0x188fe4(0x208),document[_0x188fe4(0x1d6)](_0x188fe4(0x1f8)+_0x8bb8e2)[_0x188fe4(0x1fc)]=_0x188fe4(0x20c)+new Date(_0x2f51d3[_0x188fe4(0x205)])['toLocaleDateString']()+_0x188fe4(0x208),document['querySelector'](_0x188fe4(0x1e9)+_0x8bb8e2)[_0x188fe4(0x1fc)]=_0x188fe4(0x1e1)+_0x2f51d3[_0x188fe4(0x1d3)]+'\x20(click\x20for\x20info)</i>',document[_0x188fe4(0x1d6)](_0x188fe4(0x1e9)+_0x8bb8e2)['style']['cursor']=_0x188fe4(0x201),document[_0x188fe4(0x1d6)](_0x188fe4(0x1e9)+_0x8bb8e2)[_0x188fe4(0x1e8)]=function(){var _0x3fbb02=_0x188fe4;socket[_0x3fbb02(0x1fb)](_0x3fbb02(0x1dd),{'id':getID(),'token':getToken(),'target':_0x2f51d3['bannedBy']},function(_0xe2eaf4){var _0xf180e8=_0x3fbb02;notify('User\x20was\x20banned\x20by\x20'+_0xe2eaf4[_0xf180e8(0x1dc)][_0xf180e8(0x1d2)],_0xf180e8(0x1cc),null,_0xf180e8(0x20e));});},console[_0x188fe4(0x1ef)](bannedObj[_0x8bb8e2]);}function unbanUser(_0x37e6ff){var _0x1bff14=a0_0x578679,_0x41aa34=document[_0x1bff14(0x1d6)]('#ban-username-'+_0x37e6ff)[_0x1bff14(0x1d1)]['split']('\x20')[0x0],_0xb4c7c1=document[_0x1bff14(0x1d6)](_0x1bff14(0x1da)+_0x37e6ff);if(!confirm(_0x1bff14(0x1eb)+_0x41aa34+'?')){notify(_0x1bff14(0x209),'info');return;}socket[_0x1bff14(0x1fb)](_0x1bff14(0x1cd),{'id':getID(),'token':getToken(),'target':_0x37e6ff},function(_0x21d39a){var _0x15ffed=_0x1bff14;_0x21d39a[_0x15ffed(0x1db)]==_0x15ffed(0x1df)?(notify(_0x21d39a[_0x15ffed(0x1d9)],_0x15ffed(0x1df)),_0xb4c7c1['remove']()):(notify(_0x21d39a[_0x15ffed(0x1d9)],_0x15ffed(0x1cf)),console[_0x15ffed(0x1ef)](_0x21d39a['data']));});}function a0_0x40aa(){var _0x1d28b8=['settings_profile_save','server_description','</i>','Canceled\x20unban','/settings/server','style','<i>Banned\x20Until:\x20<i>','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22banned-entry-container\x22\x20id=\x22banned-id-','normal','manageBans','11635578uYIfAA',')</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22button\x22\x20onclick=\x22getBanObject(','info','unbanUser','18359809DhIdOQ','error','\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22banned-entry-img-containers\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22banned-entry-banner-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22banned-entry-banner\x22\x20style=\x22background-image:\x20url(\x27','innerText','name','bannedBy','977800DRFOGq','getElementById','querySelector','location','121MDzHQb','msg','#banned-id-','type','data','resolveMember','7fVZHmT','success','block','<i>Banned\x20By:\x20<i>','keys','denied','5646OSScIF','origin','reason','4oyCmNz','onclick','#ban-by-','Unkown\x20Error!\x20Reloading\x20might\x20fix\x20it','Do\x20you\x20want\x20to\x20unban\x20the\x20user\x20','10TzFLSq','href','6500058nlmaFB','log',')\x22\x20value=\x22Get\x20Info\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22button\x22\x20onclick=\x22unbanUser(','ban-container','server_name','172104ajssKL','insertAdjacentHTML','icon','\x27);\x22\x20></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22banned-entry-img-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20class=\x22banned-entry-icon\x22\x20src=\x22','querySelectorAll','#ban-until-','\x22></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20id=\x22ban-until-','permission','emit','innerHTML','89jOnjfT','pagebody','\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22banned-entry-info-container\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20clas=\x22banned-entry-username\x22\x20id=\x22ban-username-','5bsLQbD','pointer','beforeend','banner','1190886wXaxBl','until'];a0_0x40aa=function(){return _0x1d28b8;};return a0_0x40aa();}var bannedObj='';function getBans(){var _0x184ab0=a0_0x578679,_0x87f74e=document[_0x184ab0(0x1d5)](_0x184ab0(0x1f1));socket[_0x184ab0(0x1fb)]('getBans',{'id':getID(),'token':getToken()},function(_0x5a49f7){var _0x1b0f0a=_0x184ab0;try{if(_0x5a49f7[_0x1b0f0a(0x1db)]==_0x1b0f0a(0x1df)){_0x87f74e[_0x1b0f0a(0x1fc)]='',bannedObj=_0x5a49f7[_0x1b0f0a(0x1dc)],console[_0x1b0f0a(0x1ef)](_0x5a49f7),Object[_0x1b0f0a(0x1e2)](_0x5a49f7[_0x1b0f0a(0x1dc)])['forEach'](_0x8b350c=>{var _0x826cf3=_0x1b0f0a;socket[_0x826cf3(0x1fb)](_0x826cf3(0x1dd),{'id':getID(),'token':getToken(),'target':_0x8b350c},function(_0x24712c){var _0x5a6d0c=_0x826cf3;if(_0x24712c[_0x5a6d0c(0x1db)]==_0x5a6d0c(0x1df)){var _0x3b6310=_0x24712c[_0x5a6d0c(0x1dc)];console[_0x5a6d0c(0x1ef)](_0x3b6310);var _0x2bdfcb=_0x5a6d0c(0x20d)+_0x3b6310['id']+_0x5a6d0c(0x1d0)+_0x3b6310[_0x5a6d0c(0x203)]+_0x5a6d0c(0x1f6)+_0x3b6310[_0x5a6d0c(0x1f5)]+_0x5a6d0c(0x1ff)+_0x3b6310['id']+'\x22>'+_0x3b6310[_0x5a6d0c(0x1d2)]+'\x20('+_0x3b6310['id']+_0x5a6d0c(0x1cb)+_0x3b6310['id']+_0x5a6d0c(0x1f0)+_0x3b6310['id']+')\x22\x20value=\x22Unban\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20id=\x22ban-reason-'+_0x3b6310['id']+_0x5a6d0c(0x1f9)+_0x3b6310['id']+'\x22></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20id=\x22ban-by-'+_0x3b6310['id']+'\x22></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';_0x87f74e[_0x5a6d0c(0x1f4)](_0x5a6d0c(0x202),_0x2bdfcb);}else notify(_0x24712c[_0x5a6d0c(0x1d9)],_0x5a6d0c(0x1cf));});});try{var _0x2f3783=document[_0x1b0f0a(0x1f7)]('.banned-entry-container');console[_0x1b0f0a(0x1ef)](_0x2f3783);}catch(_0x149a70){console[_0x1b0f0a(0x1ef)](_0x149a70);}}else alert(_0x5a49f7[_0x1b0f0a(0x1d9)]);}catch(_0x45c2a6){console[_0x1b0f0a(0x1ef)](_0x45c2a6),notify(_0x1b0f0a(0x1ea),_0x1b0f0a(0x1cf));}});}