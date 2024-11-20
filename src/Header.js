import Link from "next/link";
import styles from "./Header.module.css"; // Import CSS module if needed

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div>
                    <h1 style={{ color: "white" }}>My Next.js App</h1>
                </div>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/price">Pricing</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;