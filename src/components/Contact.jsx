
import React from 'react';
import "../styles/Contact.css"
import { useForm, ValidationError } from '@formspree/react';


const Contact = () => {
    const [state, handleSubmit] = useForm("mleqprnk");
    if (state.succeeded) {
        return <p style={{ textAlign: 'center', fontSize: 30 }} >Gracias por contactarse!</p>;
    }

    return (
        <div className='container' id='contact'>
            <h1 className='title1'>Contactame</h1>
            <form className='formContainer' name='form' method="POST" onSubmit={handleSubmit}>
                <h1 className='title2' >Envíame un Email</h1>
                <input
                    className='text inputTextStyles'
                    type="text"
                    placeholder='Nombre'
                />

                <input
                    className='text inputTextStyles'
                    id='email'
                    type="email"
                    placeholder='Email'
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <textarea
                    style={{ minHeight: '150px' }}
                    className='text textMultiline inputTextStyles'
                    id='message'
                    name="message"
                    placeholder='Mensaje'
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />

                <button type='submit' disabled={state.submitting} className='btnEnviar'>
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default Contact;
