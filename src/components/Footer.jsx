import Layout from "@/components/Layout";
import data from "@/data.json";

function Footer() {
  const { brand, about, contact } = data.footer;
  return (
    <footer className="mt-[124px] w-full min-h-[354px] bg-[#111538]">
      <Layout>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full"></div>
      </Layout>
    </footer>
  );
}

export default Footer;
