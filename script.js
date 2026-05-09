async function submitForm() {
        const fname = document.getElementById('fname').value;
        const lname = document.getElementById('lname').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const cemetery = document.getElementById('cemetery').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;

        if (!fname || !phone) { 
            alert('Please enter your name and phone number.'); 
            return; 
        }

        const btn = document.querySelector('.btn-submit');
        btn.textContent = 'Sending...';
        btn.disabled = true;

        const contactName = fname + ' ' + lname;
        const fullMessage = `Service Requested: ${service}\nCemetery: ${cemetery}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`;

        try {
            const url = `http://api.getkrowd.com/v3/sendEmail/index.cfm?companyId=1108&apiKey=krwd_6266ab2a25fffaa3fa706090773182f7b1bcb5c261e54c7c87fa60eaf99&to=Desirraaax15@aol.com&contactName=${encodeURIComponent(contactName)}&contactPhone=${encodeURIComponent(phone)}&contactEmail=${encodeURIComponent(email)}&message=${encodeURIComponent(fullMessage)}`;
            
            await fetch(url, { method: 'GET', mode: 'no-cors' });
        } catch(e) {
            // continue to show thank you regardless
        }

        document.getElementById('contact-form').style.display = 'none';
        document.getElementById('thank-you').style.display = 'block';
    }

AOS.init({ duration:700, once:true, offset:60 });
  function submitForm() {
    const fname = document.getElementById('fname').value;
    const phone = document.getElementById('phone').value;
    if (!fname || !phone) { alert('Please enter your name and phone number.'); return; }
    document.getElementById('contact-form').style.display = 'none';
    document.getElementById('thank-you').style.display = 'block';
  }