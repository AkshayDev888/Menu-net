import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getMenus = async () => axios.get(`${API_URL}/menus`);
export const createMenu = async (menu) => axios.post(`${API_URL}/menus`, menu);
export const getMenuItems = async (menuId) => axios.get(`${API_URL}/menus/${menuId}/items`);
export const addMenuItem = async (menuId, item) => axios.post(`${API_URL}/menus/${menuId}/items`, item);
