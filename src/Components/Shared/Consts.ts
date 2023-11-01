import neurology from '@/assets/Images/Icons/Neurology.png';
import cardiology from '@/assets/Images/Icons/Cardiology.png';
import orthopedics from '@/assets/Images/Icons/Orthopoedics.png';
import surgery from '@/assets/Images/Icons/Surgery.png';
import dentistry from '@/assets/Images/Icons/Dentistry.png';
import radiology from '@/assets/Images/Icons/Radiology.png';
import urology from '@/assets/Images/Icons/Urology.png';
import medicine from '@/assets/Images/Icons/Medicine.png';
import seeMoreImage from '@/assets/Images/Icons/seeMoreImage.png';

import Banner1 from '@/assets/Images/Banner1.png';
import Banner2 from '@/assets/Images/Banner2.png';

import doc1 from '@/assets/Images/Doctors/doc1.png';
import doc2 from '@/assets/Images/Doctors/doc2.png';
import doc3 from '@/assets/Images/Doctors/doc3.png';
import doc4 from '@/assets/Images/Doctors/doc4.png';

import user1 from '@/assets/Images/users/user1.jpg';
import user2 from '@/assets/Images/users/user2.jpg';
import user3 from '@/assets/Images/users/user3.jpg';

import logo from '@/assets/Images/logo.png';

export const links = ['Home', 'Doctors', 'Services', 'Reviews'];

export const descNums = [
  {
    num: '500+',
    text: 'Expert Doctors',
  },
  {
    num: '20k+',
    text: 'Happy Patients',
  },
  {
    num: '24/7',
    text: 'Emergency Service',
  },
  {
    num: '100+',
    text: 'Operation Theatres',
  },
  {
    num: '850+',
    text: 'Hospital Rooms',
  },
];

export const ServicesData = [
  {
    img: neurology,
    title: 'Neurology',
    id: 'neurology',
    heading: 'Neurology Department',
    texts: [
      'Expert neurological consultations',
      'Comprehensive brain and nerve care',
      'Advanced neuroimaging services',
      'Treatment for epilepsy and seizures',
      'Memory and cognitive assessments',
      'Pediatric neurology expertise',
      'Movement disorders management',
    ],
  },
  {
    img: cardiology,
    title: 'Cardiology',
    id: 'cardiology',
    heading: 'Cardiology Department',
    texts: [
      'Electrocardiogram (ECG)',
      'Echocardiogram',
      'Color Doppler Echo',
      'Dobutamine Stress Echo (DSE)',
      'Transesophageal Echo (TEE)',
      'Exercise Tolerance Test (ETT/TMT)',
      'Halter monitor',
      '24 Hour Ambulatory BP monitor',
      'Tilt Test/Tilt Table Test',
    ],
  },
  {
    img: orthopedics,
    title: 'Orthopedics',
    id: 'orthopedics',
    heading: 'Orthopedics Department',
    texts: [
      'Orthopedic surgery and joint replacements',
      'Sports injury and trauma care',
      'Physical therapy and rehabilitation',
      'Spine and back pain solutions',
      'Arthritis and joint disorder treatment',
      'Orthopedic consultations',
      'Customized orthopedic care plans',
    ],
  },
  {
    img: surgery,
    title: 'Surgery',
    id: 'surgery',
    heading: 'Surgery Department',
    texts: [
      'Minimally invasive and laparoscopic surgery',
      'Gastrointestinal surgery and endoscopy',
      'Plastic and reconstructive surgery',
      'Cancer and tumor resection',
      'Post-operative care and recovery',
      'Surgical consultations',
      'Emergency surgical interventions',
    ],
  },
  {
    img: dentistry,
    title: 'Dentistry',
    id: 'dentistry',
    heading: 'Dentistry Department',
    texts: [
      'Routine dental check-ups and cleanings',
      'Cosmetic dentistry and teeth whitening',
      'Oral surgery and extractions',
      'Dental implants and restorations',
      'Pediatric and family dentistry',
      'Gum disease treatment',
      'Orthodontic and braces options',
    ],
  },
  {
    img: radiology,
    title: 'Radiology',
    id: 'radiology',
    heading: 'Radiology Department',
    texts: [
      'Advanced diagnostic imaging services',
      'Mammography and breast health screening',
      'Interventional radiology procedures',
      'Virtual colonoscopy and body scans',
      'Radiology consultations',
      'Fast and accurate imaging results',
      'State-of-the-art radiology technology',
    ],
  },
  {
    img: urology,
    title: 'Urology',
    id: 'urology',
    heading: 'Urology Department',
    texts: [
      'Urinary tract and kidney evaluations',
      'Urologic surgery and stone removal',
      "Men's and women's urological health",
      'Prostate and bladder care',
      'Incontinence and pelvic floor therapy',
      'Urological consultations',
      'Comprehensive urology solutions',
    ],
  },
  {
    img: medicine,
    title: 'Medicine',
    id: 'medicine',
    heading: 'Medicine Department',
    texts: [
      'Primary care and internal medicine',
      'Chronic disease management and prevention',
      'Immunizations and wellness checks',
      'Holistic and integrative medicine',
      'Geriatric and pediatric medicine',
      'Health education and lifestyle coaching',
      'Individualized medical treatment plans',
    ],
  },
  {
    img: seeMoreImage,
    title: 'See More',
    id: 'seemore',
    heading: 'Explore Our Services',
    texts: [
      'Explore additional healthcare options',
      'Specialized medical services for all needs',
      'Discover a world of medical solutions',
      'Find the right care for you',
      'Comprehensive healthcare offerings',
      'More than meets the eye',
      'Healthcare beyond expectations',
    ],
  },
];

