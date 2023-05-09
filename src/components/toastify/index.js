import { toast } from "react-toastify";

export const successToaster = (message, timeOut) => {
  timeOut = timeOut ? timeOut : 1000;
  return toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 1000,
  });
};

export const errorToaster = (message, timeOut) => {
  timeOut = timeOut ? timeOut : 1000;
  return toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: timeOut,
  });
};

export const warningToaster = (message) => {
  return toast.warn(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
};
