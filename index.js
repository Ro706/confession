const messages = document.getElementById("messages"),
      text = document.getElementById("text"),
      submit = document.getElementById("submit");
function send(){
        Email.send({
            SecureToken : "b5b5e45b-2504-488f-be39-162bd933d994",
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
