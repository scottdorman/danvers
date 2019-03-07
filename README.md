# Danvers

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/scottdorman745?locale.x=en_US)

> *Copyright 2019 [Scott Dorman](https://scottdorman.me)*

**Danvers** is a ready-to-use Jekyll template to help you create an awesome website quickly. Perfect for personal sites, blogs, or simple project websites. It's a somewhat simpler version of the [beautiful-jekyll](https://deanattali.com/beautiful-jekyll/) theme by Dean Attali that has been updated to work with [Bootstrap 4](https://getbootstrap.com).

Since **Danvers** is based on Bootstrap 4, it's designed to look great on both large and small screen devices. Load up your site on your phone or your gigantic iMac, and the site will work well on both, though it will look slightly different.

**If you enjoy this theme, please consider [supporting me](https://paypal.me/scottdorman745?locale.x=en_US) for developing and maintaining this template.**

<p align="center">
  <a href="https://paypal.me/scottdorman745?locale.x=en_US">
    <img src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" />
  </a>
</p>

### Table of contents

- [Prerequisites](#prerequisites)
- [Build your website in 3 steps](#build-your-website-in-3-steps)
- [Add your own content](#add-your-own-content)
- [YAML front matter ("parameters" for a page)](#yaml-front-matter-parameters-for-a-page)
- [Customizations](#customizations)
- [FAQ and support](#faq-and-support)
- [Credits and contributions](#credits)

## Prerequisites

- You need to have a GitHub account. If you don't have one, [sign up here](https://github.com/join) - it takes one minute. This is where your website will live - if you sign up with username `johnsmith` then your website will be `https://johnsmith.github.io`.
- It would be helpful to understand what Markdown is and how to write it. Markdown is just a way to take a piece of text and format it to look a little nicer.  For example, this whole instruction set that you're reading is written in markdown - it's just text with some words being bold/larger/italicized/etc. I recommend taking 5 minutes to learn markdown [with this amazingly easy yet useful tutorial](https://markdowntutorial.com/).

## Build your website in 3 steps

Getting started is *literally* as easy as 1-2-3 :smile:

### 1. Fork this repository

(Assuming you are on this page and logged into GitHub) Fork this repository by clicking the *Fork* button on the top right corner. Forking means that you now copied this whole project and all the files into your account.

### 2. Rename the repository to `<yourusername>.github.io`

This will create a GitHub User page ready with the **Danvers** template that will be available at `https://<yourusername>.github.io` within a couple minutes.  To do this, click on *Settings* at the top (the cog icon) and there you'll have an option to rename.

### 3. Customize your website settings

Edit the `_config.yml` file to change all the settings to reflect your site. To edit the file, click on it and then click on the pencil icon (watch the video tutorial above if you're confused).  The settings in the file are fairly self-explanatory and I added comments inside the file to help you further. Any line that begins with a pound sign (`#`) is a comment, and the rest of the lines are actual settings.

After you save your changes to the config file (by clicking on *Commit changes* as the video tutorial shows), your website should be ready in a minute or two at `https://<yourusername>.github.io`. Every time you make a change to any file, your website will get rebuilt and should be updated in about a minute or so.

You can now visit your shiny new website, which will be seeded with several sample blog posts and a couple other pages. Your website is at `https://<yourusername>.github.io` (replace `<yourusername>` with your user name). Do not add `www` to the URL - it will not work!

If you want to customize the colors or anything else about the look of the template, you should start by taking a look at [`_variables.scss`](_sass/_variables.scss). If you can't customize something there, then look at the [full stylesheet](assets/site.scss).

## Add your own content

To add pages to your site, you can either write a markdown file (`.md`) or you can write an HTML file directly.  It is much easier to write markdown than HTML, so I suggest you do that (use the [tutorial I mentioned above](https://markdowntutorial.com/) if you need to learn markdown). You can look at some files on this site to get an idea of how to write markdown. To look at existing files, click on any file that ends in `.md`, for example [`aboutme.md`](./aboutme.md). On the next page you can see some nicely formatted text (there is a word in bold, a link, bullet points), and if you click on the pencil icon to edit the file, you will see the markdown that generated the pretty text. Very easy!

In contrast, look at [`index.html`](./index.html). That's how your write HTML - not as pretty. So stick with markdown if you don't know HTML.

Any file that you add inside the [`_posts`](./_posts) directory will be treated as a blog entry.  You can look at the existing files there to get an idea of how to write blog posts.  After you successfully add your own post, you can delete the existing files inside [`_posts`](./_posts) to remove the sample posts, as those are just demo posts to help you learn.

## YAML front matter ("parameters" for a page)

In order to have your new pages use this template and not just be plain pages, you need to add [YAML front matter](https://jekyllrb.com/docs/front-matter/) to the top of each page. This is where you'll give each page some parameters that I made available, such as a title and subtitle. I'll go into more detail about what parameters are available later. If you don't want to use any parameters on your new page (this also means having no title), then use the empty YAML front matter:

```
---
---
```

If you want to use any parameters, write them between the two lines. For example, you can have this at the top of a page:

```
---
title: Contact me
subtitle: Here you'll find all the ways to get in touch with me
---
```

You can look at the top of [`aboutme.md`](./aboutme.md) or [`index.html`](./index.html) as more examples.

**Important takeaway: ALWAYS add the YAML front matter, which is two lines with three dashes, to EVERY page. If you have any parameters, they go between the two lines.** If you don't include YAML then your file will not use the template.

### Supported parameters

These are the main parameters you can place inside a page's YAML front matter that **Danvers** supports.

Parameter   | Description
----------- | -----------
title       | Page or blog post title
subtitle    | Short description of page or blog post that goes under the title
tags        | List of tags to categorize the post. Separate the tags with commas and place them inside square brackets. Example: `[personal, self help, finance]`
banners      | Include a large full-width image at the top of the page.  You can either give the path to a single image (`banners: "path/to/image1.jpg"`) or a list of images to cycle through (`banners: ["path/to/image1.jpg", "path/to/image2.jpg"`]).
comments    | If you want do add comments to a specific page, use `comments: true`. Comments are automatically enabled on blog posts; to turn comments off for a specific post, use `comments: false`. Comments only work if you set you've set up one of the commenting systems in `_config.yml`.
show-avatar | If you have an avatar configured in the `_config.yml` but you want to turn it off on a specific page, use `show-avatar: false`. If you want to turn it off by default, locate the line `show-avatar: true` in the file `_config.yml` and change the `true` to `false`; then you can selectively turn it on in specific pages using `show-avatar: true`.
image       | If you want to add a personalized image to your blog post that will show up next to the post's excerpt and on the post itself, use `image: /path/to/img`.
social-share | If you don't want to show buttons to share a blog post on social media, use `social-share: false` (this feature is turned on by default).
layout      | What type of page this is (default is `post` for blog posts and `page` for other pages.)

## Customizations

Customizations can be done in `_config.yml` or `_variables.scss`. Edit `config.yml` to do things such as setting your name and site's description, setting your avatar to add a little image in the navigation bar, customizing what social media links to show in the footer, and more. 

To change the colors and other style related things, start with [`_variables.scss`](_sass/_variables.scss).

### Allowing users to leave comments

If you want to enable comments on your site, **Danvers** supports either the [Disqus](https://disqus.com/) comments plugin, [Facebook](https://developers.facebook.com/docs/plugins/comments) comments or [Utterances](https://utteranc.es/). If any of these are set in the configuration file, then all blog posts will have comments turned on by default. To turn off comments on a particular blog post, add `comments: false` to the YAML front matter. If you want to add comments on the bottom of a non-blog page, add `comments: true` to the YAML front matter.

#### Disqus comments

To use Disqus, simply sign up to [Disqus](https://disqus.com/) and add your Disqus shortname to the `disqus` parameter in the `_config.yml` file.

#### Facebook comments

To use Facebook comments, create a Facebook app using [Facebook developers](https://developers.facebook.com/docs/apps/register), and add the Facebook App ID to the `fb_comment_id` parameter in `_config.yml`.

#### Utterances comments

To use Utterances, simply go to https://utteranc.es/ and follow the steps in the **configuration** section. Lastly, fill in your `repository` in the Utterances section of `_config.yml`.

If you want to change the behavior of Utterances, such as how issues are mapped to blog posts, you may need to make additional changes to `config.yml` or you can take the resulting JavaScript code you get and paste it into [`comments-utterances.html`](_inclues/comments-utterances.html) and replace the existing JavaScript.

### Adding Google Analytics to track page views

**Danvers** lets you easily add Google Analytics to all your pages. This will let you track all sorts of information about visits to your website, such as how many times each page is viewed and where (geographically) your users come from.  To add Google Analytics, simply sign up to [Google Analytics](https://www.google.com/analytics/) to obtain your Google Tracking ID, and add this tracking ID to the `google_analytics` parameter in `_config.yml`.

### Sharing blog posts on social media

By default, all blog posts will have buttons at the bottom of the post to allow people to share the current page on Twitter/Facebook/LinkedIn.  You can choose to enable/disable specific social media websites in the `_config.yml` file. You can also turn off the social media buttons on specific blog posts using `social-share: false` in the YAML front matter.

### RSS feed

**Danvers** automatically generates a simple RSS feed of your blog posts, to allow others to subscribe to your posts.  If you want to add a link to your RSS feed in the footer of every page, find the `rss: false` line in `_config.yml` and change it to `rss: true`.

### Page types

- **post** - To write a blog post, add a markdown or HTML file in the `_posts` folder. As long as you give it YAML front matter (the two lines of three dashes), it will automatically be rendered like a blog post. Look at the existing blog post files to see examples of how to use YAML parameters in blog posts.
- **page** - Any page outside the `_posts` folder that uses YAML front matter will have a very similar style to blog posts.
- If you want to completely bypass the template engine and just write your own HTML page, simply omit the YAML front matter. Only do this if you know how to write HTML!

## Advanced features

If you want to include a caption with your banner images, you need to use a more complex format for the `banners` front matter. Instead of just specifying an image (or list of images), it needs to look like

```
banners:
  -
    src: "path/to/image1.jpg"
    caption: "caption 1"
  -
    src: "path/to/image2.jpg"
    caption: "caption 2"
```

If you just want a single image with a caption this is also the format you need to use, and just include a single entry.

## FAQ and support

If you need any help on Jekyll, I suggest heading over to the [Jekyll support forum](https://talk.jekyllrb.com/), the [Jekyll documentation](https://jekyllrb.com/docs) or searching Google.

For questions and issues with the **Danvers** theme itself, please look through the [existing issues](https://github.com/scottdorman/danvers/issues) first. If you don't see what you're looking for, go ahead and [open an issue](https://github.com/scottdorman/danvers/issues/new).

## Credits

This template was not made entirely from scratch. It is based on the [beautiful-jekyll](https://deanattali.com/beautiful-jekyll/) theme by Dean Attali. 

## Contributions

If you find anything wrong or would like to contribute in any way, feel free to create a pull request or [open an issue](https://github.com/scottdorman/danvers/issues/new). Any comments are welcome!

If you do fork or clone this project to use as a template for your site, I would appreciate it if you keep the link in the footer to this project.

## Known limitations

- If you have a project page and you want a custom 404 page, you must have a custom domain.  See https://help.github.com/articles/custom-404-pages/.  This means that if you have a regular User Page you can use the 404 page from this theme, but if it's a website for a specific repository, the 404 page will not be used.
