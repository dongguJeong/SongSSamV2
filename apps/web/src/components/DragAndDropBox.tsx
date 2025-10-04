import styled from "styled-components";
import { useState } from "react";

interface Props {
  labelId: string;
  onFileSelect?: (file: File | null) => void;
  placeholder?: string;
}

function DragAndDropBox({
  labelId,
  onFileSelect,
  placeholder = "파일을 선택하거나 여기에 끌어다 놓으세요",
}: Props) {
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFileName(file ? file.name : "");
    if (onFileSelect) onFileSelect(file);
  };

  return (
    <DragAndDropBoxStyle>
      <input
        type="file"
        id={labelId}
        onChange={handleFileChange}
        accept="audio/*"
      />
      <label htmlFor={labelId}>
        {fileName ? <p>{fileName}</p> : <p>{placeholder}</p>}
      </label>
    </DragAndDropBoxStyle>
  );
}

export default DragAndDropBox;

const DragAndDropBoxStyle = styled.div`
  width: 100%;
  height: 100%;
  border: 2px dashed #777;
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1f1f1f;
  color: #ededed;
  cursor: pointer;
  transition: background 0.2s ease;

  input {
    display: none;
  }

  label {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  label:hover {
    background-color: #2b2b2b;
  }
`;
