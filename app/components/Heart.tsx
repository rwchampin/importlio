"use client";
import React from "react";

export default function Heart({ likes }: any) {
  const [isClicked, setIsClicked] = React.useState(false);
  return (
  <div className="stage">
    <div 
    className={`heart ${isClicked ? "is-active" : ""}`}
    onClick={() => setIsClicked(!isClicked)}
    />
    {likes && <span className="likes">{likes}</span>}
  </div>
  )
}
