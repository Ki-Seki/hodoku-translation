---
title: "Coloring"
---

# Coloring

Coloring is a single-digit solving technique with multiple complexity variants. The core principle is that the solver identifies houses where the target digit has only two remaining candidate cells, forming a strong link (called a conjugate pair in coloring terminology). The two candidates in each conjugate pair receive opposite colors. After coloring is complete, the grid is searched for contradictions enabling eliminations.

When two opposite colors exist (e.g., color 1 and color 2), either all color-1 cells are true and color-2 cells are false, or vice versa. It is impossible that two cells with opposite colors can be true at the same time. With more than two colors, this holds for every color pair.

Coloring techniques are fundamentally methods for finding chains, but coloring is normally much easier than searching the grid for possible chains.

## Simple Colors

Simple Colors uses exactly two colors. Starting from one cell of a conjugate pair, colors propagate until no colored cell retains a conjugate partner. Then the grid is scanned for two contradiction types.

### Color Trap

An uncolored cell that can see cells of opposite colors. Since one of those colored cells must be true, the shared candidate can be eliminated from the uncolored cell.

![Color Trap Example](/examples/sc01.png)

Example on candidate 3: The elimination cell is r1c9 (sees r1c4 and r8c9 which carry opposite colors). Additional eliminations at r3c9 and r8c1.

### Color Wrap

Two cells sharing the same color that also share a house. Since same-color cells must all be true or all false, and both being true would duplicate the digit in one house, that color must be entirely false. All candidates of that color are eliminated.

![Color Wrap Example](/examples/sc02.png)

Example on candidate 8: The trigger is r2c4 and r4c4 sharing the same color and both residing in column 4. Eliminating all cells with that color solves the sudoku (meaning: leaves only singles).

## Multi Colors

Multi Colors uses more than one pair of colors to handle disconnected conjugate pair regions. Two elimination types exist.

### Type 1 (Weak Link Between Color Pairs)

Two colored cells from different color pairs share a house (forming a weak link). They cannot both be true, meaning either the opposite color of pair 1 or the opposite color of pair 2 must be true. A candidate can be removed from any cell seeing at least two of those opposite-colored cells.

![Multi Colors Type 1 Example](/examples/mc01.png)

Example on candidate 1: Color assignments are r1c5 = 1a, r1c7 = 1b; r2c9 = 2a, r5c9 = 2b. r1c7 (1b) and r2c9 (2a) share block 3. Elimination cells are r5c23 (see both 1a and 2b, i.e., the opposite colors).

### Type 2 (Same Color Sees Opposite Colors of Another Pair)

A cell with a given color (say 1b) sees a cell of the opposite color in another pair (2b), while another 1b cell sees the other color of that pair (2a). Since one of pair 2's colors must be true, at least one 1b cell must be false. Since all same-color cells share state, all cells with color 1b are eliminated.

![Multi Colors Type 2 Example](/examples/mc02.png)

Example on candidate 3: r6c2 (1b) sees r6c9 (2b); r8c6 (1b) sees r2c6 (2a). All color-1b cells lose candidate 3.

## Technical Notes

Multi Colors have equivalent power to X-Chains. HoDoKu's implementation currently supports only two color pairs, so not every X-Chains step has a Multi Colors equivalent.

---

*Content based on [HoDoKu](https://hodoku.sourceforge.net/en/tech_col.php) by Bernhard Hobiger, licensed under GNU FDLv1.3.*
