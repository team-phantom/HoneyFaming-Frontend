window.onload = function () {
    var arModal = document.getElementById('arModal');
    var arImageBtn = document.getElementById("arImageBtn");
    var span = document.getElementsByClassName("close")[0];
    var shippingOption = document.getElementsByClassName("shippingOption");

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
    shippingOption.onclick = function(){
        shippingOption.classList.add('on');
    }
    

}