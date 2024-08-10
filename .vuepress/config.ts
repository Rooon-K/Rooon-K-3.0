import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "Rooon-K's Blog",
  description: "Just playing around",
  theme: recoTheme({
    primaryColor: "#79bbff",
    style: "@vuepress-reco/style-default",
    base: '/blog/',
    author: "Rooon-K",
    authorAvatar: "/avatar.jpg",
    lastUpdatedText: "",
    series: {
      "/docs/nestjs/": [
        {
          text: "简介",
          children: ["home"],
        },
        {
          text: "基础",
          children: ["1.getStart"],
        },
        {
          text: "CLI",
          children: ["command"],
        },
      ],
      "/docs/qianduan/": [
        {
          text: "html",
          children: ["html"],
        },
        {
          text: "css",
          children: ["css1", "css2", "css3", "css4", "css5", "css6"],
        },
        {
          text: "javascript",
          children: ["js1", "js2", "js3", "js4", "js5"],
        },
      ],
      "/docs/mianshi/": [
        "mianshi1",
        "mianshi2",
        "mianshi3",
        "mianshi4",
        "mianshi5",
        "mianshi6"
      ],
    },
    navbar: [
      { text: "主页", icon: "Home", link: "/" },
      { text: "面试", icon: "Chat", link: "/docs/mianshi/mianshi1" },
      { text: "标签", icon: "TagGroup", link: "/tags/Linux/1/" },
      { text: "分类", icon: "Categories", link: "/categories/xuexibiji/1/" },
      {
        text: "文档",
        icon: "Document",
        children: [
          { text: "nestjs", link: "/docs/nestjs/home" },
          { text: "前端三剑客", link: "/docs/qianduan/html" },
        ],
      },
      {
        text: "作品集",
        icon: "Code",
        children: [
          { text: "Lotus-Plus", link: "https://www.npmjs.com/package/lotus-plus" },
        ],
      },
      {
        text: "Github",
        icon: "LogoGithub",
        link: "https://www.npmjs.com/package/lotus-plus"
      },
    ],
  }),
});
