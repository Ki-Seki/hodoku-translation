---
title: "Basic Fish"
---

# Basic Fish

This page covers Sudoku fishing techniques that use basic row/column constraints to eliminate candidates. The techniques progress from 2-set to 4-set patterns. All examples build on concepts explained in the Fish (General) section. It is not necessary for every intersection between a base and a cover set to contain a fish digit, but every base and every cover set must contain at least one fish digit.

## X-Wing (2 base sets / 2 cover sets)

The X-Wing uses two rows as base sets and two columns as cover sets (or vice versa) for a single digit. All candidates of that digit in both base rows must fall within the cover columns. Candidates in the cover sets that are NOT in the base sets can be eliminated.

![X-Wing Example 1](/examples/bf201.png)

Left example: Base sets are rows 2 and 5, fish digit is 5. Candidate positions are r2c58 and r5c58. Cover sets are columns 5 and 8. The elimination is 5 in r4c5 (in a cover column but not in a base row).

![X-Wing Example 2](/examples/bf202.png)

Right example: Base sets are columns 1 and 5, cover sets are rows 2 and 5.

The elimination logic: Rows 2 and 5 both have only two candidates 5. If r2c5=5, r2c8 and r5c5 cannot be 5. This forces r5c8=5. Conversely, if r2c8=5, then r5c5=5. Either r2c5 or r5c5 must be 5, so r4c5 cannot be 5.

## Swordfish (3 base sets / 3 cover sets)

Swordfish uses the same principle as X-Wing but with three base and three cover sets instead of two.

![Swordfish Example 1](/examples/bf301.png)

Left example: Base sets are rows 1, 2, and 9. Cover sets are columns 1, 5, and 8. Fish digit is 2. Eliminations are candidates 2 at r7c1 and r6c8 (cover candidates not in base sets).

![Swordfish Example 2](/examples/bf302.png)

Right example: Base sets are r2, r4, r7. Cover sets are c2, c3, c5. Fish digit is 4. Eliminations include 4 from r3c235, r6c235, r8c235, and r9c23.

## Jellyfish (4 base sets / 4 cover sets)

Jellyfish extends the pattern to four base and four cover sets.

![Jellyfish Example 1](/examples/bf401.png)

Left example: Base sets are r3, r4, r6, r7. Cover sets are c1, c2, c5, c9. Fish digit is 7. Eliminations include all candidates marked in red (multiple cells).

![Jellyfish Example 2](/examples/bf402.png)

Right example: Base sets are r1, r3, r6, r7. Cover sets are c2, c5, c8, c9. Fish digit is 7. Both Jellyfish examples are from the Pure Jellyfish Collection on the New Sudoku Player's Forum.

## Larger Basic Fish

Basic Fish larger than Jellyfish are of course possible, but unnecessary: For any larger fish a complementary smaller one will exist.

---

*Content based on [HoDoKu](https://hodoku.sourceforge.net/en/tech_fishb.php) by Bernhard Hobiger, licensed under GNU FDLv1.3.*
