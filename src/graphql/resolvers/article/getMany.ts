import * as T from '../../../types';
import { PrismaClient } from '@prisma/client';
import type * as GraphQL from '../../../types/graphql';

const prisma = new PrismaClient();

/**
 * Get many articles
 * @return [GraphQL.ArticleMany]
 */
const getManyArticle: T.Resolver<void, GraphQL.ArticleMany> = async () => {
  const count = await prisma.article.count();
  const result = await prisma.article.findMany();
  return {
    count,
    items: result.map((result) => {
      return {
        id: result.id,
        url: result.url,
        v: result.v,
        email: result.email,
        isPublished: result.isPublished,
        added: result.added,
        edited: result.edited,
        published: result.published,
        avgTimeStory: result.avgAllTimeStory,
        avgAllTimeStory: result.avgAllTimeStory,
        created: result.created?.toISOString() || '',
        updated: result.updated?.toISOString() || '',
      };
    }),
  };
};

export default getManyArticle;
