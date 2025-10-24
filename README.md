# SkillShift Shopify Theme# Dawn



A custom Shopify theme built on Dawn for SkillShift - an online training and course platform by Andrew Gardner.[![Build status](https://github.com/shopify/dawn/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Shopify/dawn/actions/workflows/ci.yml?query=branch%3Amain)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?color=informational)](/.github/CONTRIBUTING.md)

[![Build status](https://github.com/shopify/dawn/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Shopify/dawn/actions/workflows/ci.yml?query=branch%3Amain)

[Getting started](#getting-started) |

## 🎯 About SkillShift[Staying up to date with Dawn changes](#staying-up-to-date-with-dawn-changes) |

[Developer tools](#developer-tools) |

SkillShift is a professional training platform offering expert-led courses in web development, automation, and IT systems. This theme is specifically designed to showcase online courses and training programs with a modern, conversion-optimized design.[Contributing](#contributing) |

[Code of conduct](#code-of-conduct) |

## ✨ Features[Theme Store submission](#theme-store-submission) |

[License](#license)

### Custom SkillShift Sections

- **Hero Section** - Full-width banner with dual CTAs and trust badgesDawn represents a HTML-first, JavaScript-only-as-needed approach to theme development. It's Shopify's first source available theme with performance, flexibility, and [Online Store 2.0 features](https://www.shopify.com/partners/blog/shopify-online-store) built-in and acts as a reference for building Shopify themes.

- **Trust Bar** - Statistics display with icon badges

- **Services Grid** - Course pricing cards with features and badges* **Web-native in its purest form:** Themes run on the [evergreen web](https://www.w3.org/2001/tag/doc/evergreen-web/). We leverage the latest web browsers to their fullest, while maintaining support for the older ones through progressive enhancement—not polyfills.

- **Value Propositions** - 6-item benefits grid with icons* **Lean, fast, and reliable:** Functionality and design defaults to “no” until it meets this requirement. Code ships on quality. Themes must be built with purpose. They shouldn’t support each and every feature in Shopify.

- **About Instructor** - Professional bio with stats and achievements* **Server-rendered:** HTML must be rendered by Shopify servers using Liquid. Business logic and platform primitives such as translations and money formatting don’t belong on the client. Async and on-demand rendering of parts of the page is OK, but we do it sparingly as a progressive enhancement.

- **Testimonials** - Customer reviews with star ratings* **Functional, not pixel-perfect:** The Web doesn’t require each page to be rendered pixel-perfect by each browser engine. Using semantic markup, progressive enhancement, and clever design, we ensure that themes remain functional regardless of the browser.

- **CTA Section** - Mid-page conversion section with guarantee message

- **FAQ Accordion** - Expandable questions with smooth animationsYou can find a more detailed version of our theme code principles in the [contribution guide](https://github.com/Shopify/dawn/blob/main/.github/CONTRIBUTING.md#theme-code-principles).



### Design System## Getting started

- **Color Palette**: Navy blues (#0f2b4c, #164969, #2e5e70) with mint green accent (#4de3c8)We recommend using Dawn as a starting point for theme development. [Learn more on Shopify.dev](https://shopify.dev/themes/getting-started/create).

- **Typography**: Plus Jakarta Sans (headings), Inter (body)

- **Spacing**: 8pt grid system> If you're building a theme for the Shopify Theme Store, then you can use Dawn as a starting point. However, the theme that you submit needs to be [substantively different from Dawn](https://shopify.dev/themes/store/requirements#uniqueness) so that it provides added value for merchants. Learn about the [ways that you can use Dawn](https://shopify.dev/themes/tools/dawn#ways-to-use-dawn).

- **Components**: Glass morphism cards, gradient backgrounds, premium shadows

Please note that the main branch may include code for features not yet released. The "stable" version of Dawn is available in the theme store.

### Theme Settings

- Customizable brand colors## Staying up to date with Dawn changes

- Adjustable spacing and layout

- Toggle custom fontsSay you're building a new theme off Dawn but you still want to be able to pull in the latest changes, you can add a remote `upstream` pointing to this Dawn repository.

- Button border radius control

- Container width settings1. Navigate to your local theme folder.

2. Verify the list of remotes and validate that you have both an `origin` and `upstream`:

## 🚀 Quick Start```sh

git remote -v

### Prerequisites```

- [Shopify CLI](https://shopify.dev/docs/themes/tools/cli)3. If you don't see an `upstream`, you can add one that points to Shopify's Dawn repository:

- Node.js 18+ (for development tools)```sh

- A Shopify store (development or production)git remote add upstream https://github.com/Shopify/dawn.git

```

### Installation4. Pull in the latest Dawn changes into your repository:

```sh

1. **Clone the repository**git fetch upstream

   ```bashgit pull upstream main

   git clone https://github.com/atg25/SkillShift-Shopify.git```

   cd SkillShift-Shopify

   ```## Developer tools



2. **Connect to your Shopify store**There are a number of really useful tools that the Shopify Themes team uses during development. Dawn is already set up to work with these tools.

   ```bash

   shopify theme dev### Shopify CLI

   ```

[Shopify CLI](https://github.com/Shopify/shopify-cli) helps you build Shopify themes faster and is used to automate and enhance your local development workflow. It comes bundled with a suite of commands for developing Shopify themes—everything from working with themes on a Shopify store (e.g. creating, publishing, deleting themes) or launching a development server for local theme development.

3. **Customize in theme editor**

   - Navigate to your Shopify adminYou can follow this [quick start guide for theme developers](https://shopify.dev/docs/themes/tools/cli) to get started.

   - Go to Online Store > Themes

   - Click "Customize" on the SkillShift theme### Theme Check

   - Use the theme editor to configure sections and settings

We recommend using [Theme Check](https://github.com/shopify/theme-check) as a way to validate and lint your Shopify themes.

## 📁 Project Structure

We've added Theme Check to Dawn's [list of VS Code extensions](/.vscode/extensions.json) so if you're using Visual Studio Code as your code editor of choice, you'll be prompted to install the [Theme Check VS Code](https://marketplace.visualstudio.com/items?itemName=Shopify.theme-check-vscode) extension upon opening VS Code after you've forked and cloned Dawn.

```

├── assets/              # CSS, JS, and static assetsYou can also run it from a terminal with the following Shopify CLI command:

│   ├── skillshift-theme.css    # Custom SkillShift styles

│   └── ...              # Dawn base assets```bash

├── config/              # Theme configurationshopify theme check

│   ├── settings_schema.json    # Theme customizer settings```

│   └── settings_data.json      # Current settings values

├── docs/                # Documentation and assets### Continuous Integration

│   ├── style_guide.md          # Design system documentation

│   ├── headshot.jpeg           # Instructor photoDawn uses [GitHub Actions](https://github.com/features/actions) to maintain the quality of the theme. [This is a starting point](https://github.com/Shopify/dawn/blob/main/.github/workflows/ci.yml) and what we suggest to use in order to ensure you're building better themes. Feel free to build off of it!

│   └── Andrew Gardner_Resume.pdf

├── layout/              # Theme layouts#### Shopify/lighthouse-ci-action

│   └── theme.liquid            # Main layout with custom fonts

├── sections/            # Reusable sectionsWe love fast websites! Which is why we created [Shopify/lighthouse-ci-action](https://github.com/Shopify/lighthouse-ci-action). This runs a series of [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) audits for the home, product and collections pages on a store to ensure code that gets added doesn't degrade storefront performance over time.

│   ├── hero-skillshift.liquid

│   ├── services-grid-skillshift.liquid#### Shopify/theme-check-action

│   ├── testimonials-skillshift.liquid

│   ├── about-andrew-skillshift.liquidDawn runs [Theme Check](#Theme-Check) on every commit via [Shopify/theme-check-action](https://github.com/Shopify/theme-check-action).

│   ├── value-props-skillshift.liquid

│   ├── trust-bar-skillshift.liquid## Contributing

│   ├── cta-skillshift.liquid

│   ├── faq-skillshift.liquidWant to make commerce better for everyone by contributing to Dawn? We'd love your help! Please read our [contributing guide](https://github.com/Shopify/dawn/blob/main/.github/CONTRIBUTING.md) to learn about our development process, how to propose bug fixes and improvements, and how to build for Dawn.

│   └── ...              # Dawn base sections

├── snippets/            # Reusable code snippets## Code of conduct

├── templates/           # Page templates

│   └── index.json              # Homepage templateAll developers who wish to contribute through code or issues, please first read our [Code of Conduct](https://github.com/Shopify/dawn/blob/main/.github/CODE_OF_CONDUCT.md).

└── locales/             # Translation files

```## Theme Store submission



## 🎨 Design SystemThe [Shopify Theme Store](https://themes.shopify.com/) is the place where Shopify merchants find the themes that they'll use to showcase and support their business. As a theme partner, you can create themes for the Shopify Theme Store and reach an international audience of an ever-growing number of entrepreneurs.



The SkillShift theme follows a comprehensive design system documented in `docs/style_guide.md`:Ensure that you follow the list of [theme store requirements](https://shopify.dev/themes/store/requirements) if you're interested in becoming a [Shopify Theme Partner](https://themes.shopify.com/services/themes/guidelines) and building themes for the Shopify platform.



- **Colors**: Navy primary palette with mint green accents## License

- **Typography**: Major Third scale (1.25 ratio)

- **Spacing**: 8pt grid (4px, 8px, 12px, 16px, 24px, etc.)Copyright (c) 2021-present Shopify Inc. See [LICENSE](/LICENSE.md) for further details.

- **Shadows**: 6-level shadow system for depth
- **Animations**: Smooth transitions with easing functions

## 🛠️ Development

### Local Development
```bash
# Start development server
shopify theme dev

# Push theme to store
shopify theme push

# Pull theme from store
shopify theme pull
```

### Making Changes

1. **Customize Sections**: Edit files in `/sections/`
2. **Update Styles**: Modify `/assets/skillshift-theme.css`
3. **Change Settings**: Update `/config/settings_schema.json`
4. **Test Changes**: Use `shopify theme dev` for live preview

### Git Workflow
```bash
# Create feature branch
git checkout -b feature/your-feature

# Make atomic commits
git add <files>
git commit -m "feat: add feature description"

# Push to GitHub
git push origin feature/your-feature
```

## 📝 Customization Guide

### Adding Sections to Pages
1. Open theme customizer in Shopify admin
2. Click "Add section"
3. Select from SkillShift custom sections
4. Configure settings in right panel
5. Save changes

### Updating Brand Colors
1. Go to Theme Settings > SkillShift Branding
2. Modify color values under "Colors - SkillShift Palette"
3. Save changes

### Uploading Instructor Photo
1. Edit the "About Andrew" section
2. Click on image picker
3. Upload new headshot image
4. Adjust other bio content as needed

## 🔧 Built With

- [Dawn Theme](https://github.com/Shopify/dawn) - Base Shopify theme
- [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) - Display font
- [Inter](https://fonts.google.com/specimen/Inter) - Body font
- [Font Awesome 6](https://fontawesome.com/) - Icon library

## 📚 Documentation

- [Style Guide](docs/style_guide.md) - Complete design system documentation
- [Dawn README](README.DAWN.md) - Original Dawn theme documentation
- [Shopify Theme Development](https://shopify.dev/docs/themes) - Official Shopify docs
- [Liquid Reference](https://shopify.dev/docs/api/liquid) - Liquid template language

## 👨‍💻 Author

**Andrew Gardner** - Technology & Automation Consultant
- LinkedIn: [andrew-gardner2026](https://linkedin.com/in/andrew-gardner2026)
- Portfolio: [andrew-gardner-portfolio.vercel.app](https://andrew-gardner-portfolio.vercel.app)
- GitHub: [@atg25](https://github.com/atg25)

## 📄 License

This project is based on Dawn, which is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

The SkillShift customizations and design are © 2025 Andrew Gardner.

## 🙏 Acknowledgments

- Shopify for the Dawn theme foundation
- NJIT IS 373 course for project guidance
- SkillShift design system inspiration

---

**Note**: This theme is optimized for online course and training platforms. It can be adapted for other e-commerce or service-based businesses with similar needs.
