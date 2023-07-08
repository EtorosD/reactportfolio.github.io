import "./contact.css"
import phone from "../../images/phone-call.png"
import email from "../../images/email.png"
import address from "../../images/map.png"
import { useContext, useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from "../../context"


const Contact = () => {
  const formRef = useRef()
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  const emailSent = () => {
    toast.success("Email Sent")
  }
  const [done, setDone] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
    .sendForm(
      'service_vqkht8e', 
      'template_nzlibzo', 
      formRef.current, 
      'op_ZIOE9aRrGqQe4Y')
      .then((result) => {
          console.log(result.text);
          setDone(true)
          formRef.current.reset();
      }, (error) => {
          console.log(error.text);
      });
    
  }

  return (
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
              <h1 className="c-title">For Inquiry</h1>
              <div className="c-info">
                <div className="c-info-item">
                  <img
                    src={phone}
                    alt="phone"
                    className="c-icon"
                  />
                  +63 995 6694 967
                </div>
                <div className="c-info-item">
                  <img
                    src={email}
                    alt="email"
                    className="c-icon"
                  />
                  etorosd@gmail.com
                </div>
                <div className="c-info-item">
                  <img
                    src={address}
                    alt="address"
                    className="c-icon"
                  />
                  Toril Davao City Philippines
                </div>
              </div>
            </div>
            <div className="c-right">
              <p className="c-desc">
                <b>Why you should hire me?</b> I'm an aspirant full-stack web developer that is eager to grow and help you with your business.
              </p>
              <form ref={formRef} onSubmit={handleSubmit}>
                <input style={{backgroundColor: darkMode && "#333"}}type="text" placeholder="Name" name="user_name"/>
                <input style={{backgroundColor: darkMode && "#333"}}type="text" placeholder="Subject" name="user_subject"/>
                <input style={{backgroundColor: darkMode && "#333"}}type="text" placeholder="Email" name="user_email"/>
                <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message"/>
                <button onClick={emailSent}>Submit</button>
                <ToastContainer
                  position={"top-center"}
                />
                {done}
              </form>
            </div>
        </div>
    </div>
  )
}

export default Contact