import {NextPage} from "next";
import Layout from "../../components/layout";
import Link from "next/link";
import FloatingButton from "../../components/floating-button";

const Live: NextPage = () => {
  return (
    <Layout title={"라이브"} hasTabBar>
      <div className={"divide-y-[1px] space-y-4"}>
        {[1, 2, 3, 4, 5, 6, 7].map((_, i) => (
          <Link key={i} href={`/live/${i}`}>
            <a className={"pt-4 px-4 block"}>
              <div className={"w-full rounded-md shadow-sm bg-slate-300 aspect-video"} />
              <h1 className={"text-2xl mt-2 font-bold text-gray-900"}>
                Galaxy S50
              </h1>
            </a>
          </Link>
        ))}

        <FloatingButton href={"/live/create"}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Live;