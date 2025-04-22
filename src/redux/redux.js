import { combineReducers, legacy_createStore } from "redux";
import data from "../assets/data";

// Action 객체 생성

// 장바구니에 음료를 추가하는 액션객체
export const addToCart = (options, quantity, id) => {
  return {
    type: "addToCart",
    payload: { options, quantity, id },
  };
};
// 장바구니에 음료를 제거하는 액션객체
export const removeFromCart = (id) => {
  return {
    type: "removeFromCart",
    payload: { id },
  };
};

// cart 상태 관련 Reducer 함수 생성
const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "addToCart":
      return [...state, action.payload];
    case "removeFromCart":
      return state.filter((el) => action.payload.id !== el.id);
    default:
      return state;
  }
};

// menu 상태 관련 Reducer 함수 생성
const menuReducer = (state = data.menu, ) => {
  return state;
};

// combineReducers를 사용하여 2개의 Reducer를 하나로 합치기
const rootReducer = combineReducers({ cartReducer, menuReducer });

export const store = legacy_createStore(rootReducer);