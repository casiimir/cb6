import styles from "./style.module.scss";

const Button = (props) => {
    const {label, color} = props;

    return (
        <div className={styles.button}>
            <div className={`${styles.wrapper} ${styles[color]}`}>
                <span>{label}</span>
            </div>
        </div>
    )
}

export default Button;