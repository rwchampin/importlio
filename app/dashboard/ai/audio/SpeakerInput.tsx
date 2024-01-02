"use client";
import { useState } from 'react';
import { Chip } from '@nextui-org/react';
const SpeakerInput = ({
  tags,
  setTags,
}:any) => {
  const [currentTag, setCurrentTag] = useState('');

  const handleKeyDown = (e:any) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTag();
    }
  };

  const handleChange = (e:any) => {
    setCurrentTag(e.target.value);
  };

  const addTag = () => {
    if (currentTag.trim() !== '') {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag('');
    }
  };

  const removeTag = (index:any) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  return (
    <div>
      <div>
        {tags.map((tag:any, index:any) => (
            <Chip color="primary" size="sm" onClose={() => removeTag(index)}>
              {tag}
            </Chip>
        ))}
      </div>
      <input
        type="text"
        value={currentTag}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        placeholder="Type and press Enter or comma to add tags"
      />
    </div>
  );
};

export default SpeakerInput;
