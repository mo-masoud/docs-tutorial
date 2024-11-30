import Link from "next/link";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      Click{" "}
      <Link href="/documents/123" className="text-blue-500 underline">
        &nbsp; here &nbsp;
      </Link>{" "}
      to see the documents.
    </div>
  );
};

export default Home;
