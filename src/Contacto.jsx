import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contacto() {
      const form = useRef();
        const enviarCorreo = (e) => {
                e.preventDefault();
                    emailjs.sendForm('service_7d9iwjt', 'template_7opis4g', form.current, 'S3zl_xRI3muLk3Fm3')
                .then(() => alert('¡Mensaje enviado!'))
      .catch(() => alert('Error al enviar'));
  };

    return (
    <div style={{ display: "flex", gap: "50px", padding: "20px" }}>

    <form ref={form} onSubmit={enviarCorreo} style={{ display: "flex", flexDirection: "column", width: "300px" }}>
                <h2>Contacto</h2>
        <input type="hidden" name="title" value="Mensaje desde la web" />
        <input type="text" name="name" placeholder="Tu nombre" required />
        <input type="email" name="email" placeholder="Tu correo" required />
                <textarea name="message" placeholder="Tu mensaje" required rows="5" style={{ marginTop: "10px" }}></textarea>
        <button type="submit" style={{ marginTop: "10px", padding: "10px" }}>Enviar Mensaje</button>
      </form>

               <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28934.487263527157!2d-65.42836182028882!3d-24.782131208513754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3969662a87d%3A0x63fbb21bae3a0d2b!2sSalta!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar" 
        width="400" 
        height="400" 
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy">
      </iframe>
          </div>
  );
}

export default Contacto;