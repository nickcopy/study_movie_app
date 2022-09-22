import Layout from "../components/Layout";

export default function page() {
  return (
    <>
      <Layout test="hello">
        <div>나는 문어 </div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </Layout>
    </>
  );
}
