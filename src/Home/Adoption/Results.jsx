import React, { useContext } from "react";
import FlipCard from "./Flipcart";
import { DataContext } from "./DataContext";
import FiltersApplied from "./FiltersApplied";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Results.module.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Results = () => {
  const { data, error, loading, filteredData } = useContext(DataContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No data available.</p>;

  const SamplePrevArrow = ({ className, style, onClick }) => (
    <div
      className={`${className} custom-prev-arrow`}
      onClick={onClick}
      style={{ ...style, display: "block", fontSize: "40px" }} // Increase size
    >
      <AiOutlineArrowLeft style={{ fontSize: "40px", color: "white" }} />
    </div>
  );
  
  const SampleNextArrow = ({ className, style, onClick }) => (
    <div
      className={`${className} custom-next-arrow`}
      onClick={onClick}
      style={{ ...style, display: "block", fontSize: "40px" }} // Increase size
    >
      <AiOutlineArrowRight style={{ fontSize: "40px", color: "white" }} />
    </div>
  );
  
  


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
    slidesPerRow: 1,
    className: "slides",
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  
  return (
    <div>
      <FiltersApplied />
      <div>
        <Slider {...settings}>
          {filteredData.length > 0 ? (
            filteredData.map((cat) => <FlipCard key={cat.id} data={cat} />)
          ) : (
            <p>No matches found</p>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default Results;
