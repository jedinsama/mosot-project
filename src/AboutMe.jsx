
//lucide-react logo imports
import { Mail, Phone, Code, Target, Heart, ExternalLink } from "lucide-react"

function AboutMe() {
  return (
    <div className="about-me">
      <section className="about-section">
        <h2>Introduction</h2>
        <p>
        My name is Jaden Mosot. A 4th year Bachelor of Science in Information Technology student who is studying in Western Mindanao State University. I have a knack for backend coding and video editing
        </p>
      </section>

      <section className="about-section">
        <h2>
          Skills & Expertise
        </h2>
        <div className="skills-grid">

          <div className="skill-category">
            <h3>Technical Skills</h3>
            <ul>
              • Backend Programming <br/>
              • Transcribing <br/>
              • Tech Skills
            </ul>
          </div>


          <div className="skill-category">
            <h3>Creative Skills</h3>
            <ul>
            • Premiere Video Editor <br/>
            • Sony Vegas Video Editor <br/>
            • Photoshop Editing <br/>
            • Photo Manipulation
            </ul>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Currently Working On</h2>
        <p>
        I am currently working on an e-commerce website called "OBRA". An e-commerce site where we sell Filipino handmade products.
        </p>
        
      </section>

      <section className="about-section">
        <h2>
          Career Goals
        </h2>
        <div className="career-paths">
          <div className="career-path">
            <h3>To be a succesful E-commerce Backend Developer</h3>
            <p>
             Back when I was a kid, I always adore seeing websites that sells stuff and amaze how they can synchronize and work together with their specific logistics. I also like selling stuff such as cards, shirts and branded perfume. As an IT student, I feel like this became an opportunity to utilize this skill make my dreams come true.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>
          Fun Facts/Personal Touch
        </h2>
        <div className="personal-details">
          <ul>
            • I started coding back in 5th grade creating Minecraft Mods (using JS) <br/>
            • I can dislocate my right arm and make weird noises <br/>
            • I can edit very well in Sony Vegas Pro<br/>
          </ul>

          <h3>Hobbies</h3>
          <ul>
            • Video Editing <br/>
            • Book Writing/Reading <br/>
            • Playing Video Games<br/>
            • Listening to music <br/>
            • Practicing back end skills
          </ul>
        </div>
      </section>

      <section className="about-section">
        <h2>Contact Me!</h2>
        <p>        <div className="contact-info">
          <div className="contact-item">
            <Phone className="w-5 h-5" />
            <span>0935-291-2528</span>
          </div>
          <div className="contact-item">
            <Mail className="w-5 h-5" />
            <span>imjadenmosot@gmail.com</span>
          </div>
        </div>        
        </p>
        
      </section>

      
    </div>
  )
}

export default AboutMe

