function a0_0x4da4(){var _0x51a255=['addRoleToChannel','\x27)\x22\x20id=\x22','inline-block','11tKHQFp','keys','Channel\x20Permissions\x20-\x20','\x20input','\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20onclick=\x22moveRoleUp(','beforeend','innerText','24151OSztLz','removeRole','42jZisLT','checked','info','msg','EditChannel','Unable\x20to\x20get\x20Channel\x20Information','146335udhvUl','Role\x20id:\x20','removeRoleFromChannel','16vwrbGe','emit','forEach','permheader','174544gQRsQJ','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22role-entry-container\x22\x20id=\x22','33408BkJGOV','querySelectorAll','The\x20role\x20id\x20(4\x20character\x20long\x20number)\x20you\x27ve\x20entered\x20is\x20incorrect.','block','2875190vobEVk','getElementById','45xcfIng','log','cancelButton','display','1146740LgsfQN','Please\x20enter\x20the\x20role\x20id\x20you\x20want\x20to\x20add','saveChannelPermissions','insertAdjacentHTML','color','628248OUwPci','userConnected','4ToeJlx','permissions','reload','permissionlist','65HSxvIh',')\x22\x20style=\x22background-image:\x20url(\x27/img/up.png\x27);background-size:\x20cover;object-fit:\x20cover;background-position:\x20center\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2010px;\x20height:\x2010px;display:\x20inline-block;\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20onclick=\x22moveRoleDown(','#permissionlist\x20p\x20input','style'];a0_0x4da4=function(){return _0x51a255;};return a0_0x4da4();}function a0_0x83f9(_0x108c59,_0x1a5b04){var _0x4da497=a0_0x4da4();return a0_0x83f9=function(_0x83f9f8,_0x4b8b49){_0x83f9f8=_0x83f9f8-0xa3;var _0x2700fb=_0x4da497[_0x83f9f8];return _0x2700fb;},a0_0x83f9(_0x108c59,_0x1a5b04);}var a0_0x4bde1d=a0_0x83f9;(function(_0xcb971e,_0x42e112){var _0x128b10=a0_0x83f9,_0x3975d1=_0xcb971e();while(!![]){try{var _0x1fbc3a=-parseInt(_0x128b10(0xc6))/0x1*(parseInt(_0x128b10(0xd1))/0x2)+parseInt(_0x128b10(0xa3))/0x3*(-parseInt(_0x128b10(0xb4))/0x4)+parseInt(_0x128b10(0xce))/0x5*(-parseInt(_0x128b10(0xc8))/0x6)+parseInt(_0x128b10(0xad))/0x7+parseInt(_0x128b10(0xd5))/0x8*(-parseInt(_0x128b10(0xa9))/0x9)+parseInt(_0x128b10(0xa7))/0xa*(parseInt(_0x128b10(0xbf))/0xb)+-parseInt(_0x128b10(0xb2))/0xc*(-parseInt(_0x128b10(0xb8))/0xd);if(_0x1fbc3a===_0x42e112)break;else _0x3975d1['push'](_0x3975d1['shift']());}catch(_0x29d454){_0x3975d1['push'](_0x3975d1['shift']());}}}(a0_0x4da4,0x2f8f6));var serverconfigName,editChannel={},serverRoleResponse={},currentChannelId='',currentRoleId='';currentChannelId=getUrlParams('id'),socket[a0_0x4bde1d(0xd2)](a0_0x4bde1d(0xb3),{'id':getID(),'name':getUsername(),'icon':getPFP(),'status':getStatus(),'token':getToken(),'aboutme':getAboutme(),'banner':getBanner()}),socket[a0_0x4bde1d(0xd2)]('getChannelInfo',{'id':getID(),'token':getToken(),'channel':currentChannelId},function(_0x1157e5){var _0x410f9b=a0_0x4bde1d;try{editChannel=_0x1157e5['data'],console[_0x410f9b(0xaa)](_0x410f9b(0xcc)),console['log'](editChannel);}catch(_0x206a3a){console[_0x410f9b(0xaa)](_0x410f9b(0xcd)),console[_0x410f9b(0xaa)](_0x206a3a);}}),socket['emit']('getServerRoles',{'id':getID(),'token':getToken()},function(_0x2fd52c){var _0x507bc7=a0_0x4bde1d;serverRoleResponse=_0x2fd52c,console[_0x507bc7(0xaa)](_0x2fd52c);var _0x4d9c74=[],_0x116551='',_0x54e10f='';console[_0x507bc7(0xaa)](editChannel),Object['keys'](editChannel[_0x507bc7(0xb5)])[_0x507bc7(0xd3)](function(_0x5a14d1){var _0x29ccaf=_0x507bc7;console['log']('Perm)'),console[_0x29ccaf(0xaa)](_0x5a14d1),console[_0x29ccaf(0xaa)](serverRoleResponse[_0x5a14d1]),_0x54e10f=serverRoleResponse[_0x5a14d1],console[_0x29ccaf(0xaa)](_0x54e10f),console[_0x29ccaf(0xaa)](serverRoleResponse[_0x5a14d1]),_0x116551+=_0x29ccaf(0xd6)+_0x54e10f[_0x29ccaf(0xca)]['id']+_0x29ccaf(0xc3)+_0x54e10f['info']['id']+_0x29ccaf(0xb9)+_0x54e10f['info']['id']+')\x22\x20style=\x22background-image:\x20url(\x27/img/down.png\x27);background-size:\x20cover;object-fit:\x20cover;background-position:\x20center\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2010px;\x20height:\x2010px;display:\x20inline-block;\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22role-entry\x22\x20onclick=\x22loadRolePerms(\x27'+_0x54e10f['info']['id']+_0x29ccaf(0xbd)+_0x54e10f['info']['id']+'\x22\x20style=\x22display:\x20inline-block;color:\x20'+_0x54e10f[_0x29ccaf(0xca)][_0x29ccaf(0xb1)]+';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x54e10f[_0x29ccaf(0xca)]['name']+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';}),rolelist[_0x507bc7(0xb0)](_0x507bc7(0xc4),_0x116551);});function removeRole(){var _0x266272=a0_0x4bde1d;console['log'](currentRoleId),socket[_0x266272(0xd2)](_0x266272(0xd0),{'id':getID(),'token':getToken(),'role':currentRoleId,'channel':currentChannelId},function(_0x13638e){var _0x3d8612=_0x266272;alert(_0x13638e[_0x3d8612(0xcb)]),window['location'][_0x3d8612(0xb6)]();});}function addRole(){var _0x57d45f=a0_0x4bde1d,_0x1bb637=prompt(_0x57d45f(0xae));if(_0x1bb637['length']!=0x4||isNaN(_0x1bb637)==!![]){alert(_0x57d45f(0xa5));return;}socket[_0x57d45f(0xd2)](_0x57d45f(0xbc),{'id':getID(),'token':getToken(),'role':_0x1bb637,'channel':currentChannelId},function(_0x482059){alert(_0x482059['msg']),window['location']['reload']();});}function savePermissions(){var _0x55fe0f=a0_0x4bde1d;console[_0x55fe0f(0xaa)](editChannel['permissions'][currentRoleId]),socket[_0x55fe0f(0xd2)](_0x55fe0f(0xaf),{'id':getID(),'token':getToken(),'channel':currentChannelId,'role':currentRoleId,'permissions':editChannel[_0x55fe0f(0xb5)][currentRoleId]},function(_0x28fd91){var _0x290817=_0x55fe0f;alert(_0x28fd91[_0x290817(0xcb)]),window['location'][_0x290817(0xb6)]();});}function tickSetting(_0x37d2d2){var _0x403283=a0_0x4bde1d;document['getElementById']('saveButton')[_0x403283(0xbb)][_0x403283(0xac)]=_0x403283(0xbe),document['getElementById'](_0x403283(0xab))[_0x403283(0xbb)][_0x403283(0xac)]=_0x403283(0xbe);var _0x30af3b=document['querySelectorAll']('#'+_0x37d2d2['id']+_0x403283(0xc2));_0x30af3b[0x0][_0x403283(0xc9)]=!_0x30af3b[0x0]['checked'],_0x30af3b[0x0]['checked']==!![]?editChannel[_0x403283(0xb5)][currentRoleId][_0x37d2d2['id']]=0x1:editChannel[_0x403283(0xb5)][currentRoleId][_0x37d2d2['id']]=0x0;}function loadRolePerms(_0xfe6e96){var _0x51eb63=a0_0x4bde1d;currentRoleId=_0xfe6e96,console[_0x51eb63(0xaa)](_0x51eb63(0xcf)+currentRoleId);var _0x17d1f6=editChannel[_0x51eb63(0xb5)][_0xfe6e96];document[_0x51eb63(0xa8)](_0x51eb63(0xd4))[_0x51eb63(0xc5)]=_0x51eb63(0xc1)+editChannel['name'],document[_0x51eb63(0xa8)](_0x51eb63(0xc7))[_0x51eb63(0xbb)][_0x51eb63(0xac)]=_0x51eb63(0xa6),document['getElementById'](_0x51eb63(0xb7))[_0x51eb63(0xbb)][_0x51eb63(0xac)]='block',permListPage=document[_0x51eb63(0xa4)](_0x51eb63(0xba)),permListPage[_0x51eb63(0xd3)](_0x1845d5=>{_0x1845d5['checked']=![];}),Object[_0x51eb63(0xc0)](_0x17d1f6)['forEach'](function(_0x573505){var _0x4afbc6=_0x51eb63;children=document[_0x4afbc6(0xa4)]('#'+_0x573505+_0x4afbc6(0xc2)),console[_0x4afbc6(0xaa)](_0x573505),_0x17d1f6[_0x573505]==0x1?children[0x0][_0x4afbc6(0xc9)]=!![]:children[0x0][_0x4afbc6(0xc9)]=![];});}