import { larri, noori, yaja } from "../assets/headshots";
import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    estate,
    linkedin,
    pricewise,
    snapgram,
    summiz,
    threads,
} from "../assets/icons";

export const skills = [
     
    {
        imageUrl: larri,
        name: "larri",
        type: "Frontend",
    },

    {
        imageUrl: noori,
        name: "noori",
        type: "Frontend",
    },
    
    {
        imageUrl: yaja,
        name: "yaja",
        type: "Frontend",
    }

     
];

export const experiences = [
    {
        title: "Gen Scholars",
        company_name: "Yajaira",
        icon: starbucks,
        iconBg: "#accbe1",
        //date: "March 2020 - April 2021",
        points: [
            "Gen Scholars helps students find scholarships to fund college education.",
            "We provide free resources on Instagram and LinkedIn.",
            "We hold workshops for students on How to Find Scholarships",
            "Currently we hold over 1,300 followers on all platforms"
        ],
    },
    {
        title: "Media Service",
        company_name: "Noori",
        icon: tesla,
        iconBg: "#fbc3bc",
        //date: "Jan 2021 - Feb 2022",
        points: [
            "On site for university classes, events, and assorted occasions for the set up and break down of A/V equipment.",
            "Responsible for the maintenance and organization of various A/V equipment.",
            "On site for any electronic failure in regard to classroom, event, and specific stage equipment.",
    
        ],
    },
    {
        title: "Research Assistant",
        company_name: "Larriyah Graham",
        icon: shopify,
        iconBg: "#b7e4c7",
        //date: "Jan 2022 - Jan 2023",
        points: [
            " Conducted comprehensive research on TikTok, focusing on content creation strategies, user interaction dynamics, and content categorization on the platform.",
            "  Implemented TikTok APIs into the VIDEOLab platform, enhancing data integration and analysis capabilities",
            
        ],
    } 
];

export const socialLinks = [
   
    {
        name: 'Noori LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/noori-tween-018208290/',
    },
    {
        name: 'Larriyah LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/larriyah-g-7519b1217/',
    },

    {
        name: 'Yajaira LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/yajaira-bonilla/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];