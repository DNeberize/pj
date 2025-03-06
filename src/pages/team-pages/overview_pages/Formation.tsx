import FieldImage from "../../../assets/Field.png";
import Halad from "@assets/Halad.svg";
export default function Formation() {
  return (
    <>
      <div
        className="relative w-full aspect-[19/10.5] rounded-[8px] bg-[#62AF24]"
        style={{ backgroundImage: `url('your-outer-image-url')` }}
      >
        <div className="w-full rounded-t-[8px] bg-[var(--color-bg)] ">
          <h2 className="text-[var(--color-text)] p-5 not-only:font-bold text-sm">
            Last Match Formations
          </h2>
          <div
            style={{
              backgroundImage: `url(${FieldImage})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="w-full bg-[#62AF24]  flex flex-col justify-center rounded-b-[8px] items-center aspect-[16/8] bg-cover bg-center"
          >
            <div className="grid grid-cols-11 py-[3.5%] aspect-[21/16] h-full grid-rows-5">
              <div className="col-start-1  row-start-3  justify-center flex items-center">
                <div className="pin">
                  <img src={Halad} alt="" />
                </div>
              </div>
              <div className="col-start-3 row-start-4   flex items-center  ">
                <div className="pin">
                  <img src={Halad} alt="" />
                </div>
              </div>
              <div className="col-start-4  row-start-2  flex justify-center items-center">
                <div className="pin">
                  <img src={Halad} alt="" />
                </div>
              </div>
              <div className="col-start-6  row-start-5  flex justify-center items-center">
                <div className="pin">
                  <img src={Halad} alt="" />
                </div>
              </div>
              <div className="col-start-8  row-start-4  flex justify-center items-center">
                <div className="pin">
                  <img src={Halad} alt="" />
                </div>
              </div>
              <div className="col-start-8  row-start-1  flex justify-center items-center">
                <div className="pin">
                  <img src={Halad} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className=" flex absolute bottom-5 left-5 text-xs font-bold text-white">
          4-2-3-1
        </h2>
      </div>
    </>
  );
}
