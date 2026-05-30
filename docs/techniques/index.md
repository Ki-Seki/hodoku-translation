# Solving Techniques Overview

HoDoKu implements a comprehensive hierarchy of Sudoku solving techniques, ranging from the simplest to the most advanced. Each technique builds on the concepts of those before it.

## Technique Hierarchy

### Basics
- **[Singles](./singles.md)** — Full House, Hidden Single, Naked Single
- **[Intersections](./intersections.md)** — Locked Candidates (Pointing & Claiming)

### Subsets
- **[Hidden Subsets](./hidden-subsets.md)** — Hidden Pair, Triple, Quadruple
- **[Naked Subsets](./naked-subsets.md)** — Naked Pair/Triple/Quadruple, Locked Pairs/Triples

### Fish
- **[Fish (General)](./fish-general.md)** — Base/Cover sets, Fins, Sashiminess, Endo Fins, Cannibalism
- **[Basic Fish](./basic-fish.md)** — X-Wing, Swordfish, Jellyfish
- **[Finned/Sashimi Fish](./finned-sashimi-fish.md)** — Finned and Sashimi variants of basic fish
- **[Complex Fish](./complex-fish.md)** — Franken Fish, Mutant Fish, Siamese Fish

### Advanced
- **[Single Digit Patterns](./single-digit-patterns.md)** — Skyscraper, 2-String Kite, Turbot Fish, Empty Rectangle
- **[Uniqueness](./uniqueness.md)** — Unique Rectangles (Types 1–6), Hidden/Avoidable Rectangle, BUG+1
- **[Wings](./wings.md)** — XY-Wing, XYZ-Wing, W-Wing
- **[Miscellaneous](./misc.md)** — Sue de Coq

### Chains & Coloring
- **[Coloring](./coloring.md)** — Simple Colors, Multi Colors
- **[Chains and Loops](./chains-loops.md)** — Remote Pair, X-Chain, XY-Chain, Nice Loop/AIC, Grouped Nice Loop

### Complex
- **[ALS](./als.md)** — ALS-XZ, ALS-XY-Wing, ALS Chain, Death Blossom
- **[Last Resort](./last-resort.md)** — Templates, Forcing Chain/Net, Kraken Fish, Brute Force

## Difficulty Progression

Techniques are ordered by difficulty within HoDoKu. A typical solving session starts with Singles and progresses through increasingly advanced techniques as needed. Most newspaper puzzles require only Singles and Intersections, while competition puzzles may demand Chains or even Last Resort methods.

## Notation

Throughout this guide, cells are referenced using **r**ow-**c**olumn notation:
- `r1c5` = Row 1, Column 5
- `r3c79` = Row 3, Columns 7 and 9
- `r12c3` = Rows 1 and 2, Column 3
- `b5` = Block 5 (the center 3×3 box)

---

*Content based on [HoDoKu](https://hodoku.sourceforge.net/en/techniques.php) by Bernhard Hobiger, licensed under GNU FDLv1.3.*
