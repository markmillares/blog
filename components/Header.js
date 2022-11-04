import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container-fluid text-bg-dark pt-5">
        <Link href="/" passHref>
          <h2 className="text-center pt-5 main-title">
            Mark Millares' website
          </h2>
        </Link>

        <div className="container-fluid text-center">
          <div className="pb-3">
            <a href="https://twitter.com/maaarkmyword">
              <i className="bi bi-twitter mx-2"></i>
            </a>
            <a href="https://github.com/markmillares">
              <i class="bi bi-github mx-2"></i>
            </a>
            <a href="https://discord.com/users/827201517768540210">
              <i class="bi bi-discord mx-2"></i>
            </a>
          </div>
          <hr></hr>
        </div>
      </div>
    </header>
  );
}
