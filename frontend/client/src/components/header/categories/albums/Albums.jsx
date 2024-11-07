import React from "react";
import { getAllAlbums } from "../../../../api/api";
import { useEffect, useState } from "react";
import ProductCard from "../../../elements/ProductCard";

function Albums() {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    async function loadAllAlbums() {
      const albumData = await getAllAlbums();
      setAlbums(albumData);
    }
    loadAllAlbums();
  }, []);

  return (
    <>
      <div className="relative isolate px-15 pt-20 lg:px-15">
        <div className="text-left">
          <h1 className="text-1xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            All Albums
          </h1>
        </div>
      </div>
      <div className="gap-2 grid grid-cols-4 sm:grid-cols-4">
        {albums.map((album) => {
          return (
            <>
              <ProductCard product={album} />
            </>
          );
        })}
      </div>
    </>
  );
}

export default Albums;
