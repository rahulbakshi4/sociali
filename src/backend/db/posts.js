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
    createdAt: new Date('Tue Jun 13 2022 01:00:00 GMT+0530'),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        name: "Kyal Cameron",
        username: "cameronkyal",
        userID: 'IZY5ebh',
        text: "Haha that's a good one",
        avatarUrl: "https://res.cloudinary.com/rahulb4/image/upload/v1654801977/kyle.png",
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
      likeCount: 3,
      likedBy: [
        {
          _id: 'zQDggFs',
          username: 'jbay',
          name: 'James Bay',
          avatarUrl: "https://res.cloudinary.com/rahulb4/image/upload/v1643855031/peep_rssuj0.png",
        },
        {
          _id: 'IZY5ebh',
          username: 'cameronkyal',
          name: 'Kyal Cameron',
          avatarUrl: "https://res.cloudinary.com/rahulb4/image/upload/v1654801977/kyle.png",
        },
        {
          _id: 'T7-yOVS',
          name: "Lilly Mai Morales",
          username: "lilly_morales",
          avatarUrl: "https://res.cloudinary.com/rahulb4/image/upload/v1654801818/lily.png",

        }
      ],
      dislikedBy: [],
    },
    name: "Kyal Cameron",
    username: "cameronkyal",
    avatarUrl: "https://res.cloudinary.com/rahulb4/image/upload/v1654801977/kyle.png",
    createdAt: new Date('Mon Jun 13 2022 01:00:00 GMT+0530'),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        name: "Aubree Ayala",
        username: "aubree04",
        userID: '9UW3Oba',
        avatarUrl: "https://res.cloudinary.com/rahulb4/image/upload/v1654801438/aubree.png",
        text: "Parkour!!! 🏃‍♂️",
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
      likeCount: 2,
      likedBy: [
        {
          _id: 'zQDggFs',
          username: 'jbay',
          name: 'James Bay',
          avatarUrl: "https://res.cloudinary.com/rahulb4/image/upload/v1643855031/peep_rssuj0.png",
        },
        {
          _id: 'C9NXXrK',
          name: "Eliott Roman",
          username: "eliott_roman",
          avatarUrl: "https://res.cloudinary.com/rahulb4/image/upload/v1654802197/elliot.png",

        }
      ],
      dislikedBy: [],
    },
    name: "Lilly Mai Morales",
    username: "lilly_morales",
    avatarUrl: "https://res.cloudinary.com/rahulb4/image/upload/v1654801818/lily.png",

    comments: [
      {
        _id: uuid(),
        username: "jbay",
        userID: 'zQDggFs',
        name: "James Bay",
        text: "I need to get some coffee",
        avatarUrl: "https://res.cloudinary.com/rahulb4/image/upload/v1654856968/peep_rssuj0.png",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: new Date('Thu Jun 16 2022 10:09:11 GMT+0530'),
    updatedAt: formatDate(),
  },
  {
    _id: 'eYN1jV',
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
        username: "lilly_morales",
        name: "Lilly Mai Morales",
        text: "Yaa man, I started out with atom",
        userID: "T7-yOVS",
        avatarUrl: "https://res.cloudinary.com/rahulb4/image/upload/v1654856968/lily.png",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: new Date('Sun Jun 19 2022 06:09:11 GMT+0530'),
    updatedAt: formatDate(),
  },
  {
    _id: '6Fv7dT',
    userID: '9UW3Oba',
    content:
      "Just got my hands on Tiago Forte's new book 'Building A Second Brain', can't wait to read it over the weekend. ",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: 'zQDggFs',
          username: 'jbay',
          name: 'James Bay',
          avatarUrl: "https://res.cloudinary.com/rahulb4/image/upload/v1643855031/peep_rssuj0.png",
        }
      ],
      dislikedBy: [],
    },
    name: "Aubree Ayala",
    username: "aubree04",
    avatarUrl: "https://res.cloudinary.com/rahulb4/image/upload/v1654801438/aubree.png",

    comments: [
      {
        _id: uuid(),
        username: "eliott_roman",
        name: "Eliott Roman",
        text: "I'm gonna read it",
        userID: "C9NXXrK",
        avatarUrl: "https://res.cloudinary.com/rahulb4/image/upload/v1654856968/elliot.png",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: new Date('Tue Jun 21 2022 11:11:11 GMT+0530'),
    updatedAt: formatDate(),
  },
];
