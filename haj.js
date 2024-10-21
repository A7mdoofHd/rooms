const shbl_str_users = [{dec: "تست", cls: "milaco_str", icon: "https://up6.cc/2023/04/168133037492731.png"}];
setInterval(() => {
  shbl_str_users.forEach(function (_0xa7987b) {
    const _0x260e3c = $("#d2 .uzr .uzr > div:first-child:contains('" + _0xa7987b.dec + "')");
    if (_0x260e3c.length) {
      _0x260e3c.each(function (_0x4b072d, _0x3f84a1) {
        const _0x4307dc = $(_0x3f84a1).parent().parent();
        if (!_0x4307dc || _0x4307dc.hasClass(_0xa7987b.cls)) {
          return;
        }
        _0x4307dc.addClass(_0xa7987b.cls);
        _0x4307dc.find(".fitimg.u-pic").append('<img style="max-width: 77px; margin-top: -12px; margin-left: -14px;" class="itar_shbl" title="?????" src="' + _0xa7987b.icon + '">');
      });
    }
  });
}, 100);
$("style").last().append("
#d2 .uzr.milaco_str .u-topic {\n-webkit-text-fill-color: #0000;}
#d2 .uzr.milaco_str .fitimg.u-pic {
     height: 52px !important;
     border-radius: 100px; !important; 
     margin-bottom: 3px !important;
     margin-top: 1px !important;
     box-shadow:inset 0 0 0 rgba(0,0,0,.08),0 0 6px #000;
     filter: hue-rotate(360deg);
     box-shadow: 0 0 0px rgb(0 0 0), inset 0 0 4px rgb(0 0 0), 0 0 0 0px #000;
     }
 #d2 .uzr.milaco_str .u-msg.break {
        margin-left: 5px !important;
        -webkit-background-clip: text;
         -webkit-text-fill-color: #0000;
          background-image: linear-gradient(-225deg,#000 0%,#353535 29%,#f00 67%,#000 100%);
          padding: 0px !important;\n  font-size: 100% !important;
          background-size: cover;
    }
 #d2 .uzr.milaco_str .itar_shbl {
             width: 94px;
              height: 94px;
                margin-top: -40px;
                cursor: pointer;
                margin-left: -55px;
    }
#d2 .uzr.d-flex.mm.milaco_str {
  border-radius: 0px 10px 0px 10px;
    }
#d2 .uzr.d-flex.mm.hmsg.milaco_str {
  background-image: url(https://up6.cc/2023/03/16794923829062.png);
  background-size: 100%;
  border: 1px solid #fff;
  box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
  background-color: #16202a00 !important;
  border-radius:  0px 0 0px;
}#d2 .uzr.d-flex.mm.pmsgc.milaco_str {
  background-image: url(https://up6.cc/2023/03/16794923829062.png);
  background-size: 100%;
  border: 1px solid #fff;
  box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
   margin-bottom: 3px !important;
   margin-top: 2px !important;
    background-color: #16202a00 !important;
  }
    #room .uzr.milaco_str .btn-primary {
      border-radius:  0px 10px 0px 10px!important;
      box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 1px #000;
      border: 1px solid #fff;
      background-image: url(https://up6.cc/2023/03/16794923829062.png);
      background-size: cover;
      color: #484848;
      font-size: 14px !important;
      -webkit-text-fill-color: #000;
      margin-left: 4px!important;
    }
      
      ");
