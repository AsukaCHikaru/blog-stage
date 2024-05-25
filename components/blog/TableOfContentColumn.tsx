import { FC } from 'react';
import { HeadingBlock } from 'types/markdown';
import { SideColumnHeader } from './SideColumnHeader';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ParsedUrlQuery, stringify } from 'querystring';

interface Props {
  list: HeadingBlock[];
}

export const TableOfContentColumn: FC<Props> = ({ list }) => {
  return (
    <div>
      <SideColumnHeader>TABLE OF CONTENT</SideColumnHeader>
      <ul className="ml-fb3 list-outside list-disc interactive-list-color">
        {list.map((header) => (
          <HeaderLink block={header} key={header.children[0].text} />
        ))}
      </ul>
    </div>
  );
};

const getPathname = (pathname: string, query: ParsedUrlQuery) => {
  const stringifiedQuery = stringify(query);
  console.log(stringifiedQuery);
  return stringifiedQuery
    ? pathname.replace('[pathname]', stringifiedQuery.split('=')[1])
    : pathname;
};

const HeaderLink: FC<{ block: HeadingBlock }> = ({ block }) => {
  const router = useRouter();
  console.log(router.pathname);
  const pathname = getPathname(router.pathname, router.query);
  const text = block.children.map((item) => item.text);
  return (
    <li className="mt-fb2">
      {Array(block.depth - 1)
        .fill(0)
        .map((_, i) => (
          <div className="w-fb2" key={i} />
        ))}
      <Link
        href={`${pathname}#${text.join('-').replace(/\s/g, '-')}`}
        className="font-serif text-fb3 leading-none interactive-color"
      >
        {text}
      </Link>
    </li>
  );
};
