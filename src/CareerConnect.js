import React, { useEffect, useState } from "react";
import Logo from "./assets/logo.svg";
import HeroBackground from "./assets/images/heroBg.png";
import Calendar from "./assets/icons/calendar.svg";
import Location from "./assets/icons/location.svg";
import AboutImage from "./assets/images/aboutImage.png";
import { Button } from "./components/Button";
import {
  aboutData,
  companiesData,
  navItems,
  sponsorData,
  teamData,
} from "./constants";
import Facebook from "./assets/icons/facebook.svg";
import Instagram from "./assets/icons/instagram.svg";

export const CareerConnect = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date("December 24, 2024 09:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className="p-6 fixed top-0 flex items-center justify-between w-full z-10"
        style={{
          backgroundColor: isScrolled ? "#9A0F19" : "transparent",
        }}
      >
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div className="flex items-center gap-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="text-white font-medium text-sm"
            >
              {item}
            </a>
          ))}
        </div>
        <Button to="#contact">Contact</Button>
      </nav>
      {/* hero */}
      <div
        id="home"
        className="bg-gradient-to-l from-[#C30A18] to-[#460308] h-screen w-full flex items-center justify-center relative"
      >
        <div
          className="absolute w-full h-full flex items-center justify-center"
          style={{
            backgroundImage: `url(${HeroBackground})`,
            backgroundRepeat: "no-repeat",
            opacity: 0.3,
            backgroundSize: "cover",
          }}
        />
        <article
          className="flex flex-col items-center gap-6 text-center"
          style={{
            zIndex: 1,
          }}
        >
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-6xl font-bold text-custom-orange max-w-4xl mx-auto">
              Where Ambitions Meet Opportunities
            </h1>
            <h2 className="text-white font-medium text-base max-w-2xl mx-auto">
              Join us for an immersive experience connecting students,
              professionals, and top companies to redefine career prospects.
            </h2>
            <div className="text-white text-base font-medium flex items-center gap-2">
              {[
                {
                  icon: Calendar,
                  text: "December 24, 2024",
                },
                {
                  icon: Location,
                  text: "DCS, UBIT Garden, UoK",
                },
              ].map(({ icon, text }, index) => (
                <div className="flex items-center gap-0" key={index}>
                  <img src={icon} alt={`icon-${index}`} />
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button>Register Now</Button>
            <Button className="bg-inherit border-2 border-white text-white py-[10px]">
              Contact Us
            </Button>
          </div>
        </article>
      </div>
      {/* timer */}
      <div className="flex justify-center gap-28 w-full py-5 bg-custom-orange text-center text-custom-maroom-dark">
        {Object.entries(countdown).map(([key, value]) => (
          <div className="text-center text-custom-maroom-dark" key={key}>
            <p className="text-[64px] leading-none font-bold">{value}</p>
            <p className="font-semibold text-xl">
              {key[0].toUpperCase() + key.substring(1, key.length)}
            </p>
          </div>
        ))}
      </div>
      {/* about */}
      <div id="about" className="flex items-center w-full">
        <div className="w-full p-10 flex flex-col gap-4">
          <h1 className="text-custom-maroom-dark font-bold text-5xl max-w-sm mr-auto">
            About Career Connect 2024
          </h1>
          <p className="text-black text-xl font-medium max-w-xl mr-auto">
            Career Connect is an annual event aimed at merging academia with the
            professional world, providing a platform for students and
            professionals to engage, learn, and grow. Attendees will participate
            in seminars, panel discussions, hackathons, and networking sessions
            designed to enhance their career prospects.
          </p>
          <div className="text-black">
            <h2 className="font-semibold text-xl">Event Highlights</h2>
            <ul className="list-disc pl-8">
              {aboutData.map((text, index) => (
                <li key={index} className="font-normal text-lg">
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full">
          <img src={AboutImage} alt="about" className="w-full" />
        </div>
      </div>
      {/* companies */}
      <div id="companies" className="p-10 flex flex-col gap-8">
        <article className="flex flex-col gap-3 w-full">
          <h1 className="text-custom-maroom-dark font-bold text-5xl">
            Participating Companies
          </h1>
          <p className="text-black font-medium text-lg max-w-5xl mr-auto">
            Career Connect 2024 is proud to host a diverse group of leading
            companies from various industries. These organizations are eager to
            connect with aspiring graduates, share insights, and discover new
            talent to drive innovation and growth.
          </p>
          <Button className="bg-custom-maroom-dark text-white w-fit">
            Register Your Company
          </Button>
        </article>
        <div className="flex flex-col gap-4">
          {companiesData.map(({ name, companies }, index) => (
            <div key={index}>
              <h2 className="text-black font-semibold text-[32px]">{name}</h2>
              <div className="flex items-center gap-2">
                {Object.entries(companies).map(([key, value]) => (
                  <div
                    key={`${index}-${key}`}
                    className="bg-[#D9D9D9] h-32 w-32"
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* team */}
      <div id="team" className="p-10 flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h1 className="text-custom-maroom-dark font-bold text-5xl">
            Meet Our Team
          </h1>
          <p className="text-black font-medium text-lg max-w-5xl mr-auto">
            The driving force behind Career Connect 2024 is a dedicated team of
            passionate individuals committed to making this event a grand
            success. Meet the people working tirelessly to connect aspirations
            with opportunities.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-4xl">Team Structure</h1>
          {teamData.map(({ heading, members }, index) => (
            <div key={index} className="flex flex-col gap-4 w-full text-black">
              <h2 className="font-semibold text-3xl">{heading}</h2>
              <div className="flex flex-wrap gap-3 w-full">
                {members.map((member, index) => (
                  <div
                    key={`${index}-${index}`}
                    className="flex flex-col gap-1"
                  >
                    <div className="bg-[#D9D9D9] h-[240px] w-[240px]"></div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-base font-medium">
                      {member.desgination}
                    </p>
                    <p className="text-sm font-normal max-w-52 mr-auto">
                      {member.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* sponsor */}
      <div id="sponsors" className="p-10 flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-custom-maroom-dark font-bold text-5xl">
            Become A Sponsor
          </h1>
          <p className="text-black font-medium text-lg max-w-5xl mr-auto">
            We extend our heartfelt gratitude to our sponsors for their
            invaluable support in making Career Connect 2024 a reality. Their
            contributions empower us to bridge the gap between academia and
            industry, fostering innovation and growth.
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-y-10 gap-x-8">
          {sponsorData.map((item, index) => (
            <div
              className="border-2 border-black rounded-[50px] py-5 px-10 relative"
              key={index}
            >
              <img
                src={item.icon}
                alt={`icon-${index}`}
                className="absolute -top-8"
              />
              <div className="mt-4">
                <h1
                  className="font-bold text-[40px]"
                  style={{
                    color: item.headingColor,
                  }}
                >
                  {item.heading}
                </h1>
                <p className="font-semibold text-2xl">
                  {item.detailedDescription}
                </p>
                <h2 className="italic font-bold text-[30px]">
                  Investment : {item.investment}
                </h2>
                {Object.entries(item.bulletPoints).map(([key, value]) => (
                  <li
                    key={`${index}-${key}`}
                    className="text-base font-semibold"
                  >
                    {value}
                  </li>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* event schedule */}
      <div id="schedule" className="">
        <div className="flex flex-col gap-3 p-10">
          <h1 className="text-custom-maroom-dark font-bold text-5xl">
            Event Schedule
          </h1>
          <p className="text-black font-medium text-lg max-w-5xl mr-auto">
            Mark your calendars! Here’s the detailed schedule for Career Connect
            2024. Stay informed about the event’s activities and plan your
            participation to make the most of this exciting opportunity.
          </p>
        </div>
      </div>
      {/* contact */}
      <div id="contact" className="flex items-center w-full">
        <div className="flex flex-col gap-3 w-full p-10">
          <div className="w-full flex flex-col gap-4">
            <h1 className="text-custom-maroom-dark font-bold text-5xl max-w-sm mr-auto">
              Get In Touch
            </h1>
            <p className="text-black text-xl font-medium max-w-xl mr-auto">
              Have questions about Career Connect 2024? We’re here to help!
              Reach out to us for event details, sponsorship inquiries, or any
              other assistance.
            </p>
          </div>
          <form className="flex flex-col gap-2 mt-3">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-base font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="border border-black rounded-lg p-4 placeholder:text-[#525252] placeholder:text-base placeholder:font-medium"
                placeholder="Name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-base font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="border border-black rounded-lg p-4 placeholder:text-[#525252] placeholder:text-base placeholder:font-medium"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-base font-medium">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                className="border border-black rounded-lg p-4 placeholder:text-[#525252] placeholder:text-base placeholder:font-medium"
                placeholder="+92 XXX XXXX"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-base font-medium">
                Message
              </label>
              <textarea
                type="text"
                name="message"
                className="border border-black rounded-lg p-4 placeholder:text-[#525252] placeholder:text-base placeholder:font-medium"
                placeholder="Message"
              />
            </div>
            <Button className="bg-custom-maroom-dark text-white w-56 py-4 mt-3">
              Send Message
            </Button>
          </form>
        </div>
        <div className="w-full">
          <img src={AboutImage} alt="about" className="w-full" />
        </div>
      </div>
      {/* footer */}
      <footer className="bg-custom-maroom-dark flex flex-col gap-6 text-white p-14">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-8">
            <div>
              <img src={Logo} alt="logo" />
            </div>
            <div>
              <h1 className="text-base font-semibold">Address:</h1>
              <p className="text-sm font-normal max-w-sm mr-auto">
                Department of Computer Science, UBIT, University of Karachi,
                Karachi, Pakistan.
              </p>
            </div>
            <div>
              <h1 className="text-base font-semibold">Contact:</h1>
              <p className="text-sm font-normal">+92 XXX XXXXX</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-white font-normal text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <hr className="border-2 border-white" />
        <div className="flex items-center justify-between w-full">
          <h1 className="text-base font-semibold">
            &copy; 2024 Career Connect | All Rights Reserved.
          </h1>
          <div className="flex items-center gap-2">
            {[Facebook, Instagram].map((icon, index) => (
              <img src={icon} key={index} />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};
