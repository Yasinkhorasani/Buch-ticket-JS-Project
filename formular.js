
 let validate = ()=>{
    const name = document.getElementById("name").value;
    const subject = document.getElementById("subject").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    let text;
    
    if(name.length < 5){
      text = "Name ist ungültig !!!";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 5){
      text = " Subject ist ungültig !!!";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Tell-nummer muss nur 10 Zahlen sein !";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Bitte gültige E-Mail-Adresse eingeben !";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 15){
      text = "Bitte mindestens 10 Buchstabe eingeben !" ;
      error_message.innerHTML = text;
      return false;
    }
    alert("Das Formular wurde erfolgreich gesendet !");
    return true;
  }

 document.getElementById("myForm").addEventListener("submit", handleForm);

 function handleForm(event) {
   event.preventDefault();
 
   let myForm = event.target;
   
   let formData = new FormData(myForm);

  //formData.append("time", Date.now())
   for (let key of formData.keys()) {
    console.log(key, formData.get(key));
  }
  
   let url = "http://localhost:3000/";
 
   let request = new Request(url, {
     body: formData,
     method: "POST",
   });
    // myForm.reset();
   fetch(request)
     .then((response) => response.json())
     .then((data) => {
      console.log("Antwort vom Server:", data);
     })
     .catch((error) => {
       console.warn(error);
     });
 }
  //myForm.reset();
  