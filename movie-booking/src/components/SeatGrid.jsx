import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  chonGheAction,
  huyChonGheAction,
} from "./../redux/actions/bookingActions";

export default function SeatGrid() {
  const { seatList, selectingSeats } = useSelector((state) => state.booking);

  const dispatch = useDispatch();

  const handleSelectSeat = (ghe) => {
    const isSelecting = selectingSeats.find((item) => item.soGhe === ghe.soGhe);

    if (isSelecting) {
      dispatch(huyChonGheAction(ghe.soGhe));
    } else {
      dispatch(chonGheAction(ghe));
    }
  };

  // Hàm render cho hàng đầu tiên
  const renderFirstRow = (row) => {
    return (
      <div key={row.hang} className="d-flex justify-content-center">
        <span className="rowNumber">{row.hang}</span>
        {row.danhSachGhe.map((ghe) => (
          <button key={ghe.soGhe} className="rowNumber">
            {ghe.soGhe}
          </button>
        ))}
      </div>
    );
  };

  //  Hàm render cho một ghế bất kỳ
  const renderSeat = (ghe, selectingSeats, handleSelectSeat) => {
    const isBooked = ghe.daDat;
    const isSelecting = selectingSeats.find((item) => item.soGhe === ghe.soGhe);

    let cssClass = "ghe";
    if (isBooked) {
      cssClass = "gheDuocChon";
    } else if (isSelecting) {
      cssClass = "gheDangChon";
    }

    return (
      <button
        key={ghe.soGhe}
        className={cssClass}
        disabled={isBooked}
        onClick={() => handleSelectSeat(ghe)}
      >
        {ghe.soGhe.substring(1)}
      </button>
    );
  };

  // Hàm render cho các hàng còn lại
  const renderOtherRow = (row, selectingSeats, handleSelectSeat) => {
    return (
      <div key={row.hang} className="d-flex justify-content-center">
        <span className="rowNumber">{row.hang}</span>
        {row.danhSachGhe.map((ghe) =>
          renderSeat(ghe, selectingSeats, handleSelectSeat)
        )}
      </div>
    );
  };

  // Hàm chính renderSeatRows chỉ chọn đúng hàm con
  const renderSeatRows = () => {
    return seatList.map((row, index) => {
      if (index === 0) {
        return renderFirstRow(row);
      }
      return renderOtherRow(row, selectingSeats, handleSelectSeat);
    });
  };

  return <div className="text-light">{renderSeatRows()}</div>;
}
