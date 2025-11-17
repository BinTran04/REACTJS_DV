import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { huyChonGheAction, tangGiamComboAction } from '../redux/actions/bookingActions';

export default function Checkout() {
  const { selectingSeats, selectedCombos } = useSelector((state) => state.booking);
  const dispatch = useDispatch();

  const totalSeats = selectingSeats.reduce((sum, ghe) => {
    return sum + ghe.gia;
  }, 0);

  const totalCombos = selectedCombos.reduce((sum, combo) => {
    return sum + (combo.price * combo.quantity);
  }, 0);

  const total = totalSeats + totalCombos;

  return (
    <div className="mt-4">
      <div>
        <button className="gheDuocChon" style={{ marginLeft: 0 }}></button>
        <span className="text-light" style={{ fontSize: '25px' }}> Ghế đã đặt</span>
      </div>
      <div className="my-2">
        <button className="gheDangChon" style={{ marginLeft: 0 }}></button>
        <span className="text-light" style={{ fontSize: '25px' }}> Ghế đang chọn</span>
      </div>    
      <div>
        <button className="ghe" style={{ marginLeft: 0 }}></button>
        <span className="text-light" style={{ fontSize: '25px' }}> Ghế chưa đặt</span>
      </div>

      <h3 className="text-warning mt-3">HÓA ĐƠN CỦA BẠN</h3>
      <table className="table mt-3" border="2">
        <thead>
          <tr className="text-light" style={{ fontSize: '25px' }}>
            <th>Chi tiết</th>
            <th>Số lượng</th>
            <th>Giá</th>
            <th>Hủy</th>
          </tr>
        </thead>
        <tbody className="text-warning">
          {selectingSeats.map((ghe) => (
            <tr key={ghe.soGhe}>
              <td>{`Ghế ${ghe.soGhe}`}</td>
              <td>1</td>
              <td>{ghe.gia.toLocaleString()} VND</td>
              <td>
                <button 
                  className="btn btn-danger"
                  onClick={() => dispatch(huyChonGheAction(ghe.soGhe))}
                >
                  X
                </button>
              </td>
            </tr>
          ))}

          {selectedCombos.map((combo) => (
            <tr key={combo.id}>
              <td>{combo.name}</td>
              <td>{combo.quantity}</td>
              <td>{(combo.price * combo.quantity).toLocaleString()} VND</td>
              <td>
                <button 
                  className="btn btn-danger"
                  onClick={() => dispatch(tangGiamComboAction(combo.id, -combo.quantity))}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="text-warning" style={{ fontSize: '22px' }}>
            <td colSpan="2">Tổng tiền</td>
            <td colSpan="2">{total.toLocaleString()} VND</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}