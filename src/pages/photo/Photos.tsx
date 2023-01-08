import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AddPhoto from "../addPhoto/AddPhoto";
import LoadingPage from "../loading";
import { MainPagePhoto } from "../mainPagePhoto/MainPagePhoto";
import NotFound from "../notFound/NotFound";

export interface IAppProps {}

export default function Photo(props: IAppProps) {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path="/add" element={<AddPhoto />} />
        <Route path="/" element={<MainPagePhoto />} />
        <Route path="/edit/:id" element={<AddPhoto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
