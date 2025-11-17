import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tangGiamComboAction } from '../redux/actions/bookingActions';

export default function ComboSelector() {
  const { comboList, selectedCombos } = useSelector((state) => state.booking);
  const dispatch = useDispatch();

  const getQuantity = (comboId) => {
    const combo = selectedCombos.find(item => item.id === comboId);
    return combo ? combo.quantity : 0;
  };

  return (
    <div className="mt-1 text-light"> 
      {comboList.map(combo => (
        <div 
          key={combo.id} 
          className="d-flex justify-content-between align-items-center p-2 my-2"
          style={{ border: '1px solid #555', borderRadius: '5px' }}
        >
          {/* Thông tin combo */}
          <div style={{ flex: 1 }}>
            <h5 className="text-warning mb-0">{combo.name}</h5>
            <p className="mb-0" style={{ fontSize: '14px' }}>{combo.description}</p>
            <p className="mb-0 text-light">{combo.price.toLocaleString()} VND</p>
          </div>

          {/* Bộ đếm tăng giảm */}
          <div className="d-flex align-items-center">
            <button 
              className="btn btn-outline-warning" 
              style={{ width: '35px', height: '35px', lineHeight: '1' }}
              onClick={() => dispatch(tangGiamComboAction(combo.id, -1))}
            >
              -
            </button>
            <span className="mx-2 text-light" style={{ fontSize: '20px' }}>
              {getQuantity(combo.id)}
            </span>
            <button 
              className="btn btn-outline-warning" 
              style={{ width: '35px', height: '35px', lineHeight: '1' }}
              onClick={() => dispatch(tangGiamComboAction(combo.id, 1))}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}