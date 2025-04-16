# MyCV

A modern, responsive CV/portfolio website showcasing my professional experience, skills, and education as a Software Engineer & Data Scientist.

## Features

- **Professional Profile** - Comprehensive overview of my background, skills, and experience
- **Responsive Design** - Optimized for all devices from mobile to desktop
- **Interactive UI** - Built with React for a smooth user experience
- **Skills Categorization** - Technologies organized by category (Languages, Frameworks, Cloud, Tools)
- **Detailed Experience** - Timeline showcasing professional journey and projects
- **Education History** - Academic qualifications with relevant details
- **Social Links** - Direct connections to GitHub, LinkedIn, and Email

## Technologies Used

- **React.js** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework

## Project Structure

```
📦 MyCV
 ┣ 📂 public
 ┃ ┣ 📜 favicon.ico
 ┃ ┣ 📜 index.html
 ┃ ┣ 📜 logo192.png
 ┃ ┣ 📜 logo512.png
 ┃ ┣ 📜 manifest.json
 ┃ ┗ 📜 robots.txt
 ┣ 📂 src
 ┃ ┣ 📂 assets
 ┃ ┃ ┗ 📂 Images
 ┃ ┃   ┗ 📜 profile.jpg
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 Animation
 ┃ ┃ ┃ ┣ 📜 BaseAnimation.jsx
 ┃ ┃ ┃ ┗ 📜 FadeIn.jsx
 ┃ ┃ ┣ 📂 Base
 ┃ ┃ ┃ ┗ 📜 Container.jsx
 ┃ ┃ ┣ 📂 Cards
 ┃ ┃ ┃ ┣ 📜 BaseCard.jsx
 ┃ ┃ ┃ ┣ 📜 EducationCard.jsx
 ┃ ┃ ┃ ┣ 📜 ExperienceCard.jsx
 ┃ ┃ ┃ ┣ 📜 ProjectCard.jsx
 ┃ ┃ ┃ ┗ 📜 SkillCard.jsx
 ┃ ┃ ┣ 📂 Common
 ┃ ┃ ┃ ┣ 📜 IconWrapper.jsx
 ┃ ┃ ┃ ┗ 📜 Tag.jsx
 ┃ ┃ ┣ 📂 Layout
 ┃ ┃ ┃ ┣ 📜 Layout.jsx
 ┃ ┃ ┃ ┗ 📜 Section.jsx
 ┃ ┃ ┣ 📂 Navigation
 ┃ ┃ ┃ ┗ 📜 NavItem.jsx
 ┃ ┃ ┗ 📂 Sections
 ┃ ┃   ┣ 📜 About.jsx
 ┃ ┃   ┗ 📜 Hero.jsx
 ┃ ┣ 📂 UI
 ┃ ┃ ┗ 📜 SectionTitle.jsx
 ┃ ┣ 📂 data
 ┃ ┃ ┗ 📜 portfolioData.js
 ┃ ┣ 📜 App.css
 ┃ ┣ 📜 App.jsx
 ┃ ┣ 📜 index.css
 ┃ ┣ 📜 index.js
 ┃ ┣ 📜 logo.svg
 ┃ ┣ 📜 output.css
 ┃ ┣ 📜 reportWebVitals.js
 ┃ ┗ 📜 setupTests.js
 ┣ 📜 .gitignore
 ┣ 📜 package-lock.json
 ┣ 📜 package.json
 ┣ 📜 postcss.config.js
 ┣ 📜 README.md
 ┗ 📜 tailwind.config.js
```

## Customization

The website data is centralized in `src/data/portfolioData.js` for easy updates:

- **Personal Information** - Update the `intro` object
- **Skills** - Modify the `skills` array
- **Experience** - Edit the `experiences` array
- **Education** - Update the `education` array
- **Social Links** - Adjust the `socialLinks` array


## Contact

Yomna Salem - [yomnasalem01@gmail.com](mailto:yomnasalem01@gmail.com)

Project Link: [https://github.com/atlno1fan/MyCV](https://github.com/atlno1fan/MyCV)
