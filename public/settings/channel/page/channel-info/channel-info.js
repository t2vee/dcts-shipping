var a0_0x5f2d1b=a0_0x4100;function a0_0x3ab9(){var _0x47df71=['11214580KqsyCK','same','channel_name','10543951gQmQLe','value','emit','184010LXgbzb','NOt\x20same','log','userConnected','none','4EBeiOY','data','getElementById','settings_channel_save','channel-','Error\x20while\x20trying\x20to\x20save\x20settings:\x20','Unable\x20to\x20get\x20channel\x20info.\x20Please\x20try\x20to\x20reload\x20slowly\x20until\x20it\x20works.\x20Known\x20bug!','9sYWMHx','3rcYfDA','getChannelInfo','style','12uhXNEC','5229748BjIZtV','179834DKgAVc','140SMeQLv','name','449136RyMPPr','display','15974916txHzGN','token'];a0_0x3ab9=function(){return _0x47df71;};return a0_0x3ab9();}(function(_0x1e30f4,_0x3755ef){var _0x380de2=a0_0x4100,_0x48ed70=_0x1e30f4();while(!![]){try{var _0x1095c6=-parseInt(_0x380de2(0x7d))/0x1*(-parseInt(_0x380de2(0x8f))/0x2)+parseInt(_0x380de2(0x78))/0x3*(-parseInt(_0x380de2(0x7c))/0x4)+parseInt(_0x380de2(0x8a))/0x5*(-parseInt(_0x380de2(0x7b))/0x6)+-parseInt(_0x380de2(0x7e))/0x7*(-parseInt(_0x380de2(0x80))/0x8)+-parseInt(_0x380de2(0x77))/0x9*(-parseInt(_0x380de2(0x84))/0xa)+parseInt(_0x380de2(0x87))/0xb+-parseInt(_0x380de2(0x82))/0xc;if(_0x1095c6===_0x3755ef)break;else _0x48ed70['push'](_0x48ed70['shift']());}catch(_0x2b24e0){_0x48ed70['push'](_0x48ed70['shift']());}}}(a0_0x3ab9,0xcf92f));function a0_0x4100(_0x5e6f9a,_0x31de87){var _0x3ab9ae=a0_0x3ab9();return a0_0x4100=function(_0x410020,_0x57b7d5){_0x410020=_0x410020-0x72;var _0x5bf11f=_0x3ab9ae[_0x410020];return _0x5bf11f;},a0_0x4100(_0x5e6f9a,_0x31de87);}var channelname=document[a0_0x5f2d1b(0x72)](a0_0x5f2d1b(0x86)),saveButton=document[a0_0x5f2d1b(0x72)](a0_0x5f2d1b(0x73)),serverconfigName,editChannel={};socket[a0_0x5f2d1b(0x89)](a0_0x5f2d1b(0x8d),{'id':getID(),'name':getUsername(),'icon':getPFP(),'status':getStatus(),'token':getToken(),'aboutme':getAboutme(),'banner':getBanner()}),socket[a0_0x5f2d1b(0x89)](a0_0x5f2d1b(0x79),{'id':getID(),'token':getToken(),'channel':getUrlParams('id')['replace'](a0_0x5f2d1b(0x74),'')},function(_0x5cfe4e){var _0xee3407=a0_0x5f2d1b;try{console[_0xee3407(0x8c)](_0x5cfe4e),channelname=document[_0xee3407(0x72)](_0xee3407(0x86)),saveButton=document[_0xee3407(0x72)]('settings_channel_save'),serverconfigName=_0x5cfe4e[_0xee3407(0x90)][_0xee3407(0x7f)],channelname[_0xee3407(0x88)]=serverconfigName,editChannel=_0x5cfe4e,console[_0xee3407(0x8c)](_0x5cfe4e);}catch(_0x408d6b){console[_0xee3407(0x8c)]('Unable\x20to\x20get\x20Channel\x20Information'),console[_0xee3407(0x8c)](_0x408d6b),alert(_0xee3407(0x76));}});function getToken(){var _0x535926=a0_0x5f2d1b,_0x444603=getCookie(_0x535926(0x83));return _0x444603==null||_0x444603['length']<=0x0?null:_0x444603;}function getID(){var _0x3d3fba=getCookie('id');return _0x3d3fba==null||_0x3d3fba['length']!=0xc?(_0x3d3fba=generateId(0xc),setCookie('id',_0x3d3fba,0x168),_0x3d3fba):_0x3d3fba;}function updatePreview(){var _0x228f78=a0_0x5f2d1b;try{channel_name[_0x228f78(0x88)]!=serverconfigName?(console[_0x228f78(0x8c)](_0x228f78(0x8b)),saveButton[_0x228f78(0x7a)][_0x228f78(0x81)]='block'):(console[_0x228f78(0x8c)](_0x228f78(0x85)),saveButton['style'][_0x228f78(0x81)]=_0x228f78(0x8e));}catch(_0x475d63){console['log'](_0x475d63);}}function saveSettings(){var _0xb09027=a0_0x5f2d1b;try{channelname[_0xb09027(0x88)]!=null&&channelname[_0xb09027(0x88)]['length']>0x0&&channelname['value']!=serverconfigName&&socket[_0xb09027(0x89)]('updateChannelName',{'id':getID(),'token':getToken(),'channel':getUrlParams('id'),'name':channelname['value']},function(_0x4ac550){var _0x7d9ea2=_0xb09027;console[_0x7d9ea2(0x8c)](_0x4ac550),alert(_0x4ac550['msg']);}),saveButton[_0xb09027(0x7a)][_0xb09027(0x81)]=_0xb09027(0x8e);}catch(_0x132e42){alert(_0xb09027(0x75)+_0x132e42);return;}}