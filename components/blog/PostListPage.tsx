import Head from 'next/head';
import { FC, useMemo, useState } from 'react';

import { PostSummary } from '@types';
import { CategoryList } from './CategoryList';
import { Footer } from './Footer';
import { PostLink } from './PostLink';
import { SectionHeader } from '@components/SectionHeader';
import { GridLayout } from './layout/GridLayout';
import { SideContentLayout } from './layout/SideContentLayout';
import { TagList } from './TagList';
import { SiteHeader } from '@components/SiteHeader';
import { BlogContentLayout } from './layout/BlogContentLayout';
import { ThemeLayout } from './layout/ThemeLayout';
import { SECTIONS } from 'consts/sections';

interface Props {
  postSummaryList: PostSummary[];
}

export const PostListPage: FC<Props> = ({ postSummaryList }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [selectedTag, setSelectedTag] = useState<string>();

  const handleCategoryClick = (category: string) => {
    setSelectedCategory((prev) => (prev === category ? undefined : category));

    if (
      selectedTag &&
      !postSummaryList
        .filter((postSummary) => postSummary.category === category)
        .flatMap((postSummary) => postSummary.tags)
        .includes(selectedTag)
    ) {
      setSelectedTag(undefined);
    }
  };
  const handleTagClick = (tag: string) => {
    setSelectedTag((prev) => (prev === tag ? undefined : tag));
  };

  const categoryFilteredPostList = useMemo(() => {
    if (!!!selectedCategory) {
      return postSummaryList;
    }
    return postSummaryList.filter(
      (postSummary) => postSummary.category === selectedCategory,
    );
  }, [selectedCategory, postSummaryList]);

  const tagFilteredPostList = useMemo(() => {
    if (!!!selectedTag) {
      return categoryFilteredPostList;
    }
    return categoryFilteredPostList.filter((postSummary) =>
      postSummary.tags.includes(selectedTag),
    );
  }, [selectedTag, categoryFilteredPostList]);

  return (
    <>
      <ThemeLayout>
        <GridLayout>
          <SiteHeader />
          <SectionHeader
            title={SECTIONS.BLOG.title}
            path={SECTIONS.BLOG.path}
            description={SECTIONS.BLOG.description.toUpperCase()}
          />
          <BlogContentLayout>
            {tagFilteredPostList.map((postSummary) => {
              return (
                <PostLink postSummary={postSummary} key={postSummary.id} />
              );
            })}
          </BlogContentLayout>
          <SideContentLayout>
            <CategoryList
              selectedCategory={selectedCategory}
              postSummaryList={postSummaryList}
              onCategoryClick={handleCategoryClick}
            />
            <TagList
              selectedTag={selectedTag}
              postSummaryList={categoryFilteredPostList}
              onTagClick={handleTagClick}
            />
          </SideContentLayout>
          <Footer />
        </GridLayout>
      </ThemeLayout>
    </>
  );
};
