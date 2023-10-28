import React, { useEffect } from "react";
import s from "./slider.module.scss";
import { slider_content_list as dataList } from "@/shared/mocks/slider-content-list";
import { Button, Svg } from "@/components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useOutObserver } from "@/shared/hooks";

interface SliderProps{
  setIsOut?: (valu: boolean) => void
  openAppModal: () => void
}

export function Slider({ setIsOut, openAppModal }: SliderProps) {
  const [ref, isOut] = useOutObserver<HTMLDivElement>();

  useEffect(() => {
    if(!setIsOut) return
    setIsOut(isOut)
  }, [isOut])
  
  return (
    <div 
      id="leazing"
      ref={ref}
      className={s.slider}
    >
      <Carousel
        className={s.carousel}
        showStatus={false}
        infiniteLoop
        renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
          hasPrev && (
            <Button
              className={s.leftBtn}
              onClick={clickHandler}
              variant="slideBtn"
            >
              <Svg name="arrow-left" />
            </Button>
          )
        }
        renderArrowNext={(clickHandler, hasNext, labelNext) =>
          hasNext && (
            <Button
              className={s.rightBtn}
              onClick={clickHandler}
              variant="slideBtn"
              autoClick
            >
              <Svg name="arrow-right" />
            </Button>
          )
        }
      >
        {dataList.map((el) => (
          <>
            <div className={s.item}>
              <h1 className={s.title}>{el.title}</h1>
              <p className={s.attraction}>{el.attraction}</p>
              <Button className={s.modalBtn} variant="primary" onClick={() => openAppModal()}>
                Оставить заявку
              </Button>
            </div>
          </>
        ))}
      </Carousel>
    </div>
  );
}
