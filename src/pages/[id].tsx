import React from "react";
import { useRouter } from "next/router";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

const Content = () => {
  const router = useRouter();

  console.log(router.query.title);

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div className="max-w-5xl p-4 mx-auto">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.js">
        <div
          style={{
            height: "100vh",
            width: "100%",
          }}
        >
          <Viewer
            fileUrl={`./assets/${router.query.title}.pdf`}
            plugins={[defaultLayoutPluginInstance]}
          />
        </div>
      </Worker>
    </div>
  );
};

export default Content;
