import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const News = () => {
  const { id } = useParams();
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/news`)
      .then((res) => {
        console.log(res);
        setDatas(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div>
      <div className="container-lg my-24 mx-auto md:px-6">
        <section className="mb-32 text-center">
          <h2 className="mb-12 pb-4 text-center text-3xl font-bold">
            Latest news
          </h2>

          <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
            {datas.map((data) => (
              <div className="mb-6 lg:mb-0">
                <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="flex">
                    <div
                      className="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      <img src={data.image} className="w-full" alt="" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h5 className="mb-3 text-lg font-bold">{data.title}</h5>
                    <p className="mb-4 pb-2 truncate">{data.desc}</p>
                    <Link
                      to={`/News/${data._id}`}
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      className="inline-block rounded-full bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default News;
