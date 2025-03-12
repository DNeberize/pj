import DesktopFieldImage from "../../../assets/Field.png";
import MobileFieldImage from "../../../assets/MobileField.png";
import Halad from "@assets/Halad.svg";

export default function Formation() {
  return (
    <div
      className="relative w-full rounded-[8px] bg-[#62AF24]"
      style={{ backgroundImage: `url('your-outer-image-url')` }}
    >
      <div className="w-full rounded-t-[8px] bg-[var(--color-bg)]">
        <h2 className="text-[var(--color-text)] p-5 not-only:font-bold text-sm max-lg:pb-0">
          Last Match Formations
        </h2>

        <div
          className="w-full bg-[#62AF24] flex flex-col justify-center rounded-b-[8px] items-center 
            aspect-[16/8] max-lg:hidden"
          style={{
            backgroundImage: `url(${DesktopFieldImage})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="grid grid-cols-11 py-[3.5%] aspect-[21/16] h-full grid-rows-5">
            <div className="col-start-1 row-start-3 justify-center flex items-center">
              <div className="pin">
                <img src={Halad} alt="" />
              </div>
            </div>
            <div className="col-start-3 row-start-4 flex items-center">
              <div className="pin">
                <img src={Halad} alt="" />
              </div>
            </div>
            <div className="col-start-4 row-start-2 flex justify-center items-center">
              <div className="pin">
                <img src={Halad} alt="" />
              </div>
            </div>
            <div className="col-start-6 row-start-5 flex justify-center items-center">
              <div className="pin">
                <img src={Halad} alt="" />
              </div>
            </div>
            <div className="col-start-8 row-start-4 flex justify-center items-center">
              <div className="pin">
                <img src={Halad} alt="" />
              </div>
            </div>
            <div className="col-start-8 row-start-1 flex justify-center items-center">
              <div className="pin">
                <img src={Halad} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full bg-[#62AF24] hidden max-lg:block aspect-[3/5]"
          style={{
            backgroundImage: `url(${MobileFieldImage})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="grid grid-rows-11 px-[6%] py-[18%] aspect-[3/5] w-full grid-cols-5">
            <div className="row-start-1 col-start-3 justify-center flex items-center">
              <div className="pin">
                <img src={Halad} alt="" />
              </div>
            </div>
            <div className="row-start-3 col-start-4 flex items-center">
              <div className="pin">
                <img src={Halad} alt="" />
              </div>
            </div>
            <div className="row-start-4 col-start-2 flex justify-center items-center">
              <div className="pin">
                <img src={Halad} alt="" />
              </div>
            </div>
            <div className="row-start-6 col-start-3 flex justify-center items-center">
              <div className="pin">
                <img src={Halad} alt="" />
              </div>
            </div>
            <div className="row-start-8 col-start-4 flex justify-center items-center">
              <div className="pin">
                <img src={Halad} alt="" />
              </div>
            </div>
            <div className="row-start-8 col-start-1 flex justify-center items-center">
              <div className="pin">
                <img src={Halad} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="flex absolute bottom-5 left-5 text-xs font-bold text-white max-lg:hidden">
        4-2-3-1
      </h2>
    </div>
  );
}
