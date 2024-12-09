// dateRangeActions.ts

import { sendDateRangeApi } from "../../services/apiService";


export const sendDateRangeToAPI = async (startDate: string | null, endDate: string | null) => {
  try {
    const response = await sendDateRangeApi(startDate, endDate);
    console.log("Success:", response);
  } catch (error) {
    console.error("Error:", error);
  }
};