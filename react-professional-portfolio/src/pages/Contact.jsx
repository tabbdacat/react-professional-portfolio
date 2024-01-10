import { useState } from 'react';

function Contact() {

  const [userName, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleInputChange = (event) => {
    if (event.target.name === 'nameInput') {
      setName(event.target.value);
    } else {
      setEmail(event.target.value);
    }
  }

  const handleAddInput = () => {
    if (userName.trim().length === 0) {
      return alert('Name must be provided');
    }
    if (email.trim().length === 0) {
      return alert('Email must be provided');
    }
  }

  // setName('');
  // setEmail('');

  return (
    <div>
      <h1>Contact Me </h1>
      <div class="mb-3">
        <label className="form-label">Name</label>
        <input
          className="form-control"
          placeholder='Enter your name'
          value={userName}
          name='nameInput'
          onChange={handleInputChange}
        />
      </div>
      <div class="mb-3">
        <label className="form-label">Email Address</label>
        <input
          className="form-control"
          placeholder='Enter your email'
          value={email}
          name='emailInput'
          onChange={handleInputChange}
        />
      </div>
      <div class="mb-3">
        <label className="form-label">Message</label>
        <textarea
          className="form-control"

          placeholder='Enter your message Here'
          value={email}
          name='emailInput'
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

    </div>
  );
}

export default Contact;