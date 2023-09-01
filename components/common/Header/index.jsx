import Navbar from './Navbar'
export default function Header({
	posts,
}) {

	return (
		<header
			style={{ zIndex: '999999999999 !important' }}
			className="header fixed top-0 shadow-xl w-full bg-white drop-shadow-lg"
		>
			<Navbar
				posts={posts}
			/>
			
		</header>
	)
}
		