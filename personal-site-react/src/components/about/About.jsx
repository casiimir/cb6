import Button from "../button";
import styles from "./style.module.scss";
import Image from "/assets/images/aboutme-banner.png";

const About = () => {
    return (
        <div id="about" className={styles.about}>
            <div className="container section">
                <div className="flex flex-wrap justify-content-between align-items-center">
                    {/* Image */}
                    <div className={styles.image}>
                        <img src={Image} alt="banner about me" width="580" height="550"/>
                    </div>
                    {/* Content */}
                    <div className={styles.content}>
                        <p className={`${styles.label} label`}>{"About Me"}</p>
                        <h2 className={`${styles.title} h2`}>{"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, voluptatem."}</h2>
                        <p className={`${styles.description} p-big`}>{"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, qui dolore. Praesentium quod incidunt sint atque totam! Quod, repellendus porro?"}</p>
                        <div className={styles.buttons}>
                            <a href="#skills" title="my skills">
                                <Button label="My Skills" color="primary"/>
                            </a>
                            <a href="#projects" title="my projects">
                                <Button label="My Projects" color="secondary"/>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About;