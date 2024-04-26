import React from "react";
import gptBanner from "../assets/GPT-banner.png";
import GptSearchBar from "../components/GptSearchBar";
import GptMovieSuggestions from "../components/GptMovieSuggestions";
import Footer from "../common/Footer";
const SearchPage = () => {
  return (
    <div
      className="text-white h-screen flex flex-col justify-between min-h-[100vh]"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7 ),
        rgba(0, 0, 0, 0.7 )),url(${gptBanner}) no-repeat center center/cover`,
      }}>
      <GptSearchBar />
      <GptMovieSuggestions />
      <div className="mt-44">
        <Footer />
      </div>
    </div>
  );
};

export default SearchPage;
