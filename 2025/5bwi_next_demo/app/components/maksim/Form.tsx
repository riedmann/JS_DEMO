"use client";
import React, { useState } from "react";
import Button from "./Button";

type Props = {};

export default function Form({}: Props) {
  const [supplements, setSetsupplements] = useState([
    { name: "s1", isActive: true },
    { name: "s2", isActive: true },
    { name: "s3", isActive: false },
    { name: "s4", isActive: true },
  ]);

  console.log("changed:", supplements);

  return (
    <div>
      <h1>Form</h1>
      <div className="grid gap-4">
        {supplements.map((supplement: any) => (
          <Button
            name={supplement.name}
            isActive={supplement.isActive}
            onClick={() => {
              console.log("clicked", supplement);
              supplement.isActive = !supplement.isActive;
              let supsNew = supplements;
              console.log(supsNew);

              setSetsupplements(supsNew);
            }}
          />
        ))}
      </div>
    </div>
  );
}
