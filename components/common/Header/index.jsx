import Navbar from './Navbar'


export default function Header({
	posts,
}) {

	return (
		<header>
			<Navbar
				posts={posts}
			/>
		</header>
	)
}
		