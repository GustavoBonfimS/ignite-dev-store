import { ReactNode } from "react";

import Header from "@/components/header";

function StoreLayout(props: { children: ReactNode }) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-[min-content_max-content] gap-5 p-8">
      <Header />
      {props.children}
    </div>
  );
}

export default StoreLayout;
