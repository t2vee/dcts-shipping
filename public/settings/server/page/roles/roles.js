var a0_0x41f0a5=a0_0x702b;(function(_0xa67cff,_0x435dcc){var _0x470667=a0_0x702b,_0x46abd1=_0xa67cff();while(!![]){try{var _0x462327=-parseInt(_0x470667(0x176))/0x1+-parseInt(_0x470667(0x15e))/0x2+parseInt(_0x470667(0x187))/0x3*(parseInt(_0x470667(0x156))/0x4)+-parseInt(_0x470667(0x184))/0x5*(parseInt(_0x470667(0x173))/0x6)+-parseInt(_0x470667(0x171))/0x7+-parseInt(_0x470667(0x14a))/0x8+-parseInt(_0x470667(0x179))/0x9*(-parseInt(_0x470667(0x15c))/0xa);if(_0x462327===_0x435dcc)break;else _0x46abd1['push'](_0x46abd1['shift']());}catch(_0x2916b3){_0x46abd1['push'](_0x46abd1['shift']());}}}(a0_0x2c21,0x7df76));var rolelist=document[a0_0x41f0a5(0x15b)](a0_0x41f0a5(0x141)),roleColor=document[a0_0x41f0a5(0x15b)](a0_0x41f0a5(0x152)),roleName=document[a0_0x41f0a5(0x15b)](a0_0x41f0a5(0x14d)),serverRoleResponse='',editedServerRoleResponse=[],editedPermissions={},currentRoleId='';socket[a0_0x41f0a5(0x14f)](a0_0x41f0a5(0x16f),{'id':getID(),'name':getUsername(),'icon':getPFP(),'status':getStatus(),'token':getToken(),'aboutme':getAboutme(),'banner':getBanner()}),socket[a0_0x41f0a5(0x14f)]('checkPermission',{'id':getID(),'token':getToken(),'permission':['manageRoles',a0_0x41f0a5(0x145)]},function(_0x36a14e){var _0x5608cb=a0_0x41f0a5;_0x36a14e[_0x5608cb(0x174)]==_0x5608cb(0x189)?window[_0x5608cb(0x160)]['href']=window[_0x5608cb(0x160)][_0x5608cb(0x168)]+_0x5608cb(0x17e):document[_0x5608cb(0x15b)](_0x5608cb(0x13e))['style'][_0x5608cb(0x191)]=_0x5608cb(0x143);}),socket[a0_0x41f0a5(0x14f)]('getServerRoles',{'id':getID(),'token':getToken()},function(_0x42a300){var _0x1d4103=a0_0x41f0a5;rolelist=document[_0x1d4103(0x15b)](_0x1d4103(0x141)),roleColor=document[_0x1d4103(0x15b)](_0x1d4103(0x152)),roleName=document[_0x1d4103(0x15b)](_0x1d4103(0x14d)),console[_0x1d4103(0x14e)](_0x42a300),serverRoleResponse=_0x42a300,editedServerRoleResponse=_0x42a300;var _0x283ed3=[];Object['keys'](_0x42a300)['reverse']()[_0x1d4103(0x186)](function(_0x1f51d7){var _0x5c4f9d=_0x1d4103;console[_0x5c4f9d(0x14e)](_0x42a300);var _0x313d62=_0x42a300[_0x1f51d7][_0x5c4f9d(0x13f)]['color'],_0x2d1042=_0x42a300[_0x1f51d7]['info'][_0x5c4f9d(0x172)];_0x283ed3[_0x42a300[_0x1f51d7]['info'][_0x5c4f9d(0x18f)]]=_0x42a300[_0x1f51d7];});var _0x4f42d5='';_0x283ed3=_0x283ed3[_0x1d4103(0x154)](),console['log'](_0x283ed3),_0x283ed3[_0x1d4103(0x186)](_0x11d78e=>{var _0x73f355=_0x1d4103;_0x4f42d5+=_0x73f355(0x188)+_0x11d78e[_0x73f355(0x13f)]['id']+_0x73f355(0x17a)+_0x11d78e['info']['id']+_0x73f355(0x169)+_0x11d78e['info']['id']+_0x73f355(0x180)+_0x11d78e['info']['id']+'\x27)\x22\x20id=\x22'+_0x11d78e[_0x73f355(0x13f)]['id']+_0x73f355(0x165)+_0x11d78e[_0x73f355(0x13f)][_0x73f355(0x142)]+_0x73f355(0x177)+_0x11d78e['info'][_0x73f355(0x172)]+_0x73f355(0x17b);}),rolelist[_0x1d4103(0x15a)](_0x1d4103(0x155),_0x4f42d5);});function saveAppearance(){var _0xeafcbf=a0_0x41f0a5;serverRoleResponse[currentRoleId][_0xeafcbf(0x13f)][_0xeafcbf(0x172)]=roleName[_0xeafcbf(0x175)],serverRoleResponse[currentRoleId][_0xeafcbf(0x13f)][_0xeafcbf(0x142)]=roleColor[_0xeafcbf(0x175)],document['getElementById'](_0xeafcbf(0x166))[_0xeafcbf(0x14b)]==!![]?serverRoleResponse[currentRoleId]['info'][_0xeafcbf(0x166)]=0x1:serverRoleResponse[currentRoleId][_0xeafcbf(0x13f)]['displaySeperate']=0x0,socket[_0xeafcbf(0x14f)](_0xeafcbf(0x17d),{'id':getID(),'token':getToken(),'roleId':currentRoleId,'data':serverRoleResponse[currentRoleId]},function(_0xde5419){var _0x4d4bed=_0xeafcbf;alert(_0xde5419[_0x4d4bed(0x149)]),window[_0x4d4bed(0x160)][_0x4d4bed(0x167)]();});}function appearanceChanged(){var _0x2ec027=a0_0x41f0a5;document[_0x2ec027(0x15b)](_0x2ec027(0x16a))[_0x2ec027(0x16d)][_0x2ec027(0x191)]=_0x2ec027(0x15f),document[_0x2ec027(0x15b)]('cancelAppearanceButton')[_0x2ec027(0x16d)][_0x2ec027(0x191)]='inline-block';}function saveSorting(){var _0x536faa=a0_0x41f0a5,_0x14242b=document[_0x536faa(0x190)]('.role-entry-container'),_0x49723e=[];_0x14242b['forEach'](_0x3118a8=>{var _0x3fc37d=_0x536faa;_0x49723e[_0x3fc37d(0x144)](_0x3118a8['id']);}),socket[_0x536faa(0x14f)](_0x536faa(0x185),{'id':getID(),'token':getToken(),'sorted':_0x49723e},function(_0x32d94e){var _0x1c7faa=_0x536faa;alert(_0x32d94e[_0x1c7faa(0x149)]),window[_0x1c7faa(0x160)]['reload']();});}function removeFromRole(_0x2cf713,_0x5851c7){var _0x412ac3=a0_0x41f0a5;console[_0x412ac3(0x14e)]('Removing\x20user\x20'+_0x5851c7+'\x20from\x20role\x20'),socket[_0x412ac3(0x14f)](_0x412ac3(0x159),{'id':getID(),'token':getToken(),'role':_0x2cf713,'target':_0x5851c7},function(_0x24b471){var _0x170816=_0x412ac3;alert(_0x24b471[_0x170816(0x149)]),window[_0x170816(0x160)][_0x170816(0x167)]();});}function savePermissions(){var _0x3e3708=a0_0x41f0a5;socket['emit'](_0x3e3708(0x182),{'id':getID(),'token':getToken(),'role':currentRoleId,'permissions':editedPermissions},function(_0x1525d6){var _0xcf21b1=_0x3e3708;alert(_0x1525d6[_0xcf21b1(0x149)]),window[_0xcf21b1(0x160)]['reload']();});}function addToRole(){var _0x243857=a0_0x41f0a5,_0x5544a9=prompt('Please\x20enter\x20the\x20user\x20id\x20of\x20the\x20account\x20you\x20want\x20to\x20add');if(_0x5544a9[_0x243857(0x16b)]!=0xc||isNaN(_0x5544a9)==!![]){alert(_0x243857(0x158));return;}socket[_0x243857(0x14f)]('addUserToRole',{'id':getID(),'token':getToken(),'role':currentRoleId,'target':_0x5544a9},function(_0x87a647){var _0x13c521=_0x243857;alert(_0x87a647[_0x13c521(0x149)]),window['location'][_0x13c521(0x167)]();});}function a0_0x702b(_0x1ecd9c,_0x1481ca){var _0x2c218e=a0_0x2c21();return a0_0x702b=function(_0x702b95,_0x355e02){_0x702b95=_0x702b95-0x13c;var _0x2dd2ab=_0x2c218e[_0x702b95];return _0x2dd2ab;},a0_0x702b(_0x1ecd9c,_0x1481ca);}function createRole(){var _0x1d5d56=a0_0x41f0a5;socket[_0x1d5d56(0x14f)]('createRole',{'id':getID(),'token':getToken()},function(_0xc725ab){var _0x3b49cc=_0x1d5d56;alert(_0xc725ab[_0x3b49cc(0x149)]),window['location'][_0x3b49cc(0x167)]();});}function deleteRole(){var _0xfd0b46=a0_0x41f0a5;socket[_0xfd0b46(0x14f)](_0xfd0b46(0x13d),{'id':getID(),'token':getToken(),'roleId':currentRoleId},function(_0x4e9ad8){var _0x4d41d5=_0xfd0b46;alert(_0x4e9ad8[_0x4d41d5(0x149)]),window['location']['reload']();});}function moveRoleUp(_0x542a14){var _0x4953ce=a0_0x41f0a5;document['getElementById'](_0x4953ce(0x150))['style'][_0x4953ce(0x191)]='inline-block',document[_0x4953ce(0x15b)](_0x4953ce(0x14c))[_0x4953ce(0x16d)]['display']=_0x4953ce(0x15f);var _0x3a32db=document[_0x4953ce(0x190)](_0x4953ce(0x18b));for(let _0xd02760=0x0;_0xd02760<_0x3a32db[_0x4953ce(0x16b)];_0xd02760++){_0x3a32db[_0xd02760]['id']==_0x542a14&&_0x3a32db[_0xd02760-0x1][_0x4953ce(0x18e)](_0x3a32db[_0xd02760]);}}function moveRoleDown(_0x1601b1){var _0x3afb85=a0_0x41f0a5;document[_0x3afb85(0x15b)](_0x3afb85(0x150))[_0x3afb85(0x16d)][_0x3afb85(0x191)]=_0x3afb85(0x15f),document[_0x3afb85(0x15b)](_0x3afb85(0x14c))[_0x3afb85(0x16d)]['display']=_0x3afb85(0x15f);var _0x59f136=document[_0x3afb85(0x190)](_0x3afb85(0x18b));for(let _0x5d8077=0x0;_0x5d8077<_0x59f136[_0x3afb85(0x16b)];_0x5d8077++){_0x59f136[_0x5d8077]['id']==_0x1601b1&&_0x59f136[_0x5d8077+0x1]['after'](_0x59f136[_0x5d8077]);}}function tickSetting(_0xc919de){var _0x12e009=a0_0x41f0a5;document['getElementById'](_0x12e009(0x17c))['style']['display']=_0x12e009(0x15f),document[_0x12e009(0x15b)](_0x12e009(0x164))['style']['display']=_0x12e009(0x15f);var _0x12c167=document['querySelectorAll']('#'+_0xc919de['id']+_0x12e009(0x17f));_0x12c167[0x0][_0x12e009(0x14b)]=!_0x12c167[0x0][_0x12e009(0x14b)],Object[_0x12e009(0x163)](serverRoleResponse[currentRoleId][_0x12e009(0x146)])[_0x12e009(0x186)](function(_0x3108fc){var _0x4ca703=_0x12e009;editedPermissions[_0x3108fc]=serverRoleResponse[currentRoleId][_0x4ca703(0x146)][_0x3108fc],console[_0x4ca703(0x14e)](_0x3108fc);}),console[_0x12e009(0x14e)]('\x20'),_0x12c167[0x0][_0x12e009(0x14b)]==!![]?editedPermissions[_0xc919de['id']]=0x1:editedPermissions[_0xc919de['id']]=0x0,console[_0x12e009(0x14e)](serverRoleResponse[currentRoleId][_0x12e009(0x146)]),console[_0x12e009(0x14e)](editedPermissions);}function a0_0x2c21(){var _0x530d12=['.role-entry-container','icon','transparent','before','sortId','querySelectorAll','display','permheader','deleteRole','pagebody','info','data','rolelist','color','block','push','manageGroup','permissions','memberlist','backgroundColor','msg','2642944qqMFvl','checked','cancelSortingButton','roleName','log','emit','saveSortingButton','innerHTML','roleColor','innerText','reverse','beforeend','4OpNMmy',')\x22\x20type=\x22button\x22\x20value=\x22Remove\x20from\x20Role\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','The\x20user\x20id\x20(12\x20character\x20long\x20number)\x20you\x27ve\x20entered\x20is\x20incorrect.','removeUserFromRole','insertAdjacentHTML','getElementById','27535280OCIZSn','member:','497254zZUTGj','inline-block','location','\x27);\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22memberlist-pfp\x22\x20style=\x22background-image:\x20url(\x27','members','keys','cancelButton','\x22\x20style=\x22display:\x20inline-block;color:\x20','displaySeperate','reload','origin',')\x22\x20style=\x22background-image:\x20url(\x27/img/up.png\x27);background-size:\x20cover;object-fit:\x20cover;background-position:\x20center\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2010px;\x20height:\x2010px;display:\x20inline-block;\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20onclick=\x22moveRoleDown(','saveAppearanceButton','length','<div\x20class=\x22memberlist-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22memberlist-banner\x22\x20style=\x22background-image:\x20url(\x27','style','#permissionlist\x20p\x20input','userConnected','#292B2F','4009579qhhuGD','name','6eyDozI','permission','value','523062RQXaCQ',';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','\x27);\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22memberlist-username\x22>','9AdUBNJ','\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20onclick=\x22moveRoleUp(','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','saveButton','updateRoleAppearance','/settings/server','\x20input',')\x22\x20style=\x22background-image:\x20url(\x27/img/down.png\x27);background-size:\x20cover;object-fit:\x20cover;background-position:\x20center\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2010px;\x20height:\x2010px;display:\x20inline-block;\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22role-entry\x22\x20onclick=\x22loadRolePerms(\x27','banner','saveRolePermissions','permissionlist','4809935MCJiNj','updateRoleHierarchy','forEach','1197813sKYxMA','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22role-entry-container\x22\x20id=\x22','denied','checked\x20element'];a0_0x2c21=function(){return _0x530d12;};return a0_0x2c21();}function loadRolePerms(_0x2f207e){var _0x5186ac=a0_0x41f0a5,_0x44fc2c=document[_0x5186ac(0x190)]('.role-entry');_0x44fc2c[_0x5186ac(0x186)](_0x46ed84=>{var _0x52a9b8=_0x5186ac;_0x46ed84['id']==_0x2f207e?_0x46ed84['style'][_0x52a9b8(0x148)]=_0x52a9b8(0x170):_0x46ed84[_0x52a9b8(0x16d)][_0x52a9b8(0x148)]=_0x52a9b8(0x18d);});var _0x441d38=serverRoleResponse[_0x2f207e][_0x5186ac(0x146)];document[_0x5186ac(0x15b)](_0x5186ac(0x13c))[_0x5186ac(0x153)]='Permissions\x20-\x20'+serverRoleResponse[_0x2f207e][_0x5186ac(0x13f)]['name'],document['getElementById'](_0x5186ac(0x13d))[_0x5186ac(0x16d)][_0x5186ac(0x191)]=_0x5186ac(0x15f),document['getElementById'](_0x5186ac(0x183))[_0x5186ac(0x16d)][_0x5186ac(0x191)]=_0x5186ac(0x143),currentRoleId=_0x2f207e,roleColor[_0x5186ac(0x175)]=serverRoleResponse[_0x2f207e][_0x5186ac(0x13f)][_0x5186ac(0x142)],roleName[_0x5186ac(0x175)]=serverRoleResponse[_0x2f207e][_0x5186ac(0x13f)]['name'],permListPage=document[_0x5186ac(0x190)](_0x5186ac(0x16e)),permListPage[_0x5186ac(0x186)](_0xb76567=>{var _0x5a32a1=_0x5186ac;_0xb76567[_0x5a32a1(0x14b)]=![];}),Object[_0x5186ac(0x163)](_0x441d38)[_0x5186ac(0x186)](function(_0x178e51){var _0x15ba60=_0x5186ac;children=document[_0x15ba60(0x190)]('#'+_0x178e51+_0x15ba60(0x17f)),console[_0x15ba60(0x14e)]('#'+_0x178e51+_0x15ba60(0x17f)),_0x441d38[_0x178e51]==0x1?(console[_0x15ba60(0x14e)](children[0x0]),console[_0x15ba60(0x14e)](_0x15ba60(0x18a)),children[0x0][_0x15ba60(0x14b)]=!![]):children[0x0][_0x15ba60(0x14b)]=![];});serverRoleResponse[_0x2f207e][_0x5186ac(0x13f)][_0x5186ac(0x166)]==0x1?(console[_0x5186ac(0x14e)](_0x5186ac(0x18a)),document['getElementById'](_0x5186ac(0x166))[_0x5186ac(0x14b)]=!![]):document[_0x5186ac(0x15b)](_0x5186ac(0x166))[_0x5186ac(0x14b)]=![];var _0x5b2ae9=document[_0x5186ac(0x15b)](_0x5186ac(0x147));_0x5b2ae9[_0x5186ac(0x151)]='',console[_0x5186ac(0x14e)](serverRoleResponse[currentRoleId][_0x5186ac(0x162)]),Object[_0x5186ac(0x163)](serverRoleResponse[currentRoleId][_0x5186ac(0x162)])['reverse']()[_0x5186ac(0x186)](function(_0x375a36){var _0x1b82db=_0x5186ac;console['log'](_0x1b82db(0x15d)),console[_0x1b82db(0x14e)](_0x375a36),console['log'](serverRoleResponse[currentRoleId][_0x1b82db(0x162)][_0x375a36]),socket['emit']('resolveMember',{'id':getID(),'token':getToken(),'target':serverRoleResponse[currentRoleId][_0x1b82db(0x162)][_0x375a36]},function(_0x5d0d75){var _0x58b2ea=_0x1b82db,_0x1657c0=_0x58b2ea(0x16c)+_0x5d0d75[_0x58b2ea(0x140)][_0x58b2ea(0x181)]+_0x58b2ea(0x161)+_0x5d0d75[_0x58b2ea(0x140)][_0x58b2ea(0x18c)]+_0x58b2ea(0x178)+_0x5d0d75[_0x58b2ea(0x140)][_0x58b2ea(0x172)]+'</div>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22memberlist-actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20onclick=\x22removeFromRole('+currentRoleId+',\x20'+_0x5d0d75[_0x58b2ea(0x140)]['id']+_0x58b2ea(0x157);_0x5b2ae9[_0x58b2ea(0x15a)](_0x58b2ea(0x155),_0x1657c0);});});}