import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const timelineData = [
  {
    type: 'career',
    date: '2023.1 - 2025.7',
    company: 'RackSpace',
    title: 'Senior Software Engineer',
    logo: '/assets/images/career/RackSpace_logo.png',
    description: 'Developed scalable solutions and led cross-functional teams.',
    images: [
      { original: '/assets/images/career/RackSpace1.jpg', thumbnail: '/assets/images/career/RackSpace1.jpg' },
      { original: '/assets/images/career/RackSpace2.jpg', thumbnail: '/assets/images/career/RackSpace2.jpg' },
      { original: '/assets/images/career/RackSpace3.jpg', thumbnail: '/assets/images/career/RackSpace3.jpg' }
    ],
  },
  {
    type: 'career',
    date: '2020.3 - 2022.11',
    company: 'SmartSheet',
    title: 'Software Engineer',
    logo: '/assets/images/career/SmartSheet_logo.png',
    description: 'Developed scalable solutions and led cross-functional teams.',
    images: [
      { original: '/assets/images/career/SmartSheet1.jpg', thumbnail: '/assets/images/career/SmartSheet1.jpg' },
      { original: '/assets/images/career/SmartSheet2.jpg', thumbnail: '/assets/images/career/SmartSheet2.jpg' },
      { original: '/assets/images/career/SmartSheet3.jpg', thumbnail: '/assets/images/career/SmartSheet3.jpg' }
    ],
  },
  {
    type: 'career',
    date: '2018.1 - 2020.2',
    company: 'LogicMonitor',
    title: 'Software Engineer',
    logo: '/assets/images/career/LogicMonitor_logo.webp',
    description: 'Developed scalable solutions and led cross-functional teams.',
    images: [
      { original: '/assets/images/career/LogicMonitor1.png', thumbnail: '/assets/images/career/LogicMonitor1.png' },
      { original: '/assets/images/career/LogicMonitor2.png', thumbnail: '/assets/images/career/LogicMonitor2.png' },
      { original: '/assets/images/career/LogicMonitor3.png', thumbnail: '/assets/images/career/LogicMonitor3.png' }
    ],
  },
  {
    type: 'career',
    date: '2015.2 - 2017.10',
    company: 'CalPortland',
    title: 'Software Engineer',
    logo: '/assets/images/career/CalPortland_logo1.png',
    description: 'Developed scalable solutions and led cross-functional teams.',
    images: [
      { original: '/assets/images/career/CalPortland1.png', thumbnail: '/assets/images/career/CalPortland1.png' },
      { original: '/assets/images/career/CalPortland2.jpg', thumbnail: '/assets/images/career/CalPortland2.jpg' },
      { original: '/assets/images/career/CalPortland3.png', thumbnail: '/assets/images/career/CalPortland3.png' }
    ],
  },
  {
    type: 'education',
    date: '2009 - 2014',
    title: 'B.S. in Computer Science',
    company: 'California Polytechnic State University, San Luis Obispo',
    degree: 'B.S. in Computer Science',
    logo: '/assets/images/career/CalPoly_logo.png',
    description: 'Graduated with honors, focusing on software engineering and systems design.',
    images: [
      { original: '/assets/images/career/CALPOLY1.jpg', thumbnail: '/assets/images/career/CALPOLY1.jpg' },
      { original: '/assets/images/career/CALPOLY2.jpg', thumbnail: '/assets/images/career/CALPOLY2.jpg' }
    ],
  },
  // Add more entries as needed
];

const Career = () => {
  return (
    <div className="pt-24 pb-24 px-4 text-blue-900 dark:text-white">
      <h1 className="text-3xl font-bold text-center mb-10">Career & Education</h1>
      <VerticalTimeline lineColor='#4169E1'>
        {timelineData.map((item, idx) => (
          <VerticalTimelineElement
            key={idx}
            date={item.date}
            contentStyle={{
              background: 'transparent',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
              backdropFilter: 'none',
              border: '1px solid rgba(255, 255, 255, 0.1)', // Optional border
            }}
            contentArrowStyle={{ border: 'none' }}
            iconStyle={
              item.type === 'career' ? {
                background: '#1E90FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '5px',
                boxShadow: 'none',
                border: '3px solid #4169E1'
              } : {
                background: '#00FF7F',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '5px',
                boxShadow: 'none',
                border: '3px solid #4169E1'
              }
            }
            icon={
              <img
                src={item.logo}
                alt={`${item.company || item.title} logo`}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            }
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            {item.company && <h4 className="text-sm italic">{item.company}</h4>}
            <p className="text-sm italic mb-2">{item.date}</p>
            {/* <p>{item.description}</p> */}
            {item.images && (
              <div className="mt-4">
                <ImageGallery
                  items={item.images}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  autoPlay={false}
                  // slideInterval={3000}
                  additionalClass="custom-image-gallery"

                  renderLeftNav={(onClick, disabled) => (
                    <button
                      onClick={onClick}
                      disabled={disabled}
                      style={{ position: 'absolute', top: '50%', left: 10, zIndex: 1, background: 'none', border: 'none' }}
                    >
                      <FaChevronLeft size={32} color="white" />
                    </button>
                  )}
                  renderRightNav={(onClick, disabled) => (
                    <button
                      onClick={onClick}
                      disabled={disabled}
                      style={{ position: 'absolute', top: '50%', right: 10, zIndex: 1, background: 'none', border: 'none' }}
                    >
                      <FaChevronRight size={32} color="white" />
                    </button>
                  )}

                />
              </div>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Career;