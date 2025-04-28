export interface Emoji {
    id: string;
    name: string;
    image: string;
}

export interface FileUpload {
    name: string;
    size: number;
    type: string;
}

export interface ReorderableItem {
    id: string;
    content: React.ReactNode;
}

export interface StarRatingProps {
    rating: number;
    onRatingChange: (newRating: number) => void;
    totalStars?: number;
}