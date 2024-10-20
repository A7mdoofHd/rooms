$("style").last().append("\n#users .uzr.aiah1 .fitimg.u-pic {\n  border-radius: 100px !important;\n  margin-top: 2px !important;\n  height: 55px !important;\n  margin-left: -5px !important;\n  width: 55px;\n}\n#users .uzr.aiah1 .d-flex.dots {\n  margin-top: 7px !important;\n  margin-left: 5px;\n}\n#users .uzr.aiah1 .u-msg {\n  text-align: center;\n  -webkit-background-clip: text;\n  padding: 1px !important;\n  font-size: 89% !important;\n  -webkit-text-fill-color: #0000;\n  background-image: url(https://i.ibb.co/JzgnvW8/61.gif);\n  color: transparent !important;\n  background-size: 90% 100%;\n}\n#users .uzr.aiah1 .ustat {\nwidth: 12px !important;\nborder-radius: 0px 50px 50px 50px !important;\nheight: 12px !important;\nmin-height: 0% !important;\nz-index: 0 !important;\n}\n#users .uzr.aiah1 span.uhash {\n  margin-right: 324px;\n  margin-top: 24px;\n  margin-left: 0px;\n}\n#users .uzr.aiah1 img.co {\n  transform: rotate(90deg);\n  margin-top: -60px !important;\n  margin-right: 282px;\n}\n#users .uzr.aiah1 {\n  box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;\n  margin-bottom: 3px !important;\n  margin-top: 2px !important;\n  border-radius: 4px;\n  background-size: cover;\n  border: 1px solid #fff;\n}\n#users .uzr.aiah1 .c-flex.fr {\n  margin-left: -4px!important;\n  float: left;\n}\n#users .uzr.aiah1 .d-flex.fl {\n  padding-right: 0px !important;\n}\n#users .uzr.aiah1 .u-topic {\n  margin-left: 5px;\n}\n#users .uzr.aiah1 .aiah_star1 {\nwidth: 66px;\nmargin-top: -6px;\nheight: 66px;\nmargin-left: -5px;\n}\n\n\n");
var l_itvaiah = setInterval(function () {
  if (myid != null) {
    clearInterval(l_itvaiah);
    $("#users .uzr:contains('تست')").addClass("aiah1");
    $("#users .uzr.aiah1 .fitimg.u-pic").append('<img class="aiah_star1" src="https://up6.cc/2023/02/167579486894821.png">');
    $("#users .uzr.aiah1 .c-flex.fr").after('<div id="my_mood1" class="label label-primary" style=" margin-bottom: 1px; display: inline-block;width: 100%;margin-top: 10px;height: 22px;cursor: pointer;border-radius: 50px;padding: 0px;background-image: linear-gradient(-225deg, #000 0%, #000 29%, #660404 67%, #000 100%);" href="https://www.3trr.com/">إدارة شآإت عــطر</div>');
    $("#users .uzr.aiah1 span.u-topic").after('<img id="mystory1" class="My_vedio1" title="ستوري" style="float: right;width: 20px;margin-top: 0px;margin-right: 5px;cursor: pointer;" src="https://i.ibb.co/47VS4nY/image.png">');
    $("#users .uzr.aiah1 span.uhash, #users .uzr.aiah1 img.co").hide();
    $("#upro").before('<div id="movon1" onclick="$(this).hide().html(``);" class="moveon1" style="display:none;width:100%;height:100%;z-index:999999;position: fixed;left: 0px;top: 0px;background-color: rgba(0, 0, 0, 0.6);">');
    $("div#users .uzr.aiah1 .My_vedio1").click(function () {
      $("#movon1").show();
      $("#movon1").addClass("athb1");
      $("#movon1").before('<div class="modal-dialog fr break" style="height: 338px; max-width: 340px; min-width: 300px; min-height: 599px;overflow: visible;margin-top:40px;"></div>');
      $("#movon1").append('<div style="max-width: 340px; min-width: 300px; color:white; width: 338px; float: right;" class="modal-header label-primary"><span class="pull-right clickable badge"><i class="fa fa-times"></i></span><label style="margin:1px; float: right;" > My vedio </label></div>');
      $("#movon1").append('<iframe id="ifr_mov1" style="max-width: 340px;min-width: 300px;right: 0; top: 35px; left: auto;" class="modal in" role="dialog" style="z-index: 2100; display: none; style="max-width:240px;" src="https://www.youtube.com/embed/xPujFVqw43c" allowfullscreen="" width="338" height="490" frameborder="0"></iframe>');
      $("#ifr_mov1").show(function () {
        $("#upro").modal("hide");
      });
    });
  }
}, 1e4);
