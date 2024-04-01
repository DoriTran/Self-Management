export interface TagSelected {
  tag: string;
  subTag?: string;
}

export interface TagData {
  tag: string;
  color: string;
  description?: string;
  subTags?: string[];
}
