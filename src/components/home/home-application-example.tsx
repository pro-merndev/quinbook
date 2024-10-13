import Image from "next/image";
import PrimaryBadge from "../shared/primary-badge";

const HomeApplicationExample = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex justify-center items-center gap-10">
        <div className="pl-[40%]">
          <div>
            <PrimaryBadge>Anwendungsbeispiele</PrimaryBadge>
          </div>
          <h3 className="font-poppins font-extrabold leading-[100px] text-7xl pt-5">Für wen quinbook?</h3>
        </div>
      </div>
      <div className="bg-primary py-40 px-12">
        {["Lasertag", "Escape Rooms", "Minigolf", "Museen, Schlösser & Naturparks"].map((item , i) => (
          <div key={i} className="mb-9">
            <div className="flex gap-3 items-center ">
              <div className="bg-white rounded-xl p-5 w-full max-w-[600px] h-16">
                <p className="text-2xl">{item}</p>
              </div>
              <div>
                <span className="flex justify-center items-center p-3 bg-white rounded-full">
                  <Image src="/logo/logo_icon.svg" alt="example-1" width={40} height={40} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeApplicationExample;
