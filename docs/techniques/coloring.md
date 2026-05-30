---
title: "Coloring"
---

# Coloring

## Overview

- Single-digit solving technique
- Find houses where target digit has only two candidates -> strong link (conjugate pair)
- Two candidates in each pair get opposite colors
- Either all color-1 cells are true and color-2 false, or vice versa
- Easier than searching for chains manually

## Simple Colors (two colors)

### Color Trap

- Uncolored cell that can see cells of opposite colors -> eliminate that candidate
- Example: digit 3, r1c9 sees r1c4 (color A) and r8c9 (color B). Eliminate 3 from r1c9

![Color Trap example](/examples/sc01.png)

### Color Wrap

- Two cells sharing same color also share a house -> that color must be false, eliminate all cells with that color
- Example: digit 8, r2c4 and r4c4 share same color and column 4 -> eliminate all that-color candidates

![Color Wrap example](/examples/sc02.png)

## Multi Colors (more than one color pair)

### Type 1 (Weak Link Between Color Pairs)

- Two colored cells from different pairs share a house -> opposite colors of both pairs must contain true candidates
- Eliminate from cells seeing at least two opposite-colored cells
- Example: digit 1, r1c7 (1b) and r2c9 (2a) share block 3 -> eliminate from cells seeing 1a and 2b

![Multi Colors Type 1 example](/examples/mc01.png)

### Type 2 (Same Color Sees Opposite Colors)

- Cell with color 1b sees 2b; another 1b cell sees 2a -> all 1b cells eliminated
- Example: digit 3, r6c2 (1b) sees r6c9 (2b); r8c6 (1b) sees r2c6 (2a) -> eliminate all 1b

![Multi Colors Type 2 example](/examples/mc02.png)

## Technical Notes

- Multi Colors equivalent to X-Chains
- HoDoKu supports only two color pairs currently

---
*Content based on [HoDoKu](https://hodoku.sourceforge.net/en/techniques.php) by Bernhard Hobiger, licensed under GNU FDLv1.3.*
