var a0_0x5693a6=a0_0x32de;(function(_0x4f5755,_0x5f17f5){var _0x5783ae=a0_0x32de,_0x198e0b=_0x4f5755();while(!![]){try{var _0x18d57a=parseInt(_0x5783ae(0xb7))/0x1*(-parseInt(_0x5783ae(0xd7))/0x2)+parseInt(_0x5783ae(0xa4))/0x3*(-parseInt(_0x5783ae(0xda))/0x4)+parseInt(_0x5783ae(0xd8))/0x5*(parseInt(_0x5783ae(0xc4))/0x6)+-parseInt(_0x5783ae(0xdd))/0x7+-parseInt(_0x5783ae(0x97))/0x8*(-parseInt(_0x5783ae(0xc8))/0x9)+-parseInt(_0x5783ae(0xb3))/0xa*(parseInt(_0x5783ae(0x98))/0xb)+parseInt(_0x5783ae(0xba))/0xc*(parseInt(_0x5783ae(0xd6))/0xd);if(_0x18d57a===_0x5f17f5)break;else _0x198e0b['push'](_0x198e0b['shift']());}catch(_0x297697){_0x198e0b['push'](_0x198e0b['shift']());}}}(a0_0x5995,0x37b80));var rolelist=document[a0_0x5693a6(0xb5)](a0_0x5693a6(0x9f)),roleColor=document[a0_0x5693a6(0xb5)]('roleColor'),roleName=document['getElementById'](a0_0x5693a6(0xb6)),serverRoleResponse='',editedServerRoleResponse=[],editedPermissions={},currentRoleId='';socket[a0_0x5693a6(0xc9)](a0_0x5693a6(0xcd),{'id':getID(),'name':getUsername(),'icon':getPFP(),'status':getStatus(),'token':getToken(),'aboutme':getAboutme(),'banner':getBanner()}),socket['emit']('getServerRoles',{'id':getID(),'token':getToken()},function(_0x47829a){var _0x7cbbd9=a0_0x5693a6;rolelist=document['getElementById']('rolelist'),roleColor=document[_0x7cbbd9(0xb5)](_0x7cbbd9(0xb1)),roleName=document['getElementById'](_0x7cbbd9(0xb6)),console[_0x7cbbd9(0xad)](_0x47829a),serverRoleResponse=_0x47829a,editedServerRoleResponse=_0x47829a;var _0x52b3c1=[];Object[_0x7cbbd9(0xde)](_0x47829a)[_0x7cbbd9(0xbe)]()[_0x7cbbd9(0xdb)](function(_0x54d869){var _0x43ee71=_0x7cbbd9,_0x4e5f17=_0x47829a[_0x54d869][_0x43ee71(0xa8)][_0x43ee71(0xdc)],_0x334a73=_0x47829a[_0x54d869][_0x43ee71(0xa8)][_0x43ee71(0xd3)];_0x52b3c1[_0x47829a[_0x54d869][_0x43ee71(0xa8)][_0x43ee71(0x9b)]]=_0x47829a[_0x54d869];});var _0x4a4b6e='';_0x52b3c1=_0x52b3c1[_0x7cbbd9(0xbe)](),console['log'](_0x52b3c1),_0x52b3c1['forEach'](_0x9060ae=>{var _0x4d63bb=_0x7cbbd9;_0x4a4b6e+=_0x4d63bb(0xa3)+_0x9060ae[_0x4d63bb(0xa8)]['id']+_0x4d63bb(0xb0)+_0x9060ae[_0x4d63bb(0xa8)]['id']+_0x4d63bb(0xa2)+_0x9060ae[_0x4d63bb(0xa8)]['id']+_0x4d63bb(0xc2)+_0x9060ae['info']['id']+_0x4d63bb(0x9a)+_0x9060ae[_0x4d63bb(0xa8)]['id']+_0x4d63bb(0xca)+_0x9060ae[_0x4d63bb(0xa8)][_0x4d63bb(0xdc)]+';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x9060ae[_0x4d63bb(0xa8)][_0x4d63bb(0xd3)]+_0x4d63bb(0xa1);}),rolelist[_0x7cbbd9(0xc7)](_0x7cbbd9(0xd2),_0x4a4b6e);});function a0_0x32de(_0x188b82,_0x11b80f){var _0x59956b=a0_0x5995();return a0_0x32de=function(_0x32dec8,_0x1699ce){_0x32dec8=_0x32dec8-0x97;var _0x5ba61a=_0x59956b[_0x32dec8];return _0x5ba61a;},a0_0x32de(_0x188b82,_0x11b80f);}function saveAppearance(){var _0x2de6e1=a0_0x5693a6;serverRoleResponse[currentRoleId][_0x2de6e1(0xa8)][_0x2de6e1(0xd3)]=roleName[_0x2de6e1(0x9c)],serverRoleResponse[currentRoleId][_0x2de6e1(0xa8)][_0x2de6e1(0xdc)]=roleColor['value'],document[_0x2de6e1(0xb5)](_0x2de6e1(0x99))[_0x2de6e1(0xd0)]==!![]?serverRoleResponse[currentRoleId][_0x2de6e1(0xa8)][_0x2de6e1(0x99)]=0x1:serverRoleResponse[currentRoleId][_0x2de6e1(0xa8)]['displaySeperate']=0x0,socket[_0x2de6e1(0xc9)](_0x2de6e1(0xc0),{'id':getID(),'token':getToken(),'roleId':currentRoleId,'data':serverRoleResponse[currentRoleId]},function(_0x39a557){var _0x555bea=_0x2de6e1;alert(_0x39a557[_0x555bea(0xdf)]),window['location']['reload']();});}function appearanceChanged(){var _0x53e544=a0_0x5693a6;document[_0x53e544(0xb5)]('saveAppearanceButton')['style'][_0x53e544(0xa9)]='inline-block',document[_0x53e544(0xb5)]('cancelAppearanceButton')['style'][_0x53e544(0xa9)]=_0x53e544(0xb8);}function saveSorting(){var _0x46ea1c=a0_0x5693a6,_0x19527a=document[_0x46ea1c(0xcc)](_0x46ea1c(0xa7)),_0xb6f4e7=[];_0x19527a[_0x46ea1c(0xdb)](_0x5abaa4=>{_0xb6f4e7['push'](_0x5abaa4['id']);}),socket[_0x46ea1c(0xc9)]('updateRoleHierarchy',{'id':getID(),'token':getToken(),'sorted':_0xb6f4e7},function(_0x13c631){var _0x203a91=_0x46ea1c;alert(_0x13c631[_0x203a91(0xdf)]),window[_0x203a91(0xb9)]['reload']();});}function removeFromRole(_0x9b83ed,_0x144e23){var _0x41fcb3=a0_0x5693a6;socket[_0x41fcb3(0xc9)]('removeUserFromRole',{'id':getID(),'token':getToken(),'role':_0x9b83ed,'target':_0x144e23},function(_0x362390){var _0x5e504d=_0x41fcb3;alert(_0x362390[_0x5e504d(0xdf)]),window[_0x5e504d(0xb9)][_0x5e504d(0xc6)]();});}function a0_0x5995(){var _0xd4a717=['value','cancelSortingButton','permissions','rolelist','icon','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20',')\x22\x20style=\x22background-image:\x20url(\x27/img/up.png\x27);background-size:\x20cover;object-fit:\x20cover;background-position:\x20center\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2010px;\x20height:\x2010px;display:\x20inline-block;\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20onclick=\x22moveRoleDown(','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22role-entry-container\x22\x20id=\x22','6hmEKpe','permheader','style','.role-entry-container','info','display','saveSortingButton','before','members','log','addUserToRole','cancelButton','\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20onclick=\x22moveRoleUp(','roleColor','createRole','300sRvWas','transparent','getElementById','roleName','2RxLNJr','inline-block','location','6022152UIWGMY','checked\x20element','The\x20user\x20id\x20(12\x20character\x20long\x20number)\x20you\x27ve\x20entered\x20is\x20incorrect.','#292B2F','reverse','backgroundColor','updateRoleAppearance','block',')\x22\x20style=\x22background-image:\x20url(\x27/img/down.png\x27);background-size:\x20cover;object-fit:\x20cover;background-position:\x20center\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2010px;\x20height:\x2010px;display:\x20inline-block;\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22role-entry\x22\x20onclick=\x22loadRolePerms(\x27','data','45534SwEzEj','saveButton','reload','insertAdjacentHTML','94716vnFxOJ','emit','\x22\x20style=\x22display:\x20inline-block;color:\x20','Permissions\x20-\x20','querySelectorAll','userConnected','\x20input','#permissionlist\x20p\x20input','checked','memberlist','beforeend','name','deleteRole','length','26svcAOV','236102nXSvKP','85zaawHF','saveRolePermissions','845016FiZcFX','forEach','color','495411NYTAhx','keys','msg','24PGADcp','75779VGaGkZ','displaySeperate','\x27)\x22\x20id=\x22','sortId'];a0_0x5995=function(){return _0xd4a717;};return a0_0x5995();}function savePermissions(){var _0x29dab4=a0_0x5693a6;socket[_0x29dab4(0xc9)](_0x29dab4(0xd9),{'id':getID(),'token':getToken(),'role':currentRoleId,'permissions':editedPermissions},function(_0x11e0a8){var _0x5a87af=_0x29dab4;alert(_0x11e0a8['msg']),window[_0x5a87af(0xb9)]['reload']();});}function addToRole(){var _0x4d7d76=a0_0x5693a6,_0x5a32f4=prompt('Please\x20enter\x20the\x20user\x20id\x20of\x20the\x20account\x20you\x20want\x20to\x20add');if(_0x5a32f4[_0x4d7d76(0xd5)]!=0xc||isNaN(_0x5a32f4)==!![]){alert(_0x4d7d76(0xbc));return;}socket[_0x4d7d76(0xc9)](_0x4d7d76(0xae),{'id':getID(),'token':getToken(),'role':currentRoleId,'target':_0x5a32f4},function(_0xa48470){var _0x2a2aa8=_0x4d7d76;alert(_0xa48470[_0x2a2aa8(0xdf)]),window[_0x2a2aa8(0xb9)][_0x2a2aa8(0xc6)]();});}function createRole(){var _0x53060b=a0_0x5693a6;socket[_0x53060b(0xc9)](_0x53060b(0xb2),{'id':getID(),'token':getToken()},function(_0x47c410){var _0x3729fe=_0x53060b;alert(_0x47c410[_0x3729fe(0xdf)]),window[_0x3729fe(0xb9)][_0x3729fe(0xc6)]();});}function deleteRole(){var _0x1ab9d8=a0_0x5693a6;socket[_0x1ab9d8(0xc9)](_0x1ab9d8(0xd4),{'id':getID(),'token':getToken(),'roleId':currentRoleId},function(_0x3c6f03){var _0xcbd6ea=_0x1ab9d8;alert(_0x3c6f03['msg']),window[_0xcbd6ea(0xb9)]['reload']();});}function moveRoleUp(_0x39db74){var _0x3049f1=a0_0x5693a6;document['getElementById'](_0x3049f1(0xaa))[_0x3049f1(0xa6)]['display']=_0x3049f1(0xb8),document[_0x3049f1(0xb5)](_0x3049f1(0x9d))[_0x3049f1(0xa6)][_0x3049f1(0xa9)]='inline-block';var _0x596553=document[_0x3049f1(0xcc)](_0x3049f1(0xa7));for(let _0x45d7a2=0x0;_0x45d7a2<_0x596553[_0x3049f1(0xd5)];_0x45d7a2++){_0x596553[_0x45d7a2]['id']==_0x39db74&&_0x596553[_0x45d7a2-0x1][_0x3049f1(0xab)](_0x596553[_0x45d7a2]);}}function moveRoleDown(_0x322b19){var _0x25931c=a0_0x5693a6;document[_0x25931c(0xb5)]('saveSortingButton')[_0x25931c(0xa6)][_0x25931c(0xa9)]=_0x25931c(0xb8),document[_0x25931c(0xb5)](_0x25931c(0x9d))[_0x25931c(0xa6)][_0x25931c(0xa9)]=_0x25931c(0xb8);var _0x393a16=document[_0x25931c(0xcc)](_0x25931c(0xa7));for(let _0x57513e=0x0;_0x57513e<_0x393a16['length'];_0x57513e++){_0x393a16[_0x57513e]['id']==_0x322b19&&_0x393a16[_0x57513e+0x1]['after'](_0x393a16[_0x57513e]);}}function tickSetting(_0xb0e30d){var _0xdba279=a0_0x5693a6;document[_0xdba279(0xb5)](_0xdba279(0xc5))[_0xdba279(0xa6)]['display']=_0xdba279(0xb8),document[_0xdba279(0xb5)](_0xdba279(0xaf))[_0xdba279(0xa6)][_0xdba279(0xa9)]=_0xdba279(0xb8);var _0x2b59e1=document[_0xdba279(0xcc)]('#'+_0xb0e30d['id']+_0xdba279(0xce));_0x2b59e1[0x0][_0xdba279(0xd0)]=!_0x2b59e1[0x0][_0xdba279(0xd0)],Object[_0xdba279(0xde)](serverRoleResponse[currentRoleId][_0xdba279(0x9e)])[_0xdba279(0xdb)](function(_0x296cd4){var _0x134937=_0xdba279;editedPermissions[_0x296cd4]=serverRoleResponse[currentRoleId][_0x134937(0x9e)][_0x296cd4],console[_0x134937(0xad)](_0x296cd4);}),console[_0xdba279(0xad)]('\x20'),_0x2b59e1[0x0][_0xdba279(0xd0)]==!![]?editedPermissions[_0xb0e30d['id']]=0x1:editedPermissions[_0xb0e30d['id']]=0x0,console[_0xdba279(0xad)](serverRoleResponse[currentRoleId][_0xdba279(0x9e)]),console[_0xdba279(0xad)](editedPermissions);}function loadRolePerms(_0x43c2a6){var _0x31b704=a0_0x5693a6,_0x1b38f6=document[_0x31b704(0xcc)]('.role-entry');_0x1b38f6[_0x31b704(0xdb)](_0x6e40b4=>{var _0x286dbf=_0x31b704;_0x6e40b4['id']==_0x43c2a6?_0x6e40b4[_0x286dbf(0xa6)]['backgroundColor']=_0x286dbf(0xbd):_0x6e40b4[_0x286dbf(0xa6)][_0x286dbf(0xbf)]=_0x286dbf(0xb4);});var _0x51e1b4=serverRoleResponse[_0x43c2a6]['permissions'];document[_0x31b704(0xb5)](_0x31b704(0xa5))['innerText']=_0x31b704(0xcb)+serverRoleResponse[_0x43c2a6]['info']['name'],document[_0x31b704(0xb5)](_0x31b704(0xd4))[_0x31b704(0xa6)]['display']=_0x31b704(0xb8),document['getElementById']('permissionlist')['style'][_0x31b704(0xa9)]=_0x31b704(0xc1),currentRoleId=_0x43c2a6,roleColor[_0x31b704(0x9c)]=serverRoleResponse[_0x43c2a6]['info'][_0x31b704(0xdc)],roleName[_0x31b704(0x9c)]=serverRoleResponse[_0x43c2a6][_0x31b704(0xa8)][_0x31b704(0xd3)],permListPage=document[_0x31b704(0xcc)](_0x31b704(0xcf)),permListPage[_0x31b704(0xdb)](_0x4c4ecc=>{_0x4c4ecc['checked']=![];}),Object[_0x31b704(0xde)](_0x51e1b4)[_0x31b704(0xdb)](function(_0x4858c9){var _0x1a9a88=_0x31b704;children=document[_0x1a9a88(0xcc)]('#'+_0x4858c9+_0x1a9a88(0xce)),console[_0x1a9a88(0xad)]('#'+_0x4858c9+_0x1a9a88(0xce)),_0x51e1b4[_0x4858c9]==0x1?(console['log'](children[0x0]),console['log'](_0x1a9a88(0xbb)),children[0x0]['checked']=!![]):children[0x0][_0x1a9a88(0xd0)]=![];});serverRoleResponse[_0x43c2a6]['info'][_0x31b704(0x99)]==0x1?(console[_0x31b704(0xad)]('checked\x20element'),document[_0x31b704(0xb5)](_0x31b704(0x99))[_0x31b704(0xd0)]=!![]):document['getElementById']('displaySeperate')[_0x31b704(0xd0)]=![];var _0x3f1f83=document[_0x31b704(0xb5)](_0x31b704(0xd1));_0x3f1f83['innerHTML']='',Object['keys'](serverRoleResponse[currentRoleId][_0x31b704(0xac)])['reverse']()[_0x31b704(0xdb)](function(_0x52ee11){var _0x57231c=_0x31b704;socket[_0x57231c(0xc9)]('resolveMember',{'id':getID(),'token':getToken(),'target':serverRoleResponse[currentRoleId][_0x57231c(0xac)][_0x52ee11]},function(_0x2cf446){var _0x4aa4d4=_0x57231c,_0x1ae865='<div\x20class=\x22memberlist-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22memberlist-banner\x22\x20style=\x22background-image:\x20url(\x27'+_0x2cf446[_0x4aa4d4(0xc3)]['banner']+'\x27);\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22memberlist-pfp\x22\x20style=\x22background-image:\x20url(\x27'+_0x2cf446[_0x4aa4d4(0xc3)][_0x4aa4d4(0xa0)]+'\x27);\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22memberlist-username\x22>'+_0x2cf446[_0x4aa4d4(0xc3)]['name']+'</div>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22memberlist-actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20onclick=\x22removeFromRole('+currentRoleId+',\x20'+_0x2cf446[_0x4aa4d4(0xc3)]['id']+')\x22\x20type=\x22button\x22\x20value=\x22Remove\x20from\x20Role\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>';_0x3f1f83[_0x4aa4d4(0xc7)](_0x4aa4d4(0xd2),_0x1ae865);});});}