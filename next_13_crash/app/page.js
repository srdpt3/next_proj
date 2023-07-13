import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about/team">Teams</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
