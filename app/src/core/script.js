function _0xf36b(){const _0x3d9d84=['miss','data',',\x20currentTime:\x20',',\x20MiningPoints:\x20','get','hourly','warn',']\x20Error\x20starting\x20mining\x20(HTTP\x20Error):','error','post','21gwMzVI','110366KOhucS','status\x20code\x20412','end',']\x20Claiming\x20mining\x20points...',']\x20Mining\x20already\x20started.\x20Skipping\x20start\x20process.','getTime',']\x20Error\x20starting\x20mining:',']\x20Balances:','max','16jhMLcN',']\x20Mining\x20started\x20successfully','now','14564180AUlNgh','1181097EhEYCE',']\x20Total\x20Points:\x20','338936wBHuxM','response',']\x20Unhandled\x20error.','1908440SrKIoy','info','message','32pEtTYs','/mining/current',']\x20Mining\x20has\x20ended.\x20Proceeding\x20to\x20claim\x20mining\x20points.',',\x20remainingTime:\x20','/mining/claim','start',',\x20ElapsedTimeInHours:\x20',']\x20Claimed\x20successfully:',']\x20Progress:\x20endTime:\x20','349476XKHQvS','3205008uIqTLE'];_0xf36b=function(){return _0x3d9d84;};return _0xf36b();}(function(_0x2dfea1,_0x3f7866){const _0x516551=_0x8c0c,_0xc86639=_0x2dfea1();while(!![]){try{const _0x52331d=-parseInt(_0x516551(0x10d))/0x1*(-parseInt(_0x516551(0x104))/0x2)+parseInt(_0x516551(0xf7))/0x3*(-parseInt(_0x516551(0x119))/0x4)+-parseInt(_0x516551(0x116))/0x5+-parseInt(_0x516551(0xf8))/0x6+-parseInt(_0x516551(0x103))/0x7*(parseInt(_0x516551(0x113))/0x8)+parseInt(_0x516551(0x111))/0x9+parseInt(_0x516551(0x110))/0xa;if(_0x52331d===_0x3f7866)break;else _0xc86639['push'](_0xc86639['shift']());}catch(_0x38527a){_0xc86639['push'](_0xc86639['shift']());}}}(_0xf36b,0x79046));import{logger}from'../utils/logger.js';async function getMiningData(_0x3baf65,_0x34b196){const _0xaf394d=_0x8c0c;try{const _0x3d13eb=await _0x3baf65[_0xaf394d(0xfd)](_0xaf394d(0x11a),{'params':{'extension':_0x34b196}});if(_0x3d13eb[_0xaf394d(0xfa)]&&_0x3d13eb['data'][_0xaf394d(0xfa)]){const _0x5f49a4=_0x3d13eb[_0xaf394d(0xfa)]['data'];updateProgress(_0x34b196,_0x5f49a4),await updateMiningPoint(_0x34b196,_0x5f49a4,_0x3baf65),_0x5f49a4['ended']===0x1&&(logger('['+_0x34b196+_0xaf394d(0x11b),'debug'),await claim(_0x3baf65,_0x34b196));}}catch(_0x49c303){logger('['+_0x34b196+']\x20Error\x20fetching\x20mining\x20data',_0xaf394d(0x101));}}function _0x8c0c(_0x1e5ac0,_0x530fa9){const _0xf36b8f=_0xf36b();return _0x8c0c=function(_0x8c0ca5,_0x514332){_0x8c0ca5=_0x8c0ca5-0xf6;let _0x1e5065=_0xf36b8f[_0x8c0ca5];return _0x1e5065;},_0x8c0c(_0x1e5ac0,_0x530fa9);}async function updateMiningPoint(_0x23bb67,_0x58fa27,_0x28148b){const _0x1cc980=_0x8c0c,_0x6ede12=(Date[_0x1cc980(0x10f)]()-new Date(_0x58fa27[_0x1cc980(0x11e)])[_0x1cc980(0x109)]()-_0x58fa27[_0x1cc980(0xf9)])/0x36ee80,_0x228b42=_0x6ede12*_0x58fa27[_0x1cc980(0xfe)],_0x1c7a5e=Math[_0x1cc980(0x10c)](0x0,_0x228b42),_0xaf9085=await checkBalance(_0x28148b,_0x23bb67);logger('['+_0x23bb67+_0x1cc980(0x112)+_0xaf9085+_0x1cc980(0xfc)+_0x1c7a5e+_0x1cc980(0x11f)+_0x6ede12,_0x1cc980(0xff));}function updateProgress(_0x50d7ce,_0x3ff273){const _0x4c0648=_0x8c0c,_0x8042bf=Date[_0x4c0648(0x10f)](),_0x94ef5a=_0x3ff273[_0x4c0648(0x106)],_0x7a69c8=Math[_0x4c0648(0x10c)](0x0,_0x94ef5a-_0x8042bf);logger('['+_0x50d7ce+_0x4c0648(0xf6)+_0x94ef5a+_0x4c0648(0xfb)+_0x8042bf+_0x4c0648(0x11c)+_0x7a69c8,_0x4c0648(0xff));}async function claim(_0x409243,_0x127dde){const _0x1e1062=_0x8c0c;try{logger('['+_0x127dde+_0x1e1062(0x107));const {data:_0x1a5e5c}=await _0x409243[_0x1e1062(0x102)](_0x1e1062(0x11d),{'extension':_0x127dde});logger('['+_0x127dde+_0x1e1062(0x120),'success',_0x1a5e5c),await startFarming(_0x409243,_0x127dde);}catch(_0xa11de6){const _0x20291b=_0xa11de6[_0x1e1062(0x118)]||_0xa11de6;logger('['+_0x127dde+']\x20Error\x20during\x20claim:','error',_0x20291b),_0x20291b['includes'](_0x1e1062(0x105))?(logger('['+_0x127dde+']\x20Restarting\x20farming...'),await startFarming(_0x409243,_0x127dde)):logger('['+_0x127dde+_0x1e1062(0x115),_0x1e1062(0x101));}}async function startFarming(_0x5bf922,_0x99b66){const _0x26adc5=_0x8c0c;try{const _0x990fa0=await _0x5bf922[_0x26adc5(0x102)]('/mining/start',{'extension':_0x99b66});_0x990fa0['status']===0xc8&&logger('['+_0x99b66+_0x26adc5(0x10e),'success');}catch(_0x2eeab9){if(_0x2eeab9['response']){const {status:_0x4d2853,data:_0x5ae88a}=_0x2eeab9[_0x26adc5(0x114)];logger('['+_0x99b66+_0x26adc5(0x100),_0x26adc5(0x101),{'status':_0x4d2853,'data':_0x5ae88a});if(_0x4d2853===0x19c&&_0x5ae88a['error'][_0x26adc5(0x118)]==='Mining\x20is\x20started.'){console['log']('['+_0x99b66+_0x26adc5(0x108));return;}}else logger('['+_0x99b66+_0x26adc5(0x10a),'error',_0x2eeab9[_0x26adc5(0x118)]||_0x2eeab9);}}async function checkBalance(_0x48a46f,_0x12602b){const _0x5402a4=_0x8c0c;try{logger('['+_0x12602b+']\x20Checking\x20Balances\x20points...');const _0x1f7bfb=await _0x48a46f[_0x5402a4(0xfd)]('/user/balances'),_0x1b86a8=_0x1f7bfb['data'][_0x5402a4(0xfa)][0x0]['balance'];return logger('['+_0x12602b+_0x5402a4(0x10b),_0x5402a4(0x117),_0x1b86a8),_0x1b86a8;}catch(_0x4c5baa){return logger('['+_0x12602b+']\x20Error\x20checking\x20balance:',_0x5402a4(0x101),_0x4c5baa[_0x5402a4(0x118)]||_0x4c5baa),null;}}export{getMiningData};
