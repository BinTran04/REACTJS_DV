import {
  CHON_GHE,
  HUY_CHON_GHE,
  TANG_GIAM_COMBO,
} from "../constants/bookingConstants";
import seatData from "../../assets/data/danhSachGhe.json";

const comboData = [
  {
    id: "combo1",
    name: "Combo Bắp Nước",
    price: 99000,
    description: "1 Bắp Lớn + 1 Nước Lớn",
  },
  {
    id: "combo2",
    name: "Combo Couple",
    price: 179000,
    description: "2 Bắp Lớn + 2 Nước Lớn",
  },
  {
    id: "combo3",
    name: "Bắp Rang Lớn",
    price: 55000,
    description: "Bắp rang (Phô mai/Caramel)",
  },
  {
    id: "combo4",
    name: "Nước Ngọt (L)",
    price: 35000,
    description: "Coca/Pepsi/7Up",
  },
];

// Khởi tạo state ban đầu
const initialState = {
  seatList: seatData, // Mảng chứa toàn bộ dữ liệu ghế
  selectingSeats: [], // Mảng chứa các ghế đang được chọn
  comboList: comboData, // Danh sách combo có sẵn
  selectedCombos: [], // Combo người dùng đang chọn
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHON_GHE: {

      // Thêm ghế được chọn vào mảng selectingSeats
      const newSelectingSeats = [...state.selectingSeats, action.payload];
      return { ...state, selectingSeats: newSelectingSeats };
    }

    case HUY_CHON_GHE: {
      
      // Lọc ra (xóa) ghế bị hủy khỏi mảng selectingSeats
      const newSelectingSeats = state.selectingSeats.filter(
        (ghe) => ghe.soGhe !== action.payload
      );
      return { ...state, selectingSeats: newSelectingSeats };
    }

    case TANG_GIAM_COMBO: {
      const { id, delta } = action.payload;
      let newSelectedCombos = [...state.selectedCombos];

      // Tìm xem combo đã có trong giỏ hàng chưa
      const comboIndex = newSelectedCombos.findIndex(
        (combo) => combo.id === id
      );

      if (comboIndex !== -1) {
        // Nếu đã có, cập nhật số lượng
        const existingCombo = newSelectedCombos[comboIndex];
        const newQuantity = existingCombo.quantity + delta;

        if (newQuantity <= 0) {
          // Nếu số lượng <= 0, xóa khỏi giỏ hàng
          newSelectedCombos.splice(comboIndex, 1);
        } else {
          // Cập nhật số lượng mới
          newSelectedCombos[comboIndex] = {
            ...existingCombo,
            quantity: newQuantity,
          };
        }
      } else if (delta > 0) {
        // Nếu chưa có và delta > 0, thêm vào giỏ hàng với số lượng là 1
        const newCombo = state.comboList.find((combo) => combo.id === id);
        if (newCombo) {
          newSelectedCombos.push({ ...newCombo, quantity: 1 });
        }
      }
      return { ...state, selectedCombos: newSelectedCombos };
    }

    default:
      return state;
  }
};

export default bookingReducer;
