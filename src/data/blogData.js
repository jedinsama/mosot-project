// Import images for Day 1
import day1pic1 from "../assets/day1pic1.jfif"
import day1pic2 from "../assets/day1pic2.jfif"
import day1pic3 from "../assets/day1pic3.jfif"

// Import images for Day 2
import day2pic1 from "../assets/day2pic1.jfif"
import day2pic2 from "../assets/day2pic2.jfif"
import day2pic3 from "../assets/day2pic3.jfif"

// Import images for Day 3
import day3pic1 from "../assets/day3pic1.jfif"
import day3pic2 from "../assets/day3pic2.jfif"
import day3pic3 from "../assets/day3pic3.jfif"

// Import images for Day 4
import day4pic1 from "../assets/day4pic1.jfif"
import day4pic2 from "../assets/day4pic2.jfif"
import day4pic3 from "../assets/day4pic3.jfif"

// Import images for Day 5
import day5pic1 from "../assets/day5pic1.jfif"
import day5pic2 from "../assets/day5pic2.jfif"
import day5pic3 from "../assets/day5pic3.jfif"

// Import images for Day 6
import day6pic1 from "../assets/day6pic1.jfif"
import day6pic2 from "../assets/day6pic2.jfif"
import day6pic3 from "../assets/day6pic3.jfif"

// Import images for Day 7
import day7pic1 from "../assets/day7pic1.jfif"
import day7pic2 from "../assets/day7pic2.jfif"
import day7pic3 from "../assets/day7pic3.jpg"

// Import existing blog cover images
import day1 from "../assets/day1.jpg"
import day2 from "../assets/day2.jpg"
import day3 from "../assets/day3.jpg"
import day4 from "../assets/day4.jpg"
import day5 from "../assets/day5.jpg"
import day6 from "../assets/day6.jpg"
import day7 from "../assets/day7.jpg"

