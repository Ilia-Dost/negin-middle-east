import Image from "next/image";
import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main/Main";
import BackToTop from "@/components/Ui/BackToTop ";
export default function Home() {
  return (
    <div className="bg-gray-600">
      <Header></Header>
      <Main></Main>
      <BackToTop></BackToTop>
    </div>
  );
}
