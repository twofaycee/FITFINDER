import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"FITFINDER AI — One piece. Whole fit.",description:"Upload one item and get complete outfits built around it."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}