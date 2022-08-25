// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createServer } from "@graphql-yoga/node";
import type { NextApiRequest, NextApiResponse } from "next";
import outfitData from "data/outfits.json";
import productData from "data/products.json";

export default createServer<NextApiRequest, NextApiResponse>({
  schema: {
    typeDefs: `#graphql
      type Image {
        url: String!
        width: Int!
        height: Int!
      }

      type Outfit {
        id: String!
        title: String!
        image: Image!
        products: [String!]!
      }

      type Product {
        key: String!
        title: String!
        image: Image!
        bonprixLink: String
      }

      type Query {
        outfits: [Outfit!]!
        products(filter: String): [Product!]!
      }
    `,

    resolvers: {
      Query: {
        outfits: (): Outfit[] =>
          outfitData.data.allOutfits.edges.map((edge) => ({
            id: edge.node._meta.id,
            title: edge.node.outfit_title[0]!.text,
            image: {
              url: edge.node.media[0]!.image.url,
              width: edge.node.media[0]!.image.dimensions.width!,
              height: edge.node.media[0]?.image.dimensions.height!,
            },
            products: edge.node.product_article_numbers.map((article) =>
              article.product_article_number.toString()
            ),
          })),

        products: (_: unknown, args: { filter: string }): Product[] => {
          const keys = /key in \(([0-9,]+)\)/
            .exec(args.filter)?.[1]
            ?.toString()
            ?.split(",");

          return productData.data.products.results
            .filter((product) => keys?.includes(product.key))
            .map((product) => ({
              key: product.key,
              title: product.masterData.staged.nameAllLocales[0]!.value,
              image: {
                url: product.masterData.staged.masterVariant.images[0]!.url,
                width: parseInt(
                  /\/([0-9]+)x([0-9]+)\//.exec(
                    product.masterData.staged.masterVariant.images[0]!.url
                  )![1]!
                ),
                height: parseInt(
                  /\/([0-9]+)x([0-9]+)\//.exec(
                    product.masterData.staged.masterVariant.images[0]!.url
                  )![2]!
                ),
              },
              bonprixLink:
                product.masterData.staged.masterVariant.attributesRaw[0]!.value
                  .de,
            }));
        },
      },
    },
  },
});

type Image = {
  url: string;
  width: number;
  height: number;
};

type Outfit = {
  id: string;
  title: string;
  image: Image;
  products: string[];
};

type Product = {
  key: string;
  title: string;
  image: Image;
  bonprixLink: string;
};
