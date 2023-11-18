const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchProducts = createAsyncThunk(
  "ProductsSlices/fetchProducts",
  async () => {
    const res = await fetch("http://localhost:3004/products");
    const data = await res.json();
    // console.log(data);
    return data;
  }
);
const productsSlice = createSlice({
  initialState: [],
  name: "ProductsSlices",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {} = productsSlice.actions;
export default productsSlice.reducer;
