 document.getElementById("contactForm").addEventListener("submit", function (e) 
    { e.preventDefault(); 
        const name = document.getElementById("name").value; 
        const email = document.getElementById("email").value; 
        const message = document.getElementById("message").value;
  
  if (!email.includes("@")) 
    { document.getElementById("formResponse").textContent = "Please enter a valid email address.";
         return; }
  
  document.getElementById("formResponse").textContent = Thanks, ${name}. Your message has been sent!;
     document.getElementById("contactForm").reset();
             });
  