import { useState } from "react";
import { useAuth } from "../../hooks/use-auth";
import LoginButton from "./LoginButton";
import LoginInput from "./LoginInput";
import { toast } from "react-toastify";

export default function LoginForm() {
  const [input, setInput] = useState({
    emailOrMobile: "",
    password: "",
  });
  const { login } = useAuth();
  const handleSubmitForm = (e) => {
    e.preventDefault();
    login(input).catch(err => {
      toast.error(err.response.data.message)
    })
    console.log(input);
    login(input);
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmitForm}>
      <LoginInput
        placeholder="Email address or phone number"
        value={input.emailOrMobile}
        onChange={(e) => setInput({ ...input, emailOrMobile: e.target.value })}
      />

      <LoginInput
        type="password"
        placeholder="password"
        value={input.password}
        onChange={(e) => setInput({ ...input, password: e.target.value })}
      />

      <LoginButton />
    </form>
  );
}
