// src/redux/slices/contentSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContentByCategory = createAsyncThunk(
  "content/fetchByCategory",
  async (category) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/php/kategori.php`,
        {
          kategori: category,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      return response.data;
    } catch (error) {
      console.log("Error fetching content detail:", error);
      throw error;
    }
  }
);

export const fetchContentDetail = createAsyncThunk(
  "content/fetchDetail",
  async ({ id, category }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/php/detay.php`,
        {
          kategori: category,
          id: id,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      return { data: response.data, category };
    } catch (error) {
      console.log("Error fetching content detail:", error);
      throw error;
    }
  }
);

export const fetchSearchContent = createAsyncThunk(
  "content/fetchSearchContent",
  async ({ category, search }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/php/kategori.php`,
        {
          kategori: category,
          search: search,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      return response.data;
    } catch (error) {
      console.log("Error fetching content detail:", error);
      throw error;
    }
  }
);

export const fetchContentByCategoryAndYear = createAsyncThunk(
  "content/fetchByCategoryAndYear",
  async ({ category, year, sehir }) => {
    try {
      let postData;
      if (sehir !== "sehir-sec") {
        postData = {
          kategori: category,
          yil: year,
          sehir: sehir,
        };
      } else {
        postData = {
          kategori: category,
          yil: year,
        };
      }

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/php/kategori.php`,
        postData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log("Error fetching content detail:", error);
      throw error;
    }
  }
);

export const fetchCityContent = createAsyncThunk(
  "content/fetchCityContent",
  async ({ category, sehir, yil }) => {
    try {
      let postData;
      if (yil !== "yil-sec") {
        postData = {
          kategori: category,
          sehir: sehir,
          yil: yil, 
        };
      } else {
        postData = {
          kategori: category,
          sehir: sehir,
        };
      }

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/php/kategori.php`,
        postData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log("Error fetching content detail:", error);
      throw error;
    }
  }
);

const contentSlice = createSlice({
  name: "content",
  initialState: {
    list: [],
    details: {
      yolsuzluklar: null,
      isciler: null,
      kopekler: null,
      intihar: null,
    },
    listStatus: "idle",
    detailStatus: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // KATEGORİ VERİSİ START
      .addCase(fetchContentByCategory.pending, (state) => {
        state.listStatus = "loading";
      })
      .addCase(fetchContentByCategory.fulfilled, (state, action) => {
        state.listStatus = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchContentByCategory.rejected, (state, action) => {
        state.listStatus = "failed";
        state.error = action.error.message;
      })
      // KATEGORİ VERİSİ END

      // DETAY VERİSİ START
      .addCase(fetchContentDetail.pending, (state) => {
        state.detailStatus = "loading";
      })
      .addCase(fetchContentDetail.fulfilled, (state, action) => {
        const { data, category } = action.payload;
        state.detailStatus = "succeeded";
        state.details[category] = data;
      })
      .addCase(fetchContentDetail.rejected, (state, action) => {
        state.detailStatus = "failed";
        state.error = action.error.message;
      })
      // DETAY VERİSİ END

      // YILA GÖRE VERİLER START
      .addCase(fetchContentByCategoryAndYear.pending, (state) => {
        state.listStatus = "loading";
      })
      .addCase(fetchContentByCategoryAndYear.fulfilled, (state, action) => {
        state.listStatus = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchContentByCategoryAndYear.rejected, (state, action) => {
        state.listStatus = "failed";
        state.error = action.error.message;
      })
      // YILA GÖRE VERİLER END

      // ARAMAYA GÖRE VERİLER START
      .addCase(fetchSearchContent.pending, (state) => {
        state.listStatus = "loading";
      })
      .addCase(fetchSearchContent.fulfilled, (state, action) => {
        state.listStatus = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchSearchContent.rejected, (state, action) => {
        state.listStatus = "failed";
        state.error = action.error.message;
      })
      // ARAMAYA GÖRE VERİLER END

      // ŞEHİRE GÖRE VERİLER START
      .addCase(fetchCityContent.pending, (state) => {
        state.listStatus = "loading";
      })
      .addCase(fetchCityContent.fulfilled, (state, action) => {
        state.listStatus = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchCityContent.rejected, (state, action) => {
        state.listStatus = "failed";
        state.error = action.error.message;
      });
    // ŞEHİRE GÖRE VERİLER END
  },
});

export default contentSlice.reducer;
