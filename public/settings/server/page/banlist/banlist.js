var a0_0x228f7f=a0_0x24ed;(function(_0x43299c,_0x4a36fb){var _0xbe1795=a0_0x24ed,_0xb4f060=_0x43299c();while(!![]){try{var _0x3c1531=parseInt(_0xbe1795(0x11d))/0x1*(-parseInt(_0xbe1795(0xf5))/0x2)+parseInt(_0xbe1795(0xfc))/0x3*(-parseInt(_0xbe1795(0x11e))/0x4)+-parseInt(_0xbe1795(0x119))/0x5*(-parseInt(_0xbe1795(0x10f))/0x6)+parseInt(_0xbe1795(0x10a))/0x7+-parseInt(_0xbe1795(0xe6))/0x8*(parseInt(_0xbe1795(0xe7))/0x9)+-parseInt(_0xbe1795(0xf0))/0xa*(parseInt(_0xbe1795(0x122))/0xb)+parseInt(_0xbe1795(0x112))/0xc;if(_0x3c1531===_0x4a36fb)break;else _0xb4f060['push'](_0xb4f060['shift']());}catch(_0x587461){_0xb4f060['push'](_0xb4f060['shift']());}}}(a0_0x3a78,0xeaafc),setupNotify());var servername=document[a0_0x228f7f(0x11f)](a0_0x228f7f(0xfb)),serverdescription=document[a0_0x228f7f(0x11f)]('server_description'),saveButton=document[a0_0x228f7f(0x11f)](a0_0x228f7f(0xf9)),serverconfigName,serverconfigDesc;socket[a0_0x228f7f(0x10b)]('checkPermission',{'id':getID(),'token':getToken(),'permission':a0_0x228f7f(0x107)},function(_0x458cb8){var _0x1427c0=a0_0x228f7f;_0x458cb8[_0x1427c0(0x115)]=='denied'?window[_0x1427c0(0x11c)][_0x1427c0(0x118)]=window['location'][_0x1427c0(0xef)]+_0x1427c0(0xfd):document[_0x1427c0(0x11f)]('pagebody')[_0x1427c0(0xed)]['display']=_0x1427c0(0x120);}),socket['emit']('userConnected',{'id':getID(),'name':getUsername(),'icon':getPFP(),'status':getStatus(),'token':getToken(),'aboutme':getAboutme(),'banner':getBanner()}),getBans();function a0_0x24ed(_0x3dd079,_0x24896d){var _0x3a781d=a0_0x3a78();return a0_0x24ed=function(_0x24ede5,_0x4bb0c5){_0x24ede5=_0x24ede5-0xe0;var _0x4a6e38=_0x3a781d[_0x24ede5];return _0x4a6e38;},a0_0x24ed(_0x3dd079,_0x24896d);}function getBanObject(_0xa3d966){var _0x4eccce=a0_0x228f7f,_0x4e25c0=bannedObj[_0xa3d966];document[_0x4eccce(0x110)](_0x4eccce(0x113)+_0xa3d966)[_0x4eccce(0xf8)]='<i>Reason:\x20'+_0x4e25c0['reason']+'</i>',document[_0x4eccce(0x110)]('#ban-until-'+_0xa3d966)[_0x4eccce(0xf8)]=_0x4eccce(0x111)+new Date(_0x4e25c0[_0x4eccce(0x101)])[_0x4eccce(0xe1)]()+_0x4eccce(0x114),document[_0x4eccce(0x110)](_0x4eccce(0xec)+_0xa3d966)['innerHTML']=_0x4eccce(0xf3)+_0x4e25c0['bannedBy']+_0x4eccce(0xf2),document['querySelector']('#ban-by-'+_0xa3d966)[_0x4eccce(0xed)][_0x4eccce(0xe8)]=_0x4eccce(0x105),document[_0x4eccce(0x110)](_0x4eccce(0xec)+_0xa3d966)[_0x4eccce(0x108)]=function(){var _0x989e31=_0x4eccce;socket[_0x989e31(0x10b)](_0x989e31(0x10e),{'id':getID(),'token':getToken(),'target':_0x4e25c0['bannedBy']},function(_0x232a37){var _0x5f347b=_0x989e31;notify('User\x20was\x20banned\x20by\x20'+_0x232a37[_0x5f347b(0xe4)][_0x5f347b(0xeb)],_0x5f347b(0x117),null,'normal');});},console[_0x4eccce(0xf4)](bannedObj[_0xa3d966]);}function unbanUser(_0x5d04c3){var _0x546f90=a0_0x228f7f,_0x47a238=document[_0x546f90(0x110)](_0x546f90(0xf7)+_0x5d04c3)[_0x546f90(0x121)][_0x546f90(0xfa)]('\x20')[0x0],_0x21d18b=document[_0x546f90(0x110)](_0x546f90(0x106)+_0x5d04c3);if(!confirm('Do\x20you\x20want\x20to\x20unban\x20the\x20user\x20'+_0x47a238+'?')){notify(_0x546f90(0xff),_0x546f90(0x117));return;}socket[_0x546f90(0x10b)](_0x546f90(0xe5),{'id':getID(),'token':getToken(),'target':_0x5d04c3},function(_0x31c91b){var _0x3ded48=_0x546f90;_0x31c91b[_0x3ded48(0x109)]==_0x3ded48(0x11a)?(notify(_0x31c91b[_0x3ded48(0xf1)],_0x3ded48(0x11a)),_0x21d18b[_0x3ded48(0x11b)]()):(notify(_0x31c91b[_0x3ded48(0xf1)],_0x3ded48(0xfe)),console[_0x3ded48(0xf4)](_0x31c91b[_0x3ded48(0xe4)]));});}var bannedObj='';function getBans(){var _0x50dc8b=a0_0x228f7f,_0x12834e=document[_0x50dc8b(0x11f)]('ban-container');socket[_0x50dc8b(0x10b)](_0x50dc8b(0x10d),{'id':getID(),'token':getToken()},function(_0x5d5ef9){var _0x516422=_0x50dc8b;try{if(_0x5d5ef9[_0x516422(0x109)]==_0x516422(0x11a)){_0x12834e[_0x516422(0xf8)]='',bannedObj=_0x5d5ef9['data'],console[_0x516422(0xf4)](_0x5d5ef9),Object[_0x516422(0x102)](_0x5d5ef9[_0x516422(0xe4)])[_0x516422(0xe9)](_0xab3609=>{var _0x5e9353=_0x516422;socket[_0x5e9353(0x10b)](_0x5e9353(0x10e),{'id':getID(),'token':getToken(),'target':_0xab3609},function(_0x31fc92){var _0x159d18=_0x5e9353;if(_0x31fc92[_0x159d18(0x109)]==_0x159d18(0x11a)){var _0x5181e3=_0x31fc92['data'];console['log'](_0x5181e3);var _0x23e23f=_0x159d18(0x10c)+_0x5181e3['id']+_0x159d18(0x100)+_0x5181e3[_0x159d18(0x116)]+_0x159d18(0xea)+_0x5181e3['icon']+'\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22banned-entry-info-container\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20clas=\x22banned-entry-username\x22\x20id=\x22ban-username-'+_0x5181e3['id']+'\x22>'+_0x5181e3['name']+'\x20('+_0x5181e3['id']+')</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22button\x22\x20onclick=\x22getBanObject('+_0x5181e3['id']+_0x159d18(0xe0)+_0x5181e3['id']+_0x159d18(0xe2)+_0x5181e3['id']+'\x22></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20id=\x22ban-until-'+_0x5181e3['id']+_0x159d18(0xf6)+_0x5181e3['id']+_0x159d18(0xee);_0x12834e[_0x159d18(0x104)](_0x159d18(0xe3),_0x23e23f);}else notify(_0x31fc92['msg'],_0x159d18(0xfe));});});try{var _0x542a8f=document['querySelectorAll'](_0x516422(0x103));console[_0x516422(0xf4)](_0x542a8f);}catch(_0x22af0a){console['log'](_0x22af0a);}}else alert(_0x5d5ef9[_0x516422(0xf1)]);}catch(_0x487422){console[_0x516422(0xf4)](_0x487422),notify('Unkown\x20Error!\x20Reloading\x20might\x20fix\x20it',_0x516422(0xfe));}});}function a0_0x3a78(){var _0x189892=['13026804rEcEee','emit','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22banned-entry-container\x22\x20id=\x22banned-id-','getBans','resolveMember','9354smUMUo','querySelector','<i>Banned\x20Until:\x20<i>','14458764TeZWKP','#ban-reason-','</i>','permission','banner','info','href','5205ifgWzZ','success','remove','location','1KxqflG','755252mRmZdl','getElementById','block','innerText','1553794iJlcOI',')\x22\x20value=\x22Get\x20Info\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22button\x22\x20onclick=\x22unbanUser(','toLocaleDateString',')\x22\x20value=\x22Unban\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20id=\x22ban-reason-','beforeend','data','unbanUser','968fHwyVN','34623ZfcGwU','cursor','forEach','\x27);\x22\x20></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22banned-entry-img-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20class=\x22banned-entry-icon\x22\x20src=\x22','name','#ban-by-','style','\x22></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','origin','130PZxyth','msg','\x20(click\x20for\x20info)</i>','<i>Banned\x20By:\x20<i>','log','1340942noivUg','\x22></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20id=\x22ban-by-','#ban-username-','innerHTML','settings_profile_save','split','server_name','12znzWba','/settings/server','error','Canceled\x20unban','\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22banned-entry-img-containers\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22banned-entry-banner-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22banned-entry-banner\x22\x20style=\x22background-image:\x20url(\x27','until','keys','.banned-entry-container','insertAdjacentHTML','pointer','#banned-id-','manageBans','onclick','type'];a0_0x3a78=function(){return _0x189892;};return a0_0x3a78();}