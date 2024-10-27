import SearchForm from "@/components/SearchForm";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;
  return (
    <section className="pink_container">
      <h1 className="heading">Welcome to the Startup Pitch App 🚀</h1>
      <p className="sub-heading !max-w-3xl">
        Pitch your startup idea, vote for your favorite ideas, and help them
        grow🌱
      </p>
      <SearchForm query={query} />
    </section>
  );
};

export default Home;
