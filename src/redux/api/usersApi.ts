import { api } from "./index";
import { Product } from "../../redux/type";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    product: build.query<Product[], void>({
      query: () => ({
        url:"/products.json",
      })
    }),

    viewdeates: build.query<Product, number>({
      query: (id) => ({
        url: `/products/${id}.json`,
      }),
      providesTags: ["BRANDS"],
    }),
    
      
  }),
});

export const { useProductQuery, useViewdeatesQuery  } = authApi;
