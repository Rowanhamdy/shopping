import React from "react";
import TopSelling from "./topSelling/page";
import DressStyle from "./dressStyle/page";
import Reviews from "./reviews/page";
import NewArrival from "./newArrival/page";

export default function HomePage() {
  return (
    <div>
      <main className="pt-10">
        <div>
          <NewArrival />
          <TopSelling />
          <DressStyle />
          <Reviews />
        </div>
      </main>
    </div>
  );
}
