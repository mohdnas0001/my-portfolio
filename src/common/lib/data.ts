import React from 'react';

import campwithusImg from '@/../public/images/camp-with-us.png';
import carcatalogImg from '@/../public/images/car-catalog.png';
import techAtlasImg from '@/../public/images/tech-atlas.png';
import projectmanagementImg from '@/../public/images/project-management.png';
import reactfoodImg from '@/../public/images/react-food.png';
import portfolioImg from '@/../public/images/portfolio.png';
import nspImg from '@/../public/images/nsp.png';
import cynegieImg from '@/../public/images/cynegie.png';
import { BookIcon, BriefcaseBusinessIcon } from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Heshbon Technologies',
    location: 'Lagos, Nigera',
    description:
      'Front-end Developer. ',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Nov 2024 - March 2025',
  },
  {
    title: 'Thermolinks',
    location: 'Abuja, Nigeria',
    description:
      'Full-Stack Developer. Delivering flawless UI/UX, Frontend Workflow, Architecture & App Development.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'January 2024 - Present',
  },
  {
    title: 'Editec Dynamic Concepts',
    location: 'Abuja, Nigeria',
    description:
      'Software Developer , I was responsible for developing and maintaining the company’s software products.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'February 2025 - Present',
  },
  {
    title: 'Sule Lamido University.',
    location: 'Kafin Hausa, Nigeria',
    description: `Bachelor's degree in Computer Science. The faculty of Information and Technology.`,
    icon: React.createElement(BookIcon),
    date: 'Sep 2018 - Jun 2023',
  },
] as const;

export const images = {
  campwithusImg,
  carcatalogImg,
  techAtlasImg,
  projectmanagementImg,
  reactfoodImg,
};

export const projectsData = [
  {
    title: 'Nigerian Startup Portal',
    description: `The portal facilitate the labelling of Nigerian Startups and the registration of Venture Capitalists, Angel Investors, Accelerators, Incubators & Innovation Hubs (A.I.I.), and Civil Society Organisations involved in advancement of Technology and Innovation.`,
    tags: ['React', 'TypeScript', 'Next.js', 'Material UI', 'Javascript'],
    imageUrl: nspImg,
    link: 'https://startup.gov.ng/',
  },
  {
    title: 'Cynegie HR',
    description:
      'The solution is designed to streamline and optimize workflows for the HR department of a company. The system addresses key challenges such as employee hiring, payroll processing, and leave management. Built to enhance operational efficiency, improve data accuracy, and simplify administrative tasks, the solution empowers HR teams to manage critical processes seamlessly.',
    tags: ['TypeScript', 'React', 'Next.js' , 'Next.js', 'Re charts', 'Tailwind css'],
    imageUrl: cynegieImg,
    link: 'https://cynegie-frontend.vercel.app/',
  },
  {
    title: 'Tech Atlas',
    description:
      'Built a platform to geolocate tech centers in Nigeria, offering insights and tech center details with location. Developed using React, TypeScript, Next.js, Mapbox, and Tailwind CSS for an interactive, efficient interface.',
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Mapbox',
      'Tailwind',
    ],
    imageUrl: techAtlasImg,
    link: '',
  },
  {
    title: 'Portfolio',
    description: `Portfolio that you're currently viewing! This project showcases my work and provides information about me.`,
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Framer Motion',
      'Cloudinary',
      'React Email',
      'Tailwind',
    ],
    imageUrl: portfolioImg,
    link: 'https://my-portfolio-pz0ft7tf9-mohammed-nasirs-projects.vercel.app/',
  },

  // {
  //   title: 'Surge',
  //   description:
  //     'Service that allows users to build and manage their own websites with integrated payment processing.',
  //   tags: [
  //     'React',
  //     'TypeScript',
  //     'Next.js',
  //     'MySQL',
  //     'Clerk',
  //     'Stripe Connect',
  //     'Shadcn',
  //     'Tailwind',
  //   ],
  //   imageUrl: surgeImg,
  //   link: 'https://github.com/bbyc4kes/surge',
  // },
] as const;

export const skillsData = [
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  // ['Express', '/svgs/express-original.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['Framer', '/svgs/framer.svg'],
  ['Shadcn', '/svgs/shadcnui.svg'],
  // ['Headless', '/svgs/brand-headlessui.svg'],
  ['Redux', '/svgs/redux-original.svg'],
  ['Prisma', '/svgs/file-type-light-prisma.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['PostgreSQL', '/svgs/postgresql.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  ['Tanstack Query', '/svgs/react-query-seeklogo.svg'],
  ['Tanstack Table', '/svgs/db-table-svgrepo-com.svg'],
  ['Cloudinary', '/svgs/cloudinary.svg'],
  // ['Golang', '/svgs/golang.svg'],
  // ['Docker', '/svgs/Docker.svg'],
  // ['Clerk', '/svgs/clerk.svg'],
  ['Axios', '/svgs/axios.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  // ['Sass', '/svgs/Sass.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['', '/svgs/etc.svg'],
] as const;
