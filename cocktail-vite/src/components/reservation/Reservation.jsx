import { useState } from "react";
import Popup from "../popup";
import styles from "./index.module.scss";

const Reservation = ({ setReservationVisibility }) => {
  const [surname, setSurname] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [closeComponent, setCloseComponent] = useState(false);
  const [isPopupVisibile, setPopupVisibility] = useState(false);

  const onHandleTextInput = (e) => setSurname(e.target.value);
  const onHandleDateInput = (e) => setDate(e.target.value);
  const onHandleTimeInput = (e) => setHour(e.target.value);
  const onHandleCloseModal = () => {
    setCloseComponent(true);

    setTimeout(() => {
      setReservationVisibility(false);
    }, 1350);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setPopupVisibility(true);
    setReservationVisibility(false);
  };

  return (
    <div className={styles.Reservation}>
      <div className={styles.overlay} onClick={onHandleCloseModal}></div>
      <div
        className={`${styles.content} ${
          closeComponent && styles.contentFadeOut
        }`}
      >
        <h1>Prenota il tuo posto</h1>
        <form className={styles.form} onSubmit={onHandleSubmit}>
          <label htmlFor="text">Inserisci un riferimento</label>
          <input
            id="text"
            name="text"
            type="text"
            value={surname}
            onChange={onHandleTextInput}
            placeholder="Cognome"
            required
          />
          <label htmlFor="date">Per quando</label>
          <input
            id="date"
            name="date"
            type="date"
            value={date}
            onChange={onHandleDateInput}
            required
          />
          <label htmlFor="time">A che ora</label>
          <input
            id="time"
            name="time"
            type="time"
            value={hour}
            onChange={onHandleTimeInput}
            required
          />
          <input type="submit" value="Prenota!" />
        </form>
      </div>
      {isPopupVisibile && (
        <Popup>
          <h3>Notifica!</h3>
          <p>
            Il tuo tavolo è stato prenotato per giorno{" "}
            <strong> {date.split("-").reverse().join("-")}</strong> alle ore{" "}
            <strong> {hour}</strong>
          </p>
        </Popup>
      )}
    </div>
  );
};

export default Reservation;
