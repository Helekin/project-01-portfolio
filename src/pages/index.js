import HomePage from "@/components/home/HomePage";

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
}
