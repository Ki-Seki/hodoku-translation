---
title: "Complex Fish (Franken/Mutant Fish)"
---

# Complex Fish (Franken/Mutant Fish)

## (Finned) Franken Fish

If at least one of the base or cover sets is a box, the resulting fish is called a Franken Fish.

![Franken Jellyfish Example](/examples/ff401.png)

The example shows a Franken Jellyfish: r125b7 / c1257. Eliminations are r3c257, r4c12, r6c257 <> 8. It resembles a Basic Jellyfish in rows, but the fourth base set is a block rather than a row, making it Franken.

![Finned Franken Swordfish Example](/examples/fff301.png)

This example shows a Finned Franken Swordfish: c34b6 / r346 — three base/cover sets (Swordfish), with a block in the base sets (Franken). The fin is r5c7 (a base candidate "left over"). The elimination is r3c8.

![Finned Franken X-Wing Example](/examples/fff201.png)

This example shows a Finned Franken X-Wing: Base sets are Row 6 and block 1, cover sets are Columns 3 and 5. The fin is r2c1 (not covered). This pattern is also known as an Empty Rectangle.

![Cannibalistic Finned Franken Swordfish with Endo Fins](/examples/fff302.png)

This example shows a Cannibalistic Finned Franken Swordfish with Endo Fins: Base sets are Rows 1 and 5, box 3. Cover sets are Columns 6 and 8, box 2. The endo fins are r1c89 (in both base set row 1 and base set box 3). The cannibalistic elimination is r1c6 (contained in two cover sets: column 6 and box 2, and sees all fins).

## (Finned) Mutant Fish

When all possible types of houses (rows, columns, boxes) are allowed in both base and cover sets, the result is a Mutant Fish.

![Finned Mutant X-Wing Example](/examples/fmf201.png)

This example shows a Finned Mutant X-Wing: Base sets are Row 6 and column 2, cover sets are Column 6 and block 4. The fin is r7c2 (not covered). The elimination is r7c6. This is also known as a 2-String-Kite or Turbot Fish.

![Finned Mutant Jellyfish Example](/examples/fmf401.png)

This example shows a Finned Mutant Jellyfish: r16c47 / c1b358. Fins are r1c6 and r7c7. The elimination is r7c6.

![Finned Mutant Whale Example](/examples/fmf601.png)

This example shows a Finned Mutant Whale: 4 r35c89b49 / r69c347b3. Fins are fr4c1 and efr9c8. The elimination is r9c1 <> 4. This is unlikely for a human solver to find — the same elimination can be achieved via a Grouped Nice Loop or Forcing Chain.

## Siamese Fish

Two fishes of the same type occupying the same cells but yielding different eliminations, combined into one pattern. The component fish must be finned and differ in one cover set. The simplest form, a Siamese Sashimi X-Wing, is better known as a Skyscraper.

![Siamese Sashimi Swordfish Example](/examples/sfbf301.png)

This example shows a Siamese Sashimi Swordfish on digit 1: The first fish (r358 / c259, fin in r8c6) eliminates 1 from r7c5. The second fish (r358 / c269, fin in r5c5) eliminates 1 from r4c6.

![Siamese Sashimi Jellyfish Example](/examples/sfbf401.png)

This example shows a Siamese Sashimi Jellyfish on digit 8: Each fish has two fins. The first fish (r4678 / c1689, fins in r4c2 and r6c2) eliminates 8 from r5c1. The second fish (r4678 / c2689, fins in r7c1 and r8c1) eliminates 8 from r9c2.

Siamese Fish require the "Allow Duals/Siamese" option to be enabled in HoDoKu.

---

*Content based on [HoDoKu](https://hodoku.sourceforge.net/en/tech_fishc.php) by Bernhard Hobiger, licensed under GNU FDLv1.3.*
