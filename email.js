function sendEmail() {
    let params = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        phone : document.getElementById('phone').value,
        message : document.getElementById('message').value,

    };

const servId = "service_a1kouu7";
const tempid= "template_jhqwy1w";

emailjs.send(servId,tempid,params)
.then(res => {
    document.getElementById('name').value ="";
    document.getElementById('email').value ="";
    document.getElementById('phone').value ="";
    document.getElementById('message').value ="";
    console.log(res);
    alert("message send successfully!")
})
.catch((error)=> console.log(error));
}

