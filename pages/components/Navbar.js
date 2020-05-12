import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="navbar">
			<Link href="/">
				<a className="navbar-brand">Products Catalog</a>
			</Link>
			<Link href="/components/Add">
				<a className="create">
					<i aria-hidden="true" className="add icon"></i>
				</a>
			</Link>
		</nav>
	);
};

export default Navbar;
