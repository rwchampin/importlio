"use client";

import Spinner from "@/app/components/Spinner";
import { Button } from "@nextui-org/react";
import { Reorder, useDragControls } from "framer-motion";
import React, { useEffect } from "react";
import SpeakerInput from "./SpeakerInput";
import TranscriptLine from "./TranscriptLine";
export default function Page() {
  const controls = useDragControls();
  const [tags, setTags] = React.useState<any>([]);
  const [merge, setMerge] = React.useState<any>([]);

  const [file, setFile] = React.useState<File | null>(null);
  const [transcript, setTranscript] = React.useState<any | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  useEffect(() => {
    const localTranscript: any = localStorage.getItem("transcript");
    const localFilename = localStorage.getItem("filename");
    if (localTranscript && localFilename) {
      setTranscript(JSON.parse(localTranscript));
    }
  }, []);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file");
      return;
    }
    setLoading(true);

    // check local storage
    const localTranscript: any = localStorage.getItem("transcript");
    const localFilename = localStorage.getItem("filename");

    // check if the name is the same
    if (localFilename === file.name) {
      setTranscript(JSON.parse(localTranscript));
      setLoading(false);
      return;
    }
    const data = new FormData();
    data.append("audio", file); // Use the same name as in the input field

    try {
      const response = await fetch("/api/ai/audio", {
        method: "POST",
        body: data,
        headers: {
          // No need to manually set Content-Type for FormData
          // It will be set automatically as multipart/form-data
        },
      });

      if (response.ok) {
        const result = await response.json();
        const data = result.transcript.map((line: any, i: any) => {
          return {
            id: i,
            speaker: null,
            text: line,
          };
        });
        setTranscript(data);
        // set local storage
        localStorage.setItem("filename", file.name);
        localStorage.setItem("transcript", JSON.stringify(data));
      } else {
        console.error("Failed to upload audio file.");
      }
    } catch (error) {
      console.error("Error during audio file upload:", error);
    }
    setLoading(false);
  };
  const saveToLocalStorage = () => {
    // saved to local storage
    localStorage.setItem("transcript", JSON.stringify(transcript));
    if(!file) return;
    localStorage.setItem("filename", file.name);
  };

  const updateLocalStorage = (transcript: any) => {
    // saved to local storage
    localStorage.setItem("transcript", JSON.stringify(transcript));
  };

  function fallbackCopyTextToClipboard(text:any) {
    var textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      var successful = document.execCommand("copy");
      var msg = successful ? "successful" : "unsuccessful";
      console.log("Fallback: Copying text command was " + msg);
    } catch (err) {
      console.error("Fallback: Oops, unable to copy", err);
    }

    document.body.removeChild(textArea);
  }
  function copyTextToClipboard() {
    if (!transcript) return;
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(transcript);
      return;
    }
    navigator.clipboard.writeText(transcript).then(
      function () {
        console.log("Async: Copying to clipboard was successful!");
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      }
    );
  }

  const handleSpeakerChange = (index:any, selectedSpeaker:any) => {
    setTranscript((prevTranscript:any) => {
      const updatedTranscript = [...prevTranscript];
      updatedTranscript[index].speaker = selectedSpeaker;
      return updatedTranscript;
    });
  };

  const handleSaveTranscriptLine = (lineId:any, newText:any) => {
    setTranscript((prevTranscript:any) => {
      const updatedTranscript = [...prevTranscript];
      const lineIndex = updatedTranscript.findIndex(
        (line) => line.id === lineId
      );
      if (lineIndex !== -1) {
        updatedTranscript[lineIndex].text = newText;
      }
      return updatedTranscript;
    });

    updateLocalStorage(transcript);
  };

  const handleReorder = (snew:any) => {
    setTranscript(snew);
  };

  // Define the handleMergeWithParent function
  const handleMergeWithParent = () => {
    if (merge.length < 2) {
      // You need at least two items to merge
      setMerge([]); // Clear the merge array
      return;
    }

    // Get the first item in the merge array
    const firstItem = merge[0];
    debugger;
    // Add the text of the other merge items into the text of the first item
    const mergedText = merge.slice(1).reduce((acc:any, curr:any) => {
      const line = transcript.find((item:any) => item.id === curr);
      debugger;
      return acc + line.text + " ";
    }, transcript.find((item:any) => item.id === firstItem)?.text || "");

    // Remove only the children items from the main array (excluding the first item)
    const updatedTranscript:any = transcript.filter(
      (line:any) => line.id === firstItem || !merge.includes(line.id)
    );

    const trans = updatedTranscript.map((line:any) => {
      // if the line is the first item, update the text
      if (line.id === firstItem) {
        return {
          id: line.id,
          text: mergedText,
        };
      }

      return line;
    });
    // Update the first item with the merged text
    setTranscript(trans);

    setMerge([]); // Clear the merge array after merging
    updateLocalStorage(transcript);
  };

  const handleMarkMerge = (lineId: any) => {
    if (merge.includes(lineId)) {
      setMerge((prevMerge:any) => prevMerge.filter((item:any) => item !== lineId));
    } else {
      setMerge((prevMerge:any) => [...prevMerge, lineId]);
    }
  };

  return (
    <div>
      <header className="flex items-center justify-between">
      <h2>Audio</h2>
      {transcript && (
      <Button 
        // reset button
        className="bg-red-500 text-white px-2 py-1 rounded-md"
        onClick={() => {
          setTranscript(null);
          setFile(null);
          localStorage.removeItem("transcript");
          localStorage.removeItem("filename");
        }}
      >
        Reset
      </Button>
      )}
      </header>
      {/* form for audio file */}
      <form
        // multi-part form data
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        {/* label for file input */}
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="file"
        >
          Audio File
        </label>
        {/* file input */}
        <input
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="file"
          type="file"
          accept="audio/*"
          onChange={(e: any) => setFile(e.target.files[0])}
          placeholder="Audio File"
        />
        {/* Submit button */}
        <input
          type="submit"
          className="bg-button text-white  h-input w-full rounded-md"
        />
      </form>
      {/* {transcript && (<div className='mt-5 flex gap-3 items-center'><BsClipboard onClick={copyTextToClipboard} className='relative block h-10 w-10 cursor-pointer hover:cursor-copy'/><span className='font-black uppercase font-montserrat'>Copy</span></div>)} */}
      {loading && <Spinner lg />}
      <SpeakerInput setTags={setTags} tags={tags} />
      {merge.length > 0 && (
        <button
          onClick={handleMergeWithParent}
          className="bg-blue-500 text-white px-2 py-1 rounded-md ml-2"
        >
          Merge with parent
        </button>
      )}
      {transcript && (
        <section className="mt-5">
          <div className="bg-gray-300 p-5 rounded-lg flex flex-col gap-3">
            <Reorder.Group
              axis="y"
              values={transcript}
              onReorder={handleReorder}
              className="reorder-group flex flex-col gap-3"
            >
              {transcript.map((line: any, index: number) => (
                <Reorder.Item key={line.id} value={line}>
                  <TranscriptLine
                    key={line.id}
                    handleMarkMerge={handleMarkMerge}
                    handleMergeWithParent={handleMergeWithParent}
                    line={line}
                    tags={tags}
                    merge={merge}
                    onSpeakerChange={handleSpeakerChange}
                    onSave={handleSaveTranscriptLine}
                    controls={controls}
                  />
                </Reorder.Item>
              ))}
            </Reorder.Group>
          </div>
        </section>
      )}

      {transcript && JSON.stringify(transcript)}
    </div>
  );
}
