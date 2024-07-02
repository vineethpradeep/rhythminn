import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ email, password, fullName }) =>
      signupApi({ email, password, fullName }),
    onSuccess: (user) => {
      toast.success(
        "User account is successfully created, please verify the new user's email address "
      );
    },
    onError: (err) => {
      console.log(err);
      toast.error("err");
    },
  });
  return { signup, isLoading };
}
