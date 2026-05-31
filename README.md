# HoDoKu Sudoku Techniques — Bilingual Guide

A comprehensive bilingual (English/Chinese) guide to all Sudoku solving techniques from [HoDoKu](https://hodoku.sourceforge.net/en/techniques.php), built with [VitePress](https://vitepress.dev/) and hosted on GitHub Pages.

🌐 **Live Site**: https://ki-seki.github.io/hodoku-translation/

## Techniques Covered

The site documents ~70 Sudoku solving techniques across 16 categories:

- **Basics** — Singles (Full House, Hidden/Naked Single), Intersections (Locked Candidates)
- **Subsets** — Hidden & Naked Pairs, Triples, Quadruples
- **Fish** — X-Wing, Swordfish, Jellyfish, Finned/Sashimi, Franken, Mutant, Siamese
- **Single Digit Patterns** — Skyscraper, 2-String Kite, Turbot Fish, Empty Rectangle
- **Uniqueness** — Unique Rectangle (Types 1–6), Hidden/Avoidable Rectangle, BUG+1
- **Wings** — XY-Wing, XYZ-Wing, W-Wing
- **Chains & Loops** — Remote Pair, X-Chain, XY-Chain, Nice Loop, AIC, Grouped
- **Advanced** — ALS (XZ, XY-Wing, Chain, Death Blossom), Forcing Chain/Net, Kraken Fish

All techniques include original example images from HoDoKu (158 diagrams).

## Local Development

```bash
npm install
npm run dev        # Start dev server at http://localhost:5173/
npm run build      # Build static site
npm run preview    # Preview built site
```

## Deployment

The site auto-deploys to GitHub Pages on every push to `main` via GitHub Actions.

To deploy manually:

```bash
npm run build
# Upload docs/.vitepress/dist/ to your hosting provider
```

## Project Structure

```
docs/
├── .vitepress/config.ts    # VitePress config with i18n (EN/ZH)
├── index.md                # English homepage
├── techniques/             # English technique pages (17 files)
├── zh/
│   ├── index.md            # Chinese homepage
│   └── techniques/         # Chinese technique pages (17 files)
└── public/examples/        # 158 example diagrams from HoDoKu
```

## Credits

All technique content and example images are based on [HoDoKu](https://hodoku.sourceforge.net/en/techniques.php) by Bernhard Hobiger, licensed under [GNU FDLv1.3](http://www.gnu.org/licenses/fdl-1.3.html).

## License

- Technique content and images: [GNU FDLv1.3](http://www.gnu.org/licenses/fdl-1.3.html)
- Site code: MIT
