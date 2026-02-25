import { useState } from "react";
import { WindowControls } from "@components";
import WindowWrapper from "@hoc/WindowWrapper";
import { Download } from "lucide-react";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>

        <a
          href="files/ROHAN_RESUME_MERN.pdf"
          download
          className="cursor-pointer"
          title="Download Resume"
        >
          <Download className="icon" />
        </a>
      </div>

      {/* Scroll container */}
      <div
        style={{
          height: "90vh",
          overflowY: "auto",
          padding: "10px",
        }}
      >
        <Document
          file="files/ROHAN_RESUME_MERN.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <>
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                renderTextLayer
                renderAnnotationLayer
              />
            </>
          ))}
        </Document>
      </div>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
