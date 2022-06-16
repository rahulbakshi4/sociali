import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: '2nTtzJ',
    userID: 'zQDggFs',
    content:
      'Guess who is scrolling product hunt like instagram at 4 in the morning.',
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    name: "James Bay",
    username: "jbay",
    avatarUrl: "https://res.cloudinary.com/rahulb4/image/upload/v1643855031/peep_rssuj0.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: 'EkmiEy',
    userID: 'IZY5ebh',
    content:
      `"It's never too early for ice cream." - Michael Scott`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    name: "Kyal Cameron",
    username: "cameronkyal",
    avatarUrl: "https://res.cloudinary.com/rahulb4/image/upload/v1654801977/kyle.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: '9owJJb',
    userID: 'T7-yOVS',
    content:
      "People say money can't buy happiness. They Lie. Money buys Coffee, Coffee makes Me Happy!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    name: "Lilly Mai Morales",
    username: "lilly_morales",
    avatarUrl: "https://res.cloudinary.com/rahulb4/image/upload/v1654801818/lily.png",

    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: '9owJJb',
    userID: 'C9NXXrK',
    content:
      "ah man they decided to shutdown Atom. I kinda liked atom.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    name: "Eliott Roman",
    username: "eliott_roman",
    avatarUrl: "https://res.cloudinary.com/rahulb4/image/upload/v1654802197/elliot.png",

    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: '9owJJb',
    userID: '9UW3Oba',
    content:
      "Just got my hands on Tiago Forte's new book 'Building A Second Brain', can't wait to read it over the weekend. ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    name: "Aubree Ayala",
    username: "aubree04",
    avatarUrl: "https://res.cloudinary.com/rahulb4/image/upload/v1654801438/aubree.png",

    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
