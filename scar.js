
const room_str_users = [{dec: "` 𝒔𝒌𝒚𝒄𝒐𝒍𝒐𝒓 ••, cls: "askim_str", icon: "https://up6.cc/2023/04/168133037492731.png"}];
function _0x37c8(_0x56a025, _0xf481cb) {
  const _0x384397 = _0x3843();
  _0x37c8 = function (_0x37c88b, _0x130b00) {
    _0x37c88b = _0x37c88b - 329;
    let _0x24ce84 = _0x384397[_0x37c88b];
    return _0x24ce84;
  };
  return _0x37c8(_0x56a025, _0xf481cb);
}
setInterval(() => {
  room_str_users.forEach(function (_0x3eebf3) {
    const _0x292db5 = $("#d2 .uzr:contains('" + _0x3eebf3.dec + "').mm");
    if (_0x292db5.length) {
      _0x292db5.each(function (_0x23a4c2, _0x3c2c9a) {
        if ($(_0x3c2c9a).hasClass(_0x3eebf3.cls)) {
          return;
        }
        $(_0x3c2c9a).addClass(_0x3eebf3.cls);
        $(_0x3c2c9a).find(".fitimg.u-pic").append('<img style="max-width: 77px; margin-top: -12px; margin-left: -14px;" class="itar_shbl" title="اطاري" src="' + _0x3eebf3.icon + '">');
      });
    }
  });
}, 100);
$("style").last().append("\n\n\n#d2 .uzr.askim_str span.nosel.u-topic.dots.hand{\n          \nmargin-left: 8px !important;\n \n color: #000000!important;\n\n background-image: url();\n\n	background-size: cover;\n  padding: 0px !important;\n  font-size: 100% !important;\n	\n\n    }\n\n\n    #d2 .uzr.askim_str .fitimg.u-pic {\n        height: 52px !important;border-radius: 100px!important;;margin-bottom: 10px !important;margin-top: 8px !important;\nborder: 1px solid #fff;\nmargin-left: 3px!important;\nbox-shadow: 0 0 5px rgb(255, 255, 255), inset 0 0 3px rgb(0, 0, 0), 0 0 0 0px #000000;\n\n    }\n    #d2 .uzr.askim_str .u-msg.break {\n          \nmargin-left: 8px !important;\n  margin-top: 2px !important;\n\n  color: #000000!important;\n\n background-image: url();\n\n	background-size: cover;\n\n\n  padding: 0px !important;\n  font-size: 100% !important;\n	\n\n    }\n    #d2 .uzr.d-flex.mm.askim_str {\n      \n  border-radius: 0px 5px 0px 5px;\n   \n  box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 5px #000;\n  margin-bottom: 3px !important;\n  margin-top: 2px !important;\n  border: 1px solid #fff;\n\n background-image: url(https://up6.cc/2024/10/17293954871952.png);background-size: 100%;");
