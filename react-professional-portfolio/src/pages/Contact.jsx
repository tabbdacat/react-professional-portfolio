import { useState } from 'react';

function Contact() {

  const [userName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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

  return (
    <div>
      <h1>Contact Me </h1>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          className="form-control"
          placeholder='Enter your name'
          value={userName}
          name='nameInput'
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email Address</label>
        <input
          className="form-control"
          placeholder='Enter your email'
          value={email}
          name='emailInput'
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea
          className="form-control"

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