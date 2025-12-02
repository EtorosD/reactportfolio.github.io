import "./about.css"
import cert from "../../images/full-stack-web-dev-cert.png"

const About = () => {
  return (
    <div className="a">
        <div className="a-left">
        <   div className="a-card bg"></div>
                <div className="a-card">
                <img 
                src="https://images.unsplash.com/photo-1630168839851-d4540948a9ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80" 
                alt="" 
                className="a-img" />
            </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">
          I’m a career shifter who discovered a passion for web development and has spent the last two 
          <br/>
          years building real-world applications using React, TypeScript, and modern development tools. 
          <br/>
          Transitioning from another field taught me discipline, adaptability, and problem-solving—qualities 
          <br/>
          I now apply to writing clean code and delivering user-centered solutions. I’m eager to keep growing 
          <br/>
          and contribute to teams that value innovation and continuous improvement.
          </p>
          {/* <p className="a-desc">
          I am a passionate and experienced full-stack web developer with expertise 
          in both front-end and back-end technologies, dedicated to creating robust and 
          visually appealing web applications.
          </p> */}
          <div className="a-cert">
            {/* <img src={cert} alt="cert" className="a-cert-img"/> */}
            <div className="a-cert-texts">
              {/* <h4 className="a-cert-title">Full-Stack Web Dev Certificate</h4>
              <p className="a-cert-desc">
                Completion of 16 weeks of bootcamp in Kodego in a full-stack web development course.
              </p> */}
            </div>
          </div>
          </div>
    </div>
  )
}

export default About