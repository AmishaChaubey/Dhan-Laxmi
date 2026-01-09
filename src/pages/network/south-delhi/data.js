// data.js - Contains all content data for banner sections

export const aboutPageData = {
  banner: {
    backgroundImage:
      "https://i.pinimg.com/736x/61/73/7f/61737f48a947be2e663260d018c887a2.jpg",
    title: "Ambulance Services in South Delhi",
    subtitle: "24/7 Emergency & Non-Emergency Ambulance | Any Time Any Where",
  },

  breadcrumb: {
    homeLink: "/",
    homeText: "Home",
    currentPageText: "About",
  },

  introduction: {
    sectionLabel: "Who We Are",
    title: "Reliable Ambulance Services in South Delhi",
    description:
      "Fast, safe, and affordable ambulance services in South Delhi providing emergency and non-emergency medical transportation 24/7",

    content: {
      row1: {
        text1: {
          before: "Ambulance services play a ",
          highlight: "crucial role in emergency healthcare",
          after:
            " by delivering timely and life-saving medical assistance. Our ambulance services in South Delhi ensure rapid response, patient stabilization, and safe transport to hospitals.",
          footer: "Serving South Delhi 24/7",
        },
        text2: {
          before:
            "Our ambulances are equipped with ",
          highlight: "advanced medical equipment and trained medical professionals",
          after:
            ", making them the first and most reliable responders during medical emergencies.",
        },
        image:
          "https://i.pinimg.com/736x/72/13/03/721303dc38e01c8bdf54e396ed3e047e.jpg",
        imageAlt: "Emergency ambulance service in South Delhi",
      },

      row2: {
        image:
          "https://i.pinimg.com/736x/08/36/20/0836206c353aeab1dc6fdf991624f3fb.jpg",
        imageAlt: "Non emergency ambulance service in South Delhi",
        text1: {
          before:
            "We also provide ",
          highlight: "non-emergency ambulance services in South Delhi",
          after:
            " for hospital transfers, medical appointments, home healthcare, and routine patient transportation.",
        },
        text2: {
          main:
            "Our non-emergency ambulance services ensure comfortable, safe, and medically supervised transportation for non-critical patients.",
          footer:
            "Patient safety, comfort, and dignity remain our top priorities.",
        },
      },
    },

    distinctiveSection: {
      title: "Our Ambulance Services",
      badge: "Trusted Medical Transport",
      description: {
        before:
          "Our ambulance services in South Delhi are designed to provide ",
        highlight: "complete patient care and medical support during transport",
        after:
          ", ensuring timely and professional healthcare assistance in every situation.",
      },
      features: [
        {
          icon: "🚑",
          title: "Emergency Ambulance Services",
          titleColor: "#1e4d83",
          description:
            "24/7 emergency ambulance services in South Delhi equipped with oxygen cylinders, defibrillators, cardiac monitors, ventilators, and trained medical staff.",
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
            "On-board patient care services including oxygen support, medication administration, pain management, vital monitoring, and advanced medical equipment.",
          bgGradient: "from-blue-50 to-white",
          borderColor: "border-blue-100/50",
          hoverGradient:
            "from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-transparent",
        },
      ],
    },
  },
};
