export const BASE_URL = import.meta.env.VITE_API_URL;

export const urlBannerInfo = new URL(`${BASE_URL}/data/rata`);

export const urlGraphSuhu = new URL(`${BASE_URL}/data/suhu`);

export const urlGraphKelembaban = new URL(`${BASE_URL}/data/kelembaban`);

export const urlHistory = new URL(`${BASE_URL}/data/history`);

export const urlIndicatorStatus = new URL(`${BASE_URL}/data/status`);

export const urlSwitchControlFan = new URL(`${BASE_URL}/controll/fan`);

export const urlSwitchControlPump = new URL(`${BASE_URL}/controll/pump`);

export const urlSwitchMode = new URL(`${BASE_URL}/setPointsM`);

export const urlSwitchScheduleMode = new URL(`${BASE_URL}/mode/controll`);

export const urlSwitchSchedule = new URL(`${BASE_URL}/ScheduleMode`);
