export interface Story {
  /* The username of the item's author. */
  by: string;

  /* In the case of stories or polls, the total comment count. */
  descendants: number;

  /* [Required] The item's unique id. */
  id: number;

  /* The ids of the item's comments, in ranked display order. */
  kids?: number[];

  /* The story's score, or the votes for a pollopt. */
  score: number;

  /* Creation date of the item, in Unix Time. */
  time: number;

  /* The title of the story, poll or job. */
  title: string;

  /* The type of item. One of "job", "story", "comment", "poll", or "pollopt". */
  type: string;

  /* The URL of the story. */
  url: string;
}
