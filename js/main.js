$(function () {
  $("nav .depth1 > li").hover(
    function () {
      //mouseover
      //   $(this).children().addClass("show");
      $("nav .depth2").addClass("show");
    },
    function () {
      //mouseout
      // $(this).children().removeClass("show");
      $("nav .depth2").removeClass("show");
    }
  );

  //이미지 슬라이더
  let img_num = 0; //이미지 번호
  let img_heigh = 300; //이미지 높이값
  let Intervaltime = 3000; //전환 주기 = 화면보여주는 시간
  setInterval(function () {
    img_num++; //이미지 번호 증가
    if (img_num == 3) {
      img_num = 0; //마지막 이미지면 처음으로
    }
    $(".slider > .sliders").css({
      //이동값 = 이미지번호 x 이미지 높이값
      transform: `translateY(${-img_num * img_heigh}px)`,
    });
  }, Intervaltime);
});
