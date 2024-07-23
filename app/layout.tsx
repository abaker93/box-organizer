import type { Metadata } from "next"
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import '@/app/ui/global.css'

export const metadata: Metadata = {
	title: "Pokemon Box Organizer",
	description: "Pokemon box organizer for Pokemon Scarlet & Violet",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
			<Analytics />
			<SpeedInsights />
		</html>
	)
}
