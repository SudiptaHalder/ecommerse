'use client';

import { motion } from "framer-motion";

export default function ClientTestimonials() {
  const main = {
    quote:
      "Everything from the lighting to the therapist's energy feels intentional. Vistiq isn't a spa. It's an experience.",
    image:
      "https://framerusercontent.com/images/5PXFsSTR4klm8qRCEkw9moSblY.png?scale-down-to=1024",
  };

  const testimonials = [
    {
      id: 1,
      name: "Aria M",
      role: "Travel Writer",
      quote: "The moment I step into Vistiq, the outside world fades.",
      image:
        "https://framerusercontent.com/images/Yj75uUzBke8UeYiRKxUE2jnj2Y.png?width=480&height=480",
    },
    {
      id: 2,
      name: "Jade R.",
      role: "Creative Director",
      quote: "What really stood out was how seen and cared for I felt.",
      image:
        "https://framerusercontent.com/images/cjqP7NAZxNJpuIUQWPyS3SpJdg.png?width=480&height=480",
    },
    {
      id: 3,
      name: "Camille B.",
      role: "Software Engineer",
      quote: "Now it's a monthly ritual I’ll never give up.",
      image:
        "https://framerusercontent.com/images/gcD4NuEA5uXgg7CNoYjHMWxr8M.png?width=480&height=480",
    },
  ];

  return (
    <section className="w-full bg-[#fafafa] py-24 px-4">
      <div className="max-w-7xl mx-auto">

        {/* ⭐ MAIN ROW WITH IMAGE IN THE MIDDLE */}
        <div className="flex items-center justify-between gap-10">

          {/* LEFT SMALL TEXT */}
          <div className="flex flex-col text-left flex-1">
            <p className="text-sm text-[#666] font-medium leading-tight">
              Beautiful words
            </p>
            <p className="text-sm text-[#666] font-medium leading-tight -mt-1">
              from happy clients
            </p>
          </div>

          {/* ⭐ BIGGER CENTER MODEL IMAGE */}
          <div className="w-80 h-[420px] rounded-3xl overflow-hidden shadow-lg">
            <img
              src={main.image}
              alt="Client"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT QUOTE */}
          <div className="flex-1 max-w-xl">
            <p className="text-2xl md:text-3xl font-light text-[#333] leading-snug">
              “{main.quote}”
            </p>
          </div>
        </div>

        {/* ⭐ STAR RATING */}
        <div className="flex gap-1 mt-10 justify-center">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-6 h-6 text-[#333]"
              viewBox="0 0 256 256"
              fill="currentColor"
            >
              <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z" />
            </svg>
          ))}
        </div>

        {/* ⭐ TESTIMONIAL CAROUSEL */}
        <div className="mt-14 overflow-hidden">
          <div className="flex gap-6 animate-scroll">
            {[...testimonials, ...testimonials].map((t, index) => (
              <motion.div
                key={index}
                className="min-w-[350px] bg-white rounded-3xl p-6 shadow-sm border border-[#f0f0f0]"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden">
                    <img
                      src={t.image}
                      className="w-full h-full object-cover"
                      alt={t.name}
                    />
                  </div>
                  <div>
                    <p className="text-[#333] font-semibold">{t.name}</p>
                    <p className="text-[#777] text-sm">{t.role}</p>
                  </div>
                </div>
                <p className="text-[#333] text-sm leading-relaxed">{t.quote}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
