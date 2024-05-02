import { SiteHead } from '@components/SiteHead';
import { PostBodyBlock } from '@components/blog/PostBodyBlock';
import { SideColumn } from '@components/blog/SideColumn';
import { TableOfContentColumn } from '@components/blog/TableOfContentColumn';
import { ContentLayout } from '@components/layout/ContentLayout';
import { isHeadingBlock } from '@utils/markdownUtils';
import { SECTIONS } from 'consts/sections';
import { FC } from 'react';
import { getAboutPageContent } from 'services/markdownServices';
import { MarkdownBlock } from 'types/markdown';

interface Props {
  content: MarkdownBlock[];
}

export const AboutPage: FC<Props> = ({ content }) => {
  const headers = content.filter(isHeadingBlock);
  return (
    <>
      <SiteHead
        title={`${SECTIONS.ABOUT.title} | Asuka Wang`}
        description={SECTIONS.ABOUT.description}
      />
      <h1 className="font-abril text-fb13 mb-fb13 leading-none">ABOUT</h1>
      <ContentLayout>
        <div className="col-span-3">
          {content.map((block, i) => (
            <PostBodyBlock block={block} key={i} />
          ))}
        </div>
        <SideColumn>
          {headers.length ? <TableOfContentColumn list={headers} /> : null}
        </SideColumn>
      </ContentLayout>
    </>
  );
};

export const getStaticProps = async () => {
  const content = await getAboutPageContent();

  return { props: { ...content } };
};

export default AboutPage;
