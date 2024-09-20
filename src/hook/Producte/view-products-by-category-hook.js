/** @format */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProductesByCategory } from "../../redux/action/producteAction";

const ViewProductsByCategoryHook = (id) => {
  const limit = 2;
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(GetProductesByCategory(limit, 1, id));
    };

    run();
  }, [id]);

  const noPress = async (page) => {
    await dispatch(GetProductesByCategory(limit, page, id));
  };

  const ProducteLimit = useSelector(
    (state) => state.productes?.productsByCategory
  );
  const items = ProducteLimit?.data || [];
  const pagination = ProducteLimit?.paginationResult || [];
  const resultCount = ProducteLimit?.results || 0;

  var pageCout = 0;

 

  if (pagination) {
    pageCout = pagination.numberOfPages;
  }

  return [items, pageCout, noPress];
};

export default ViewProductsByCategoryHook;
