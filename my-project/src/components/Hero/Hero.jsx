import arrow_btn from '../../assets/arrow_btn.png';

const Hero = (props) => {
  return (
    <div className="mt-32 sm:mt-40 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto">
      {/* Hero Text */}
      <div className="text-neutral-50 text-4xl sm:text-6xl md:text-[80px] font-medium leading-tight sm:leading-[70px] font-sans">
        <p className="font-['Trebuchet_MS','Lucida_Sans_Unicode','Lucida_Grande','Lucida_Sans','Arial',sans-serif]">
          {props.heroData.text1}
        </p>
        <p className="font-['Trebuchet_MS','Lucida_Sans_Unicode','Lucida_Grande','Lucida_Sans','Arial',sans-serif]">
          {props.heroData.text2}
        </p>
      </div>

      {/* Explore Button */}
      <div className="flex items-center w-fit gap-4 mt-16 mb-6 bg-[#ff5858] px-8 py-3 rounded-full hover:bg-[#ff4242] transition duration-300 cursor-pointer">
        <a href="/todo" className="flex items-center gap-3 no-underline">
          <p className="text-lg sm:text-xl font-semibold text-black hover:text-white transition">
            Explore the features
          </p>
          <img src={arrow_btn} alt="arrow" className="rounded-full w-15 h-7" />
        </a>
      </div>

      {/* Indicator Dots + Play Button */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-8">
        {/* Dots */}
        <ul className="flex items-center gap-6">
          {[0, 1, 2].map((idx) => (
            <li
              key={idx}
              onClick={() => props.setHeroCount(idx)}
              className={`w-4 h-4 rounded-full cursor-pointer transition ${props.heroCount === idx ? 'bg-red-600' : 'bg-white'
                }`}
            ></li>
          ))}
        </ul>

        {/* Play/Go Back Button */}
        <a
          onClick={() => props.setPlayStatus(!props.playStatus)}
          className="text-sm sm:text-base px-4 py-2 font-bold bg-[#ff5858] text-black rounded-2xl cursor-pointer hover:bg-gray-500 hover:text-white transition duration-300"
        >
          {props.playStatus ? 'Go Back' : 'Play Video'}
        </a>
      </div>
    </div>
  );
};

export default Hero;
