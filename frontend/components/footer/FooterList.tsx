import Link from "next/link";

export default function FooterList({ title, rows }: any) {
  return (
    <div className="pt-10">
      <h2 className="text-base font-medium text-gray-900 tracking-wide mb-3 text-center md:text-left">
        {title}
      </h2>
      <ul className="list-none flex flex-col items-center md:items-start">
        {rows.map((row: any, index: number) => (
          <li className="sm:mb-2 mb-0 sm:py-0 py-3" key={index}>
            <Link href={"/coming-soon"}>
              <span className="flex flex-row items-center text-lg font-light text-gray-700 hover:text-indigo-600 cursor-pointer">
                {row.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
