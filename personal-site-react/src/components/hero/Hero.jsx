import styles from "./style.module.scss";
import Button from "../button";
import Video from "/assets/video/home-video.mp4";
import Image from "/assets/images/home-banner.png";
const Hero = () => {
    return (
        <div className={`${styles.hero} flex align-items-center justify-content-center flex-column`}>
            <div className={styles.video}>
                <video playsInline muted autoPlay loop src={Video} ></video>
            </div>
            <div className="container">
                <div className={styles.content}>
                    <p className={`${styles.label} label`}>Hello! My name is Jane Doe</p>
                    <h1 className={`${styles.title} display`}>I'm a frontend developer</h1>
                    <a href="#about">
                        <Button label="let's start" color="secondary"/>
                    </a>
                </div>
                <div className={styles.image}>
                    <img src={Image} alt="home banner" width="680px" heigth="645px" />
                </div>
            </div>
        </div>
    )
}

export default Hero;