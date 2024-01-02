// TranscriptLine.jsx
import { useEffect, useState } from "react";
import {
    RxDotsVertical,
    RxPencil1,
    RxPerson
} from "react-icons/rx";
import SelectDropdown from "./SpeakerSelect";

import {
    Button,
    Checkbox,
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@nextui-org/react";
import { Reorder } from "framer-motion";

const TranscriptLine = ({
  line,
  tags,
  controls,
  onSave,
  onSpeakerChange,
  handleMarkMerge,
  merge,
}: any) => {
  const [editMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState(line.text);

  useEffect(() => {
    // Reset edit mode when component updates
    setEditMode(false);
  }, [line.id]);

  const handleToggleEdit = () => {
    setEditMode((prevEditMode) => !prevEditMode);
  };

  const handleTextChange = (e:any) => {
    setEditedText(e.target.value);
  };

  const handleSaveEdit = () => {
    setEditMode(false);
    onSave(line.id, editedText);
  };

  const handleCheckboxChange = () => {
    handleMarkMerge(line.id);
  };
  debugger
  return (
    <Reorder.Item
      value={line}
      dragListener={false}
      dragControls={controls}
      className="relative reorder-handle   flex gap-2 items-start justify-between bg-gray-100 rounded-lg"
      key={line.id}
    >
      <div className="flex gap-2 items-center justify-start w-full h-full">
        {editMode ? (
          <SelectDropdown
            options={tags}
            selected={line.speaker}
            updateTranscript={(selectedSpeaker:any) => {
              onSpeakerChange(line.id, selectedSpeaker);

            }}
          />
        ) : (


            <span className="text-gray-800">
                {line.speaker ? line.speaker : <RxPerson className="h-5 w-5" />}
            </span>

        )}
        {editMode ? (
          <>
            <textarea
              value={editedText}
              onChange={handleTextChange}
              className="bg-gray-100 rounded-md p-1 flex-auto"
            />
            <Button
              className="bg-green-500 text-white px-2 py-1 rounded-md"
              onClick={handleSaveEdit}
            >
              Save
            </Button>
            <Button
              className="bg-red-500 text-white px-2 py-1 rounded-md"
              onClick={handleToggleEdit}
            >
              Cancel
            </Button>
          </>
        ) : (
          <p className="text-black">
            {line.text}
          </p>
        )}
      </div>
      <Checkbox
        isSelected={merge.includes(line.id)}
        onChange={handleCheckboxChange}
      />
      <Popover
        placement="right"
      >
        <PopoverTrigger>
          <Button isIconOnly>
            <RxDotsVertical className="text-gray-400 h-5 w-5" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="bg-gray-100 p-2 rounded-md">
          <div className="flex gap-2 items-center">
            <ul className="flex flex-col gap-2 items-center">
              <li className="flex gap-2 items-center justify-start">
                <RxPencil1
                  className="text-green-800 h-6 w-6"
                  onClick={handleToggleEdit}
                />
                <span className="text-gray-800">Edit</span>
              </li>
            </ul>
          </div>
        </PopoverContent>
      </Popover>
    </Reorder.Item>
  );
};

export default TranscriptLine;
