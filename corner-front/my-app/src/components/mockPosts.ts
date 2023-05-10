import { Post } from "../types/Post";
const mockPosts: Post[] = [
  {
    id: 1,
    user_id: 2,
    caption:
      "The sky was painted with vibrant hues of crimson, gold, and magenta as the sun sank below the horizon, casting a warm glow across the landscape and illuminating the world with its final rays of light before disappearing into the depths of the ocean, leaving behind a darkening sky adorned with glittering stars and a sliver of a crescent moon, a breathtaking scene that filled the hearts of onlookers with awe and wonder at the sheer beauty and majesty of the natural world.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 3, username: "user3" },
      { id: 4, username: "user4" },
    ],
    comments: [
      { id: 5, username: "user5", comment: "This is a comment" },
      { id: 6, username: "user6", comment: "This is another comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 2,
    user_id: 3,
    caption:
      "The waves crashed against the shore, their frothy white peaks contrasting sharply with the deep blue of the ocean, as seagulls wheeled and called overhead, their cries mingling with the sound of the wind and the water to create a symphony of natural music that filled the air with a sense of peace and tranquility.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 1, username: "johndoe" },
      { id: 2, username: "janedoe" },
      { id: 4, username: "user4" },
    ],
    comments: [
      { id: 7, username: "user7", comment: "This is a comment" },
      { id: 8, username: "user8", comment: "This is another comment" },
      { id: 9, username: "user9", comment: "This is a third comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 22,
    user_id: 1,
    caption: "The sun sets over the city skyline, casting a warm glow over the skyscrapers and filling the sky with vibrant shades of orange and pink.",
    image: `https://picsum.photos/500/500?random=${Math.floor(Math.random() * 1000)}`,
    likes: [
      { id: 5, username: "user5" },
      { id: 12, username: "user12" },
      { id: 16, username: "user16" },
    ],
    comments: [
      { id: 37, username: "user37", comment: "This is a comment" },
      { id: 42, username: "user42", comment: "This is another comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 23,
    user_id: 4,
    caption: "A misty morning in the forest, the sunlight filtering through the trees and casting dappled shadows on the ground.",
    image: `https://picsum.photos/500/500?random=${Math.floor(Math.random() * 1000)}`,
    likes: [
      { id: 7, username: "user7" },
      { id: 13, username: "user13" },
      { id: 18, username: "user18" },
    ],
    comments: [
      { id: 51, username: "user51", comment: "This is a comment" },
      { id: 56, username: "user56", comment: "This is another comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 24,
    user_id: 2,
    caption: "A lone boat sails across the calm waters of a misty lake, the trees on the shore shrouded in fog.",
    image: `https://picsum.photos/500/500?random=${Math.floor(Math.random() * 1000)}`,
    likes: [
      { id: 1, username: "johndoe" },
      { id: 9, username: "user9" },
      { id: 20, username: "user20" },
    ],
    comments: [
      { id: 72, username: "user72", comment: "This is a comment" },
      { id: 76, username: "user76", comment: "This is another comment" },
      { id: 80, username: "user80", comment: "This is a third comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 25,
    user_id: 8,
    caption:
      "The forest was alive with the sound of birdsong, the rustle of leaves underfoot, and the gentle murmur of a nearby stream, a tranquil scene that filled the heart with a sense of peace and serenity.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 2, username: "janedoe" },
      { id: 3, username: "user3" },
      { id: 4, username: "user4" },
    ],
    comments: [
      { id: 45, username: "user45", comment: "This is a comment" },
      { id: 46, username: "user46", comment: "This is another comment" },
      { id: 47, username: "user47", comment: "This is a third comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 24,
    user_id: 4,
    caption:
      "The city streets were alive with the sound of traffic, the chatter of people, and the bright lights of the neon signs, a bustling scene that filled the senses with energy and excitement.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 1, username: "johndoe" },
      { id: 4, username: "user4" },
      { id: 5, username: "user5" },
      { id: 8, username: "user8" },
    ],
    comments: [
      { id: 48, username: "user48", comment: "This is a comment" },
      { id: 49, username: "user49", comment: "This is another comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 25,
    user_id: 6,
    caption:
      "The mountains loomed majestically in the distance, their snow-capped peaks piercing the clouds and casting deep shadows across the valleys below, a rugged and awe-inspiring landscape that filled the soul with wonder and admiration.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 3, username: "user3" },
      { id: 6, username: "user6" },
      { id: 9, username: "user9" },
    ],
    comments: [
      { id: 50, username: "user50", comment: "This is a comment" },
      { id: 51, username: "user51", comment: "This is another comment" },
      { id: 52, username: "user52", comment: "This is a third comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 23,
    user_id: 8,
    caption:
      "The forest was alive with the sound of birdsong, the rustle of leaves underfoot, and the gentle murmur of a nearby stream, a tranquil scene that filled the heart with a sense of peace and serenity.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 2, username: "janedoe" },
      { id: 3, username: "user3" },
      { id: 4, username: "user4" },
    ],
    comments: [
      { id: 45, username: "user45", comment: "This is a comment" },
      { id: 46, username: "user46", comment: "This is another comment" },
      { id: 47, username: "user47", comment: "This is a third comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 24,
    user_id: 4,
    caption:
      "The city streets were alive with the sound of traffic, the chatter of people, and the bright lights of the neon signs, a bustling scene that filled the senses with energy and excitement.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 1, username: "johndoe" },
      { id: 4, username: "user4" },
      { id: 5, username: "user5" },
      { id: 8, username: "user8" },
    ],
    comments: [
      { id: 48, username: "user48", comment: "This is a comment" },
      { id: 49, username: "user49", comment: "This is another comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 25,
    user_id: 6,
    caption:
      "The mountains loomed majestically in the distance, their snow-capped peaks piercing the clouds and casting deep shadows across the valleys below, a rugged and awe-inspiring landscape that filled the soul with wonder and admiration.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 3, username: "user3" },
      { id: 6, username: "user6" },
      { id: 9, username: "user9" },
    ],
    comments: [
      { id: 50, username: "user50", comment: "This is a comment" },
      { id: 51, username: "user51", comment: "This is another comment" },
      { id: 52, username: "user52", comment: "This is a third comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 23,
    user_id: 8,
    caption:
      "The forest was alive with the sound of birdsong, the rustle of leaves underfoot, and the gentle murmur of a nearby stream, a tranquil scene that filled the heart with a sense of peace and serenity.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 2, username: "janedoe" },
      { id: 3, username: "user3" },
      { id: 4, username: "user4" },
    ],
    comments: [
      { id: 45, username: "user45", comment: "This is a comment" },
      { id: 46, username: "user46", comment: "This is another comment" },
      { id: 47, username: "user47", comment: "This is a third comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 24,
    user_id: 4,
    caption:
      "The city streets were alive with the sound of traffic, the chatter of people, and the bright lights of the neon signs, a bustling scene that filled the senses with energy and excitement.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 1, username: "johndoe" },
      { id: 4, username: "user4" },
      { id: 5, username: "user5" },
      { id: 8, username: "user8" },
    ],
    comments: [
      { id: 48, username: "user48", comment: "This is a comment" },
      { id: 49, username: "user49", comment: "This is another comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 25,
    user_id: 6,
    caption:
      "The mountains loomed majestically in the distance, their snow-capped peaks piercing the clouds and casting deep shadows across the valleys below, a rugged and awe-inspiring landscape that filled the soul with wonder and admiration.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 3, username: "user3" },
      { id: 6, username: "user6" },
      { id: 9, username: "user9" },
    ],
    comments: [
      { id: 50, username: "user50", comment: "This is a comment" },
      { id: 51, username: "user51", comment: "This is another comment" },
      { id: 52, username: "user52", comment: "This is a third comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 23,
    user_id: 8,
    caption:
      "The forest was alive with the sound of birdsong, the rustle of leaves underfoot, and the gentle murmur of a nearby stream, a tranquil scene that filled the heart with a sense of peace and serenity.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 2, username: "janedoe" },
      { id: 3, username: "user3" },
      { id: 4, username: "user4" },
    ],
    comments: [
      { id: 45, username: "user45", comment: "This is a comment" },
      { id: 46, username: "user46", comment: "This is another comment" },
      { id: 47, username: "user47", comment: "This is a third comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 24,
    user_id: 4,
    caption:
      "The city streets were alive with the sound of traffic, the chatter of people, and the bright lights of the neon signs, a bustling scene that filled the senses with energy and excitement.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 1, username: "johndoe" },
      { id: 4, username: "user4" },
      { id: 5, username: "user5" },
      { id: 8, username: "user8" },
    ],
    comments: [
      { id: 48, username: "user48", comment: "This is a comment" },
      { id: 49, username: "user49", comment: "This is another comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 25,
    user_id: 6,
    caption:
      "The mountains loomed majestically in the distance, their snow-capped peaks piercing the clouds and casting deep shadows across the valleys below, a rugged and awe-inspiring landscape that filled the soul with wonder and admiration.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 3, username: "user3" },
      { id: 6, username: "user6" },
      { id: 9, username: "user9" },
    ],
    comments: [
      { id: 50, username: "user50", comment: "This is a comment" },
      { id: 51, username: "user51", comment: "This is another comment" },
      { id: 52, username: "user52", comment: "This is a third comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 23,
    user_id: 8,
    caption:
      "The forest was alive with the sound of birdsong, the rustle of leaves underfoot, and the gentle murmur of a nearby stream, a tranquil scene that filled the heart with a sense of peace and serenity.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 2, username: "janedoe" },
      { id: 3, username: "user3" },
      { id: 4, username: "user4" },
    ],
    comments: [
      { id: 45, username: "user45", comment: "This is a comment" },
      { id: 46, username: "user46", comment: "This is another comment" },
      { id: 47, username: "user47", comment: "This is a third comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 24,
    user_id: 4,
    caption:
      "The city streets were alive with the sound of traffic, the chatter of people, and the bright lights of the neon signs, a bustling scene that filled the senses with energy and excitement.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 1, username: "johndoe" },
      { id: 4, username: "user4" },
      { id: 5, username: "user5" },
      { id: 8, username: "user8" },
    ],
    comments: [
      { id: 48, username: "user48", comment: "This is a comment" },
      { id: 49, username: "user49", comment: "This is another comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 25,
    user_id: 6,
    caption:
      "The mountains loomed majestically in the distance, their snow-capped peaks piercing the clouds and casting deep shadows across the valleys below, a rugged and awe-inspiring landscape that filled the soul with wonder and admiration.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 3, username: "user3" },
      { id: 6, username: "user6" },
      { id: 9, username: "user9" },
    ],
    comments: [
      { id: 50, username: "user50", comment: "This is a comment" },
      { id: 51, username: "user51", comment: "This is another comment" },
      { id: 52, username: "user52", comment: "This is a third comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 23,
    user_id: 8,
    caption:
      "The forest was alive with the sound of birdsong, the rustle of leaves underfoot, and the gentle murmur of a nearby stream, a tranquil scene that filled the heart with a sense of peace and serenity.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 2, username: "janedoe" },
      { id: 3, username: "user3" },
      { id: 4, username: "user4" },
    ],
    comments: [
      { id: 45, username: "user45", comment: "This is a comment" },
      { id: 46, username: "user46", comment: "This is another comment" },
      { id: 47, username: "user47", comment: "This is a third comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 24,
    user_id: 4,
    caption:
      "The city streets were alive with the sound of traffic, the chatter of people, and the bright lights of the neon signs, a bustling scene that filled the senses with energy and excitement.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 1, username: "johndoe" },
      { id: 4, username: "user4" },
      { id: 5, username: "user5" },
      { id: 8, username: "user8" },
    ],
    comments: [
      { id: 48, username: "user48", comment: "This is a comment" },
      { id: 49, username: "user49", comment: "This is another comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 25,
    user_id: 6,
    caption:
      "The mountains loomed majestically in the distance, their snow-capped peaks piercing the clouds and casting deep shadows across the valleys below, a rugged and awe-inspiring landscape that filled the soul with wonder and admiration.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 3, username: "user3" },
      { id: 6, username: "user6" },
      { id: 9, username: "user9" },
    ],
    comments: [
      { id: 50, username: "user50", comment: "This is a comment" },
      { id: 51, username: "user51", comment: "This is another comment" },
      { id: 52, username: "user52", comment: "This is a third comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 23,
    user_id: 8,
    caption:
      "The forest was alive with the sound of birdsong, the rustle of leaves underfoot, and the gentle murmur of a nearby stream, a tranquil scene that filled the heart with a sense of peace and serenity.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 2, username: "janedoe" },
      { id: 3, username: "user3" },
      { id: 4, username: "user4" },
    ],
    comments: [
      { id: 45, username: "user45", comment: "This is a comment" },
      { id: 46, username: "user46", comment: "This is another comment" },
      { id: 47, username: "user47", comment: "This is a third comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 24,
    user_id: 4,
    caption:
      "The city streets were alive with the sound of traffic, the chatter of people, and the bright lights of the neon signs, a bustling scene that filled the senses with energy and excitement.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 1, username: "johndoe" },
      { id: 4, username: "user4" },
      { id: 5, username: "user5" },
      { id: 8, username: "user8" },
    ],
    comments: [
      { id: 48, username: "user48", comment: "This is a comment" },
      { id: 49, username: "user49", comment: "This is another comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 25,
    user_id: 6,
    caption:
      "The mountains loomed majestically in the distance, their snow-capped peaks piercing the clouds and casting deep shadows across the valleys below, a rugged and awe-inspiring landscape that filled the soul with wonder and admiration.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 3, username: "user3" },
      { id: 6, username: "user6" },
      { id: 9, username: "user9" },
    ],
    comments: [
      { id: 50, username: "user50", comment: "This is a comment" },
      { id: 51, username: "user51", comment: "This is another comment" },
      { id: 52, username: "user52", comment: "This is a third comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 23,
    user_id: 8,
    caption:
      "The forest was alive with the sound of birdsong, the rustle of leaves underfoot, and the gentle murmur of a nearby stream, a tranquil scene that filled the heart with a sense of peace and serenity.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 2, username: "janedoe" },
      { id: 3, username: "user3" },
      { id: 4, username: "user4" },
    ],
    comments: [
      { id: 45, username: "user45", comment: "This is a comment" },
      { id: 46, username: "user46", comment: "This is another comment" },
      { id: 47, username: "user47", comment: "This is a third comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 24,
    user_id: 4,
    caption:
      "The city streets were alive with the sound of traffic, the chatter of people, and the bright lights of the neon signs, a bustling scene that filled the senses with energy and excitement.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 1, username: "johndoe" },
      { id: 4, username: "user4" },
      { id: 5, username: "user5" },
      { id: 8, username: "user8" },
    ],
    comments: [
      { id: 48, username: "user48", comment: "This is a comment" },
      { id: 49, username: "user49", comment: "This is another comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 25,
    user_id: 6,
    caption:
      "The mountains loomed majestically in the distance, their snow-capped peaks piercing the clouds and casting deep shadows across the valleys below, a rugged and awe-inspiring landscape that filled the soul with wonder and admiration.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 3, username: "user3" },
      { id: 6, username: "user6" },
      { id: 9, username: "user9" },
    ],
    comments: [
      { id: 50, username: "user50", comment: "This is a comment" },
      { id: 51, username: "user51", comment: "This is another comment" },
      { id: 52, username: "user52", comment: "This is a third comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 23,
    user_id: 8,
    caption:
      "The forest was alive with the sound of birdsong, the rustle of leaves underfoot, and the gentle murmur of a nearby stream, a tranquil scene that filled the heart with a sense of peace and serenity.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 2, username: "janedoe" },
      { id: 3, username: "user3" },
      { id: 4, username: "user4" },
    ],
    comments: [
      { id: 45, username: "user45", comment: "This is a comment" },
      { id: 46, username: "user46", comment: "This is another comment" },
      { id: 47, username: "user47", comment: "This is a third comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 24,
    user_id: 4,
    caption:
      "The city streets were alive with the sound of traffic, the chatter of people, and the bright lights of the neon signs, a bustling scene that filled the senses with energy and excitement.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 1, username: "johndoe" },
      { id: 4, username: "user4" },
      { id: 5, username: "user5" },
      { id: 8, username: "user8" },
    ],
    comments: [
      { id: 48, username: "user48", comment: "This is a comment" },
      { id: 49, username: "user49", comment: "This is another comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 25,
    user_id: 6,
    caption:
      "The mountains loomed majestically in the distance, their snow-capped peaks piercing the clouds and casting deep shadows across the valleys below, a rugged and awe-inspiring landscape that filled the soul with wonder and admiration.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 3, username: "user3" },
      { id: 6, username: "user6" },
      { id: 9, username: "user9" },
    ],
    comments: [
      { id: 50, username: "user50", comment: "This is a comment" },
      { id: 51, username: "user51", comment: "This is another comment" },
      { id: 52, username: "user52", comment: "This is a third comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 23,
    user_id: 8,
    caption:
      "The forest was alive with the sound of birdsong, the rustle of leaves underfoot, and the gentle murmur of a nearby stream, a tranquil scene that filled the heart with a sense of peace and serenity.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 2, username: "janedoe" },
      { id: 3, username: "user3" },
      { id: 4, username: "user4" },
    ],
    comments: [
      { id: 45, username: "user45", comment: "This is a comment" },
      { id: 46, username: "user46", comment: "This is another comment" },
      { id: 47, username: "user47", comment: "This is a third comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 24,
    user_id: 4,
    caption:
      "The city streets were alive with the sound of traffic, the chatter of people, and the bright lights of the neon signs, a bustling scene that filled the senses with energy and excitement.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 1, username: "johndoe" },
      { id: 4, username: "user4" },
      { id: 5, username: "user5" },
      { id: 8, username: "user8" },
    ],
    comments: [
      { id: 48, username: "user48", comment: "This is a comment" },
      { id: 49, username: "user49", comment: "This is another comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 25,
    user_id: 6,
    caption:
      "The mountains loomed majestically in the distance, their snow-capped peaks piercing the clouds and casting deep shadows across the valleys below, a rugged and awe-inspiring landscape that filled the soul with wonder and admiration.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 3, username: "user3" },
      { id: 6, username: "user6" },
      { id: 9, username: "user9" },
    ],
    comments: [
      { id: 50, username: "user50", comment: "This is a comment" },
      { id: 51, username: "user51", comment: "This is another comment" },
      { id: 52, username: "user52", comment: "This is a third comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 23,
    user_id: 8,
    caption:
      "The forest was alive with the sound of birdsong, the rustle of leaves underfoot, and the gentle murmur of a nearby stream, a tranquil scene that filled the heart with a sense of peace and serenity.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 2, username: "janedoe" },
      { id: 3, username: "user3" },
      { id: 4, username: "user4" },
    ],
    comments: [
      { id: 45, username: "user45", comment: "This is a comment" },
      { id: 46, username: "user46", comment: "This is another comment" },
      { id: 47, username: "user47", comment: "This is a third comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 24,
    user_id: 4,
    caption:
      "The city streets were alive with the sound of traffic, the chatter of people, and the bright lights of the neon signs, a bustling scene that filled the senses with energy and excitement.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 1, username: "johndoe" },
      { id: 4, username: "user4" },
      { id: 5, username: "user5" },
      { id: 8, username: "user8" },
    ],
    comments: [
      { id: 48, username: "user48", comment: "This is a comment" },
      { id: 49, username: "user49", comment: "This is another comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 25,
    user_id: 6,
    caption:
      "The mountains loomed majestically in the distance, their snow-capped peaks piercing the clouds and casting deep shadows across the valleys below, a rugged and awe-inspiring landscape that filled the soul with wonder and admiration.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 3, username: "user3" },
      { id: 6, username: "user6" },
      { id: 9, username: "user9" },
    ],
    comments: [
      { id: 50, username: "user50", comment: "This is a comment" },
      { id: 51, username: "user51", comment: "This is another comment" },
      { id: 52, username: "user52", comment: "This is a third comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 23,
    user_id: 8,
    caption:
      "The forest was alive with the sound of birdsong, the rustle of leaves underfoot, and the gentle murmur of a nearby stream, a tranquil scene that filled the heart with a sense of peace and serenity.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 2, username: "janedoe" },
      { id: 3, username: "user3" },
      { id: 4, username: "user4" },
    ],
    comments: [
      { id: 45, username: "user45", comment: "This is a comment" },
      { id: 46, username: "user46", comment: "This is another comment" },
      { id: 47, username: "user47", comment: "This is a third comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 24,
    user_id: 4,
    caption:
      "The city streets were alive with the sound of traffic, the chatter of people, and the bright lights of the neon signs, a bustling scene that filled the senses with energy and excitement.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 1, username: "johndoe" },
      { id: 4, username: "user4" },
      { id: 5, username: "user5" },
      { id: 8, username: "user8" },
    ],
    comments: [
      { id: 48, username: "user48", comment: "This is a comment" },
      { id: 49, username: "user49", comment: "This is another comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 25,
    user_id: 6,
    caption:
      "The mountains loomed majestically in the distance, their snow-capped peaks piercing the clouds and casting deep shadows across the valleys below, a rugged and awe-inspiring landscape that filled the soul with wonder and admiration.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 3, username: "user3" },
      { id: 6, username: "user6" },
      { id: 9, username: "user9" },
    ],
    comments: [
      { id: 50, username: "user50", comment: "This is a comment" },
      { id: 51, username: "user51", comment: "This is another comment" },
      { id: 52, username: "user52", comment: "This is a third comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 23,
    user_id: 8,
    caption:
      "The forest was alive with the sound of birdsong, the rustle of leaves underfoot, and the gentle murmur of a nearby stream, a tranquil scene that filled the heart with a sense of peace and serenity.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 2, username: "janedoe" },
      { id: 3, username: "user3" },
      { id: 4, username: "user4" },
    ],
    comments: [
      { id: 45, username: "user45", comment: "This is a comment" },
      { id: 46, username: "user46", comment: "This is another comment" },
      { id: 47, username: "user47", comment: "This is a third comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 24,
    user_id: 4,
    caption:
      "The city streets were alive with the sound of traffic, the chatter of people, and the bright lights of the neon signs, a bustling scene that filled the senses with energy and excitement.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 1, username: "johndoe" },
      { id: 4, username: "user4" },
      { id: 5, username: "user5" },
      { id: 8, username: "user8" },
    ],
    comments: [
      { id: 48, username: "user48", comment: "This is a comment" },
      { id: 49, username: "user49", comment: "This is another comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: 25,
    user_id: 6,
    caption:
      "The mountains loomed majestically in the distance, their snow-capped peaks piercing the clouds and casting deep shadows across the valleys below, a rugged and awe-inspiring landscape that filled the soul with wonder and admiration.",
    image: `https://picsum.photos/500/500?random=${Math.floor(
      Math.random() * 1000
    )}`,
    likes: [
      { id: 3, username: "user3" },
      { id: 6, username: "user6" },
      { id: 9, username: "user9" },
    ],
    comments: [
      { id: 50, username: "user50", comment: "This is a comment" },
      { id: 51, username: "user51", comment: "This is another comment" },
      { id: 52, username: "user52", comment: "This is a third comment" },
    ],
    created_at: new Date(),
    updated_at: new Date(),
  }
];

export default mockPosts;
