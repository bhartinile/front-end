import styles from "./ClaimResult.module.css";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import gif from "../../Image/ben-redblock-loading.gif";

const initial_dent_tear_scratch = {
  dents_data: [
    [0, 0],
    [0, 0],
  ],
  tears_data: [
    [0, 0],
    [0, 0],
  ],
  scratches_data: [
    [0, 0],
    [0, 0],
  ],
  part_detection: [
    [0, 0],
    [0, 0],
  ],
};
const initial_activeClick = {
  depth: false,
  dents: false,
  tears: false,
  scratches: false,
  part: false,
};

const ImageDamageResult = ({ car_job_data, count, setCount }) => {
  const [activeClick, setActiveClick] = useState(initial_activeClick);
  const [damageData, setDamageData] = useState({
    dents_data: "",
    tears_data: "",
    scratches_data: "",
    part_data: "",
  });
  const [clr, setClr] = useState([]);
  const [depthImg, setDepthImg] = useState();
  const [carImg, setCarImg] = useState();
  const canvasRef = useRef(null);

  const activeClickHandler = (e) => {
    var name = e.target.name;
    setActiveClick({
      ...activeClick,
      [name]: !activeClick[name],
      depth: false,
    });

    if (name === "dents") {
      car_job_data[count].dent_detection.polygons.length > 0 &&
      !activeClick.dents
        ? setDamageData({
            ...damageData,
            dents_data: car_job_data[count].dent_detection.polygons.map(
              (point) => {
                return point.points;
              }
            ),
          })
        : setDamageData({
            ...damageData,
            dents_data: initial_dent_tear_scratch.dents_data,
          });
      setCarImg(car_job_data[count].image);
    }
    if (name === "tears") {
      car_job_data[count].tears_detection.polygons.length > 0 &&
      !activeClick.tears
        ? setDamageData({
            ...damageData,
            tears_data: car_job_data[count].tears_detection.polygons.map(
              (point) => point.points
            ),
          })
        : setDamageData({
            ...damageData,
            tears_data: initial_dent_tear_scratch.tears_data,
          });
      setCarImg(car_job_data[count].image);
    }
    if (name === "scratches") {
      car_job_data[count].scratch_detection.polygons.length > 0 &&
      !activeClick.scratches
        ? setDamageData({
            ...damageData,
            scratches_data: car_job_data[count].scratch_detection.polygons.map(
              (point) => point.points
            ),
          })
        : setDamageData({
            ...damageData,
            scratches_data: initial_dent_tear_scratch.scratches_data,
          });
      setCarImg(car_job_data[count].image);
    }
    if (name === "part") {
      car_job_data[count].part_detection.polygons.length > 0 &&
      !activeClick.part
        ? setDamageData({
            ...damageData,
            part_data: car_job_data[count].part_detection.polygons.map(
              (point) => point.points
            ),
          })
        : setDamageData({
            ...damageData,
            part_data: initial_dent_tear_scratch.part_detection,
          });
      setCarImg(car_job_data[count].image);
      setClr([
        `rgb(0, ${Math.floor(
          255 - 0.5 * Math.round(Math.random() * 500)
        )}, ${Math.floor(255 - 0.5 * Math.round(Math.random() * 500))},1)`,
        `rgb(0, ${Math.floor(
          255 - 0.5 * Math.round(Math.random() * 500)
        )}, ${Math.floor(255 - 0.5 * Math.round(Math.random() * 500))},1)`,
        `rgb(0, ${Math.floor(
          255 - 0.5 * Math.round(Math.random() * 500)
        )}, ${Math.floor(255 - 0.5 * Math.round(Math.random() * 500))},1)`,
      ]);
    }
    if (name === "depth") {
      setActiveClick({
        depth: !activeClick.depth,
        dents: false,
        tears: false,
        scratches: false,
        part: false,
      });
      setDamageData(initial_dent_tear_scratch);
      setDepthImg(
        "data:image/png;base64," + car_job_data[count].depth_img_detection
      );
    }
  };

  const draw = useCallback(
    (ctx) => {
      const img = new Image();

      img.onload = () => {
        const wt_ratio = 960 / img.width;
        const ht_ratio = 525 / img.height;
        ctx.drawImage(img, 0, 0, 960, 525);

        for (let pos of damageData.dents_data) {
          ctx.beginPath();
          ctx.fillStyle = "rgba(83, 18, 224, 1)";
          ctx.moveTo(pos[0][0] * wt_ratio, pos[0][1] * ht_ratio);
          pos.map((coord) =>
            ctx.lineTo(coord[0] * wt_ratio, coord[1] * ht_ratio)
          );
          ctx.closePath();
          ctx.fill();
        }
        for (let pos of damageData.tears_data) {
          ctx.beginPath();
          ctx.fillStyle = "rgba(55, 181, 16, 1)";
          ctx.moveTo(pos[0][0] * wt_ratio, pos[0][1] * ht_ratio);
          pos.map((coord) =>
            ctx.lineTo(coord[0] * wt_ratio, coord[1] * ht_ratio)
          );
          ctx.closePath();
          ctx.fill();
        }
        for (let pos of damageData.scratches_data) {
          ctx.beginPath();
          ctx.fillStyle = "rgba(207, 21, 129, 1)";
          ctx.moveTo(pos[0][0] * wt_ratio, pos[0][1] * ht_ratio);
          pos.map((coord) =>
            ctx.lineTo(coord[0] * wt_ratio, coord[1] * ht_ratio)
          );
          ctx.closePath();
          ctx.fill();
        }

        for (let pos of damageData.part_data) {
          ctx.beginPath();
          ctx.fillStyle = `rgb(0, ${Math.floor(
            255 - 0.5 * Math.round(Math.random() * 500)
          )}, ${Math.floor(255 - 0.5 * Math.round(Math.random() * 500))},.4)`;
          ctx.moveTo(pos[0][0] * wt_ratio, pos[0][1] * ht_ratio);
          pos.map((coord) =>
            ctx.lineTo(coord[0] * wt_ratio, coord[1] * ht_ratio)
          );
          ctx.closePath();
          ctx.fill();
        }
      };

      img.src = activeClick.depth ? depthImg : carImg;
      // img.src = activeClick.depth ? carImg : carImg;
    },
    [carImg, activeClick.depth, damageData,depthImg]
  );

  const prevOnclickHandler = () => {
    count > 0 ? setCount(count - 1) : setCount(count);
    setActiveClick(initial_activeClick);
    setDamageData(initial_dent_tear_scratch);
  };
  const nextOnclickHandler = () => {
    count < car_job_data.length - 1 ? setCount(count + 1) : setCount(count);
    setActiveClick(initial_activeClick);
    setDamageData(initial_dent_tear_scratch);
  };

  useEffect(() => {
    car_job_data ? setCarImg(car_job_data[count].image) : setCarImg(gif);

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    //Our draw come here
    draw(context);
  }, [draw, count, carImg, car_job_data]);

  return (
    <>
      <div className={styles.imagedamage}>
        <canvas
          width="960"
          height="525"
          ref={canvasRef}
          className={styles.canvas_div}
        />

        <div className={styles.prev_nxt_btn}>
          <button
            onClick={prevOnclickHandler}
            style={{ color: count === 0  ? "rgba(220, 220, 220, 0.721)" : "" }}
          >
            {" "}
            <FaAngleLeft /> Previous
          </button>
          <button
            onClick={nextOnclickHandler}
            style={{
              color:
              car_job_data?(count === car_job_data.length - 1 
                  ? "rgba(220, 220, 220, 0.721)"
                  : "") :'',
            }}
          >
            {" "}
            Next <FaAngleRight />
          </button>
        </div>
        <div className={styles.claim_btn}>
          <button
            name="dents"
            onClick={(e) => activeClickHandler(e)}
            style={{
              background: activeClick.dents ? "rgba(83, 18, 224, 0.8)" : "",
            }}
          >
            {" "}
            Dents
          </button>
          <button
            name="scratches"
            onClick={(e) => activeClickHandler(e)}
            style={{
              background: activeClick.scratches ? "rgba(207, 21, 129,0.8)" : "",
            }}
          >
            {" "}
            Scratches
          </button>
          <button
            name="tears"
            onClick={(e) => activeClickHandler(e)}
            style={{
              background: activeClick.tears ? "rgba(55, 181, 16, 0.8)" : "",
            }}
          >
            {" "}
            Tears
          </button>
          <button
            name="part"
            onClick={(e) => activeClickHandler(e)}
            style={{
              backgroundImage: activeClick.part
                ? `linear-gradient(to right,${clr[0]}, ${clr[1]},${clr[2]},${clr})`
                : "",
            }}
          >
            {" "}
            Part-Detection
          </button>

          <button
            name="depth"
            onClick={(e) => activeClickHandler(e)}
            style={{ background: activeClick.depth ? "red" : "" }}
          >
            {" "}
            Depth
          </button> 
        </div>
      </div>
    </>
  );
};
export default ImageDamageResult;
