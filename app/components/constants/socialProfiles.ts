export const socialProfiles = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rohini-invisible-grills-3099423b9/",
    label: "Rohini Invisible Grills on LinkedIn",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/rohiniinvisiblegrills",
    label: "Rohini Invisible Grills on Facebook",
  },
  {
    name: "Pinterest",
    href: "https://in.pinterest.com/rohiniinvisiblegrills/",
    label: "Rohini Invisible Grills on Pinterest",
  },
  {
    name: "Tumblr",
    href: "https://www.tumblr.com/blog/rohiniinvisiblegrills",
    label: "Rohini Invisible Grills on Tumblr",
  },
  {
    name: "Medium",
    href: "https://medium.com/@rohiniinvisiblegrills",
    label: "Rohini Invisible Grills on Medium",
  },
  {
    name: "X",
    href: "https://x.com/Rohinigrills",
    label: "Rohini Invisible Grills on X",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/rohiniinviaiblegrills/",
    label: "Rohini Invisible Grills on Instagram",
  },
  {
    name: "Blogspot",
    href: "https://rohiniinvisiblegrills.blogspot.com/",
    label: "Rohini Invisible Grills on Blogspot",
  },
] as const;

export const socialProfileUrls = socialProfiles.map((profile) => profile.href);
