import { ITestimonial } from "@/interface/testimonial.interface";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./dialog";

interface IProps {
  testimonial: ITestimonial;
}

const TestimonialCard = ({ testimonial }: IProps) => {
  const { title, name, shortDescription, image, longDescription, address } = testimonial || {};
  return (
    <Dialog>
      <DialogTrigger className="">
        <div className="text-left max-w-[500px] px-6 py-8 bg-white rounded-3xl border border-grey-main h-full min-h-[462px] flex flex-col justify-between">
          <div className="">
            <h6 className="font-poppins font-bold text-xl leading-8 pb-3 line-clamp-2">
              <span>“</span>
              {title}
              <span>”</span>
            </h6>
            <p className="leading-7 line-clamp-[10]">{shortDescription}...</p>
          </div>
          <div className="mt-8 flex gap-2 items-center">
            <div>
              <div className="size-16 rounded-full overflow-hidden bg-[#C0ABE4]">
                <Image src={image} alt={name} width={64} height={64} className="object-cover" priority />
              </div>
            </div>
            <div>
              <p className="font-poppins font-extrabold text-lg">{name}</p>
              <p className="mt-1.5 text-sm text-[#333333]">{address}</p>
            </div>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="px-0 max-w-2xl !rounded-3xl">
        <div className="px-6 max-h-[85vh] overflow-auto tiny_scrollbar">
          <div className="flex gap-2 items-center">
            <div className="size-16 rounded-full overflow-hidden bg-[#C0ABE4]">
              <Image src={image} alt={name} width={64} height={64} className="object-cover" priority />
            </div>

            <div>
              <p className="font-poppins font-extrabold text-lg">{name}</p>
              <p className="mt-1.5 text-[#333333]">{address}</p>
            </div>
          </div>
          <DialogTitle className="my-2 text-xl">{title}</DialogTitle>
          <div dangerouslySetInnerHTML={{ __html: longDescription }}></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TestimonialCard;
