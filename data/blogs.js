export const blogs = [
  {
    id: 1,
    image: "/assets/img/blog/blog_1_1.png",
    date: "March 26, 2024",
    category: "Branding",
    title: "Case Study 1",

    icon: "/assets/img/icon/arrow-left-top.svg",
  },
  {
    id: 2,
    image: "/assets/img/blog/blog_1_2.png",
    date: "March 26, 2024",
    category: "Branding",
    title: "Case Study 2",

    icon: "/assets/img/icon/arrow-left-top.svg",
  },
  {
    id: 3,
    image: "/assets/img/blog/blog_1_3.png",
    date: "March 26, 2024",
    category: "Branding",
    title: "Case Study 3",

    icon: "/assets/img/icon/arrow-left-top.svg",
  },
];
export const recentPosts = [
  {
    id: 14,
    smallImageUrl: "/assets/img/blog/sb_post01.jpg",
    image: "/assets/img/blog/blog_post1_2.png",
    title: "Featured Case Study 1",
    category: "Branding",
    date: "Sep 15, 2024",
  },
  {
    id: 15,
    smallImageUrl: "/assets/img/blog/sb_post02.jpg",
    image: "/assets/img/blog/blog_post1_4.png",
    title: "Featured Case Study 2",
    category: "Branding",
    date: "Sep 15, 2024",
  },
  {
    id: 16,
    smallImageUrl: "/assets/img/blog/sb_post03.jpg",
    image: "/assets/img/blog/blog_post1_3.png",
    title: "Featured Case Study 2",
    category: "Branding",
    date: "Sep 15, 2024",
  },
];

export const allBlogs = [...blogs, ...recentPosts];
