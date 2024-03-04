"use client"

import Header from "@/components/Header";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "@/Store/themeSlice";
import { Tooltip } from "react-tooltip";

export default function Home() {
  const theme = useSelector((state: any) => state.theme.darkMode)
  const dispatch = useDispatch()


  return (
    <div className={theme ? 'dark' : ''}>
      <Tooltip id="my-tooltip" style={{ fontSize: '10px', padding: '2px' }} />
      <Header />
    </div>
  );
}
