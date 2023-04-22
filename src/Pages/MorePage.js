import React, { useState } from "react";
import style from "../CssModules/MoreContent.module.css";
import { BsSearch } from "react-icons/bs";
import axios from "axios";



export default function MorePage() {
      const [images, setImages] = useState([])
      const [location, setLocation] = useState()
      const url = `https://pixabay.com/api/?key=33654929-485f8c9f6f5b6038a1c1abc46&q=${location}&per_page=30`
      const showLocation = async () => {
            try {
                  const response = await axios.get(url)
                  setImages(response.data.hits)
                  console.log(response.data.hits)


            } catch (err) {
                  console.log(err)
            }
      }
      const haneleInputChange = (e) => {
            setLocation(e.target.value)
            if (!e.target.value) {
                  setImages([])
                  return
            }
            showLocation()
      }
      return (
            <div className={style.wrapper}>
                  <div className={style.searchContainer}>
                        <span className={style.mainTitle}>Stunning Images for You, Search What you prefer </span>
                        <form className={style.form}>
                              <input className={style.input}
                                    onChange={haneleInputChange}
                              />
                              <BsSearch className={style.icon} onClick={showLocation} />
                        </form>
                        <div className={style.imageContainer}>
                              {images.map((item, index) => (
                                    <img src={item.largeImageURL} alt={item.comments} key={index} className={style.images} />
                              ))}
                        </div>
                  </div>
            </div>
      );
}

