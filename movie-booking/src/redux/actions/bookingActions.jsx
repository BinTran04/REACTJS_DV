import { CHON_GHE, HUY_CHON_GHE, TANG_GIAM_COMBO } from "../constants/bookingConstants";

// Action creator cho việc chọn ghế
export const chonGheAction = (ghe) => ({
    type: CHON_GHE,
    payload: ghe, // Dữ liệu gửi đi là object ghế
});

// Action creator cho việc hủy chọn ghế
export const huyChonGheAction = (soGhe) => ({
    type: HUY_CHON_GHE,
    payload: soGhe, // Dữ liệu gửi đi là số ghế (string)
});

// Action creator mới cho việc tăng/giảm số lượng combo
export const tangGiamComboAction = (id, delta) => ({
    type: TANG_GIAM_COMBO,
    payload: {id, delta},
});