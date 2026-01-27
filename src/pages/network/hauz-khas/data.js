// data.js - Contains all content data for banner sections

export const aboutPageData = {
  banner: {
    backgroundImage:
      "https://i.pinimg.com/736x/61/73/7f/61737f48a947be2e663260d018c887a2.jpg",
    title: "Ambulance Services in Hauz Khas",
    subtitle: "24/7 Emergency & Non-Emergency Ambulance | Any Time Any Where",
  },

  breadcrumb: {
    homeLink: "/",
    homeText: "Home",
    currentPageText: "About",
  },

  introduction: {
    sectionLabel: "Who We Are",
    title: "24/7 Ambulance Services in Hauz Khas",
    description:
      "Fast, reliable, and affordable ambulance services in Hauz Khas providing emergency and non-emergency medical transportation",

    content: {
      row1: {
        text1: {
          before: "Ambulance services play a ",
          highlight: "vital role in emergency healthcare",
          after:
            " by delivering timely and life-saving medical assistance. Our ambulance services in Hauz Khas ensure quick response and safe transportation to hospitals.",
          footer: "Serving Hauz Khas 24/7",
        },
        text2: {
          before:
            "Our ambulances are fully equipped with ",
          highlight: "advanced life-saving medical equipment and trained staff",
          after:
            ", making them the most reliable first responders during medical emergencies.",
        },
        image:
          "/dhanLakshmi-img/12.jpg",
        imageAlt: "Emergency ambulance service in Hauz Khas",
      },

      row2: {
        image:
          "/dhanLakshmi-img/20.jpeg",
        imageAlt: "Non emergency ambulance service in Hauz Khas",
        text1: {
          before:
            "We also provide ",
          highlight: "non-emergency ambulance services in Hauz Khas",
          after:
            " for hospital transfers, medical appointments, home healthcare services, and routine patient transportation.",
        },
        text2: {
          main:
            "Our non-emergency ambulance services ensure safe, comfortable, and medically supervised transportation for non-critical patients.",
          footer:
            "Patient comfort, dignity, and safety are always our top priorities.",
        },
      },
    },

    distinctiveSection: {
      title: "Our Ambulance Services",
      badge: "Trusted Medical Transport",
      description: {
        before:
          "Our ambulance services in Hauz Khas are designed to provide ",
        highlight: "complete patient care and medical support during transport",
        after:
          ", ensuring timely and professional healthcare assistance at all times.",
      },
      features: [
        {
          icon: "🚑",
          title: "Emergency Ambulance Services",
          titleColor: "#1e4d83",
          description:
            "24/7 emergency ambulance services in Hauz Khas equipped with oxygen cylinders, defibrillators, ventilators, monitors, and trained medical professionals.",
          bgGradient: "from-blue-50 to-white",
          borderColor: "border-blue-100/50",
          hoverGradient:
            "from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-transparent",
        },
        {
          icon: "🩺",
          title: "Non-Emergency Ambulance Services",
          titleColor: "#a81514",
          description:
            "Affordable non-emergency ambulance services for hospital visits, patient discharge, medical checkups, and home healthcare transportation.",
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
            "On-board patient care including oxygen support, medication administration, pain management, vital monitoring, and advanced medical equipment.",
          bgGradient: "from-blue-50 to-white",
          borderColor: "border-blue-100/50",
          hoverGradient:
            "from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-transparent",
        },
      ],
    },
  },
};
