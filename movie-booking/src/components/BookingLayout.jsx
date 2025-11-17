import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import SeatGrid from './SeatGrid';
import Checkout from './Checkout';
import ComboModal from './../modals/ComboModal'; 

export default function BookingLayout() {
  // State để quản lý modal
  const [showComboModal, setShowComboModal] = useState(false);

  // Hàm để đóng/mở modal
  const handleCloseModal = () => setShowComboModal(false);
  const handleShowModal = () => setShowComboModal(true);

  return (
    <div className="bookingMovie" style={{
        backgroundImage: 'url("./bgmovie.jpg")', 
    }}>
        <div className="container-fluid" style={{ position: 'relative', zIndex: 1, backgroundColor: 'rgba(0,0,0,0.7)', minHeight: '100vh' }}>
          <div className="row">
            {/* Cột trái: Lưới ghế */}
            <div className="col-lg-8 col-12 text-center">
              <h1 className="text-warning display-4">ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h1>
              <div className="mt-3 text-light" style={{ fontSize: '25px' }}>Màn hình</div>
              <div className="d-flex justify-content-center mt-2">
                <div className="screen"></div>
              </div>
              <SeatGrid />
            </div>

            {/* Cột phải: Thông tin đặt vé */}
            <div className="col-lg-4 col-12">
              <h2 style={{ fontSize: '35px' }} className="text-light mt-2">DANH SÁCH GHẾ BẠN CHỌN</h2>
              
              <div className="d-grid gap-2 my-3">
                <Button variant="warning" size="lg" onClick={handleShowModal}>
                  Chọn Combo Bắp Nước
                </Button>
              </div>

              <Checkout />
            </div>
          </div>
        </div>

        <ComboModal show={showComboModal} handleClose={handleCloseModal} />
    </div>
  );
}