import type { NextPage } from "next";

const forms: NextPage = () => {
  return (
    <form className={"flex flex-col space-y-2 p-5"}>
      <input type={"text"} required placeholder={"Username"} className={"border p-1 peer border-gray-400 rounded-md"}/>
      <span className={"hidden peer-invalid:block text-red-500"}>This input is invalid</span>
      <span className={"hidden peer-valid:block text-teal-500"}>Awesome username</span>
      <span className={"hidden peer-hover:block text-amber-500"}>Hello</span>
      <input type={"submit"} value={"Login"} className={"bg-white"}/>
    </form>
  );
};

export default forms;