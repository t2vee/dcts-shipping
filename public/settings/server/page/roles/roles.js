var a0_0x5ef286=a0_0x4038;(function(_0x3abfe7,_0x2fbe0e){var _0x1ff179=a0_0x4038,_0x2d35d3=_0x3abfe7();while(!![]){try{var _0x184b31=parseInt(_0x1ff179(0x158))/0x1*(parseInt(_0x1ff179(0x192))/0x2)+-parseInt(_0x1ff179(0x175))/0x3+-parseInt(_0x1ff179(0x150))/0x4+parseInt(_0x1ff179(0x197))/0x5+-parseInt(_0x1ff179(0x17e))/0x6+parseInt(_0x1ff179(0x157))/0x7+parseInt(_0x1ff179(0x15b))/0x8*(parseInt(_0x1ff179(0x15e))/0x9);if(_0x184b31===_0x2fbe0e)break;else _0x2d35d3['push'](_0x2d35d3['shift']());}catch(_0x2845ad){_0x2d35d3['push'](_0x2d35d3['shift']());}}}(a0_0x3e00,0xab094));var rolelist=document[a0_0x5ef286(0x188)]('rolelist'),roleColor=document[a0_0x5ef286(0x188)](a0_0x5ef286(0x17b)),roleName=document['getElementById'](a0_0x5ef286(0x169)),serverRoleResponse='',editedServerRoleResponse=[],editedPermissions={},currentRoleId='';socket[a0_0x5ef286(0x153)]('userConnected',{'id':getID(),'name':getUsername(),'icon':getPFP(),'status':getStatus(),'token':getToken(),'aboutme':getAboutme(),'banner':getBanner()}),socket[a0_0x5ef286(0x153)]('checkPermission',{'id':getID(),'token':getToken(),'permission':['manageRoles','manageGroup']},function(_0x13fcdd){var _0x14dba7=a0_0x5ef286;_0x13fcdd[_0x14dba7(0x155)]=='denied'?window['location'][_0x14dba7(0x168)]=window['location'][_0x14dba7(0x16c)]+'/settings/server':document['getElementById'](_0x14dba7(0x15c))[_0x14dba7(0x167)][_0x14dba7(0x14a)]=_0x14dba7(0x19b);});function saveNumber(_0x563638){var _0x1d53fc=a0_0x5ef286;editedServerRoleResponse[currentRoleId][_0x1d53fc(0x198)][_0x563638['id']]=_0x563638['value'],console[_0x1d53fc(0x189)](editedServerRoleResponse[currentRoleId][_0x1d53fc(0x198)]),document[_0x1d53fc(0x188)]('saveButton')[_0x1d53fc(0x167)][_0x1d53fc(0x14a)]=_0x1d53fc(0x14b),document[_0x1d53fc(0x188)]('cancelButton')[_0x1d53fc(0x167)][_0x1d53fc(0x14a)]='inline-block';}socket['emit'](a0_0x5ef286(0x19a),{'id':getID(),'token':getToken()},function(_0x33474d){var _0x2e94ad=a0_0x5ef286;rolelist=document[_0x2e94ad(0x188)](_0x2e94ad(0x173)),roleColor=document[_0x2e94ad(0x188)](_0x2e94ad(0x17b)),roleName=document[_0x2e94ad(0x188)]('roleName'),console[_0x2e94ad(0x189)](_0x33474d),serverRoleResponse=_0x33474d,editedServerRoleResponse=_0x33474d;var _0x26d67b=[];Object[_0x2e94ad(0x178)](_0x33474d)[_0x2e94ad(0x17c)]()[_0x2e94ad(0x161)](function(_0x5049ed){var _0xb2564e=_0x2e94ad;console[_0xb2564e(0x189)](_0x33474d);var _0x5e4f4c=_0x33474d[_0x5049ed][_0xb2564e(0x14e)][_0xb2564e(0x176)],_0x5070e4=_0x33474d[_0x5049ed]['info']['name'];_0x26d67b[_0x33474d[_0x5049ed][_0xb2564e(0x14e)]['sortId']]=_0x33474d[_0x5049ed];});var _0x28009c='';_0x26d67b=_0x26d67b[_0x2e94ad(0x17c)](),console[_0x2e94ad(0x189)](_0x26d67b),_0x26d67b[_0x2e94ad(0x161)](_0xebb926=>{var _0x4eb6bd=_0x2e94ad;_0x28009c+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22role-entry-container\x22\x20id=\x22'+_0xebb926['info']['id']+_0x4eb6bd(0x18b)+_0xebb926[_0x4eb6bd(0x14e)]['id']+_0x4eb6bd(0x15f)+_0xebb926[_0x4eb6bd(0x14e)]['id']+_0x4eb6bd(0x179)+_0xebb926[_0x4eb6bd(0x14e)]['id']+_0x4eb6bd(0x196)+_0xebb926[_0x4eb6bd(0x14e)]['id']+_0x4eb6bd(0x152)+_0xebb926[_0x4eb6bd(0x14e)][_0x4eb6bd(0x176)]+';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0xebb926[_0x4eb6bd(0x14e)][_0x4eb6bd(0x183)]+_0x4eb6bd(0x195);}),rolelist['insertAdjacentHTML'](_0x2e94ad(0x18f),_0x28009c);});function saveAppearance(){var _0x53c383=a0_0x5ef286;serverRoleResponse[currentRoleId][_0x53c383(0x14e)][_0x53c383(0x183)]=roleName[_0x53c383(0x193)],serverRoleResponse[currentRoleId][_0x53c383(0x14e)][_0x53c383(0x176)]=roleColor[_0x53c383(0x193)],document[_0x53c383(0x188)](_0x53c383(0x170))[_0x53c383(0x14d)]==!![]?serverRoleResponse[currentRoleId][_0x53c383(0x14e)]['displaySeperate']=0x1:serverRoleResponse[currentRoleId][_0x53c383(0x14e)][_0x53c383(0x170)]=0x0,socket[_0x53c383(0x153)]('updateRoleAppearance',{'id':getID(),'token':getToken(),'roleId':currentRoleId,'data':serverRoleResponse[currentRoleId]},function(_0x33003e){var _0x3ec615=_0x53c383;alert(_0x33003e['msg']),window[_0x3ec615(0x199)][_0x3ec615(0x17f)]();});}function appearanceChanged(){var _0x265e70=a0_0x5ef286;document[_0x265e70(0x188)](_0x265e70(0x162))[_0x265e70(0x167)][_0x265e70(0x14a)]=_0x265e70(0x14b),document[_0x265e70(0x188)](_0x265e70(0x16e))[_0x265e70(0x167)][_0x265e70(0x14a)]=_0x265e70(0x14b);}function saveSorting(){var _0x2657a2=a0_0x5ef286,_0x2a2313=document['querySelectorAll'](_0x2657a2(0x165)),_0x28fc82=[];_0x2a2313[_0x2657a2(0x161)](_0x1ea50f=>{var _0x2fdae9=_0x2657a2;_0x28fc82[_0x2fdae9(0x182)](_0x1ea50f['id']);}),socket['emit']('updateRoleHierarchy',{'id':getID(),'token':getToken(),'sorted':_0x28fc82},function(_0x519f17){var _0x533c9f=_0x2657a2;alert(_0x519f17[_0x533c9f(0x174)]),window['location'][_0x533c9f(0x17f)]();});}function removeFromRole(_0x2d0deb,_0x3a3bc7){var _0x1e50ae=a0_0x5ef286;console[_0x1e50ae(0x189)](_0x1e50ae(0x180)+_0x3a3bc7+'\x20from\x20role\x20'),socket['emit']('removeUserFromRole',{'id':getID(),'token':getToken(),'role':_0x2d0deb,'target':_0x3a3bc7},function(_0x9f1352){var _0x2d75b4=_0x1e50ae;alert(_0x9f1352[_0x2d75b4(0x174)]),window['location'][_0x2d75b4(0x17f)]();});}function savePermissions(){var _0x214c44=a0_0x5ef286;console[_0x214c44(0x189)](_0x214c44(0x186)),console[_0x214c44(0x189)](editedServerRoleResponse[currentRoleId][_0x214c44(0x198)]),socket['emit']('saveRolePermissions',{'id':getID(),'token':getToken(),'role':currentRoleId,'permissions':editedServerRoleResponse[currentRoleId]['permissions']},function(_0x1380b0){var _0x448f9f=_0x214c44;alert(_0x1380b0[_0x448f9f(0x174)]),window[_0x448f9f(0x199)][_0x448f9f(0x17f)]();});}function a0_0x3e00(){var _0x55d22a=['\x27)\x22\x20id=\x22','5233425AInrRE','permissions','location','getServerRoles','block','display','inline-block','createRole','checked','info','saveButton','4337992nwccXo','permheader','\x22\x20style=\x22display:\x20inline-block;color:\x20','emit','\x20input','permission','checked\x20element','8418935DTxNjL','16957iHWkCP','deleteRole','type','8SQpVVW','pagebody','number','4790034MEtvXU',')\x22\x20style=\x22background-image:\x20url(\x27/img/up.png\x27);background-size:\x20cover;object-fit:\x20cover;background-position:\x20center\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2010px;\x20height:\x2010px;display:\x20inline-block;\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20onclick=\x22moveRoleDown(','<div\x20class=\x22memberlist-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22memberlist-banner\x22\x20style=\x22background-image:\x20url(\x27','forEach','saveAppearanceButton','after','Permissions\x20-\x20','.role-entry-container','#permissionlist\x20p\x20input','style','href','roleName','backgroundColor','</div>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22memberlist-actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20onclick=\x22removeFromRole(','origin','.role-entry','cancelAppearanceButton',')\x22\x20type=\x22button\x22\x20value=\x22Remove\x20from\x20Role\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','displaySeperate','transparent','banner','rolelist','msg','3064740eqJWht','color','icon','keys',')\x22\x20style=\x22background-image:\x20url(\x27/img/down.png\x27);background-size:\x20cover;object-fit:\x20cover;background-position:\x20center\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2010px;\x20height:\x2010px;display:\x20inline-block;\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22role-entry\x22\x20onclick=\x22loadRolePerms(\x27','insertAdjacentHTML','roleColor','reverse','data','2088168nVqnXT','reload','Removing\x20user\x20','\x27);\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22memberlist-username\x22>','push','name','member:','querySelectorAll','Saviong','saveSortingButton','getElementById','log','length','\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20onclick=\x22moveRoleUp(','Please\x20enter\x20the\x20user\x20id\x20of\x20the\x20account\x20you\x20want\x20to\x20add','#292B2F','members','beforeend','before','\x27);\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22memberlist-pfp\x22\x20style=\x22background-image:\x20url(\x27','44gSAcib','value','cancelSortingButton','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20'];a0_0x3e00=function(){return _0x55d22a;};return a0_0x3e00();}function addToRole(){var _0x161bc6=a0_0x5ef286,_0x528ec4=prompt(_0x161bc6(0x18c));if(_0x528ec4['length']!=0xc||isNaN(_0x528ec4)==!![]){alert('The\x20user\x20id\x20(12\x20character\x20long\x20number)\x20you\x27ve\x20entered\x20is\x20incorrect.');return;}socket['emit']('addUserToRole',{'id':getID(),'token':getToken(),'role':currentRoleId,'target':_0x528ec4},function(_0x3f12a6){var _0x5cc10e=_0x161bc6;alert(_0x3f12a6[_0x5cc10e(0x174)]),window['location'][_0x5cc10e(0x17f)]();});}function a0_0x4038(_0x48625d,_0x4455d3){var _0x3e00b2=a0_0x3e00();return a0_0x4038=function(_0x4038d2,_0x4917b7){_0x4038d2=_0x4038d2-0x14a;var _0x4c84fb=_0x3e00b2[_0x4038d2];return _0x4c84fb;},a0_0x4038(_0x48625d,_0x4455d3);}function createRole(){var _0x4389af=a0_0x5ef286;socket[_0x4389af(0x153)](_0x4389af(0x14c),{'id':getID(),'token':getToken()},function(_0x313e48){var _0x5f69c=_0x4389af;alert(_0x313e48[_0x5f69c(0x174)]),window[_0x5f69c(0x199)][_0x5f69c(0x17f)]();});}function moveRoleUp(_0x2a37b3){var _0x53a9e7=a0_0x5ef286;document[_0x53a9e7(0x188)](_0x53a9e7(0x187))['style'][_0x53a9e7(0x14a)]=_0x53a9e7(0x14b),document[_0x53a9e7(0x188)]('cancelSortingButton')[_0x53a9e7(0x167)][_0x53a9e7(0x14a)]=_0x53a9e7(0x14b);var _0x3708d2=document[_0x53a9e7(0x185)]('.role-entry-container');for(let _0x57c1ea=0x0;_0x57c1ea<_0x3708d2[_0x53a9e7(0x18a)];_0x57c1ea++){_0x3708d2[_0x57c1ea]['id']==_0x2a37b3&&_0x3708d2[_0x57c1ea-0x1][_0x53a9e7(0x190)](_0x3708d2[_0x57c1ea]);}}function moveRoleDown(_0x3e12de){var _0xd8f282=a0_0x5ef286;document[_0xd8f282(0x188)](_0xd8f282(0x187))[_0xd8f282(0x167)][_0xd8f282(0x14a)]=_0xd8f282(0x14b),document[_0xd8f282(0x188)](_0xd8f282(0x194))[_0xd8f282(0x167)][_0xd8f282(0x14a)]='inline-block';var _0x3ac5c0=document[_0xd8f282(0x185)](_0xd8f282(0x165));for(let _0x529025=0x0;_0x529025<_0x3ac5c0[_0xd8f282(0x18a)];_0x529025++){_0x3ac5c0[_0x529025]['id']==_0x3e12de&&_0x3ac5c0[_0x529025+0x1][_0xd8f282(0x163)](_0x3ac5c0[_0x529025]);}}function tickSetting(_0x9bdbef){var _0x55894e=a0_0x5ef286;document[_0x55894e(0x188)](_0x55894e(0x14f))['style'][_0x55894e(0x14a)]='inline-block',document[_0x55894e(0x188)]('cancelButton')[_0x55894e(0x167)][_0x55894e(0x14a)]=_0x55894e(0x14b);var _0x1959c8=document[_0x55894e(0x185)]('#'+_0x9bdbef['id']+_0x55894e(0x154));_0x1959c8[0x0][_0x55894e(0x14d)]=!_0x1959c8[0x0][_0x55894e(0x14d)],Object[_0x55894e(0x178)](serverRoleResponse[currentRoleId][_0x55894e(0x198)])[_0x55894e(0x161)](function(_0x5e242b){editedPermissions[_0x5e242b]=serverRoleResponse[currentRoleId]['permissions'][_0x5e242b],console['log'](_0x5e242b);}),console['log']('\x20'),_0x1959c8[0x0][_0x55894e(0x14d)]==!![]?editedServerRoleResponse[currentRoleId][_0x55894e(0x198)][_0x9bdbef['id']]=0x1:editedServerRoleResponse[currentRoleId]['permissions'][_0x9bdbef['id']]=0x0,console[_0x55894e(0x189)](serverRoleResponse[currentRoleId][_0x55894e(0x198)]);}function deleteRole(){var _0x36d890=a0_0x5ef286;socket[_0x36d890(0x153)]('deleteRole',{'id':getID(),'token':getToken(),'roleId':currentRoleId},function(_0x2da6da){var _0x421281=_0x36d890;alert(_0x2da6da[_0x421281(0x174)]),window[_0x421281(0x199)][_0x421281(0x17f)]();});}function loadRolePerms(_0x5f1184){var _0x57ba4f=a0_0x5ef286,_0x350f5e=document[_0x57ba4f(0x185)](_0x57ba4f(0x16d));_0x350f5e[_0x57ba4f(0x161)](_0x4dd108=>{var _0x35c473=_0x57ba4f;_0x4dd108['id']==_0x5f1184?_0x4dd108[_0x35c473(0x167)][_0x35c473(0x16a)]=_0x35c473(0x18d):_0x4dd108[_0x35c473(0x167)]['backgroundColor']=_0x35c473(0x171);});var _0x1bdbe9=serverRoleResponse[_0x5f1184]['permissions'];document[_0x57ba4f(0x188)](_0x57ba4f(0x151))['innerText']=_0x57ba4f(0x164)+serverRoleResponse[_0x5f1184][_0x57ba4f(0x14e)]['name'],document['getElementById']('permissionlist')[_0x57ba4f(0x167)][_0x57ba4f(0x14a)]=_0x57ba4f(0x19b),document['getElementById'](_0x57ba4f(0x159))[_0x57ba4f(0x167)][_0x57ba4f(0x14a)]=_0x57ba4f(0x19b),currentRoleId=_0x5f1184,roleColor[_0x57ba4f(0x193)]=serverRoleResponse[_0x5f1184][_0x57ba4f(0x14e)][_0x57ba4f(0x176)],roleName['value']=serverRoleResponse[_0x5f1184][_0x57ba4f(0x14e)][_0x57ba4f(0x183)],permListPage=document[_0x57ba4f(0x185)](_0x57ba4f(0x166)),permListPage['forEach'](_0x2809be=>{var _0x31faf8=_0x57ba4f;_0x2809be[_0x31faf8(0x14d)]=![];}),Object[_0x57ba4f(0x178)](_0x1bdbe9)[_0x57ba4f(0x161)](function(_0x3777f8){var _0x5e9491=_0x57ba4f;children=document['querySelectorAll']('#'+_0x3777f8+'\x20input'),console[_0x5e9491(0x189)]('#'+_0x3777f8+_0x5e9491(0x154)),_0x1bdbe9[_0x3777f8]==0x1?(console[_0x5e9491(0x189)](children[0x0]),console[_0x5e9491(0x189)](_0x5e9491(0x156)),children[0x0][_0x5e9491(0x14d)]=!![]):children[0x0][_0x5e9491(0x15a)]==_0x5e9491(0x15d)?children[0x0][_0x5e9491(0x193)]=_0x1bdbe9[_0x3777f8]:children[0x0][_0x5e9491(0x14d)]=![];});serverRoleResponse[_0x5f1184][_0x57ba4f(0x14e)][_0x57ba4f(0x170)]==0x1?(console['log'](_0x57ba4f(0x156)),document[_0x57ba4f(0x188)](_0x57ba4f(0x170))['checked']=!![]):document[_0x57ba4f(0x188)]('displaySeperate')['checked']=![];var _0x3a3569=document[_0x57ba4f(0x188)]('memberlist');_0x3a3569['innerHTML']='',console['log'](serverRoleResponse[currentRoleId]['members']),Object[_0x57ba4f(0x178)](serverRoleResponse[currentRoleId][_0x57ba4f(0x18e)])[_0x57ba4f(0x17c)]()[_0x57ba4f(0x161)](function(_0x19f8eb){var _0x571ff4=_0x57ba4f;console[_0x571ff4(0x189)](_0x571ff4(0x184)),console[_0x571ff4(0x189)](_0x19f8eb),console[_0x571ff4(0x189)](serverRoleResponse[currentRoleId][_0x571ff4(0x18e)][_0x19f8eb]),socket[_0x571ff4(0x153)]('resolveMember',{'id':getID(),'token':getToken(),'target':serverRoleResponse[currentRoleId]['members'][_0x19f8eb]},function(_0x2782cc){var _0x121b5a=_0x571ff4,_0x2bc3c3=_0x121b5a(0x160)+_0x2782cc[_0x121b5a(0x17d)][_0x121b5a(0x172)]+_0x121b5a(0x191)+_0x2782cc[_0x121b5a(0x17d)][_0x121b5a(0x177)]+_0x121b5a(0x181)+_0x2782cc[_0x121b5a(0x17d)][_0x121b5a(0x183)]+_0x121b5a(0x16b)+currentRoleId+',\x20'+_0x2782cc[_0x121b5a(0x17d)]['id']+_0x121b5a(0x16f);_0x3a3569[_0x121b5a(0x17a)](_0x121b5a(0x18f),_0x2bc3c3);});});}