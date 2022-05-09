var form = document.getElementById("contactForm");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("contactFormStatus");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
          console.log(response);
        if (response.ok) {
          status.innerHTML = "Message Sent Sucessfully";
          status.style.display = "block";
          status.classList.toggle("contact__status--success");
          form.reset()
        } else {
            console.log(response)
          response.json().then(data => {
            status.style.display = "block";
            status.classList.toggle("contact__status--error");
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
            } else {
              status.innerHTML = "Oops! There was a problem sending the message"
            }
          })
        }
      }).catch(error => {
          console.log(error);
        status.style.display = "block";
        status.classList.toggle("contact__status--error");
        status.innerHTML = "Oops! There was a problem sending the message"
      });
    }
    form.addEventListener("submit", handleSubmit)