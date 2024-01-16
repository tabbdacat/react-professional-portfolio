import { useState } from 'react';

function Contact() {

  const [userName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [ userNameError, setUserNameError ] = useState(false);
  const [ emailError, setEmailError ] = useState({error : false, message : ''});
  const [ messageError, setMessageError ] = useState(false);

      // assign inputs to variables
  const handleInputChange = (event) => {
    if (event.target.name === 'nameInput') {
      setName(event.target.value);
    } else if (event.target.name === 'messageInput') {
      setMessage(event.target.value);
    } else {
      setEmail(event.target.value);
    }
  }



  // if no input after being clicked on, display alert to user
  const handleAddInput = () => {
    if (userName.trim().length === 0) {
      return alert('Name must be provided');
    }
    if (email.trim().length === 0) {
      return alert('Email must be provided');
    }
    if (message.trim().length === 0) {
      return alert('A message must be provided');
    }
  }

// when form submitted, prevent page reload and alert user of email sent
const handleSubmit = (event) => {
  event.preventDefault();
  alert(`Message Submitted!`)
}






  // setName('');
  // setEmail('');

const validateEmail = (event) => {
  if (event.target.value.length === 0) {
    setEmailError({
      error : true, 
      message: 'Email is required'
    })
    return
  }
  const regex = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)
  if (!regex.test(event.target.value) ) {
    setEmailError({
      error : true, 
      message: 'Invalid email'
    })
    return
  }
}

  return (
    <div>
      <h1>Contact Me </h1>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          className="form-control"
          onBlur={() => userName.length === 0? setUserNameError(true) : setUserNameError(false)}
          onFocus={() => setUserNameError(false)}
          placeholder='Enter your name'
          value={userName}
          name='nameInput'
          onChange={handleInputChange}
        />
        {userNameError && <p>Name is required</p>} 
      </div>
      <div className="mb-3">
        <label className="form-label">Email Address</label>
        <input
          className="form-control"
          onBlur={validateEmail}
          onFocus={() => setEmailError({error : false, message : ''})}
          placeholder='Enter your email'
          value={email}
          name='emailInput'
          onChange={handleInputChange}
        />
         {emailError.error && <p>{emailError.message}</p>}        
      </div>
      <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea
          className="form-control"
          onBlur={handleAddInput}
          placeholder='Enter your message Here'
          value={message}
          name='messageInput'
          rows="5"
          onChange={handleInputChange}
        />
      </div>
      <button
        onClick={handleAddInput}
        className="btn btn-primary"
      >
        Submit
      </button>
      </form>

    </div>
  );
}

export default Contact;