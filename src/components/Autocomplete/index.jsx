import { SearchIcon } from "components/SvgIcons";
import { useState, useEffect, useRef, useCallback } from "react";
import SearchTradingProducts from "./SearchTradingProducts";
const R = require("ramda");
export default function AutoComplete() {
  const data = [
    "vitamin c",
    "vitamin d",
    "vitamin d3",
    "supplement",
    "fountain of youth",
    "redoxon",
    "nicotinell",
    "facemask",
  ];

  const [value, setValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [isFirst, setIsFirst] = useState(true);
  const inputRef = useRef(null);
  const wrapperRef = useRef(null);
  const listRef = useRef(null);
  const [recentList, setRecentList] = useState();
  const [isShow, setIsShow] = useState(false);

  const [forceRender, setForceRender] = useState(false);

  const handleChange = (e) => {
    setValue(e.currentTarget.value);
    setIsFirst(false);
  };

  const handleFocus = (v) => {
    setIsFocus(v);
    setIsShow(true);
  };

  const handleKeyup = (e) => {
    e.preventDefault();
    if (e.key === "ArrowDown") {
      if (listRef.current) listRef.current.children[0].focus();
    }
  };

  const clearRecent = () => {
    let savedList = [{ title: "" }];
    localStorage.setItem("recent-search", JSON.stringify(savedList));
    setForceRender(!forceRender);
  };

  const handleListKeydown = (e) => {
    e.preventDefault();
    if (e.key === "ArrowDown") {
      if (e.target.nextSibling) e.target.nextSibling.focus();
    } else if (e.key === "ArrowUp") {
      if (e.target.previousSibling) e.target.previousSibling.focus();
      else inputRef.current.focus();
    } else if (e.key === "Tab" || e.key === "Enter") {
      setValue(e.target.innerHTML);
      setLocalStorage(e.target.innerHTML);
      setIsShow(false);
    }
  };

  const handleListHover = (e) => {
    listRef.current.children[e.target.tabIndex].focus();
  };

  const handleListClick = (e) => {
    setValue(e.target.innerHTML);
    setIsShow(false);
    setLocalStorage(e.target.innerHTML);
  };

  const handleClick = (e) => {
    setIsShow(true);
    setIsFirst(true);
  };
  const handleClickOutside = (e) => {
    if (wrapperRef && !wrapperRef.current.contains(e.target)) {
      setIsShow(false);
    }
  };

  const setLocalStorage = (value) => {
    let savedList = localStorage.getItem("recent-search");
    if (savedList === null) {
      savedList = [{ title: "" }];
      localStorage.setItem("recent-search", JSON.stringify(savedList));
    } else {
      savedList = JSON.parse(savedList);
    }
    if (savedList.map((e) => e.title).indexOf(value) === -1) {
      savedList.push({ title: value });
    }
    if (savedList.length > 3) {
      savedList.shift();
    }
    localStorage.setItem("recent-search", JSON.stringify(savedList));
    setForceRender(!forceRender);
  };

  const arr = data.filter((el) => {
    const keyword = R.pipe(
      R.split(""),
      R.map((el) =>
        R.pipe(
          R.replace("(", "\\("),
          R.replace(")", "\\)"),
          R.replace(".", "\\.")
        )(el)
      ),
      R.join("\\w+"),
      R.replace(",", "")
    )(value);
    return value ? new RegExp(keyword, "i").test(el) : false;
  });
  const getRecentList = () => {
    const recentData = localStorage.getItem("recent-search");
    if (recentData) {
      setRecentList(JSON.parse(recentData));
    }
  };

  useEffect(() => {
    getRecentList();
    window.addEventListener("click", function (e) {
      if (
        !this.document.getElementById("apollo-autocomplete").contains(e.target)
      ) {
        setIsShow(false);
      }
    });
    // eslint-disable-next-line
  }, [forceRender]);

  return (
    <div
      className="relative rounded-lg border-transparent bg-[#f7f7f8] px-2 py-3 flex items-center w-[340px] autocomplete-ui"
      ref={wrapperRef}
      onBlur={handleClickOutside}
      id="apollo-autocomplete"
    >
      <SearchIcon />
      <div
        className={`
        ${isFocus ? "border-red-400" : ""}
      `}
      >
        <input
          className="border-none bg-transparent ml-2 placeholder:text-body placeholder:text-[rgba(60,60,67,0.6)] outline-none w-full text-dark-gray"
          placeholder="Search any product..."
          value={value}
          ref={inputRef}
          onChange={handleChange}
          onFocus={() => handleFocus(true)}
          onBlur={() => handleFocus(false)}
          onKeyUp={handleKeyup}
          onClick={handleClick}
        />
      </div>
      {!!arr.length && (
        <div
          className={`absolute top-12 inset-x-0 transform rounded overflow-y-scroll overflow-x-hidden z-20 no-scrollbar autocomplete-dropdown ${
            isShow ? "" : "hidden"
          }
      `}
        >
          <ul ref={listRef} className="bg-white py-4 z-10 rounded-lg">
            {arr.map((el, i) => (
              <li
                key={i}
                className="py-1.5 px-4 focus:bg-red-300 focus:outline-none text-dark-gray focus:bg-gray-600 cursor-pointer autocomplete-li"
                tabIndex={i}
                onKeyDown={handleListKeydown}
                onMouseOver={handleListHover}
                onClick={handleListClick}
              >
                {el}
              </li>
            ))}
            <SearchTradingProducts />
          </ul>
        </div>
      )}

      {isFirst && (
        <div
          className={`absolute top-12 inset-x-0 transform rounded overflow-y-scroll overflow-x-hidden z-20 no-scrollbar autocomplete-dropdown ${
            isShow ? "" : "hidden"
          }
    `}
        >
          {recentList && recentList.length > 1 && (
            <button
              className="text-body-mobile font-bold text-light-gray absolute clear-button"
              onClick={() => clearRecent()}
            >
              Clear
            </button>
          )}
          <ul ref={listRef} className="bg-white pb-4 z-10 rounded-lg">
            {recentList && recentList.length > 1 && (
              <>
                <li className="w-full border-lightest-gray pt-4">
                  <p className="text-callout font-bold text-dark-gray px-4">
                    Recent searches
                  </p>
                </li>
                {recentList.map(
                  (el, i) =>
                    el.title !== "" && (
                      <li
                        key={i}
                        className="py-1.5 px-4 focus:bg-red-300 text-dark-gray focus:outline-none focus:bg-gray-600 cursor-pointer autocomplete-li"
                        tabIndex={i}
                        onKeyDown={handleListKeydown}
                        onMouseOver={handleListHover}
                        onClick={handleListClick}
                      >
                        {el.title}
                      </li>
                    )
                )}
              </>
            )}

            <li className="w-full border-lightest-gray pt-4">
              <p className="text-callout font-bold text-dark-gray px-4">
                Trending keywords
              </p>
            </li>
            {trending_keywords.map((el, i) => (
              <li
                key={i}
                className="py-1.5 px-4 focus:bg-red-300 text-dark-gray focus:outline-none focus:bg-gray-600 cursor-pointer autocomplete-li"
                tabIndex={i}
                onKeyDown={handleListKeydown}
                onMouseOver={handleListHover}
                onClick={handleListClick}
              >
                {el}
              </li>
            ))}
            <SearchTradingProducts />
          </ul>
        </div>
      )}
    </div>
  );
}

const trending_keywords = ["Redoxon", "Nicotinell", "facemask"];
