import Image from "next/image";

const FeaturesLoading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-[99] bg-background grid place-items-center">
      <Image src="/logo/logo_icon.svg" alt="logo" className="animate-spin" width={46} height={46} />
    </div>
  );
};

export default FeaturesLoading;
