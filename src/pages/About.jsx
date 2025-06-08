import React from 'react';
import profileImage from '/assets/images/profile.jpg'; // Replace with your actual image path

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 text-blue-900 dark:text-white">
      {/* <img src={profileImage} alt="Brandon Tanaka" className="w-32 h-32 rounded-full mb-6 shadow-lg" /> */}
      <h1 className="text-3xl font-Bungee font-bold mb-2">Brandon Tanaka</h1>
      <p className="text-lg font-balsamiq max-w-2xl text-justify">
        I’m a Software Engineer with a strong background in software development, focused on building reliable and user-friendly systems.
        I enjoy taking complex challenges and turning them into simple, effective solutions that work well in the real world.
        Whether working on the front end or the back end, I care about writing clean, maintainable code and delivering high-quality results.
        I’ve worked closely with cross-functional teams in fast-paced environments, and I always bring a collaborative mindset.
        I’m also someone who genuinely enjoys learning and finding better ways to solve problems.
      </p>
    </div>
  );
};

export default About;