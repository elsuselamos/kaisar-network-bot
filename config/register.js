function _0x2187(){const _0x4c652e=['236735thxhYE','Enter\x20the\x20password\x20for\x20your\x20account:\x20','258438ccZCUi','split','Error\x20during\x20login\x20for\x20','stdout','stdin','utf-8','811731lRTOJh','debug','error','Login\x20successful\x20for\x20','close','3044304NiFBRd','data','5821914uOnneU','tokens.txt','accessToken','message','16kugCTy',',\x20trying\x20to\x20login...','filter','https://zero-api.kaisar.io/auth/login','7213788veMtpc','\x20make\x20sure\x20you\x20already\x20confirm\x20email','readFileSync','Registration\x20failed\x20for\x20','Error\x20reading\x20emails.txt\x20file:','post','Check\x20your\x20inbox\x20to\x20confirm\x20your\x20email...\x0aThen\x20Rerun\x20this\x20script\x20to\x20login...','code','819432tPJVOW','trim','Email\x20already\x20exists\x20for\x20','log','Error\x20saving\x20token\x20to\x20file:','18IPhBbT','emails.txt','\x20Please\x20try\x20again..','createInterface','Error\x20during\x20registration\x20for\x20'];_0x2187=function(){return _0x4c652e;};return _0x2187();}const _0x42293a=_0x2f8a;function _0x2f8a(_0x48fd4c,_0x557b27){const _0x21876e=_0x2187();return _0x2f8a=function(_0x2f8a2e,_0x164989){_0x2f8a2e=_0x2f8a2e-0xc9;let _0x1e9776=_0x21876e[_0x2f8a2e];return _0x1e9776;},_0x2f8a(_0x48fd4c,_0x557b27);}(function(_0x1e5501,_0x282f37){const _0x50219a=_0x2f8a,_0x12a36a=_0x1e5501();while(!![]){try{const _0x32744c=parseInt(_0x50219a(0xe0))/0x1+parseInt(_0x50219a(0xda))/0x2+-parseInt(_0x50219a(0xe5))/0x3+-parseInt(_0x50219a(0xce))/0x4+-parseInt(_0x50219a(0xd8))/0x5*(-parseInt(_0x50219a(0xd3))/0x6)+-parseInt(_0x50219a(0xe7))/0x7+-parseInt(_0x50219a(0xeb))/0x8*(-parseInt(_0x50219a(0xef))/0x9);if(_0x32744c===_0x282f37)break;else _0x12a36a['push'](_0x12a36a['shift']());}catch(_0x3ca564){_0x12a36a['push'](_0x12a36a['shift']());}}}(_0x2187,0x9af67));import{axios,banner,headers,readline,logger,fs}from'../app/src/utils/exporter.js';const rl=readline[_0x42293a(0xd6)]({'input':process[_0x42293a(0xde)],'output':process[_0x42293a(0xdd)]});function saveTokenToFile(_0x4319f7){const _0x2a8f00=_0x42293a;try{fs['appendFileSync'](_0x2a8f00(0xe8),_0x4319f7+'\x0a'),console[_0x2a8f00(0xd1)]('Access\x20token\x20saved\x20to\x20tokens.txt');}catch(_0x34658a){console['error'](_0x2a8f00(0xd2),_0x34658a[_0x2a8f00(0xea)]);}}async function loginUser(_0x3866c2,_0x4bc5b2){const _0x251893=_0x42293a;try{const _0xb18177=await axios['post'](_0x251893(0xee),{'email':_0x3866c2,'password':_0x4bc5b2},{'headers':{'Content-Type':'application/json'}});if(_0xb18177['data']){const _0x2977f7=_0xb18177[_0x251893(0xe6)][_0x251893(0xe6)][_0x251893(0xe9)];console['log'](_0x251893(0xe3)+_0x3866c2+'\x20Token:',_0x2977f7),saveTokenToFile(_0x2977f7);}else console[_0x251893(0xe2)]('Login\x20failed\x20for\x20'+_0x3866c2+':',_0xb18177[_0x251893(0xe6)]['message']);}catch(_0x1bd586){console[_0x251893(0xe2)](_0x251893(0xdc)+_0x3866c2+_0x251893(0xf0));}}async function registerUser(_0x5b9b3c,_0x319ae6){const _0x5f02ff=_0x42293a;try{const _0x1f565f=await axios[_0x5f02ff(0xcb)]('https://zero-api.kaisar.io/auth/register',{...headers,'email':_0x5b9b3c,'password':_0x319ae6});_0x1f565f[_0x5f02ff(0xe6)]?(console[_0x5f02ff(0xd1)]('Registration\x20successful\x20for\x20'+_0x5b9b3c+':',_0x1f565f[_0x5f02ff(0xe6)]),console[_0x5f02ff(0xd1)](_0x5f02ff(0xcc))):console[_0x5f02ff(0xe2)](_0x5f02ff(0xc9)+_0x5b9b3c+':',_0x1f565f[_0x5f02ff(0xe6)][_0x5f02ff(0xea)]);}catch(_0x5bacca){_0x5bacca['response']?.[_0x5f02ff(0xe6)]?.['error']?.[_0x5f02ff(0xcd)]===0x19a?(console[_0x5f02ff(0xd1)](_0x5f02ff(0xd0)+_0x5b9b3c+_0x5f02ff(0xec)),await loginUser(_0x5b9b3c,_0x319ae6)):console['error'](_0x5f02ff(0xd7)+_0x5b9b3c+_0x5f02ff(0xd5));}}async function processAllUsers(){const _0x42122b=_0x42293a;try{logger(banner,_0x42122b(0xe1));const _0x409fea=fs[_0x42122b(0xf1)](_0x42122b(0xd4),_0x42122b(0xdf))[_0x42122b(0xdb)]('\x0a')[_0x42122b(0xed)](_0x13c577=>_0x13c577[_0x42122b(0xcf)]()!=='');rl['question'](_0x42122b(0xd9),async _0xd2df01=>{const _0x313194=_0x42122b;for(const _0x53f9bc of _0x409fea){await new Promise(_0x1537bb=>setTimeout(_0x1537bb,0x3e8)),await registerUser(_0x53f9bc,_0xd2df01);}rl[_0x313194(0xe4)]();});}catch(_0x101149){console[_0x42122b(0xe2)](_0x42122b(0xca),_0x101149[_0x42122b(0xea)]);}}processAllUsers();
