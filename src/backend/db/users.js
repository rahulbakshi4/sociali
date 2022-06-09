import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "zQDggFs",
    name: "James Bay",
    username: "jbay",
    password: "13579",
    bio: "What's Poppin",
    avatarUrl: "https://res.cloudinary.com/rahulb4/image/upload/v1643855031/peep_rssuj0.png",
    portfolio: "https://findtheinvisiblecow.com/",
    followers: [],
    following: [],
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: '9UW3Oba',
    name: "Aubree Ayala",
    username: "aubree04",
    password: "13579",
    bio: "",
    avatarUrl: "https://res.cloudinary.com/rahulb4/image/upload/v1654801438/aubree.png",
    portfolio: "",
    followers: [],
    following: [],
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  }, {
    _id: 'C9NXXrK',
    name: "Eliott Roman",
    username: "eliott_roman",
    password: "13579",
    bio: "",
    avatarUrl: "https://res.cloudinary.com/rahulb4/image/upload/v1654802197/elliot.png",
    portfolio: "",
    followers: [],
    following: [],
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  }, {
    _id: 'IZY5ebh',
    name: "Kyal Cameron",
    username: "cameronkyal",
    password: "13579",
    bio: "",
    avatarUrl: "https://res.cloudinary.com/rahulb4/image/upload/v1654801977/kyle.png",
    portfolio: "",
    followers: [],
    following: [],
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 'T7-yOVS',
    name: "Lilly Mai Morales",
    username: "lilly_morales",
    password: "13579",
    bio: "",
    avatarUrl: "https://res.cloudinary.com/rahulb4/image/upload/v1654801818/lily.png",
    portfolio: "",
    followers: [],
    following: [],
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];




