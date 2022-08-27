import type { NextPage } from "next";
import Layout from "@components/layout";
import Input from "@components/input";
import TextArea from "@components/textarea";
import Button from "@components/button";

const Create: NextPage = () => {
  return (
    <Layout canGoBack title={"라이브 스트리밍 생성"}>
      <form className="space-y-4 py-10 px-4">
        <Input required label={"Name"} name={"name"} type={"text"} />
        <Input required label={"Price"} name={"price"} placeholder={"0.00"} type={"text"} kind={"price"} />
        <TextArea name={"description"} label={"Description"} />
        <Button text={"Go live"} />
      </form>
    </Layout>
  );
};

export default Create;