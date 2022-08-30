import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//Types
//import as a type and instantly see it's a type
import type { BitcoinData } from "../bitcoinTypes";

const BASE_URL = "https://blockchain.info";

export const bitcoinApi = createApi({
  reducerPath: 'bitcoinApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL}),
  endpoints: builder => ({
    getBitcoinData: builder.query<BitcoinData, undefined>({
      query: () => '/ticker'
    })
  })
})
//Has to start with use then our endpoint name and finally the query becuase of query
export const { useGetBitcoinDataQuery} = bitcoinApi