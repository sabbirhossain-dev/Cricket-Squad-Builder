import shadow from "../../public/assets/bg-shadow.png";
import bannerImg from "../../public/assets/banner-main.png";

const Hero = () => {
  return (
    <section className="my-7">
      <div className="container mx-auto bg-black relative rounded-lg py-16">
        <img src={shadow} alt="shadow" className="h-full w-full absolute top-0 left-0 rounded-lg"/>
        <div className="flex flex-col justify-center items-center text-white">
            <img src={bannerImg} alt="bannerImg" className="h-48 w-56 pb-5"/>
            <h1 className="font-bold text-[40px]">Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className="text-[24px] opacity-70 py-3">Beyond Boundaries Beyond Limits</p>
            <div className="aura">
         <button className="btn">Claim Free Credit</button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
