var a0_0x5ba7d4=a0_0x1665;(function(_0x3e11c7,_0x36b125){var _0x201974=a0_0x1665,_0x568762=_0x3e11c7();while(!![]){try{var _0x18b94c=-parseInt(_0x201974(0x126))/0x1*(parseInt(_0x201974(0x106))/0x2)+parseInt(_0x201974(0x110))/0x3*(parseInt(_0x201974(0x12e))/0x4)+parseInt(_0x201974(0x12a))/0x5+parseInt(_0x201974(0x117))/0x6*(-parseInt(_0x201974(0x12c))/0x7)+parseInt(_0x201974(0x108))/0x8*(-parseInt(_0x201974(0x11b))/0x9)+-parseInt(_0x201974(0x107))/0xa+parseInt(_0x201974(0x121))/0xb;if(_0x18b94c===_0x36b125)break;else _0x568762['push'](_0x568762['shift']());}catch(_0x4ca599){_0x568762['push'](_0x568762['shift']());}}}(a0_0x4f35,0x1fd71));function a0_0x1665(_0x1835f0,_0x2d8e6a){var _0x4f358c=a0_0x4f35();return a0_0x1665=function(_0x1665f2,_0x41696d){_0x1665f2=_0x1665f2-0x106;var _0x142536=_0x4f358c[_0x1665f2];return _0x142536;},a0_0x1665(_0x1835f0,_0x2d8e6a);}function a0_0x4f35(){var _0x23a415=['length','same','permission','&#039;','9LXSCLt','replaceAll','userConnected','status','server_name','location','getServerInfo','50916VqWjvN','name','href','getElementById','72HEmIoc','none','checkPermission','value','pfp','server_description','6862306lYTSCu','log','description','updateServerName','/settings/server','25759EqBcin','emit','style','Error\x20while\x20trying\x20to\x20save\x20settings:\x20','180055JBsrkB','origin','112nqdufX','block','84316pFEERm','manageServerInfo','settings_profile_save','18apeGPU','1840060DFvfhd','41064MjOpRv','pagebody','username','display'];a0_0x4f35=function(){return _0x23a415;};return a0_0x4f35();}var servername=document['getElementById'](a0_0x5ba7d4(0x114)),serverdescription=document['getElementById']('server_description'),saveButton=document[a0_0x5ba7d4(0x11a)](a0_0x5ba7d4(0x130)),serverconfigName,serverconfigDesc;socket['emit'](a0_0x5ba7d4(0x11d),{'id':getID(),'token':getToken(),'permission':a0_0x5ba7d4(0x12f)},function(_0x3a6e40){var _0x5aa73c=a0_0x5ba7d4;_0x3a6e40[_0x5aa73c(0x10e)]=='denied'?window[_0x5aa73c(0x115)][_0x5aa73c(0x119)]=window[_0x5aa73c(0x115)][_0x5aa73c(0x12b)]+_0x5aa73c(0x125):document[_0x5aa73c(0x11a)](_0x5aa73c(0x109))[_0x5aa73c(0x128)]['display']=_0x5aa73c(0x12d);}),socket[a0_0x5ba7d4(0x127)](a0_0x5ba7d4(0x112),{'id':getID(),'name':getUsername(),'icon':getPFP(),'status':getStatus(),'token':getToken(),'aboutme':getAboutme(),'banner':getBanner()}),socket[a0_0x5ba7d4(0x127)](a0_0x5ba7d4(0x116),{'id':getID(),'token':getToken()},function(_0x3126c6){var _0x1b4960=a0_0x5ba7d4;try{servername=document[_0x1b4960(0x11a)]('server_name'),serverdescription=document[_0x1b4960(0x11a)](_0x1b4960(0x120)),saveButton=document[_0x1b4960(0x11a)](_0x1b4960(0x130)),serverconfigName=_0x3126c6[_0x1b4960(0x118)][_0x1b4960(0x111)](_0x1b4960(0x10f),'\x27'),serverconfigDesc=_0x3126c6[_0x1b4960(0x123)][_0x1b4960(0x111)](_0x1b4960(0x10f),'\x27'),servername=document[_0x1b4960(0x11a)](_0x1b4960(0x114)),serverdescription=document['getElementById'](_0x1b4960(0x120)),saveButton=document[_0x1b4960(0x11a)](_0x1b4960(0x130)),servername[_0x1b4960(0x11e)]=serverconfigName,serverdescription[_0x1b4960(0x11e)]=serverconfigDesc,console['log'](_0x3126c6);}catch(_0x2676db){console[_0x1b4960(0x122)]('Unable\x20to\x20get\x20Server\x20Information'),console[_0x1b4960(0x122)](_0x2676db);}});function updatePreview(){var _0x26b3f3=a0_0x5ba7d4;try{servername[_0x26b3f3(0x11e)]!=serverconfigName||serverdescription[_0x26b3f3(0x11e)]!=serverconfigDesc?(console[_0x26b3f3(0x122)]('NOt\x20same'),saveButton[_0x26b3f3(0x128)][_0x26b3f3(0x10b)]=_0x26b3f3(0x12d)):(console[_0x26b3f3(0x122)](_0x26b3f3(0x10d)),saveButton[_0x26b3f3(0x128)][_0x26b3f3(0x10b)]=_0x26b3f3(0x11c));}catch(_0x2891cd){console[_0x26b3f3(0x122)](_0x2891cd);}}function saveSettings(){var _0x180179=a0_0x5ba7d4;try{servername[_0x180179(0x11e)]!=null&&servername[_0x180179(0x11e)][_0x180179(0x10c)]>0x0&&servername[_0x180179(0x11e)]!=serverconfigName&&socket[_0x180179(0x127)](_0x180179(0x124),{'id':getID(),'token':getToken(),'value':servername[_0x180179(0x11e)]},function(_0x26a37c){console['log'](_0x26a37c),alert(_0x26a37c['msg']);}),serverdescription['value']!=null&&serverdescription['value'][_0x180179(0x10c)]>0x0&&serverdescription[_0x180179(0x11e)]!=serverconfigDesc&&socket[_0x180179(0x127)]('updateServerDesc',{'id':getID(),'token':getToken(),'value':serverdescription[_0x180179(0x11e)]},function(_0x23ff7a){var _0x11b978=_0x180179;console[_0x11b978(0x122)](_0x23ff7a),alert(_0x23ff7a['msg']);}),saveButton[_0x180179(0x128)][_0x180179(0x10b)]=_0x180179(0x11c);}catch(_0x50474){alert(_0x180179(0x129)+_0x50474);return;}}function setUser(_0x11d5fb){var _0x54924a=a0_0x5ba7d4;setCookie(_0x54924a(0x10a),_0x11d5fb,0x168);}function setBanner(_0x45e35d){setCookie('banner',_0x45e35d,0x168);}function setStatus(_0xa65061){var _0x46afa1=a0_0x5ba7d4;setCookie(_0x46afa1(0x113),_0xa65061,0x168);}function setPFP(_0x3227d2){var _0x5b0e6f=a0_0x5ba7d4;setCookie(_0x5b0e6f(0x11f),_0x3227d2,0x168);}function setAboutme(_0x1c4ad9){setCookie('aboutme',_0x1c4ad9,0x168);}