"use client"

import { motion } from "framer-motion"
import GridPattern from "../components/GridPattern"
import BlogCard from "../components/BlogCard"
import PageTransition from "../components/PageTransition"
import day1 from "../assets/day1.jpg"
import day2 from "../assets/day2.jpg"
import day3 from "../assets/day3.jpg"
import day4 from "../assets/day4.jpg"
import day5 from "../assets/day5.jpg"
import day6 from "../assets/day6.jpg"
import day7 from "../assets/day7.jpg"

function BlogPage() {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "It's So Big in Subic!",
      date: "April 8, 2025",
      excerpt: "Take a look at us as we venture into Subic.",
      imageUrl: day1,
      url: "#",
    },
    {
      id: 2,
      title: "Museum Dates? Nagdala Nalang Sana Ako ng Jowa.",
      date: "April 9, 2025",
      excerpt: "No date? No money? Better check this blog out then.",
      imageUrl: day2,
      url: "#",
    },
    {
      id: 3,
      title: "Some Engineering Stuffs For You.",
      date: "April 10, 2025",
      excerpt: "Robotics, Engineering things, Optimum Pride; you name it! Check it here.",
      imageUrl: day3,
      url: "#",
    },
    {
      id: 4,
      title: "Trains N' Cams",
      date: "April 11, 2025",
      excerpt: "Take a peek on this MRT and MMDA visit.",
      imageUrl: day4,
      url: "#",
    },
    {
      id: 5,
      title: "Baguio-n My Mind.",
      date: "April 12, 2025",
      excerpt: "Is it cold in here? Or is it just Baguio? Definitely Baguio. Take a look at this blog right here.",
      imageUrl: day5,
      url: "#",
    },
    {
      id: 6,
      title: "Baguio and Chill (Literally)",
      date: "February 13, 2023",
      excerpt: "Nothing much to do here rather than bask in the cold weather of Baguio. Check it out.",
      imageUrl: day6,
      url: "#",
    },
    {
      id: 7,
      title: "Hanggang Sa Muli!",
      date: "February 14, 2023",
      excerpt: "Aaaaand he's gone. Day 7 in Manila to wrap up the tour.",
      imageUrl: day7,
      url: "#",
    },
  ]

  return (
    <PageTransition>
      <section className="blog page-section">
        <div className="grid-pattern-container">
          <GridPattern />
        </div>
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            TRAVEL BLOG - INDUSTRY VISIT
          </motion.h2>
          <motion.p
            className="blog-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <b><h1>"LAAGAN MAN KAAYO KA NAK!"</h1></b> <br></br>   - Leah Fe Mosot. Jaden's Mother
          </motion.p>

          <div className="blog-grid">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                date={post.date}
                excerpt={post.excerpt}
                imageUrl={post.imageUrl}
                url={post.url}
              />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default BlogPage
