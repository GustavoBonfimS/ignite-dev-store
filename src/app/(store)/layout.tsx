import { ReactNode } from "react";

import Header from "@/components/header";

function StoreLayout(props: { children: ReactNode }) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}

export default StoreLayout;
