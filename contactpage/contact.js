document.addEventListener('DOMContentLoaded', function(){
  
  document.querySelectorAll('.acc-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.nextElementSibling;
      const open = panel.style.display === 'block';
      document.querySelectorAll('.acc-panel').forEach(p => p.style.display = 'none');
      if(!open) panel.style.display = 'block';
    });
  });

  
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMsg');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name') || '';
    const email = data.get('email') || '';
    if(!name.trim() || !email.trim()){
      msg.textContent = 'Please fill required fields.';
      msg.style.color = 'crimson';
      return;
    }
    
    msg.style.color = 'green';
    msg.textContent = 'Sending...';
    setTimeout(()=>{
      msg.textContent = 'Message sent. We will contact you soon.';
      form.reset();
    },900);
  });
});
