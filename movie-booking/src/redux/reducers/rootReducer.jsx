import { combineReducers } from 'redux';
import bookingReducer from './bookingReducer';


const rootReducer = combineReducers({
    // Đặt tên cho state của bookingReducer là 'booking'. Khi truy cập state: state.booking.seatList
    booking: bookingReducer,
})

export default rootReducer