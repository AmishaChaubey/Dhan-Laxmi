// data.js - Contains all content data for banner sections

export const aboutPageData = {
  banner: {
    backgroundImage:
      "https://i.pinimg.com/736x/61/73/7f/61737f48a947be2e663260d018c887a2.jpg",
    title: "Ambulance Any Time Any Where",
    subtitle: "24/7 Emergency & Non-Emergency Ambulance Services in Saket",
  },

  breadcrumb: {
    homeLink: "/",
    homeText: "Home",
    currentPageText: "About",
  },

  introduction: {
    sectionLabel: "Who We Are",
    title: "Ambulance Services in Saket",
    description:
      "Providing fast, reliable, and life-saving medical transportation when every second matters",

    content: {
      row1: {
        text1: {
          before: "Ambulance services play a ",
          highlight: "critical role in the healthcare system",
          after:
            " by providing timely medical assistance during emergencies. In Saket, we ensure rapid response, expert care, and safe transportation for patients in need.",
          footer: "Available 24/7 for emergencies",
        },
        text2: {
          before:
            "Our ambulances are staffed with trained medical professionals and equipped with ",
          highlight: "essential life-saving medical equipment",
          after:
            ", ensuring immediate care and stabilization before reaching the hospital.",
        },
        image:
          "/dhanLakshmi-img/13.jpg",
        imageAlt: "Emergency ambulance service in Saket",
      },

      row2: {
        image:
          "/dhanLakshmi-img/12.jpg",
        imageAlt: "Non emergency ambulance transport",
        text1: {
          before:
            "Along with emergency care, we also provide ",
          highlight: "non-emergency medical transportation",
          after:
            " for patients requiring safe and comfortable transfers to hospitals, clinics, or home healthcare facilities.",
        },
        text2: {
          main:
            "Our non-emergency ambulance services are ideal for routine medical visits, hospital discharges, and long-distance patient transfers.",
          footer:
            "We prioritize patient comfort, safety, and continuous medical monitoring during transportation.",
        },
      },
    },

    distinctiveSection: {
      title: "Services We Provide",
      badge: "Trusted Ambulance Care",
      description: {
        before:
          "We are committed to delivering ",
        highlight: "fast, safe, and professional ambulance services",
        after:
          " across Saket and nearby areas, ensuring patients receive proper medical attention during transit.",
      },
      features: [
        {
          icon: "🚑",
          title: "Emergency Ambulance",
          titleColor: "#1e4d83",
          description:
            "24/7 emergency ambulance services equipped with oxygen, defibrillators, monitors, and trained medical staff.",
          bgGradient: "from-blue-50 to-white",
          borderColor: "border-blue-100/50",
          hoverGradient:
            "from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-transparent",
        },
        {
          icon: "🩺",
          title: "Non-Emergency Ambulance",
          titleColor: "#a81514",
          description:
            "Safe and comfortable medical transportation for non-critical patients, hospital visits, and home care transfers.",
          bgGradient: "from-red-50 to-white",
          borderColor: "border-red-100/50",
          hoverGradient:
            "from-red-600/0 to-red-600/0 group-hover:from-red-600/5 group-hover:to-transparent",
        },
        {
          icon: "⚕️",
          title: "Patient Care & Equipment",
          titleColor: "#1e4d83",
          description:
            "Continuous patient care including oxygen support, medication, pain management, and advanced medical equipment during transit.",
          bgGradient: "from-blue-50 to-white",
          borderColor: "border-blue-100/50",
          hoverGradient:
            "from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-transparent",
        },
      ],
    },
  },
};