export const blogPostsData = [
  {
    id: 1,
    title: "TOUCHDOWN MANILA",
    date: "April 7, 2025",
    excerpt: "TOUCHDOWN! As the handsome fellow steps foot in Manila. Open up this blog for day 1!",
    imageUrl: day7,
    url: "#",
    content:
      "And do you think I’m already in Manila? Nope—not yet! We’re still at Casa Mosot, chilling and preparing our stuff before heading to the airport for our flight.Now, I hate to admit it, but we only had half the fun since we arrived a bit late for Day 1. I missed the Intramuros visit, but I still managed to enjoy strolling around SM Megamall, wasting money on some gacha stuff. And after that? We finally arrived at the dormitory to relax and chat as we wrapped up the day.",
    images: [
      { url: day1pic1, alt: "Airport waiting area with Gate 2 sign" },
      { url: day1pic2, alt: "Street view with buildings and parked car" },
      { url: day1pic3, alt: "Large stuffed animal in a mall" },
    ],
  },
  {
    id: 2,
    title: "It's So Big in Subic!",
    date: "April 8, 2025",
    excerpt: "Take a look at us as we venture into Subic.",
    imageUrl: day1,
    url: "#",
    content:
      "We visited the Subic Museum and admired some powerful paintings that depict the revolution and significant events in Philippine history. \n After that, we checked out the SBMA Seaport Department. Seeing how they manage vessel traffic control was mind-blowing—especially the way their systems look and operate. You just can’t help but be amazed by how efficiently everything runs. \n Next was the SBMA Law Enforcement Department, the sentinels of Subic. They keep watch over not just their immediate area but the entire Subic region. It’s honestly kind of terrifying to think about how closely they monitor everything happening there.",
    images: [
      { url: day2pic1, alt: "Painting depicting indigenous people and daily life" },
      { url: day2pic2, alt: "Communications tower against blue sky" },
      { url: day2pic3, alt: "Group photo in control center from security camera" },
    ],
  },
  {
    id: 3,
    title: "Museum Dates? Nagdala Nalang Sana Ako ng Jowa.",
    date: "April 9, 2025",
    excerpt: "No date? No money? Better check this blog out then.",
    imageUrl: day2,
    url: "#",
    content:
      "Just like in Day 2, we visited more museums—this time, starting with the National Museum of Natural History. I remember coming here as a kid, and I’m still amazed by how well they preserve the remains and taxidermy of animals. The way they pose each species is honestly pretty cool. \n Next, we visited the Museum of Manuel Quezon, where we saw just about everything connected to him—old newspapers, his garments, mementos, personal collections, belongings of his wife, and even his actual deathbed. It’s pretty phenomenal to think about how they managed to turn his former residence into a massive memorial to honor his legacy.",
    images: [
      { url: day3pic1, alt: "Whale skeleton hanging from museum ceiling" },
      { url: day3pic2, alt: "Quezon Memorial Shrine with tall white pillars" },
      { url: day3pic3, alt: "Manuel L. Quezon memorial tomb" },
    ],
  },
  {
    id: 4,
    title: "Some Engineering Stuffs For You.",
    date: "April 10, 2025",
    excerpt: "Robotics, Engineering things, Optimum Pride; you name it! Check it here.",
    imageUrl: day3,
    url: "#",
    content:
      "On Day 4, we visited some awe-inspiring places—starting with the Bangko Sentral ng Pilipinas. Unfortunately, we weren’t allowed to bring our phones inside, so we don’t have any photos from the visit. It’s a bit of a bummer not being able to share pictures, but all I can say is that Bangko Sentral is a top-notch facility when it comes to money production. \n Next, we headed to Hytec Power, where they gave us the chance to interact with their innovations and IoT systems. That alone was a great experience, as we actually got to test and explore the results of their hard work.",
    images: [
      { url: day4pic1, alt: "Engine or mechanical system with colorful components" },
      { url: day4pic2, alt: "AC DRIVE Mechatronics Servicing control panel" },
      { url: day4pic3, alt: "T68 Boring Machine Circuit control panel" },
    ],
  },
  {
    id: 5,
    title: "Trains N' Cams",
    date: "April 11, 2025",
    excerpt: "Take a peek on this MRT and MMDA visit.",
    imageUrl: day4,
    url: "#",
    content:
      "It was absolutely hot that day—no kidding.\nWe first visited the LRT, where we got a look at their facility and the trains. Fun fact: they actually film movies like Shake, Rattle & Roll there, which is pretty cool. We also saw some of their tools, like the rail sharpener, and I thought that was pretty amazing.\nNext, we visited their operations base to see how they manage the train routes. They work 24/7 to monitor the flow of trains, ensuring everything runs smoothly.\nTo top off the LRT visit, we rode a train to experience it firsthand. Now, this isn’t my first time—after all, I used to be a Manila boy—so train rides feel normal to me. But after living in Zamboanga City for so long, it felt nostalgic. I really took my time to savor the moment.\nAfter that, we headed home for lunch.\nThen came the MMDA visit—and Oh. My. Lord Almighty, greatest creator, apex, and all... the facility left my mouth wide open.\nWe were on the 12th floor of their building, where we witnessed their entire operations. There were hundreds of cameras—some with insane zoom capabilities that can read your license plate from a distance! That seriously left me speechless.\nThey also have massive screens tracking every road accident or violation in real-time. And get this—they can clip footage of any incident almost instantly. So, if you ever need evidence? They’ve got it ready in less than a minute.",
    images: [
      { url: day5pic1, alt: "Train with white body and yellow/purple stripes" },
      { url: day5pic2, alt: "Train operations control room with monitors" },
      { url: day5pic3, alt: "MMDA monitoring center with traffic camera feeds" },
    ],
  },
  {
    id: 6,
    title: "Baguio-n My Mind.",
    date: "April 12, 2025",
    excerpt: "Is it cold in here? Or is it just Baguio? Definitely Baguio. Take a look at this blog right here.",
    imageUrl: day5,
    url: "#",
    content:
      "Baguio time! Time check: 1 AM, and I hadn’t slept a bit. I couldn't sleep on the bus, so I ended up watching Instagram reels the whole ride.\nBy 5 AM, we arrived at the strawberry farm—where I ended up spending a lot of my pocket money buying pasalubong for my family.\nNext, we went to the Chinese Bell Church. The climb was no joke—it was really high up! Even though I haven’t exercised in months, I managed to reach the top, though I was definitely out of breath.\nThe view was absolutely stunning, and I genuinely enjoyed it. Going back down, my legs were already feeling sore.\nWe then dropped by the hotel to eat and get some rest before heading to Mine's View Park. There, we hung out, took fun photos wearing Igorot costumes, posed with horses, and more.\nFinally, we returned to the hotel and crashed the moment we hit the bed—we were totally sleep-deprived.",
    images: [
      { url: day6pic1, alt: "Chinese Bell Church entrance gate in Baguio" },
      { url: day6pic2, alt: "Military helicopter display in a park" },
      { url: day6pic3, alt: "Panoramic view of mountains from Mines View Park" },
    ],
  },
  {
    id: 7,
    title: "Baguio and Chill (Literally)",
    date: "April 13, 2025",
    excerpt: "Nothing much to do here rather than bask in the cold weather of Baguio. Check it out.",
    imageUrl: day6,
    url: "#",
    content:
      "Last day! Not much happened—we just chilled around Baguio (no pun intended).\nWe ate at a local restaurant and visited SM Baguio to buy some stuff. I grabbed a book, because fun fact: I always make it a habit to buy books whenever I travel outside Zamboanga. I collect and shelve them to read during my free time.\nThis time, I got 'Mastery' by Robert Greene—I was captivated by his other books, so I couldn’t resist.\nAfter our Baguio trip, we packed up, hopped on the bus, and headed back to the dorm. We began preparing for departure, as the next day we’d be saying goodbye to Manila.\nSnap back to reality—we’re about to face tons of requirements and INC compliances.\nStill, it was a blast visiting Manila. I felt waves of nostalgia the moment we arrived. Meeting new friends from other sections was a highlight, especially since we’ve all mostly been stuck at home doing IT stuff. The journey was unforgettable.\nHere’s to more happy trips in the future!",
    images: [
      { url: day7pic1, alt: "Powdered donut at Good Taste Restaurant in Baguio" },
      { url: day7pic2, alt: "Mastery book by Robert Greene purchased during the trip" },
      { url: day7pic3, alt: "Group selfie at the airport waiting for flight home" },
    ],
  },
]
