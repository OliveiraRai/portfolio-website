function sendEmail(){
    var params = {
        full_name : document.getElementById("CTname").value,
        email_id : document.getElementById("CTemail").value,
        message : document.getElementById("CTmessage").value
    }
    emailjs.send("service_bedlslm", "template_g51fgoe", params).then(function(res){
        alert("Success!" + res.status);        
    })
}