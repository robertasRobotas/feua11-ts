import React from "react";
import styles from "./styles.module.css";

type AddressType = {
  street: string;
  city: string;
  country: string;
};

type CardType = {
  name: string | null;
  age: number | string;
  imgSrc: string;
  address: AddressType;
  hobbies: string[] | undefined;
  onClick: () => void;
  occupation?: string;
};

const Card: React.FC<CardType> = ({
  name,
  age,
  imgSrc,
  hobbies,
  occupation,
  onClick,
}) => {
  return (
    <div onClick={onClick} className={styles.card}>
      <> {name}</>
      <br />
      <> {age}</>
      <br />
      <>
        <img src={imgSrc} />
      </>

      {hobbies!.map((hobby) => {
        return <div key={hobby}>{hobby}</div>;
      })}

      <h2>{occupation && occupation}</h2>
    </div>
  );
};

export default Card;
