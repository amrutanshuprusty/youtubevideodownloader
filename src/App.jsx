import React from "react";
import { FaYoutube } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";

function App() {
  const [URL, setURL] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setURL(e.target.value);
  };
  // console.log(URL);

  const downloadVideo = async (e) => {
    e.preventDefault();

    const options = {
      method: "GET",
      url: "https://youtube-data8.p.rapidapi.com/video/streaming-data/",
      params: { id: URL },
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_API_KEY,
        "x-rapidapi-host": "youtube-data8.p.rapidapi.com",
        // 'content-type': 'application/json'
      },
    };

    try {
      const rspn = await axios.request(options);
      console.log(rspn?.data?.formats[Number(0)]?.url);
      window.location.href = rspn?.data?.formats[Number(0)]?.url;
    } catch (error) {
      console.log(error);
    }
  };
  console.log(URL);

  return (
    <div className="h-500 w-1000 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-red-700 via-red-600 to-red-700">
      <div className="flex items-center justify-center gap-x-2 text-xl font-bold pt-10">
        <FaYoutube size={50} />
        <p>Video Downloader</p>
      </div>

      <div className="flex items-center justify-center gap-x-2">
        <input
          type="url"
          placeholder="Paste URL from Youtube"
          className="h-10 w-[450px] rounded-3xl px-3 outline-none ring-0 hover:ring-2 hover:ring-black"
          onChange={handleInput}
        />
        <button
          className="bg-black text-white h-10 px-3 rounded-3xl font-semibold hover:bg-white hover:text-black hover:font-semibold"
          onClick={downloadVideo}
        >
          Download
        </button>
      </div>

      {/* <div className=" flex items-center justify-center "> */}
      <h1 className="flex items-center justify-center mt-10 text-3xl font-bold">
        Online & Free YouTube Video Downloader
      </h1>
      <p className="flex items-center justify-center mt-5 text-base font-medium  mx-48 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        labore adipisci non fuga facilis minima, magni impedit rerum repudiandae
        laborum, error quo sint omnis cum maiores iusto nostrum! Facere
        praesentium facilis deserunt officia laboriosam, cum porro fugit fugiat
        maxime repudiandae nobis quos incidunt quo nam. Odit mollitia, facilis
        amet minima doloribus ipsam delectus assumenda veniam, ullam dicta minus
        asperiores iusto, eveniet maxime. Aliquam, numquam suscipit voluptas
        veniam cupiditate quidem dolore dolorum magni. Facere odit praesentium
        aut nisi, ut consequatur perspiciatis vitae modi, in provident neque
        repellendus! Dolorem molestiae odio, consequatur quaerat quisquam minima
        laborum ad sunt doloremque reiciendis aperiam id?
      </p>
      <div>
        <h1 className="flex items-center justify-center mt-10 text-3xl font-bold ">
          How to Download YouTube Video using our downloader
        </h1>

        <p className="flex items-center justify-center mt-5 text-xl font-bold">
          Following the below steps👇🏻
        </p>
        <div className="flex items-center justify-center flex-col ">
          <p className="m-5 text-lg font-semibold bg-black text-white px-3 rounded-3xl p-1">
            1. Play your youtube video you want to download & Click share
            button.
          </p>
          <img src="src/1st.PNG" className="h-60" />

          <p className="m-5 text-lg font-semibold  bg-black text-white px-3 rounded-3xl p-1">
            2. Click on copy link.
          </p>
          <img src="src/2nd.PNG" className="h-60" />

          <p className="m-5 text-lg font-semibold  bg-black text-white px-3 rounded-3xl p-1">
            3. Paste your link in Search Box.
          </p>
          <img src="src/3rd.PNG" />

          <p className="m-5 text-lg font-semibold  bg-black text-white px-3 rounded-3xl p-1">
            4. Click on Download button.
          </p>
          <img src="src/4th.PNG" />

          <p className="m-5 text-lg font-semibold  bg-black text-white px-3 rounded-3xl p-1">
            5. Now you see the download started.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center bg-black text-white h-20">
        <p>Copyright ©2024 CodeXintern. </p>
      </div>
    </div>
  );
}

export default App;
