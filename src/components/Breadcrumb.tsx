import Link from "next/link";

export function Breadcrumb(props: { title: string[]; url: string }) {
  return (
    <Link href={props.url}>
      <a className="">
        {props.title.map((item, key) => (
          <>
            <span></span>
          </>
        ))}
      </a>
    </Link>
  );
}
