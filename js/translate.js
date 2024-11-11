const translations = {

    en: {
      home: {
        title: "Treasures of hope",
        banner: {
            title: "Some people need help and we give it",
            description: "As humans, it is our social responsibility to care for one another. Living in an unequal world makes us sensitive to the alarming gap between the priviledged and the underpriviledge. Treasures of Hope works continuously at bridging this gap.",
            button: "Discover"
        },

        section1: {
            tag: "About Us",
            title: "Treasures Of Hope Mission is",
            subtitle: "Give for People",
            description1: "Our charity was founded on March 20th 2023 in Cologne, Germany. Our vision is to help children in need and people in need to improve their lives by efficient projects, especially in East Africa.",
            description2: "We are supporting orphans and children from poor backgrounds, often we enable them to go to school to get a chance in live. We are also helping people to pay their medical costs to improve their lives. Besides this we are also supporting the old generation by buying them a small food package once a week",
            button: "More about"
        },        
        
        section2: {
            tag: "what we do",
            title: "Treasures Of Hope",
            subtitle: "Causes",
            description: "In order to achieve our goal of helping people in need, we try every day to assist them in a number of areas",
            button: "More Causes"
        },

        section3: {
            tag: "What we Did",
            title: "reasures Of Hope",
            subtitle: "Projects",
            description: "Our diverse humanitarian aid projects aim at contributing to our society wellbeing and prosperity. We believe that each individual deserves to have a decent and pleasant life."
        },

        section4: {
            tag: "Events",
            title: "Treasures Of Hope",
            subtitle: "Projects",
            description: "Each year, we organise various events to increase people's awareness of our activities and to get involved in the success of our projects, in any way they can. Your participation in our activities and/or projects would be greatly appreciated.",
            button: "VIEW ALL EVENTS"
        },

        section5: {
            tag: "Donors",
            title: "Who Help",
            subtitle: "Projects",
            description: "Us"
        },

        section6: {
            title: "Subscribe.",
            button: "SUBMIT"
        },

      },


      about: {
        title: "About Us",
        content: "This is the about page content in English.",
      },
      events: {
        title: "Contact Us",
        content: "This is the contact page content in English.",
      },
      causes: {
        title: "Contact Us",
        content: "This is the contact page content in English.",
      },
      contacts: {
        title: "Contact Us",
        content: "This is the contact page content in English.",
      }
    },




    de: {
      home: {
        title: "Treasures of hope",
        banner: {
            title: "Manche Menschen brauchen Hilfe und wir geben sie ihnen",
            description: "Als Menschen haben wir eine soziale Verantwortung, füreinander zu sorgen. Das Leben in einer ungleichen Welt macht uns sensibel für die alarmierende Kluft zwischen den Privilegierten und den Unterprivilegierten. Treasures of Hope arbeitet kontinuierlich daran, diese Kluft zu überbrücken.",
            button: "Entdecken Sie"
        },

        section1: {
            tag: "Über uns",
            title: "Die Mission von Treasures Of Hope ist",
            subtitle: "Geben für Menschen",
            description1: "Unser Verein wurde am 20. März 2023 in Köln, Deutschland, gegründet. Unsere Vision ist es, Kindern in Not und Menschen in Not zu helfen, ihr Leben durch effiziente Projekte zu verbessern, insbesondere in Ostafrika.",
            description2: "Wir unterstützen Waisenkinder und Kinder aus armen Verhältnissen, oft ermöglichen wir ihnen den Schulbesuch, damit sie eine Chance im Leben bekommen. Wir helfen auch Menschen, ihre medizinischen Kosten zu bezahlen, um ihr Leben zu verbessern. Außerdem unterstützen wir auch die ältere Generation, indem wir ihnen einmal pro Woche ein kleines Lebensmittelpaket kaufen.",
            button: "Mehr über"
        },        
        
        section2: {
            tag: "was wir tun",
            title: "Treasures Of Hope",
            subtitle: "Verursacht",
            description: "Um unser Ziel, Menschen in Not zu helfen, zu erreichen, versuchen wir jeden Tag, sie in verschiedenen Bereichen zu unterstützen",
            button: "Mehr Ursachen"
        },

        section3: {
            tag: "Was wir getan haben",
            title: "reasures Of Hope",
            subtitle: "Projekte",
            description: "Mit unseren vielfältigen humanitären Hilfsprojekten wollen wir zu Wohlstand und Wohlergehen unserer Gesellschaft beitragen. Wir glauben, dass jeder Mensch ein menschenwürdiges und angenehmes Leben verdient."
        },

        section4: {
            tag: "Veranstaltungen",
            title: "Treasures Of Hope",
            subtitle: "Projekte",
            description: "Jedes Jahr organisieren wir verschiedene Veranstaltungen, um das Bewusstsein der Menschen für unsere Aktivitäten zu schärfen und sie auf jede erdenkliche Weise am Erfolg unserer Projekte zu beteiligen. Wir würden uns sehr über Ihre Teilnahme an unseren Aktivitäten und/oder Projekten freuen.",
            button: "VIEW ALLE VERANSTALTUNGEN"
        },

        section5: {
            tag: "Spender",
            title: "Wer hilft",
            subtitle: "Projekte",
            description: "Wir"
        },

        section6: {
            title: "Abonnieren.",
            button: "SUBMIT"
        },

      },


      about: {
        title: "About Us",
        content: "This is the about page content in English.",
      },
      events: {
        title: "Contact Us",
        content: "This is the contact page content in English.",
      },
      causes: {
        title: "Contact Us",
        content: "This is the contact page content in English.",
      },
      contacts: {
        title: "Contact Us",
        content: "This is the contact page content in English.",
      }
    }
  };


 



