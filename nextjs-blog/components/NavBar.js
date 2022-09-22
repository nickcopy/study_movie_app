import Link from "next/link";
import { useRouter } from "next/router";
import { cls } from "../libs/util";
export default function Navbar() {
  const reuter = useRouter();
  console.log(reuter.pathname);
  return (
    <nav>
      <ul className="flex bg-black justify-around text-white">
        <li className="">
          <Link href="/">
            <a className={cls(reuter.pathname === "/" ? "bg-red-600" : " ")}>
              홈
            </a>
          </Link>
        </li>
        <li>
          <Link href="/counter">
            <a
              className={cls(
                reuter.pathname === "/counter" ? "bg-red-600" : ""
              )}
            >
              카운터
            </a>
          </Link>
        </li>
        <li>
          <Link href="/todo">
            <a>Todo리스트</a>
          </Link>
        </li>{" "}
        <li>
          <Link href="/about">
            <a
              className={cls(reuter.pathname === "/about" ? "bg-red-600" : "")}
            >
              개발자 소개
            </a>
          </Link>
        </li>
        <li>
          <Link href="/users">
            <a
              className={cls(reuter.pathname === "/users" ? "bg-red-600" : "")}
            >
              사용자 목록
            </a>
          </Link>
        </li>
        <li>
          <Link href="/users/ssr">
            <a
              className={cls(
                reuter.pathname === "/users/ssr" ? "bg-red-600" : ""
              )}
            >
              사용자 목록(ssr)
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
