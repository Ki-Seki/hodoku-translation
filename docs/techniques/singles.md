---
title: Singles Techniques
---

# Singles Techniques

Singles are the most fundamental Sudoku solving techniques. They involve placing a digit in a cell when it is the only possibility.

---

## Full House / Last Digit

The simplest technique: the last digit that can be placed in a house.

When only one empty cell remains in a row, column, or block, the missing digit goes there. Since every house must contain the digits 1 through 9 exactly once, the remaining digit is trivially determined.

**Example 1:** Block 8 has one empty cell remaining. The digits 1, 2, 3, 4, 5, 7, 8, 9 are already placed, so digit 6 goes in r9c6.

![Full House example 1](/examples/fh01.png)

**Example 2:** Row 5 is missing only one digit. All other cells in the row are filled, so the last digit is placed in the remaining cell.

![Full House example 2](/examples/fh02.png)

---

## Hidden Single

For a given digit and a given house, only one cell can contain that digit.

The target cell may have multiple candidates, but when you look at the house (row, column, or block), the digit is "hidden amongst the rest" of the candidates in that cell.

**Example 1:** r3c4 has candidates 4, 6, 9. Looking at row 3, digit 6 can only go in r3c4 (all other cells in row 3 already contain 6 or cannot hold it). Therefore r3c4 = 6.

![Hidden Single example 1](/examples/h101.png)

**Example 2:** r6c4 is a Hidden Single. Digit 3 is the only 3 in row 6, in column 4, and in block 5 simultaneously. This makes it a Hidden Single in three different houses.

![Hidden Single example 2](/examples/h102.png)

### Cross-Hatching

Cross-hatching is a manual technique for finding Hidden Singles. Concentrate on one digit and one block. Mentally draw lines through all rows and columns that already contain that digit. The remaining uncovered cells in the block are the possible positions. If only one cell remains, you have found a Hidden Single.

![Cross-hatching example](/examples/h103.png)

### Using Filters

Computer solvers can use digit filters to highlight all occurrences of a single digit, making Hidden Singles much easier to identify visually.

![Filter example](/examples/h104.png)

---

## Naked Single

In a specific cell, only one digit remains possible.

All cells that can "see" the target cell (i.e., share a row, column, or block) collectively contain every digit except one. That remaining digit must go in the target cell.

**Example 1:** r6c7 — examining all cells that see it (same row, same column, same block) reveals they contain every digit except 6. Therefore r6c7 = 6.

![Naked Single example 1](/examples/n101.png)

**Example 2:** r3c3 is a Naked Single. Placing 3 in r3c4 (which is a Hidden Single) removes 3 as a candidate from r3c3, unlocking the Naked Single.

![Naked Single example 2](/examples/n102.png)

---

## How to Find Them

- **Hidden Singles** are easy to spot by hand using the cross-hatching technique. Focus on one digit at a time and scan each house.
- **Naked Singles** are easier to find when pencil marks (candidates) are filled in for all cells. With pencil marks, a Naked Single is simply a cell with only one candidate remaining.
- With computer assistance, Naked Singles are trivial to detect, but Hidden Singles can sometimes be harder to find visually since they require scanning across multiple candidates in a house.

---

*Content based on [HoDoKu](https://hodoku.sourceforge.net/en/techniques.php) by Bernhard Hobiger, licensed under GNU FDLv1.3.*
