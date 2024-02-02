import Card from "@/components/Card/Card";
import Header from "@/components/Header/Header";
import { useState } from "react";

export default function Home() {
  const occupation = "sdsdsd";

  const [count, setCount] = useState<number | null>(444);

  return (
    <>
      <Header logo={"logoooo"} count={30000} />

      <Card
        age={count as number}
        imgSrc="https://media.istockphoto.com/id/1319763895/photo/smiling-mixed-race-mature-man-on-grey-background.jpg?s=612x612&w=0&k=20&c=ZiuzNX9LhTMMcRFrYNfq_zFR7O_aH-q7x1L5elko5uU="
        name="Ted"
        address={{
          street: "Vilniaus st.",
          city: "Kaunas",
          country: "Lithuania",
        }}
        onClick={() => {
          console.log("labas");
        }}
        hobbies={["Skiing", "Football", "Web development", "Design", "Fishing"]}
      />
    </>
  );
}
