import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { DetailPostScreen } from "./DetailPostScreen";
import { StartDetailPosts } from "../../action/post";

export const DetailPost = () => {
  const { data, isLoading } = useSelector((state) => state.dataFetch);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    let didCancel = false;
    const startDetail = async () => {
      dispatch({ type: "FETCH_INIT" });

      try {
        const results = await StartDetailPosts(id);

        if (!didCancel) {
          dispatch({ type: "FETCH_SUCCESS", payload: results });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: "FETCH_FAILURE" });
        }
      }
    };
    startDetail();
    return () => {
      didCancel = true;
    };
  }, [dispatch, id]);

  return (
    <div>
      <>
        {isLoading ? (
          <>
            <div className="spinner">
              <Spinner animation="border" variant="info" />
            </div>
          </>
        ) : (
          <div>
            <DetailPostScreen props={data[0]} />
          </div>
        )}
      </>
    </div>
  );
};
