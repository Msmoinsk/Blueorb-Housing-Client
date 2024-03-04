"use client"

import Header from "@/components/Header";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "@/Store/themeSlice";

export default function Home() {

  const theme = useSelector((state: any) => state.theme.darkMode)
  const dispatch = useDispatch()


  return (
    <div className={theme ? 'dark' : ''}>
      <Header />
    </div>
  );
}
