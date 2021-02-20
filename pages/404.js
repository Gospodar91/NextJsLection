import Link from "next/link";
export default function ErrorPage() {
  return (
    <div>
      <h1 className="error"> I am Error Page </h1>
      <Link href={"/"}>
        <a> Go back to home</a>
      </Link>
    </div>
  );
}
