import { Metadata } from "next";
import Navigation from "../components/navigation";

export const metadata: Metadata = {
  title: "Not Found",
};

const NotFound = () => {
  return (
    <div>
      <div>페이지를 찾을 수 없습니다</div>
      <Navigation></Navigation>
    </div>
  );
};

export default NotFound;
