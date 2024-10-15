import { useTranslations } from "next-intl";
import Marquee from "react-fast-marquee";

const brandImages = [
  "/images/home/marque/1.png",
  "/images/home/marque/2.jpg",
  "/images/home/marque/3.png",
  "/images/home/marque/4.png"
];

const CustomersMarque = () => {
  const t = useTranslations("Home.marque");

  return (
    <div>
      <div className="container py-12 lg:py-20">
        <h3 className="text-center font-poppins text-2xl font-extrabold">{t("title")}</h3>
      </div>
      <Marquee autoFill className="pb-12" >
        {brandImages.map((image, index) => (
          <div key={index} className="mx-24">
            <img src={image} alt="brand-logo" className="w-[150px]" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default CustomersMarque;
