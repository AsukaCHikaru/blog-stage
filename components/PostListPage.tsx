import Head from 'next/head';
import { FC, useMemo, useState } from 'react';

import { PostSummary } from '../types';
import { CategoryList } from './CategoryList';
import { Footer } from './Footer';
import { PostLink } from './PostLink';
import { PostListPageHeader } from './PostListPageHeader';
import { GridLayout } from './layout/GridLayout';
import { MainContentLayout } from './layout/MainContentLayout';
import { SideContentLayout } from './layout/SideContentLayout';

interface Props {
  postSummaryList: PostSummary[];
}

export const PostListPage: FC<Props> = ({ postSummaryList }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>();

  const handleCategoryClick = (category: string) => {
    setSelectedCategory((prev) => (prev === category ? undefined : category));
  };

  const filteredPostList = useMemo(() => {
    if (!!!selectedCategory) {
      return postSummaryList;
    }
    return postSummaryList.filter(
      (postSummary) => postSummary.category === selectedCategory,
    );
  }, [selectedCategory, postSummaryList]);

  return (
    <>
      <Head>
        <title>The work is undone.</title>
        <meta name="description" content="asukachikaru's blog" />
        <meta property="og:title" content="The work is undone." />
        <meta property="twitter:title" content="The work is undone." />
      </Head>
      <GridLayout>
        <PostListPageHeader />
        <MainContentLayout>
          {filteredPostList.map((postSummary) => {
            return <PostLink postSummary={postSummary} key={postSummary.id} />;
          })}
        </MainContentLayout>
        <SideContentLayout>
          <CategoryList
            selectedCategory={selectedCategory}
            postSummaryList={postSummaryList}
            onCategoryClick={handleCategoryClick}
          />
        </SideContentLayout>
        <Footer />
      </GridLayout>
    </>
  );
};
