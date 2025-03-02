/**
 * Optibot Line Group
 */
export type OptibotLineGroup = {
    id: string;
    label: string;
    is_enabled: boolean;
};

/**
 * Optibot Line Message
 */
export type OptibotLineMessage = {
    id: string;
    sent_time: number;
    message_type: "TEXT" | "IMAGE" | "VIDEO" | "AUDIO" | "FILE";
    text_content?: string;
    file_name?: string;
    file_url?: string;
    file_mime_type?: string;
    file_size_bytes?: number;
    image_preview_url?: string;
    playable_duration_milliseconds?: number;
    group?: OptibotLineGroup;
}