export const Banner1Data = {
  heading: 'We Are Always Here To Ensure Best Medical Treatment',
  texts: [
    'Easy make appointment',
    'Top specialist doctors',
    '24/7 service',
    'Discount for all medical treatments',
    'Enrolment is quick and easy',
  ],
  img: Banner1,
};

export const DoctorsData = {
  heading: 'Meet Our Specialists',
  doctors: [
    {
      img: doc1,
      name: 'Dr. John Smith',
      job: 'Cardiologist',
    },
    {
      img: doc2,
      name: 'Dr. Kristin Watson',
      job: 'Dentist',
    },
    {
      img: doc3,
      name: 'Dr. Robert Flores',
      job: 'Surgeon',
    },
    {
      img: doc4,
      name: 'Dr. Katherine Allen',
      job: 'Neurologist',
    },
  ],
  heading2: 'Who Are We?',
  desc: 'A collaborative hospital service website is a digital platform that brings together healthcare professionals, patients and administrators to streamline and enganhe the delivery of healthcare services. This innovative platform allows for seamless communication and coordination among healthcare teams, enabling them to provide more efficient and personalized care to patients.',
  img: Banner2,
};

export const FeedbackData = {
  heading: 'Patient Feedback',
  feedbacks: [
    {
      img: user1,
      name: 'Ralph Edwards',
      job: 'Businessman',
      desc: 'My experience with this hospital has been great. I highly recommend their services to anyone in need of quility healthcare. they truly prioritize patients care!',
    },
    {
      img: user2,
      name: 'Josh Smith',
      job: 'Engineer',
      desc: 'The healthcare professionals were top-natch. they were knowledgeable, attentive, and took the time to answer all of my questions and address my concerns',
    },
    {
      img: user3,
      name: 'Eleanor Pena',
      job: 'Teacher',
      desc: "One thing that stood out to me was the efficiency of the service, i didn't have to wait long for my appointment, and the entire process was hassle-free experience",
    },
  ],
};

export const FooterData = {
  logo: logo,
  addresses: ['4517 Washington Ave', 'Manchester, Kentucky 39495'],
  phone: '+1 (505) 555-0125',
  departments: [
    'Cardiology',
    'Dentistry',
    'Neurology',
    'Orthopedics',
    'Surgery',
    'More',
  ],
  links: links,
};
