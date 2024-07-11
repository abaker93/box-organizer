import type { Metadata } from "next"
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
		</html>
	)
}
