# Finned/Sashimi Fish

### Finned/Sashimi X-Wing
- Regular X-Wing where one or more base candidates are not covered by a cover set (fins)
- Only cover candidates that see all fins can be eliminated
- Sashimi: if remaining fish is degenerate when all fins are false
- Example 1 (Finned): X-Wing r24/c35, fin at r2c1. Elimination: r3c3 (sees both scenarios)
- Example 2 (Sashimi): c36/r37 with fins at r89c3. Elimination: r7c1
- Images: `/examples/fbf201.png`, `/examples/sbf201.png`

### Finned/Sashimi Swordfish
- Like Finned X-Wing but with 3 base/cover sets
- Example 1 (Finned): Swordfish c159/r357, fin r1c9. Elimination: r3c7
- Example 2 (Sashimi): Swordfish r269/c258, fin r6c4. Eliminations: r45c5
- Images: `/examples/fbf301.png`, `/examples/sbf301.png`

### Finned/Sashimi Jellyfish
- Another base/cover set combination beyond Swordfish
- Example 1 (Finned): Jellyfish r2479/c1348, fin r4c9. Eliminations: r56c8
- Example 2 (Sashimi): Jellyfish r1469/c1289, fin r9c3. Eliminations: r7c12, r8c12
- Images: `/examples/fbf401.png`, `/examples/sbf401.png`

### Larger Finned Fish
- A complementary fish exists for the same eliminations — searching beyond Jellyfish is unnecessary

### Key Elimination Logic
1. Fin is false → standard fish eliminations
2. Fin is true → eliminates candidates in its row/column/box
3. Actionable eliminations = intersection: candidates eliminated in both scenarios

---
*Content based on [HoDoKu](https://hodoku.sourceforge.net/en/techniques.php) by Bernhard Hobiger, licensed under GNU FDLv1.3.*
