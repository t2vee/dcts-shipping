var a0_0xb8f061=a0_0x487f;(function(_0x163b0d,_0x368027){var _0x2f5201=a0_0x487f,_0x365ecd=_0x163b0d();while(!![]){try{var _0x4dbc0d=parseInt(_0x2f5201(0x156))/0x1+parseInt(_0x2f5201(0x15e))/0x2+-parseInt(_0x2f5201(0x178))/0x3*(parseInt(_0x2f5201(0x158))/0x4)+-parseInt(_0x2f5201(0x16e))/0x5*(parseInt(_0x2f5201(0x161))/0x6)+-parseInt(_0x2f5201(0x157))/0x7*(-parseInt(_0x2f5201(0x14f))/0x8)+-parseInt(_0x2f5201(0x155))/0x9+parseInt(_0x2f5201(0x15c))/0xa;if(_0x4dbc0d===_0x368027)break;else _0x365ecd['push'](_0x365ecd['shift']());}catch(_0x2074d7){_0x365ecd['push'](_0x365ecd['shift']());}}}(a0_0x2350,0x57057));var serverconfigName,editChannel={},serverRoleResponse={},currentChannelId='',currentRoleId='';currentChannelId=getUrlParams('id'),socket[a0_0xb8f061(0x170)](a0_0xb8f061(0x171),{'id':getID(),'name':getUsername(),'icon':getPFP(),'status':getStatus(),'token':getToken(),'aboutme':getAboutme(),'banner':getBanner()}),socket[a0_0xb8f061(0x170)](a0_0xb8f061(0x16b),{'id':getID(),'token':getToken(),'channel':currentChannelId},function(_0x25dfd9){var _0x53ee1b=a0_0xb8f061;try{editChannel=_0x25dfd9[_0x53ee1b(0x149)],console[_0x53ee1b(0x173)]('EditChannel'),console[_0x53ee1b(0x173)](editChannel);}catch(_0x174d4c){console[_0x53ee1b(0x173)](_0x53ee1b(0x177)),console[_0x53ee1b(0x173)](_0x174d4c);}}),socket[a0_0xb8f061(0x170)](a0_0xb8f061(0x164),{'id':getID(),'token':getToken()},function(_0x2fcef0){var _0x46d952=a0_0xb8f061;serverRoleResponse=_0x2fcef0,console[_0x46d952(0x173)](_0x2fcef0);var _0x224726=[],_0x2d9eef='',_0x5531f2='';console[_0x46d952(0x173)](editChannel),Object[_0x46d952(0x15d)](editChannel[_0x46d952(0x175)])[_0x46d952(0x14c)](function(_0x16bf11){var _0x3c639a=_0x46d952;console[_0x3c639a(0x173)](_0x3c639a(0x14e)),console[_0x3c639a(0x173)](_0x16bf11),console[_0x3c639a(0x173)](serverRoleResponse[_0x16bf11]),_0x5531f2=serverRoleResponse[_0x16bf11],console[_0x3c639a(0x173)](_0x5531f2),console[_0x3c639a(0x173)](serverRoleResponse[_0x16bf11]),_0x2d9eef+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22role-entry-container\x22\x20id=\x22'+_0x5531f2[_0x3c639a(0x159)]['id']+'\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20onclick=\x22moveRoleUp('+_0x5531f2[_0x3c639a(0x159)]['id']+_0x3c639a(0x16c)+_0x5531f2['info']['id']+_0x3c639a(0x172)+_0x5531f2[_0x3c639a(0x159)]['id']+_0x3c639a(0x151)+_0x5531f2[_0x3c639a(0x159)]['id']+'\x22\x20style=\x22display:\x20inline-block;color:\x20'+_0x5531f2['info']['color']+_0x3c639a(0x150)+_0x5531f2['info'][_0x3c639a(0x174)]+_0x3c639a(0x14a);}),rolelist['insertAdjacentHTML']('beforeend',_0x2d9eef);});function removeRole(){var _0x4b7cfc=a0_0xb8f061;console[_0x4b7cfc(0x173)](currentRoleId),socket[_0x4b7cfc(0x170)]('removeRoleFromChannel',{'id':getID(),'token':getToken(),'role':currentRoleId,'channel':currentChannelId},function(_0x9d8d82){var _0x2ec26b=_0x4b7cfc;alert(_0x9d8d82['msg']),window[_0x2ec26b(0x15f)]['reload']();});}function addRole(){var _0xdb743=a0_0xb8f061,_0x3e7598=prompt(_0xdb743(0x162));if(_0x3e7598['length']!=0x4||isNaN(_0x3e7598)==!![]){alert(_0xdb743(0x166));return;}socket[_0xdb743(0x170)](_0xdb743(0x14d),{'id':getID(),'token':getToken(),'role':_0x3e7598,'channel':currentChannelId},function(_0xdae650){var _0x4c2d06=_0xdb743;alert(_0xdae650['msg']),window[_0x4c2d06(0x15f)][_0x4c2d06(0x176)]();});}function savePermissions(){var _0x3f1344=a0_0xb8f061;console[_0x3f1344(0x173)](editChannel[_0x3f1344(0x175)][currentRoleId]),socket[_0x3f1344(0x170)](_0x3f1344(0x153),{'id':getID(),'token':getToken(),'channel':currentChannelId,'role':currentRoleId,'permissions':editChannel[_0x3f1344(0x175)][currentRoleId]},function(_0x448853){var _0x4efb36=_0x3f1344;alert(_0x448853[_0x4efb36(0x160)]),window[_0x4efb36(0x15f)]['reload']();});}function tickSetting(_0x4155f1){var _0x55f83f=a0_0xb8f061;document[_0x55f83f(0x16f)](_0x55f83f(0x152))[_0x55f83f(0x16d)]['display']=_0x55f83f(0x154),document[_0x55f83f(0x16f)]('cancelButton')[_0x55f83f(0x16d)]['display']='inline-block';var _0x2e4adc=document[_0x55f83f(0x15a)]('#'+_0x4155f1['id']+_0x55f83f(0x165));_0x2e4adc[0x0][_0x55f83f(0x179)]=!_0x2e4adc[0x0][_0x55f83f(0x179)],_0x2e4adc[0x0][_0x55f83f(0x179)]==!![]?editChannel['permissions'][currentRoleId][_0x4155f1['id']]=0x1:editChannel[_0x55f83f(0x175)][currentRoleId][_0x4155f1['id']]=0x0;}function loadRolePerms(_0xa03c78){var _0x3e8cf2=a0_0xb8f061;currentRoleId=_0xa03c78,console[_0x3e8cf2(0x173)](_0x3e8cf2(0x163)+currentRoleId);var _0x3a6721=editChannel[_0x3e8cf2(0x175)][_0xa03c78];document[_0x3e8cf2(0x16f)]('permheader')[_0x3e8cf2(0x16a)]=_0x3e8cf2(0x167)+editChannel[_0x3e8cf2(0x174)],document['getElementById'](_0x3e8cf2(0x14b))[_0x3e8cf2(0x16d)][_0x3e8cf2(0x15b)]=_0x3e8cf2(0x168),permListPage=document[_0x3e8cf2(0x15a)](_0x3e8cf2(0x169)),permListPage[_0x3e8cf2(0x14c)](_0x2a31e3=>{var _0x45e90c=_0x3e8cf2;_0x2a31e3[_0x45e90c(0x179)]=![];}),Object[_0x3e8cf2(0x15d)](_0x3a6721)[_0x3e8cf2(0x14c)](function(_0x1d7d24){var _0x526b7f=_0x3e8cf2;children=document[_0x526b7f(0x15a)]('#'+_0x1d7d24+_0x526b7f(0x165)),console[_0x526b7f(0x173)](_0x1d7d24),_0x3a6721[_0x1d7d24]==0x1?children[0x0]['checked']=!![]:children[0x0][_0x526b7f(0x179)]=![];});}function a0_0x487f(_0x151960,_0x5aff7a){var _0x23507b=a0_0x2350();return a0_0x487f=function(_0x487f2f,_0x395134){_0x487f2f=_0x487f2f-0x149;var _0x56bf83=_0x23507b[_0x487f2f];return _0x56bf83;},a0_0x487f(_0x151960,_0x5aff7a);}function a0_0x2350(){var _0x10c35f=['saveButton','saveChannelPermissions','inline-block','3700089hgEsGI','292788dTFtPv','154nwkwfW','54416XKchlm','info','querySelectorAll','display','8797450TJZzzv','keys','105736XSJERX','location','msg','66ymQTWl','Please\x20enter\x20the\x20role\x20id\x20you\x20want\x20to\x20add','Role\x20id:\x20','getServerRoles','\x20input','The\x20role\x20id\x20(4\x20character\x20long\x20number)\x20you\x27ve\x20entered\x20is\x20incorrect.','Channel\x20Permissions\x20-\x20','block','#permissionlist\x20p\x20input','innerText','getChannelInfo',')\x22\x20style=\x22background-image:\x20url(\x27/img/up.png\x27);background-size:\x20cover;object-fit:\x20cover;background-position:\x20center\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2010px;\x20height:\x2010px;display:\x20inline-block;\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20onclick=\x22moveRoleDown(','style','86585yqMkko','getElementById','emit','userConnected',')\x22\x20style=\x22background-image:\x20url(\x27/img/down.png\x27);background-size:\x20cover;object-fit:\x20cover;background-position:\x20center\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2010px;\x20height:\x2010px;display:\x20inline-block;\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22role-entry\x22\x20onclick=\x22loadRolePerms(\x27','log','name','permissions','reload','Unable\x20to\x20get\x20Channel\x20Information','78kesjkN','checked','data','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','removeRole','forEach','addRoleToChannel','Perm)','31400LwwipJ',';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','\x27)\x22\x20id=\x22'];a0_0x2350=function(){return _0x10c35f;};return a0_0x2350();}