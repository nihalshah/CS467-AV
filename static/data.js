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
            console.log(data["images"][0]);
        }
    });

}

function submitDay(day){
    window.location.href = "http://localhost:5000/"+String(day)+"/";
}