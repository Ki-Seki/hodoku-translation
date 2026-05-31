---
title: "Wings"
---

# Wings

## XY-Wing

An XY-Wing functions as a short XY-Chain expressed as a recognizable pattern. The structure involves three cells: a **Pivot** (a bivalue cell containing candidates X and Y) and two **Pincers** (cells that "see" the pivot — one holding candidates X and Z, the other holding Y and Z, where Z differs from X and Y). Z is eliminated from any cell that sees both pincers. The reasoning: if the pivot equals X, the XZ pincer must be Z; if the pivot equals Y, the YZ pincer must be Z. Either way, cells visible to both pincers cannot contain Z.

![XY-Wing Example 1](/examples/xy01.png)

Left example: Pivot r1c3 has candidates 5 (X) and 7 (Y). Pincer r1c6 has 5/2 (X/Z), pincer r2c1 has 7/2 (Y/Z). Result: r2c6 cannot be 2.

![XY-Wing Example 2](/examples/xy02.png)

Right example: X=1, Y=6, Z=9; pivot in r4c1, pincers in r4c4 and r5c2. Five eliminations result.

## XYZ-Wing

An enhanced XY-Wing where the pivot contains all three candidates: X, Y, and Z. Because Z could reside in the pivot itself, eliminations are more restricted — Z can only be removed from cells that see both pincers and the pivot.

![XYZ-Wing Example 1](/examples/xyz01.png)

Left example: Pivot r7c2, pincers r2c2 and r7c1. If r7c2=4 => r2c2=7; if r7c2=5 => r7c1=7; if r7c2=7 directly. In all cases r9c2 <> 7.

![XYZ-Wing Example 2](/examples/xyz02.png)

Right example: 4/7/6 in r23c4 and r3c7 => r3c56 <> 6. Expanded wings with even more candidates have been described but they are difficult to locate and HoDoKu does not support them.

## W-Wing

W-Wings involve two bivalue cells sharing the same two candidates, connected by a strong link on one of those candidates. The other candidate can be eliminated from all cells seeing both bivalue cells. A strong link exists when a digit has only two possible positions in a unit — if one isn't set, the other must be.

![W-Wing Example 1](/examples/w01.png)

Left example: Bivalue cells r4c4 and r8c9 both contain candidates 5 and 9. A strong link on candidate 9 exists in column 8 (r4c8 and r8c8). One end of the strong link sees r4c4, the other sees r8c9. Candidate 5 is eliminated from all cells seeing both r4c4 and r8c9. The proof: One of the two 9s in column 8 must be placed. If r4c8=9, then r4c4=5; if r8c8=9, then r8c9=5. Therefore one of the bivalue cells must be 5.

![W-Wing Example 2](/examples/w02.png)

Right example: W-Wing with 4/1 in r1c9 and r8c7, connected by strong link on 1 in r18c3 => r123c7 and r89c9 <> 4.

---

*Content based on [HoDoKu](https://hodoku.sourceforge.net/en/tech_wings.php) by Bernhard Hobiger, licensed under GNU FDLv1.3.*
