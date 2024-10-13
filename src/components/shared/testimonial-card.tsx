const TestimonialCard = () => {
  return (
    <div>
      <div className="max-w-[500px] px-8 py-12 bg-white rounded-3xl border border-grey-main">
        <h6 className="font-poppins font-bold text-xl leading-8 pb-3">“Von Freizeit Betreiber FÜR Freizeit Betreiber”</h6>
        <p className=" leading-7 pb-8">
          Das Quinbook Team hat sowohl Background IN DER und Leidenschaft FÜR die Branche. Dadurch weiß es perfekt, welche Funktionen wir als
          Betreiber benötigen und in welche Richtung Quinbook fortwährend weiterentwickelt werden muss.
        </p>
        <div className="flex gap-2 items-center">
          <div>
          <div className="w-16 h-16 rounded-full bg-[#C0ABE4]"></div>
          </div>
          <div>
            <p className="font-poppins font-extrabold">Chris Lattner</p>
            <p className="mt-2">Director The Room, Berlin, Germany</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
