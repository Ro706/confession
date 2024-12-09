const messages = document.getElementById("messages"),
      text = document.getElementById("text"),
      submit = document.getElementById("submit");
function send(){
        Email.send({
            SecureToken : "faff5887-4432-4fb3-9532-a0014eb2639a",
            To : 'symbinagpur@gmail.com',
            From : "fridayro706@gmail.com",
            Subject : "confession",
            Body : text.value
        }).then(
          message => alert(message+".....")
        );
        text.value= "";
}
submit.addEventListener("click",send);
