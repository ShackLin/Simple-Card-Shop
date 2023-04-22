import { useState, useEffect, useRef } from "react";

const baseurl = "https://pixabay.com/api/";
const key = "33654929-485f8c9f6f5b6038a1c1abc46";
const country = "Taiwan";
const country2 = "Germany"
const country3 = "Austria"
const country4 = "Japan"
const country5 = "Thailand"

export const useIntersectionObserver = (callback) => {
      const Record = useRef();
      const [pageResults, setPageResults] = useState(6)
      const [currentPage, setCurrentPage] = useState(0)
      const options = {
            root: null,
            rootMargin: "0px 0px 800px 0px",
            threshold: 1.0
      };
      useEffect(() => {
            const Observer = new IntersectionObserver(callback, options);
            if (Record.current) Observer.observe(Record.current);
            return () => Observer.disconnect();
      },);
      return { Record, setPageResults, pageResults, currentPage, setCurrentPage };
}
export const getApiUrl = (currentPage, Page_Results) => {
      return `${baseurl}?key=${key}&q=${country}&page=${currentPage}&per_page=${Page_Results}`;
};
export const getApiGermany = (currentPage, Page_Results) => {
      return `${baseurl}?key=${key}&q=${country2}&page=${currentPage}&per_page=${Page_Results}`;
}
export const getApiAustria = (currentPage, Page_Results) => {
      return `${baseurl}?key=${key}&q=${country3}&page=${currentPage}&per_page=${Page_Results}`;
}
export const getApiJapan = (currentPage, Page_Results) => {
      return `${baseurl}?key=${key}&q=${country4}&page=${currentPage}&per_page=${Page_Results}`;
}
export const getApiTailand = (currentPage, Page_Results) => {
      return `${baseurl}?key=${key}&q=${country5}&page=${currentPage}&per_page=${Page_Results}`;
}
export const handleTop = () => {
      window.scrollTo(0, 0)
}