import React from "react";
import getAPI from "../api/phim";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Watching() {
  const { id, tap } = useParams();
  const [ep, setEp] = useState({});
  console.log(ep);
  useEffect(() => {
    const getDetailFilmFC = async () => {
      try {
        const a = await getAPI.getDetailPhim(`${id}`);
        console.log(a.data);
        const newEp = a.data.episodes[0].server_data.filter(
          (el) => el.name === tap
        )[0];
        setEp(newEp);
      } catch (error) {
        alert(error);
      }
    };
    getDetailFilmFC();
  }, [id, tap]);

  // if (!id || !tap) return;

  return (
    <div>
      <iframe
        src={ep.link_embed}
        width="100%"
        height="500px"
        controls
        frameborder="0"
        allowfullscreen
      ></iframe>
    {/* <iframe src="https://aa.nguonphimmoi.com/share/c74d97b01eae257e44aa9d5bade97baf" width="30%" height="300px" controls allowfullscreen> </iframe> */}

    </div>
  );
}

export default Watching;
