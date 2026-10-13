import { useState } from "react";

interface FranchiseOffer {
    icon: React.ReactNode;
    title: string;
    content: string;
}

type FranchiseStep = {
    title: string;
    step: string;
    requirements?: string[];
};

const FranchiseOfferCard = ({ icon, title, content }: FranchiseOffer) => {
    return (
        <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-25 h-25 rounded-full bg-white text-6xl z-10">
                {icon}
            </div>

            <div className="flex flex-col items-center gap-y-4 w-90 h-80 bg-white rounded-lg -mt-12 pt-16 pb-4 px-4">
                <h4 className="text-center">{title}</h4>
                <span className="text-gray-900 text-md text-center">{content}</span>
            </div>
        </div>
    )

}


const FranchiseStepsCard = ({ franchiseSteps }: { franchiseSteps: FranchiseStep[] }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (

        <div className="grid grid-cols-[auto_1fr] sm:flex sm:flex-col sm:gap-x-8 items-center">
            <div className="flex flex-col gap-y-4 items-center justify-center sm:flex-row sm:gap-x-4 ">
                {franchiseSteps.map((__, index) => (
                    <div
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-10 h-10 flex items-center justify-center rounded-full p-2  border hover:cursor-pointer ${activeIndex === index ? 'franchise-active-node' : 'bg-white text-xl text-black border-gray-500 hover:text-(--color-secondary) hover:bg-[#fff4f2] '}`}
                    >
                        {index + 1}
                    </div>
                ))}
            </div>

            <div className="h-full flex flex-col p-4 ml-4 border border-white bg-white rounded-lg shadow-md sm:ml-0 sm:w-4/5 md:w-3/5">
                <h4 className="pb-2">{franchiseSteps[activeIndex].title}</h4>
                <p className="pb-2">{franchiseSteps[activeIndex].step}</p>
                <div className="text-gray-900">
                    <ul className="list-disc list-inside space-y-2">
                        {franchiseSteps[activeIndex].requirements ?
                            franchiseSteps[activeIndex].requirements.map((entry, index) => (
                                <li key={index}>{entry}</li>
                            ))
                            : null}
                    </ul>
                </div>

                <div className="flex mt-auto justify-between sm:pt-4">

                    {activeIndex > 0 ?
                        <button
                            onClick={() => setActiveIndex(activeIndex - 1)}
                            className="px-4 py-1 button-secondary">
                            Previous
                        </button>
                        : <div></div>}
                    {activeIndex < franchiseSteps.length - 1 ?
                        <button
                            onClick={() => setActiveIndex(activeIndex + 1)}
                            className="px-4 py-1 button-primary">
                            Next
                        </button>

                        : <div></div>}

                </div>


            </div>
        </div>

    )
}

export { FranchiseStepsCard, FranchiseOfferCard };