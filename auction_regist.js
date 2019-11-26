window.onload = function () {
    var arModal = document.getElementById('arModal');
    var arImageBtn = document.getElementById("arImageBtn");
    var span = document.getElementsByClassName("close")[0];

    arImageBtn.onclick = function () {
        arModal.style.display = "block";
    }
    span.onclick = function () {
        arModal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == arModal) {
            arModal.style.display = "none";
        }
    }
    

}

$(".shippingOption").click(function(e){
    var se = $(e.target);
    console.log(se.children);
    se.css('color', 'white');
    se.css('background', '#ffd600');

    $(e.target).siblings().css('color', 'b3b3b3');
    $(e.target).siblings().css('backgrond', 'white');
})

function upload(n){
    document.getElementById('file_upload').value = n;
}