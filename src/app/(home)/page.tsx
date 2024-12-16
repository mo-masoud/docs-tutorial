"use client";
import { useQuery } from "convex/react";
import { Navbar } from "./navbar";
import { TemplatesGallary } from "./templates-gallary";
import { api } from "../../../convex/_generated/api";
const Home = () => {
  const documents = useQuery(api.documents.get);

  if (!documents) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplatesGallary />
        {documents?.map((document) => (
          <div key={document._id}>{document.title}</div>
        ))}
      </div>
    </div>
  );
};

export default Home;
