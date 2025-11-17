import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import ComboSelector from '../components/ComboSelector.jsx';

// Component này nhận 2 props:
// - show: (true/false) để bật/tắt modal
// - handleClose: hàm để đóng modal
export default function ComboModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered data-bs-theme="dark">
      <Modal.Header 
        closeButton 
        style={{ backgroundColor: '#222', borderBottom: '1px solid #555' }}
      >
        <Modal.Title className="text-warning">
          CHỌN COMBO BẮP NƯỚC
        </Modal.Title>
      </Modal.Header>

      <Modal.Body style={{ backgroundColor: '#333' }}>
        <ComboSelector />
      </Modal.Body>

      <Modal.Footer style={{ backgroundColor: '#222', borderTop: '1px solid #555' }}>
        <Button variant="warning" onClick={handleClose}>
          Xong
        </Button>
      </Modal.Footer>
    </Modal>
  );
}