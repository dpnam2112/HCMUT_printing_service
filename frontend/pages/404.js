export default function Custom404() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-2xl font-medium">Không tìm thấy trang bạn cần!</h1>
      <a
        href="/"
        className="px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
      >
        Quay về Trang Chủ
      </a>
    </div>
  );
}
