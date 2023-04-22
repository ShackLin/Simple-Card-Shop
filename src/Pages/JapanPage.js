import React, { useState } from "react";
import style from "../CssModules/CardContent.module.css";
import axios from "axios";
import JapanList from '../PageList/JapanList'
import { useIntersectionObserver, getApiJapan, handleTop } from '../ContextComponent/IntersectionObserverContext'


export default function TaiwanPage() {

      const [hits, setHits] = useState([]);
      const { Record, setPageResults, pageResults } = useIntersectionObserver(
            ([entry]) => {
                  if (entry && entry.isIntersecting) {
                        const newPageResults = pageResults + 10;
                        setPageResults(newPageResults);
                        // setCurrentPage(currentPage + 2)

                        const apiUrl = getApiJapan(1, newPageResults);
                        axios
                              .get(apiUrl)
                              .then((res) => {
                                    setHits((prevHits) => [...prevHits, ...res.data.hits]);
                              })
                              .catch((err) => {
                                    console.log(err);
                              });
                  }
            }
      );
      return (
            <div className={style.wrapper}>
                  {hits.map((item, index) => (
                        <div key={index}>
                              < JapanList
                                    item={item}
                                    img={item.largeImageURL}
                                    price={item.comments}
                                    id={item.id}
                                    key={item.id}
                              />
                        </div>
                  ))}
                  <button className={style.backTop} onClick={handleTop}>Back Top</button>
                  <div className="ObserveObject" ref={Record} ></div>
            </div>
      );
}

