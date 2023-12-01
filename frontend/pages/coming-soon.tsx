import Link from "next/link";
import Container from "../components/container";
import Layout from "../components/layout";
import { Button } from "@radix-ui/themes";

const ComingSoon = () => {
  return (
    <Layout preview={{}}>
      <Container>
        <div className="flex flex-col gap-2 items-center justify-center h-[500px] w-full">
          <span className="text-4xl text-indigo-600 font-bold">
            Tính năng này đang được phát triển
          </span>
          <Link href={"/"} className="w-20 h-10">
            <Button>Quay về Trang Chủ</Button>
          </Link>
        </div>
      </Container>
    </Layout>
  );
};

export default ComingSoon;
