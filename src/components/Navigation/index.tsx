import { useState } from "react";
import { NAVIGATION_LIST } from "src/demodata";

export default function Navigation() {
  const [show, setShow] = useState(false);
  return (
    <nav className="bg-transparent border-gray-200">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-col mt-4 bg-transparent md:flex-row md:space-x-8 md:mt-0 md:text-sm font-bold text-callout">
            <li>
              <button
                onClick={() => setShow(!show)}
                className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-bold text-callout text-gray-700 border-b border-gray-100 bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
                onBlur={() => setShow(false)}
              >
                All Categories
              </button>
              <div
                className="z-10 w-52 font-bold text-callout bg-white divide-y divide-gray-100 absolute translate-y-[12px]"
                style={{
                  display: show ? "block" : "none",
                }}
              >
                <ul className="py-1 text-sm text-apollo-black">
                  {NAVIGATION_LIST.map((list, index) => (
                    <div key={index}>
                      <li className="cursor-pointer py-2 px-4 w-full hover:bg-gray-10 group">
                        <>
                          <span>{list.title}</span>
                          {list.list?.length !== 0 && (
                            <div className="z-10 absolute w-56 bg-white divide-y divide-gray-100 translate-x-[195px] translate-y-[-32px] hidden group-hover:block clear-both">
                              <ul className="py-1 text-sm clear-both">
                                <>
                                  {list.list?.map((item, id) => (
                                    <li
                                      className="px-4 py-2 group relative clear-both"
                                      key={id}
                                    >
                                      <span>{item.subTitle}</span>
                                      <div className="z-10 absolute w-56 bg-white translate-x-[210px] translate-y-[-31px] hidden group-hover:block">
                                        <ul className="py-1 text-sm">
                                          <>
                                            {item.subList?.map((item, id) => (
                                              <li
                                                key={id}
                                                className="px-4 py-2"
                                              >
                                                {item}
                                              </li>
                                            ))}
                                          </>
                                        </ul>
                                      </div>
                                    </li>
                                  ))}
                                </>
                              </ul>
                            </div>
                          )}
                        </>
                      </li>
                    </div>
                    // <PopupList
                    //   list={list}
                    //   key={index}
                    //   id={index}
                    //   change={setShow1}
                    //   state={show1}
                    // />
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Offers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Prescriptions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                LAKUM
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
