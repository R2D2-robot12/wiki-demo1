const HeroBridge = () => {
  return (
    <section className="relative z-10 -mt-[145px] bg-transparent px-6 pb-10 md:-mt-[180px] md:pb-14">
      <div className="mx-auto flex max-w-[1280px] justify-center">
        <div className="w-full max-w-[360px] rounded-[42px] bg-[#ff3d05] px-6 py-8 text-center shadow-[0_18px_50px_rgba(8,15,10,0.18)] sm:max-w-[410px] sm:rounded-[50px] sm:px-8 md:max-w-[390px] md:px-8 md:py-9">
          <h2 className="font-inter text-[40px] font-extrabold leading-none tracking-[-0.02em] text-[#fff7bd] sm:text-[48px] md:text-[50px]">
            Plant SOS
          </h2>

          <p className="mx-auto mt-5 w-fit max-w-full rounded-full bg-[#f7f8ff] px-4 py-3 font-dm-sans text-[15px] font-bold leading-tight text-[#25283b] sm:px-6 sm:text-[17px] md:text-[18px]">
            From bio-signal to smart diagnosis
          </p>

          <p className="mt-7 font-inter text-[21px] font-extrabold leading-tight text-white sm:text-[23px]">
            Why Plant SOS?
          </p>

          <p className="mx-auto mt-5 max-w-[320px] font-dm-sans text-[19px] font-extrabold leading-[1.18] text-white sm:text-[21px]">
            Plants speak before they suffer. We help decode their signals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroBridge;
