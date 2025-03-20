import Swal from "sweetalert2";
 
export type TResError = {
  data?: {
    message?: string;
  };
  message?: string;
  error?: string;
};
 
export const successAlert = ({
  message,
  timer,
}: {
  message: string;
  timer?: number;
}) => {
  Swal.fire({
    // icon: "success",
    title: "Success",
    text: message,
    showConfirmButton: true,
    timer: timer,
  });
};
export const errorAlert = ({
  error,
  icon,
}: {
  error: TResError;
  icon?: string;
}) => {
  Swal.fire({
    icon: "error",
    title: "Failed!!",
    text:
      error?.data?.message ||
      error?.message ||
      //  error?.error?.slice(10) ||
      "Something went wrong. Please try again later.",
  });
};