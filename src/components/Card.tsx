import { INSPECT_MAX_BYTES } from "buffer";
import React, { Component, useEffect, useState } from "react";
import { marvelApi } from "../app/apiSlice";
import { Favorite } from "./Favorite";

export const Card = ({ characters }: any) => {
  const favorite = (item: any) => {
    var previousData = JSON.parse(localStorage.getItem("favorites") || "{}");
    previousData.push(item);
    localStorage.setItem("favorites", JSON.stringify(previousData));
  };
  console.log("Card", characters);
  return (
    <div style={{ ...styles.container, flexDirection: "column" }}>
      <div style={{ ...styles.bottom, flexDirection: "row" }}>
        {/* <img src={item.thumbnail.path} alt="" /> */}
        <Favorite />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "12em",
    width: "12em",
    margin: "0 auto",
  },
  bottom: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
};
