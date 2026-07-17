import Project from "./components/project";
import StatsSection from "./components/StatsSection";
import WhyUs from "@/components/layout/Main/components/WhyUs";

export default function Main() {
    return (
        <>
            <div className=" w-[100%] lg:w-auto">
                <Project></Project>
                <div className="mt-10">
                    <StatsSection></StatsSection>
                </div>
                <WhyUs></WhyUs>
            </div>
        </>
    );
}