"use client";
import { news } from "@/constants/news";
import { useRef } from "react";
import BannerImage from "../shared/banner-image";
import FadeIn from "../animation/fade-in";
import ZoomIn from "../animation/zoom-in";

const NewsDetailsMain = ({ newsId }: { newsId: string }) => {
  const thisNews = news.find((news) => news.id === Number(newsId));
  const ref = useRef(null);
  return (
    <div className="container py-12 lg:py-20">
      <FadeIn>
        <p className="mt-6 flex gap-6">
          <span className="font-poppins uppercase font-extrabold text-primary text-xs">{thisNews?.type}</span>
          <span className="font-medium text-grey-darker text-xs">{thisNews?.date}</span>
        </p>
      </FadeIn>
      <FadeIn>
        <h1 className="font-poppins font-[900] text-4xl lg:text-[42px] mt-3 uppercase">Lorem ipsum dolor sit amet consectetur.</h1>
      </FadeIn>
      <div className="py-6 lg:py-10">
        <ZoomIn>
          <BannerImage ref={ref} imagePath="/images/news/banner.jpeg" />
        </ZoomIn>
      </div>
      <div>
        <p className="text-xl mb-10">
          Lorem ipsum dolor sit amet consectetur. Amet convallis a volutpat tellus. In pharetra dolor a vivamus. Amet nulla blandit dui eu
          massa eu sodales. Nisi cras justo semper amet tristique mus. Adipiscing eu id nisi et id consectetur pulvinar aliquam. Dignissim
          ut viverra dictum ut vitae morbi venenatis amet. Adipiscing et facilisis a vitae accumsan. Sed etiam feugiat duis rhoncus id at.
        </p>
        <p className="text-xl ">
          Donec egestas hendrerit cras hac vitae arcu adipiscing leo. Est arcu neque habitant ac donec mattis amet. Pulvinar sagittis
          aliquet dolor nulla iaculis sit. Consectetur sagittis maecenas feugiat auctor nibh. Molestie quis maecenas luctus in pulvinar urna
          sit iaculis. Duis enim scelerisque metus integer.
        </p>
      </div>
      <div className="py-6 lg:py-10 sm:px-10 ">
        <div className="pl-5  border-l-[5px] border-primary">
          <p className="italic text-2xl text-grey-darker leading-8">
            Lorem ipsum dolor sit amet consectetur. Neque lobortis enim augue amet amet non aliquet elementum. Vehicula facilisis vitae
            convallis ac pharetra. At duis augue”
          </p>
          <p className="font-medium">– Ein Autor</p>
        </div>
      </div>
      <div>
        <p className="text-xl mb-10">
          Lorem ipsum dolor sit amet consectetur. Amet convallis a volutpat tellus. In pharetra dolor a vivamus. Amet nulla blandit dui eu
          massa eu sodales. Nisi cras justo semper amet tristique mus. Adipiscing eu id nisi et id consectetur pulvinar aliquam. Dignissim
          ut viverra dictum ut vitae morbi venenatis amet. Adipiscing et facilisis a vitae accumsan. Sed etiam feugiat duis rhoncus id at.
        </p>
        <p className="text-xl ">
          Donec egestas hendrerit cras hac vitae arcu adipiscing leo. Est arcu neque habitant ac donec mattis amet. Pulvinar sagittis
          aliquet dolor nulla iaculis sit. Consectetur sagittis maecenas feugiat auctor nibh. Molestie quis maecenas luctus in pulvinar urna
          sit iaculis. Duis enim scelerisque metus integer.
        </p>
      </div>
      <div className="max-w-4xl py-6 lg:py-12 mx-auto">
        <ZoomIn>
          <BannerImage ref={ref} imagePath="/images/news/banner.jpeg" />
        </ZoomIn>
      </div>
      <div>
        <p className="text-xl mb-10">
          Lorem ipsum dolor sit amet consectetur. Amet convallis a volutpat tellus. In pharetra dolor a vivamus. Amet nulla blandit dui eu
          massa eu sodales. Nisi cras justo semper amet tristique mus. Adipiscing eu id nisi et id consectetur pulvinar aliquam. Dignissim
          ut viverra dictum ut vitae morbi venenatis amet. Adipiscing et facilisis a vitae accumsan. Sed etiam feugiat duis rhoncus id at.
        </p>
      </div>
    </div>
  );
};

export default NewsDetailsMain;
