import { useState, useEffect, useRef } from "react";

const StatsBar = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  const [responseTime, setResponseTime] = useState(0);
  const [livesSaved, setLivesSaved] = useState(0);
  const [transportUnits, setTransportUnits] = useState(0);

  // Detect scroll visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Animate ALL counters
  useEffect(() => {
    if (!startCount) return;

    // Response Time counter
    let rt = 0;
    const rtInterval = setInterval(() => {
      rt += 1;
      if (rt >= 8) {
        rt = 8;
        clearInterval(rtInterval);
      }
      setResponseTime(rt);
    }, 80);

    // Bodies Preserved counter
    let lives = 0;
    const livesInterval = setInterval(() => {
      lives += 500;
      if (lives >= 10000) {
        lives = 10000;
        clearInterval(livesInterval);
      }
      setLivesSaved(lives);
    }, 40);

    // Transport Units counter
    let units = 0;
    const unitInterval = setInterval(() => {
      units += 1;
      if (units >= 5) {
        units = 5;
        clearInterval(unitInterval);
      }
      setTransportUnits(units);
    }, 150);

    return () => {
      clearInterval(rtInterval);
      clearInterval(livesInterval);
      clearInterval(unitInterval);
    };
  }, [startCount]);

  const stats = [
    {
      value: responseTime,
      suffix: " min",
      label: "Average Response Time",
      icon: "⏱️",
    },
    {
      value: livesSaved,
      suffix: "+",
      label: "Bodies Preserved",
      icon: "🕊️",
    },
    {
      value: "24/7",
      suffix: "",
      label: "Service Availability",
      icon: "📅",
    },
    {
      value: transportUnits,
      suffix: "+",
      label: "Transport Vehicles",
      icon: "🚑",
    },
  ];

  return (
    <section ref={sectionRef} className="bg-[#f8fafc] py-10 sm:py-14 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e4d83] font-serif">
            Our Service <span className="text-[#a81514]">in Numbers</span>
          </h2>
          <p className="text-gray-500 mt-2 text-xs sm:text-sm">
            Reliable, fast and compassionate emergency support
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#1e4d83]/10 text-xl sm:text-2xl flex-shrink-0">
                {stat.icon}
              </div>

              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-[#1e4d83]">
                  {typeof stat.value === "number"
                    ? stat.value.toLocaleString()
                    : stat.value}
                  <span className="text-base sm:text-lg">{stat.suffix}</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsBar;