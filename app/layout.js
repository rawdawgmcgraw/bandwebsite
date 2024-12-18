import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Image from "next/image"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[url("/paperBG.png")]`}
			>
				<div className="h-12 w-1/2 sticky top-5 left-[26%] rounded-3xl bg-black opacity-60 flex">
					<Image
						src="/facebook-cropped.png"
						alt="facebook"
						width={50}
						height={10}
					/>
				</div>
				{children}
			</body>
		</html>
	)
}
