---
title: "Fish (General Explanation)"
---

# Fish (General Explanation)

## Introduction

The term fish denotes a group of techniques that work from the same principle, but have spawned an incredible amount of varieties (as real fish have). They start with simple X-Wings (can be found in any tutorial) and go as far as Cannibalistic Finned Mutant Leviathans. The larger species are rather cumbersome to find manually and are more commonly used by computer programs, but the simpler ones are rather easy to spot and can advance a sudoku pretty quickly.

Fish are single digit patterns. "Single digit" means that only candidates of the same digit are considered when looking at fish. "Pattern" means that the location of the candidates in the grid is important. The term is used to differentiate them from chains.

## Principle

The principle behind fish is very simple: Look for a certain number of non overlapping houses. Those houses are called the **base sets** (set is synonymous for house here), the candidates contained within them are the **base candidates**. Non overlapping means that any base candidate is contained only in one base set, the sets themselves can overlap. Now look for an equal number of different non overlapping houses that cover all base candidates. These new sets are the **cover sets** containing the **cover candidates**. If such a combination exists, all cover candidates that are not base candidates can be eliminated.

## How it Works

Fishes use the fact that a digit can only appear once in a house. Since we only consider candidates of the same digit, any base set must contain exactly one cell with the fish value. The same is true for the cover sets. Since all base candidates are part of a cover set as well as a base set, the possible placements of the candidates become very restricted. If we have N base sets and N cover sets, exactly N cells have to contain the fish digit. The sudoku rule ensures that in every cover set exactly one base candidate has to be set. As usually we don't know which of course, but we know it must be one, so none of the cover candidates that are not base candidates are possible placements. They can be eliminated.

## Shapes and Sizes

The number of base/cover sets define the size of the fish. The following sizes have been given names:

| Size | Name |
|------|------|
| 2 | X-Wing |
| 3 | Swordfish |
| 4 | Jellyfish |
| 5 | Squirmbag |
| 6 | Whale |
| 7 | Leviathan |

## Types (Base/Cover Combinations)

There are three types of fish, which differ in the types of houses allowed for base and cover sets. **Basic Fish** use only rows and columns: rows for base sets and columns for cover sets or vice versa. **Franken Fish** allow boxes in addition to rows and columns, but only one side (base or cover) may use a box. **Mutant Fish** allow all possible combinations of rows, columns, and boxes in either or both sets.

Notation examples: `4 c39 r46` means a Basic X-Wing for digit 4 (base: columns 3 and 9; cover: rows 4 and 6). `4 c39b8 r469` means a Franken Swordfish. `4 r159c9 c45b36` means a Mutant Jellyfish.

## Fins (Exo Fins)

When base candidates remain uncovered by the cover sets, those leftovers are called **exo fins** and the fish becomes a **Finned Fish**. The elimination logic: either all fins are false (giving normal fish eliminations), or one fin is true (eliminating candidates that can see the fin cell). Therefore, all possible eliminations that see all the fins can be eliminated.

## Sashiminess

Some degenerate fish patterns contain a smaller valid fish within them. When fins prevent that inner simpler fish from operating, the pattern is called **Sashimi**. HoDoKu defaults to "Finned Fish" for all non-basic fish types.

## Endo Fins

When a base candidate sits in more than one base set, treating it as an **endo fin** restores validity. Endo fins can only occur in **Franken or Mutant Fish**, making them very difficult for humans to locate due to the enormous combination space.

## Cannibalism

When a base candidate is covered by **two or more** cover sets, placing that candidate would force one cover set to contain two fish digits — violating Sudoku rules. Such a candidate must be false and can be eliminated. The fish is "quasi eating itself," hence **Cannibalistic Fish**. With fins present, the cannibalistic elimination only applies when the candidate can see all fins.

---

*Content based on [HoDoKu](https://hodoku.sourceforge.net/en/tech_fishg.php) by Bernhard Hobiger, licensed under GNU FDLv1.3.*
