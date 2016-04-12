/**
 * Created by Nihal on 4/11/16.
 */
function submitTime(day){

    var slider = document.getElementById('slider');
    times = slider.noUiSlider.get();
    $.ajax({
        method:"post",
        url:"/get_images/",
        data:{
            "start":times[0],
            "end":times[1],
            "day":day
        },
        success:function(data){
            create_images(data["images"], day)
        }
    });

}



function create_images(image_list, day){

    image1 = "/static/images/"+String(day)+"/"+String(image_list[0]);
    image2 = "/static/images/"+String(day)+"/"+String(image_list[1]);
    image3 = "/static/images/"+String(day)+"/"+String(image_list[2]);
    image4 = "/static/images/"+String(day)+"/"+String(image_list[3]);
    console.log(image1);
    resemble.outputSettings({
      errorColor: {
          red: 255,
          green: 0,
          blue: 255
      },
      errorType: 'movement',
      transparency: 1.0,
      largeImageThreshold: 1200
    });
    var merge_image = new Image();
    var merge = function(data){
		merge_image.src = data.getImageDataUrl();
		$('#image').html(merge_image);

    };
    var ret = resemble(image1).compareTo(image2).ignoreAntialiasing().onComplete(merge);


}
function submitDay(day){
    window.location.href = "http://localhost:5000/"+String(day)+"/";
}