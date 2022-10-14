import Link from "next/link";
import { Fragment } from "react";

function News() {
  return (
    <Fragment>
      <h1>The news page.</h1>
      <ul>
        <li>
          <Link href="/news/next-js">NestJS is A Great framework.</Link>
        </li>
        <li>ReactJs is A Great framework.</li>
      </ul>
    </Fragment>
  );
}

export default News;
