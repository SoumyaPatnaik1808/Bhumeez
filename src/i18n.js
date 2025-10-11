import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      dashboardTitle: "Farm Dashboard",
      monitorText: "Monitor your farm’s real-time conditions",
      temperature: "Temperature",
      soilMoisture: "Soil Moisture",
      sunlight: "Sunlight",
      coLevel: "CO₂ Level",
      aiRecommendation: "AI Recommendation",
      bestCrop: "Best Crop",
      expectedYield: "Expected Yield",
      netProfit: "Net Profit Estimate",
      detailedReport: "Get Detailed Report",
      recommendationText:
        "Based on current soil conditions and weather patterns, wheat cultivation is recommended for optimal yield and profitability.",
    },
  },

  hi: {
    translation: {
      dashboardTitle: "फार्म डैशबोर्ड",
      monitorText: "अपने खेत की वास्तविक समय की स्थिति की निगरानी करें",
      temperature: "तापमान",
      soilMoisture: "मिट्टी की नमी",
      sunlight: "धूप",
      coLevel: "CO₂ स्तर",
      aiRecommendation: "एआई सिफारिश",
      bestCrop: "सर्वश्रेष्ठ फसल",
      expectedYield: "अपेक्षित उत्पादन",
      netProfit: "शुद्ध लाभ अनुमान",
      detailedReport: "विस्तृत रिपोर्ट प्राप्त करें",
      recommendationText:
        "वर्तमान मिट्टी की स्थिति और मौसम के पैटर्न के आधार पर, गेहूं की खेती को इष्टतम उपज और लाभप्रदता के लिए अनुशंसित किया जाता है।",
    },
  },

  bn: {
    translation: {
      dashboardTitle: "ফার্ম ড্যাশবোর্ড",
      monitorText: "আপনার খামারের রিয়েল-টাইম অবস্থা পর্যবেক্ষণ করুন",
      temperature: "তাপমাত্রা",
      soilMoisture: "মাটির আর্দ্রতা",
      sunlight: "সূর্যালোক",
      coLevel: "CO₂ স্তর",
      aiRecommendation: "এআই সুপারিশ",
      bestCrop: "সেরা ফসল",
      expectedYield: "প্রত্যাশিত ফলন",
      netProfit: "নেট মুনাফার অনুমান",
      detailedReport: "বিস্তারিত প্রতিবেদন পান",
      recommendationText:
        "বর্তমান মাটির অবস্থা এবং আবহাওয়ার ধরণ অনুযায়ী, গম চাষকে সর্বোত্তম ফলন এবং লাভজনকতার জন্য সুপারিশ করা হচ্ছে।",
    },
  },

  ta: {
    translation: {
      dashboardTitle: "பண்ணை டாஷ்போர்டு",
      monitorText: "உங்கள் பண்ணையின் நேரடி நிலைகளை கண்காணிக்கவும்",
      temperature: "வெப்பநிலை",
      soilMoisture: "மண்ணின் ஈரப்பதம்",
      sunlight: "சூரிய ஒளி",
      coLevel: "CO₂ அளவு",
      aiRecommendation: "ஏஐ பரிந்துரை",
      bestCrop: "சிறந்த பயிர்",
      expectedYield: "எதிர்பார்க்கப்படும் விளைச்சல்",
      netProfit: "நிகர லாப மதிப்பீடு",
      detailedReport: "விரிவான அறிக்கையைப் பெறவும்",
      recommendationText:
        "தற்போதைய மண் நிலைகள் மற்றும் வானிலை மாறுபாடுகளைப் பொருத்தவரை, கோதுமை பயிரிடுவது சிறந்த விளைச்சலுக்கும் லாபத்திற்கும் பரிந்துரைக்கப்படுகிறது.",
    },
  },

  te: {
    translation: {
      dashboardTitle: "ఫార్మ్ డాష్‌బోర్డ్",
      monitorText: "మీ ఫార్మ్ యొక్క రియల్‌టైమ్ పరిస్థితులను పర్యవేక్షించండి",
      temperature: "ఉష్ణోగ్రత",
      soilMoisture: "మట్టి తేమ",
      sunlight: "సూర్యకాంతి",
      coLevel: "CO₂ స్థాయి",
      aiRecommendation: "ఏఐ సిఫారసు",
      bestCrop: "ఉత్తమ పంట",
      expectedYield: "అంచనా దిగుబడి",
      netProfit: "నికర లాభ అంచనా",
      detailedReport: "వివరణాత్మక నివేదిక పొందండి",
      recommendationText:
        "ప్రస్తుత మట్టి పరిస్థితులు మరియు వాతావరణ నమూనాలను ఆధారంగా గోధుమ సాగు అనుకూలమైన దిగుబడికి మరియు లాభదాయకతకు సిఫారసు చేయబడింది.",
    },
  },

  kn: {
    translation: {
      dashboardTitle: "ಫಾರ್ಮ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
      monitorText: "ನಿಮ್ಮ ಕೃಷಿಯ ರಿಯಲ್‌ಟೈಮ್ ಪರಿಸ್ಥಿತಿಗಳನ್ನು ನಿಗಾಲಿಸಿ",
      temperature: "ತಾಪಮಾನ",
      soilMoisture: "ಮಣ್ಣಿನ ತೇವಾಂಶ",
      sunlight: "ಸೂರ್ಯನ ಬೆಳಕು",
      coLevel: "CO₂ ಮಟ್ಟ",
      aiRecommendation: "ಎಐ ಶಿಫಾರಸು",
      bestCrop: "ಉತ್ತಮ ಬೆಳೆ",
      expectedYield: "ಅಪೇಕ್ಷಿತ ಉತ್ಪಾದನೆ",
      netProfit: "ನಿವ್ವಳ ಲಾಭ ಅಂದಾಜು",
      detailedReport: "ವಿವರವಾದ ವರದಿ ಪಡೆಯಿರಿ",
      recommendationText:
        "ಪ್ರಸ್ತುತ ಮಣ್ಣಿನ ಪರಿಸ್ಥಿತಿಗಳು ಮತ್ತು ಹವಾಮಾನ ಮಾದರಿಗಳ ಆಧಾರದ ಮೇಲೆ, ಗೋಧಿ ಬೆಳೆಯುವುದು ಅತ್ಯುತ್ತಮ ಉತ್ಪಾದನೆ ಮತ್ತು ಲಾಭಕ್ಕಾಗಿ ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ.",
    },
  },

  ml: {
    translation: {
      dashboardTitle: "ഫാം ഡാഷ്ബോർഡ്",
      monitorText: "നിങ്ങളുടെ ഫാമിന്റെ തത്സമയ അവസ്ഥ നിരീക്ഷിക്കുക",
      temperature: "താപനില",
      soilMoisture: "മണ്ണിലെ ഈർപ്പം",
      sunlight: "സൂര്യപ്രകാശം",
      coLevel: "CO₂ നില",
      aiRecommendation: "എഐ ശുപാർശ",
      bestCrop: "മികച്ച വിള",
      expectedYield: "പ്രതീക്ഷിക്കുന്ന വിളവ്",
      netProfit: "ശുദ്ധലാഭത്തിന്റെ കണക്ക്",
      detailedReport: "വിശദമായ റിപ്പോർട്ട് നേടുക",
      recommendationText:
        "നിലവിലെ മണ്ണിന്റെ അവസ്ഥയും കാലാവസ്ഥാ മാതൃകകളും അടിസ്ഥാനമാക്കി, ഗോതമ്പ് കൃഷി മികച്ച വിളവിനും ലാഭത്തിനും ശുപാർശ ചെയ്യപ്പെടുന്നു.",
    },
  },

  mr: {
    translation: {
      dashboardTitle: "शेती डॅशबोर्ड",
      monitorText: "तुमच्या शेताची वास्तविक वेळेतील स्थिती पाहा",
      temperature: "तापमान",
      soilMoisture: "मातीतील आर्द्रता",
      sunlight: "सूर्यप्रकाश",
      coLevel: "CO₂ पातळी",
      aiRecommendation: "एआय शिफारस",
      bestCrop: "सर्वोत्तम पीक",
      expectedYield: "अपेक्षित उत्पादन",
      netProfit: "निव्वळ नफा अंदाज",
      detailedReport: "सविस्तर अहवाल मिळवा",
      recommendationText:
        "सध्याच्या मातीच्या परिस्थिती आणि हवामानाच्या नमुन्यांवर आधारित, गहू शेती सर्वोत्तम उत्पादन आणि नफ्यासाठी शिफारस केली जाते.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
