import { CollapseIcon, ExpandIcon } from "components/SvgIcons";
import { useState } from "react";
import ReviewContent from "./ReviewContent";

export default function ProductDetailCollapeGroup() {
  const [isIndication, setisIndication] = useState(false);
  const [isProperties, setIsProperties] = useState(false);
  const [isHowToUse, setIsHowToUse] = useState(false);
  const [isStorage, setIsStorage] = useState(false);
  const [isComposition, setIsComposition] = useState(false);
  const [isReviews, setIsReviews] = useState(false);
  return (
    <div className="rounded-lg border-2 border-lightest-gray mt-12">
      <div className="">
        <div className="">
          <div
            className="flex items-center justify-between p-4 mb-0.5 cursor-pointer"
            onClick={() => setisIndication(!isIndication)}
          >
            <h3
              className={`text-headline-3 font-bold ${
                !isIndication ? "text-dark-gray" : "text-secondary"
              }`}
            >
              Indication
            </h3>
            <button className="border-none">
              {isIndication ? <CollapseIcon /> : <ExpandIcon />}
            </button>
          </div>
          <div
            className={`px-4 bg-dark-white overflow-hidden ${
              isIndication ? "py-4 h-full" : "py-0 h-0"
            }`}
          >
            <p className="text-caption-1 text-dark-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pellentesque sit amet augue ut pretium. Proin vitae justo quis
              eros vestibulum condimentum vitae quis erat. Aliquam tincidunt et
              eros sit amet viverra. Morbi finibus nulla nec risus malesuada,
              sed blandit massa tempus. Ut sed dui id diam aliquam gravida.
              Nulla semper rhoncus orci, vel lobortis est pretium a. Praesent
              sed nisl dolor. Aliquam nec dui vel velit tincidunt tempor.
            </p>
          </div>
        </div>
        <div className="">
          <div
            className="flex items-center justify-between p-4 mb-0.5 cursor-pointer"
            onClick={() => setIsProperties(!isProperties)}
          >
            <h3
              className={`text-headline-3 font-bold ${
                !isProperties ? "text-dark-gray" : "text-secondary"
              }`}
            >
              Properties
            </h3>
            <button className="border-none">
              {isProperties ? <CollapseIcon /> : <ExpandIcon />}
            </button>
          </div>
          <div
            className={`px-4 bg-dark-white overflow-hidden ${
              isProperties ? "py-4 h-auto" : "py-0 h-0"
            }`}
          >
            <p className="text-caption-1 text-dark-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pellentesque sit amet augue ut pretium. Proin vitae justo quis
              eros vestibulum condimentum vitae quis erat. Aliquam tincidunt et
              eros sit amet viverra. Morbi finibus nulla nec risus malesuada,
              sed blandit massa tempus. Ut sed dui id diam aliquam gravida.
              Nulla semper rhoncus orci, vel lobortis est pretium a. Praesent
              sed nisl dolor. Aliquam nec dui vel velit tincidunt tempor.
            </p>
          </div>
        </div>
        <div className="">
          <div
            className="flex items-center justify-between p-4 mb-0.5 cursor-pointer"
            onClick={() => setIsHowToUse(!isHowToUse)}
          >
            <h3
              className={`text-headline-3 font-bold ${
                !isHowToUse ? "text-dark-gray" : "text-secondary"
              }`}
            >
              How to Use
            </h3>
            <button className="border-none">
              {isHowToUse ? <CollapseIcon /> : <ExpandIcon />}
            </button>
          </div>
          <div
            className={`px-4 bg-dark-white overflow-hidden ${
              isHowToUse ? "py-4 h-auto" : "py-0 h-0"
            }`}
          >
            <p className="text-caption-1 text-dark-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pellentesque sit amet augue ut pretium. Proin vitae justo quis
              eros vestibulum condimentum vitae quis erat. Aliquam tincidunt et
              eros sit amet viverra. Morbi finibus nulla nec risus malesuada,
              sed blandit massa tempus. Ut sed dui id diam aliquam gravida.
              Nulla semper rhoncus orci, vel lobortis est pretium a. Praesent
              sed nisl dolor. Aliquam nec dui vel velit tincidunt tempor.
            </p>
          </div>
        </div>
        <div className="">
          <div
            className="flex items-center justify-between p-4 mb-0.5 cursor-pointer"
            onClick={() => setIsStorage(!isStorage)}
          >
            <h3
              className={`text-headline-3 font-bold ${
                !isStorage ? "text-dark-gray" : "text-secondary"
              }`}
            >
              Storage
            </h3>
            <button className="border-none">
              {isStorage ? <CollapseIcon /> : <ExpandIcon />}
            </button>
          </div>
          <div
            className={`px-4 bg-dark-white overflow-hidden ${
              isStorage ? "py-4 h-auto" : "py-0 h-0"
            }`}
          >
            <p className="text-caption-1 text-dark-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pellentesque sit amet augue ut pretium. Proin vitae justo quis
              eros vestibulum condimentum vitae quis erat. Aliquam tincidunt et
              eros sit amet viverra. Morbi finibus nulla nec risus malesuada,
              sed blandit massa tempus. Ut sed dui id diam aliquam gravida.
              Nulla semper rhoncus orci, vel lobortis est pretium a. Praesent
              sed nisl dolor. Aliquam nec dui vel velit tincidunt tempor.
            </p>
          </div>
        </div>
        <div className="">
          <div
            className="flex items-center justify-between p-4 mb-0.5 cursor-pointer"
            onClick={() => setIsComposition(!isComposition)}
          >
            <h3
              className={`text-headline-3 font-bold ${
                !isComposition ? "text-dark-gray" : "text-secondary"
              }`}
            >
              Composition
            </h3>
            <button className="border-none">
              {isComposition ? <CollapseIcon /> : <ExpandIcon />}
            </button>
          </div>
          <div
            className={`px-4 bg-dark-white overflow-hidden ${
              isComposition ? "py-4 h-auto" : "py-0 h-0"
            }`}
          >
            <p className="text-caption-1 text-dark-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pellentesque sit amet augue ut pretium. Proin vitae justo quis
              eros vestibulum condimentum vitae quis erat. Aliquam tincidunt et
              eros sit amet viverra. Morbi finibus nulla nec risus malesuada,
              sed blandit massa tempus. Ut sed dui id diam aliquam gravida.
              Nulla semper rhoncus orci, vel lobortis est pretium a. Praesent
              sed nisl dolor. Aliquam nec dui vel velit tincidunt tempor.
            </p>
          </div>
        </div>
        <div className="">
          <div
            className="flex items-center justify-between p-4 mb-0.5 cursor-pointer"
            onClick={() => setIsReviews(!isReviews)}
          >
            <h3
              className={`text-headline-3 font-bold ${
                !isReviews ? "text-dark-gray" : "text-secondary"
              }`}
            >
              Review
            </h3>
            <button className="border-none">
              {isReviews ? <CollapseIcon /> : <ExpandIcon />}
            </button>
          </div>
          <div
            className={`px-4 bg-dark-white overflow-hidden ${
              isReviews ? "py-4 h-auto" : "py-0 h-0"
            }`}
          >
            <ReviewContent />
          </div>
        </div>
      </div>
    </div>
  );
}

export const FaqItem = (question: string) => {};
