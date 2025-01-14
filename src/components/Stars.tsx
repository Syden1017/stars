import { nanoid } from "nanoid";
import React from "react";
import Star from "./Star/Star";

type starCount = {
  count: number;
};

const Stars: React.FC<starCount> = ({ count = 0 }) => {
  if (Number.isNaN(count)) return null;
  if (count < 1 || count > 5) return null;

  const starsListItems = [];

  for (let i = 0; i < count; i++) {
    starsListItems.push(
      <li key={nanoid()}>
        <Star />
      </li>
    );
  }

  return <ul className="card-body-stars">{[starsListItems]}</ul>;
};

export default Stars;
