---
title: "Finned/Sashimi Fish"
---

# Finned/Sashimi Fish

## Finned/Sashimi X-Wing

A Finned X-Wing is a regular X-Wing where one or more base candidates are not covered by a cover set. Only cover candidates that see all the fins (and are not base candidates) can be eliminated. A Finned Fish becomes Sashimi if the remaining fish is incomplete (or degenerate), when all fins are false.

![Finned X-Wing Example](/examples/fbf201.png)

Left example: X-Wing in r24/c35. The fin is an additional base candidate in r2c1 (not in cover sets c35). If the fin is false, a regular X-Wing eliminates 9 from r35c3 and r5c5. If the fin is true, it eliminates 9 from r1c1, r2c35, and r3c3. The elimination is the intersection of both sets — only r3c3 is in both, so r3c3 is eliminated.

![Sashimi X-Wing Example](/examples/sbf201.png)

Right example: c36/r37 with two fins at r89c3. If the fins are false, an X-Wing remains, but it's degenerate (could be replaced by singles in r3c3 and r7c6). This degeneracy makes it Sashimi. The elimination is r7c1 — the only cover candidate that can see both fins.

## Finned/Sashimi Swordfish

This works exactly like Finned/Sashimi X-Wing, only with three base/cover sets instead of two.

![Finned Swordfish Example](/examples/fbf301.png)

Left example: Swordfish c159/r357. The fin is r1c9 (leftover base cell). Possible eliminations without the fin are r3c7, r5c3, r7c6. Only r3c7 sees the fin (same box), so r3c7 is eliminated.

![Sashimi Swordfish Example](/examples/sbf301.png)

Right example: Swordfish in rows r269/c258. The fin is r6c4. Cover cells seeing the fin are r45c5, so two eliminations: r45c5. Without the fin, a single in r6c2 remains, therefore it's Sashimi.

## Finned/Sashimi Jellyfish

Adding another base/cover set combination beyond Swordfish yields a Finned/Sashimi Jellyfish.

![Finned Jellyfish Example](/examples/fbf401.png)

Left example: Jellyfish r2479/c1348. The fin is r4c9. Cover cells seeing the fin are r56c8. If the fin is false, it degenerates into a Swordfish (r479/c134), eliminating 9 from r26c3. This could also be called Sashimi due to the degeneracy.

![Sashimi Jellyfish Example](/examples/sbf401.png)

Right example: Jellyfish r1469/c1289. The fin is r9c3. Eliminations are r7c12 and r8c12. Without the fin, a single in r9c9 remains, therefore it's Sashimi.

## Larger Finned/Sashimi Fish

For larger Finned/Sashimi Fish a complementary fish will exist for the same eliminations. Searching for larger fish sizes beyond Jellyfish is therefore unnecessary.

## Key Elimination Logic

The core reasoning across all sizes follows the same two-case logic: If the fin is false, standard fish eliminations apply. If the fin is true, it eliminates candidates in its row/column/box. The actionable eliminations are the intersection — candidates that would be eliminated in both scenarios, meaning they must see all the fins and be cover candidates (not base candidates).

---

*Content based on [HoDoKu](https://hodoku.sourceforge.net/en/tech_fishfs.php) by Bernhard Hobiger, licensed under GNU FDLv1.3.*
