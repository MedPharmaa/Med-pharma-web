import feel from "../../assets/feel.png";
import { useNavigate } from "react-router-dom";

const Spec = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col justify-center items-center lg:px-20 pb-10 px-10">
      <div className="flex lg:flex-row flex-col w-full gap-10">
        <div className="lg:w-[50%] w-auto gap-4 flex flex-col justify-center items-start">
          <p className="uppercase lg:text-lg text-base">Special service</p>
          <div className="font-semibold text-[#28661E]">
            <h1 className="lg:text-4xl md:text-3xl text-xl">Feel better And</h1>
            <h1 className="lg:text-4xl md:text-3xl text-xl">Rest Assured</h1>
          </div>
          <p className="text-[#727272] lg:text-lg" data-aos="zoom-in">
            With our commitment to providing safe and effective medical and
            healthcare products, you can rest assured when you buy from HealthSaathi
            Pharmacy.
          </p>
          <button
            onClick={() => navigate("/products")}
            className="bg-[#D9D9D9] hover:bg-[#c4c4c4] transition-all ease-in-out duration-300 rounded-full px-8 py-3 text-[#000000] font-semibold"
          >
            Explore Now
          </button>
        </div>
        <div>
          <img src={feel} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Spec;
