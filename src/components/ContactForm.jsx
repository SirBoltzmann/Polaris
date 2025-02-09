import './ContactForm.css';


function ContactForm() {
    return(
        <div className="form-container">
            <h1>Send Us a Message!</h1>
            <form action="">
                <input placeholder='Name' type="text" />
                <input placeholder='Email' type="text" />
                <input placeholder='Subject' type="text" />
                <textarea placeholder='Message..' rows='4'></textarea>
                <button>Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm;