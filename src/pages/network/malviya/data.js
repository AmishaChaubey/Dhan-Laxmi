// data.js - Contains all content data for banner sections

export const aboutPageData = {
  banner: {
    backgroundImage:
      "https://i.pinimg.com/736x/61/73/7f/61737f48a947be2e663260d018c887a2.jpg",
    title: "Ambulance Services in Malviya Nagar",
    subtitle: "24/7 Emergency & Non-Emergency Ambulance | Any Time Any Where",
  },

  breadcrumb: {
    homeLink: "/",
    homeText: "Home",
    currentPageText: "About",
  },

  introduction: {
    sectionLabel: "Who We Are",
    title: "24/7 Ambulance Services in Malviya Nagar",
    description:
      "Fast, reliable, and affordable ambulance services in Malviya Nagar for emergency and non-emergency medical transportation",

    content: {
      row1: {
        text1: {
          before: "Ambulance services play a ",
          highlight: "vital role in emergency healthcare",
          after:
            " by providing immediate medical assistance and safe patient transport. Our ambulance services in Malviya Nagar ensure quick response and professional care during critical situations.",
          footer: "Serving Malviya Nagar 24/7",
        },
        text2: {
          before:
            "Our ambulances are equipped with ",
          highlight: "advanced life-saving medical equipment",
          after:
            " and operated by trained paramedics and medical staff to handle all types of medical emergencies efficiently.",
        },
        image:
          "/dhanLakshmi-img/12.jpg",
        imageAlt: "24/7 emergency ambulance service in Malviya Nagar",
      },

      row2: {
        image:
          "/dhanLakshmi-img/14.jpg",
        imageAlt: "Non emergency ambulance service in Malviya Nagar",
        text1: {
          before:
            "We also offer ",
          highlight: "non-emergency ambulance services in Malviya Nagar",
          after:
            " for hospital visits, routine medical checkups, patient discharge, and home healthcare transportation.",
        },
        text2: {
          main:
            "Our non-emergency medical transport services ensure patient comfort, safety, and continuous medical supervision throughout the journey.",
          footer:
            "Trusted ambulance service for safe and comfortable medical transport.",
        },
      },
    },

    distinctiveSection: {
      title: "Our Ambulance Services",
      badge: "Reliable Medical Transport",
      description: {
        before:
          "We provide ",
        highlight: "complete ambulance and patient care services",
        after:
          " in Malviya Nagar, ensuring timely medical support during both emergency and non-emergency situations.",
      },
      features: [
        {
          icon: "🚑",
          title: "Emergency Ambulance Service",
          titleColor: "#1e4d83",
          description:
            "24/7 emergency ambulance service in Malviya Nagar with oxygen support, cardiac monitors, defibrillators, and trained medical professionals.",
          bgGradient: "from-blue-50 to-white",
          borderColor: "border-blue-100/50",
          hoverGradient:
            "from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-transparent",
        },
        {
          icon: "🩺",
          title: "Non-Emergency Ambulance Service",
          titleColor: "#a81514",
          description:
            "Affordable non-emergency ambulance services for hospital transfers, medical appointments, and home healthcare needs.",
          bgGradient: "from-red-50 to-white",
          borderColor: "border-red-100/50",
          hoverGradient:
            "from-red-600/0 to-red-600/0 group-hover:from-red-600/5 group-hover:to-transparent",
        },
        {
          icon: "⚕️",
          title: "Patient Care & Medical Equipment",
          titleColor: "#1e4d83",
          description:
            "Professional patient care during transport including oxygen supply, medication, pain management, vital monitoring, and advanced medical equipment.",
          bgGradient: "from-blue-50 to-white",
          borderColor: "border-blue-100/50",
          hoverGradient:
            "from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-transparent",
        },
      ],
    },
  },
};
