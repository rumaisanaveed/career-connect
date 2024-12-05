import React, { useState, useEffect } from "react";
import Logo from "./assets/images/logo.jpg";
import Person from "./assets/images/person.jpg";
import {
  Calendar,
  MapPin,
  Users,
  Building2,
  Trophy,
  Contact,
  Send,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

const Previous = () => {
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

  const participatingCompanies = [
    "/api/placeholder/200/100",
    "/api/placeholder/200/100",
    "/api/placeholder/200/100",
    "/api/placeholder/200/100",
  ];

  const sponsorLevels = [
    {
      name: "Platinum Sponsor",
      benefits: [
        "Prominent logo placement",
        "Speaking opportunities",
        "Premium visibility",
      ],
    },
    {
      name: "Gold Sponsor",
      benefits: [
        "Logo on marketing materials",
        "Booth space",
        "Significant visibility",
      ],
    },
    {
      name: "Silver Sponsor",
      benefits: ["Logo placement", "Moderate visibility"],
    },
    {
      name: "Bronze Sponsor",
      benefits: ["Logo on event program", "Basic recognition"],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-maroon-50 to-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <img src={Logo} alt="University Logo" className="h-12 w-12" />
          <div className="space-x-6 text-gray-700">
            {[
              "Home",
              "About",
              "Companies",
              "Students",
              "Schedule",
              "Sponsors",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-maroon-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="pt-24 text-center bg-cover bg-center"
        id="home"
        style={{
          backgroundImage:
            'linear-gradient(rgba(128,0,0,0.7), rgba(128,0,0,0.7)), url("/api/placeholder/1500/600")',
        }}
      >
        <h1 className="text-5xl font-bold text-white mb-4">
          Career Connect 2024
        </h1>
        <div className="flex justify-center space-x-4 text-white mb-8">
          <div className="flex items-center">
            <Calendar className="mr-2" />
            <span>December 24, 2024</span>
          </div>
          <div className="flex items-center">
            <MapPin className="mr-2" />
            <span>Department of Computer Science, UBIT Garden</span>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="flex justify-center space-x-4 mb-8">
          {Object.entries(countdown).map(([key, value]) => (
            <div key={key} className="bg-white/20 p-4 rounded-lg text-center">
              <div className="text-4xl font-bold text-white">{value}</div>
              <div className="text-white/80">{key}</div>
            </div>
          ))}
        </div>

        <button className="bg-white text-maroon-600 px-8 py-3 rounded-full font-semibold hover:bg-maroon-50 transition-colors mb-12">
          Register Now
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          About Career Connect 2024
        </h2>
        <p className="max-w-4xl mx-auto text-center text-gray-700">
          The Department of Computer Science at the University of Karachi is
          pleased to invite you to 'Career Connect & Alumni Dinner 2024,' a
          gathering that brings together industry professionals, students, and
          alumni, fostering meaningful connections and collaborations across the
          community.
        </p>

        {/* Event Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: Users,
              title: "Networking",
              desc: "Connect with professionals and alumni",
            },
            {
              icon: Trophy,
              title: "Competitions",
              desc: "Hackathons and gaming events",
            },
            {
              icon: Building2,
              title: "Tech Exhibitions",
              desc: "Innovative digital stalls",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow"
            >
              <Icon className="mx-auto mb-4 text-maroon-600" size={48} />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section id="team" className="bg-gray-50 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>

          {/* Chairman */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-maroon-600 mb-4">
              Meet Our Chairman
            </h3>
            <img
              src={Person}
              alt="Chairman"
              className="mx-auto rounded-full mb-4 h-28 w-28"
            />
            <p className="text-gray-700 max-w-xl mx-auto">
              Dr. Ahmed Ali is the Chairman of the Department of Computer
              Science, University of Karachi. With decades of experience, he is
              a visionary leader and mentor, guiding students to excel in their
              careers.
            </p>
          </div>

          {/* Student Advisors */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-maroon-600 mb-4">
              Our Student Advisors
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2].map((_, index) => (
                <div key={index} className="text-center">
                  <img
                    src={Person}
                    alt={`Advisor ${index + 1}`}
                    className="mx-auto rounded-full mb-4 h-28 w-28"
                  />
                  <p className="text-gray-700 max-w-md mx-auto">
                    Advisor {index + 1} is an experienced mentor helping
                    students achieve their academic and professional goals.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Final Year Students */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-maroon-600 mb-4">
              Our Final Year Students
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="text-center">
                  <img
                    src={Person}
                    alt={`Final Year Student ${index + 1}`}
                    className="mx-auto rounded-full mb-4 h-28 w-28"
                  />
                  <p className="text-gray-700">
                    Final Year Student {index + 1}
                  </p>
                  <p className="text-gray-500 text-sm">Team Leader</p>
                </div>
              ))}
            </div>
          </div>

          {/* Third Year Students */}
          <div>
            <h3 className="text-2xl font-semibold text-maroon-600 mb-4">
              Our Third Year Students
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="text-center">
                  <img
                    src={Person}
                    alt={`Third Year Student ${index + 1}`}
                    className="mx-auto rounded-full mb-4 h-28 w-28
                    "
                  />
                  <p className="text-gray-700">
                    Third Year Student {index + 1}
                  </p>
                  <p className="text-gray-500 text-sm">Developer</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section id="companies" className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Participating Companies</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {participatingCompanies.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Company Logo ${index + 1}`}
                className="h-20 grayscale hover:grayscale-0 transition-all"
              />
            ))}
          </div>
          <button className="mt-8 bg-maroon-600 text-white px-6 py-3 rounded-full hover:bg-maroon-700 transition-colors">
            Register Your Company
          </button>
        </div>
      </section>

      {/* Sponsorship Levels */}
      <section id="sponsors" className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Sponsorship Opportunities
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {sponsorLevels.map((level, index) => (
            <div
              key={level.name}
              className="bg-white p-6 rounded-lg shadow-md text-center"
              style={{ transform: `translateY(${index * 20}px)` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-maroon-600">
                {level.name}
              </h3>
              <ul className="space-y-2 text-gray-600">
                {level.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-maroon-600 text-white py-16">
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-6">Have questions? We'd love to hear from you!</p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Send className="mr-4" />
                <span>dcs@uok.edu.pk</span>
              </div>
              <div className="flex items-center">
                <Contact className="mr-4" />
                <span>021-99261072</span>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-maroon-200">
                  <Facebook />
                </a>
                <a href="#" className="hover:text-maroon-200">
                  <Twitter />
                </a>
                <a href="#" className="hover:text-maroon-200">
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
          <div>
            <form className="bg-white/10 p-8 rounded-lg">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full mb-4 p-3 bg-white/20 rounded text-white placeholder-white/50"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full mb-4 p-3 bg-white/20 rounded text-white placeholder-white/50"
              />
              <textarea
                placeholder="Your Message"
                className="w-full mb-4 p-3 bg-white/20 rounded text-white placeholder-white/50 h-32"
              />
              <button className="w-full bg-white text-maroon-600 py-3 rounded-full font-semibold hover:bg-maroon-50">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <div className="mb-4 space-x-4">
            {[
              "Home",
              "About",
              "Companies",
              "Students",
              "Schedule",
              "Sponsors",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-maroon-400"
              >
                {item}
              </a>
            ))}
          </div>
          <p className="mb-4">
            Department of Computer Science, University of Karachi
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-maroon-400">
              <Facebook />
            </a>
            <a href="#" className="hover:text-maroon-400">
              <Twitter />
            </a>
            <a href="#" className="hover:text-maroon-400">
              <Linkedin />
            </a>
          </div>
          <p className="mt-4 text-sm">
            &copy; 2024 Career Connect. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Previous;
