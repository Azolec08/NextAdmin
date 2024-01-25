"use client";

import { authenTicate } from "@/lib/actions";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenTicate, undefined);
  return (
    <div
      className="w-full min-h-screen flex items-center justify-center
    "
    >
      <form
        action={formAction}
        className="flex flex-col items-center  gap-y-4 bg-gray-600  p-4
        h-[275px]
        "
      >
        <h1 className="font-bold">Login</h1>
        <input
          type="text"
          placeholder="username"
          name="username"
          className="p-3 bg-slate-900 rounded-sm"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className="p-3 bg-slate-900 rounded-sm "
        />
        <button type="submit" className="p-2 bg-blue-600 w-full rounded-sm">
          Login
        </button>
        <span>{state && state}</span>
      </form>
    </div>
  );
};

export default LoginForm;
