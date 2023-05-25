import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const MyComponent = () => {
    const { user } = useSelector((state) => ({ ...state.auth }));

  const [show, setShow] = useState(true);

  useEffect(() => {
    // Check if the modal should be shown or hidden based on the flag in the browser storage
    const modalDismissed = localStorage.getItem('modalDismissed');
    if (modalDismissed === 'true') {
      setShow(false);
    }
  }, []);

  const handleClose = () => {
    // Update the flag in the browser storage to indicate that the modal has been dismissed
    localStorage.setItem('modalDismissed', 'true');
    setShow(false);
  };

  return (
    <div>
      {user?.result?.isComplete === true && user?.result?.status === false && (
        <div style={{ paddingTop: '3rem' }}>
          <Modal
            style={{
              paddingTop: '9rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header>
              <Modal.Title>Some random notification</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h6>Your Account is Active. Click "Okay" to start</h6>
              <div></div>
              <Button
                onClick={handleClose}
                style={{ marginLeft: '10rem', marginTop: '2rem' }}
                className="btn"
              >
                Okay
              </Button>
            </Modal.Body>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default MyComponent;