const languageSelectop = document.getElementById("select")

// Home page elements

let banner_title = document.getElementById("banner_title")
let banner_description = document.getElementById("banner_description")
let banner_button = document.getElementById("banner_button")


let section1_tag = document.getElementById("section1_tag")
let section1_title = document.getElementById("section1_title")
let section1_subtitle= document.getElementById("section1_subtitle")
let section1_description1 = document.getElementById("section1_description1")
let section1_description2 = document.getElementById("section1_description2")
let section1_bubtotn = document.getElementById("section1_bubtotn")


let section2_tag = document.getElementById("section2_tag")
let section2_title = document.getElementById("section2_title")
let section2_subtitle = document.getElementById("section2_subtitle")
let section2_description = document.getElementById("section2_description")
let section2_bubtotn = document.getElementById("section2_bubtotn")


let section3_tag = document.getElementById("section3_tag")
let section3_title = document.getElementById("section3_title")
let section3_subtitle = document.getElementById("section3_subtitle")
let section3_description = document.getElementById("section3_description")


let section4_tag = document.getElementById("section4_tag")
let section4_title = document.getElementById("section4_title")
let section4_subtitle = document.getElementById("section4_subtitle")
let section4_description = document.getElementById("section4_description")
let section4_bubtotn = document.getElementById("section4_bubtotn")


let section5_tag = document.getElementById("section5_tag")
let section5_title = document.getElementById("section5_title")
let section5_subtitle = document.getElementById("section5_subtitle")


let section6_title = document.getElementById("section6_title")













// ------------------------------------------------------------------------------------------

languageSelectop.addEventListener("change", (event) => {
    setLanguage(event.target.value)
})

console.log("test ", translations.en.home.banner.title)


const setLanguage = (language) => {
    if(language=="en"){
      banner_title.innerText = translations.en.home.banner.title
      banner_description.innerText = translations.en.home.banner.description
      banner_button.innerText = translations.en.home.banner.button
      
      
      section1_tag.innerText =  translations.en.home.section1.tag
      section1_title.innerText =  translations.en.home.section1.title
      section1_subtitle.innerText = translations.en.home.section1.subtitle
      section1_description1.innerText = translations.en.home.section1.description1
      section1_description2.innerText = translations.en.home.section1.tag
      section1_bubtotn.innerText =  translations.en.home.section1.button
      
      
      section2_tag.innerText = translations.en.home.section2.tag
      section2_title.innerText = translations.en.home.section2.title
      section2_subtitle.innerText = translations.en.home.section2.subtitle
      section2_description.innerText = translations.en.home.section2.description
      section2_bubtotn.innerText = translations.en.home.section2.button
      
      
      section3_tag.innerText = translations.en.home.section3.tag
      section3_title.innerText = translations.en.home.section3.title
      section3_subtitle.innerText = translations.en.home.section3.subtitle
      section3_description.innerText = translations.en.home.section3.description
      
      
      section4_tag.innerText = translations.en.home.section4.tag
      section4_title.innerText = translations.en.home.section4.title
      section4_subtitle.innerText = translations.en.home.section4.subtitle
      section4_description.innerText = translations.en.home.section4.description
      section4_bubtotn.innerText = translations.en.home.section4.button
      
      
      section5_tag.innerText = translations.en.home.section5.tag
      section5_title.innerText = translations.en.home.section5.title
      section5_subtitle.innerText = translations.en.home.section5.subtitle
      
      
      section6_title.innerText = translations.en.home.section6.title
      
    }else if(language == "de"){
      banner_title.innerText = translations.de.home.banner.title
      banner_description.innerText = translations.de.home.banner.description
      banner_button.innerText = translations.de.home.banner.button
      
      
      section1_tag.innerText =  translations.de.home.section1.tag
      section1_title.innerText =  translations.de.home.section1.title
      section1_subtitle.innerText = translations.de.home.section1.subtitle
      section1_description1.innerText = translations.de.home.section1.description1
      section1_description2.innerText = translations.de.home.section1.tag
      section1_bubtotn.innerText =  translations.de.home.section1.button
      
      
      section2_tag.innerText = translations.de.home.section2.tag
      section2_title.innerText = translations.de.home.section2.title
      section2_subtitle.innerText = translations.de.home.section2.subtitle
      section2_description.innerText = translations.de.home.section2.description
      section2_bubtotn.innerText = translations.de.home.section2.button
      
      
      section3_tag.innerText = translations.de.home.section3.tag
      section3_title.innerText = translations.de.home.section3.title
      section3_subtitle.innerText = translations.de.home.section3.subtitle
      section3_description.innerText = translations.de.home.section3.description
      
      
      section4_tag.innerText = translations.de.home.section4.tag
      section4_title.innerText = translations.de.home.section4.title
      section4_subtitle.innerText = translations.de.home.section4.subtitle
      section4_description.innerText = translations.de.home.section4.description
      section4_bubtotn.innerText = translations.de.home.section4.button
      
      
      section5_tag.innerText = translations.de.home.section5.tag
      section5_title.innerText = translations.de.home.section5.title
      section5_subtitle.innerText = translations.de.home.section5.subtitle
      
      
      section6_title.innerText = translations.de.home.section6.title
    }
}