import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [
      {
        id: 1,
        image: "https://picsum.photos/400/300?random=1",
        title: "clothes 1",
        price: "$9.99",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 2,
        image: "https://picsum.photos/400/300?random=2",
        title: "shoes 2",
        price: "$19.99",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        id: 3,
        image: "https://picsum.photos/400/300?random=3",
        title: "Product 3",
        price: "$29.99",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        id: 4,
        image: "https://picsum.photos/400/300?random=4",
        title: "throueser 4",
        price: "$39.99",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        id: 5,
        image: "https://picsum.photos/400/300?random=5",
        title: "Product 5",
        price: "$49.99",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        id: 6,
        image: "https://picsum.photos/400/300?random=6",
        title: "Product 6",
        price: "$59.99",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ],
    searchQuery: "",
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { actions, reducer } = productsSlice;
