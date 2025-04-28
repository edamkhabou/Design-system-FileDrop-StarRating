import React, { useCallback, useState } from 'react';

const FileDropZone: React.FC = () => {
    const [files, setFiles] = useState<File[]>([]);

    const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const droppedFiles = Array.from(event.dataTransfer.files);
        setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
    }, []);

    const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    }, []);

    return (
        <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            style={{
                border: '2px dashed #007bff',
                borderRadius: '8px',
                padding: '20px',
                textAlign: 'center',
                cursor: 'pointer',
            }}
        >
            <p>Drag and drop files here</p>
            <ul>
                {files.map((file, index) => (
                    <li key={index}>{file.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default FileDropZone;