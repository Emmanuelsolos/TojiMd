function _0x1018(_0x293491,_0x1a528b){const _0x43497b=_0x4349();return _0x1018=function(_0x1018fd,_0x128902){_0x1018fd=_0x1018fd-0x161;let _0x35e3b8=_0x43497b[_0x1018fd];return _0x35e3b8;},_0x1018(_0x293491,_0x1a528b);}const _0x3d849b=_0x1018;function _0x4349(){const _0x878a76=['142tnOSuH','363400ovnHpQ','Gurubot','56ZEgGeo','279801YwTxug','sendFile','13448BOaVHb','pushName','.pdf','command','1022UlfoIP','&img=','135GBVKIW','10468arDkwv','msg','30343992BhaHBJ','2325SaoiCU','http://api.lolhuman.xyz/api/convert/imgtopdf?apikey=','6996tibGsv','quoted','12094896PJiksX'];_0x4349=function(){return _0x878a76;};return _0x4349();}(function(_0xb880f0,_0x3d6416){const _0x3291b0=_0x1018,_0x3bc72b=_0xb880f0();while(!![]){try{const _0x4c7431=parseInt(_0x3291b0(0x171))/0x1*(parseInt(_0x3291b0(0x169))/0x2)+-parseInt(_0x3291b0(0x175))/0x3*(-parseInt(_0x3291b0(0x174))/0x4)+-parseInt(_0x3291b0(0x16c))/0x5*(-parseInt(_0x3291b0(0x16e))/0x6)+-parseInt(_0x3291b0(0x166))/0x7*(-parseInt(_0x3291b0(0x162))/0x8)+parseInt(_0x3291b0(0x168))/0x9*(-parseInt(_0x3291b0(0x172))/0xa)+parseInt(_0x3291b0(0x170))/0xb+-parseInt(_0x3291b0(0x16b))/0xc;if(_0x4c7431===_0x3d6416)break;else _0x3bc72b['push'](_0x3bc72b['shift']());}catch(_0xf57864){_0x3bc72b['push'](_0x3bc72b['shift']());}}}(_0x4349,0xd2890));import _0x24dfd0 from'../lib/uploadImage.js';let handler=async(_0x5b93e2,{conn:_0x4435b3,text:_0x46067e,usedPrefix:_0x21bc95,command:_0x5e109e,isOwner:_0x420599})=>{const _0x165d08=_0x1018;let _0x2d6882=_0x5b93e2[_0x165d08(0x16f)]?_0x5b93e2[_0x165d08(0x16f)]:_0x5b93e2,_0xc8c50b=(_0x2d6882[_0x165d08(0x16a)]||_0x2d6882)['mimetype']||'';if(!_0xc8c50b)throw'*Respond\x20/\x20reply\x20to\x20an\x20image*';let _0x21e44e=await _0x2d6882['download']?.(),_0x18e063=await _0x24dfd0(_0x21e44e),_0x22569f=_0x46067e?_0x46067e:_0x5b93e2[_0x165d08(0x163)]||_0x165d08(0x173);_0x4435b3[_0x165d08(0x161)](_0x5b93e2['chat'],_0x165d08(0x16d)+lolkeysapi+_0x165d08(0x167)+_0x18e063,_0x22569f+_0x165d08(0x164),'',_0x5b93e2,![],{'asDocument':!![]});};handler[_0x3d849b(0x165)]=/^topdf$/i;export default handler;