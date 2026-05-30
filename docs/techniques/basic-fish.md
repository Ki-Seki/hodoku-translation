# Basic Fish

### Overview
- Uses basic row/column constraints to eliminate candidates
- Not every intersection needs a fish digit, but every base and cover set must contain at least one

### X-Wing (2 base sets / 2 cover sets)
- Two rows as base, two columns as cover (or vice versa), single digit
- All candidates in both base rows must fall within cover columns
- Elimination: candidates in cover sets NOT in base sets
- Example 1: Base rows 2,5; fish digit 5; candidates r2c58 and r5c58; cover cols 5,8; eliminate 5 from r4c5
- Example 2: Base cols 1,5; cover rows 2,5
- Logic: If r2c5=5 → r5c8=5; if r2c8=5 → r5c5=5. Either way r4c5≠5
- Images: `/examples/bf201.png`, `/examples/bf202.png`

### Swordfish (3 base / 3 cover)
- Same as X-Wing but with 3 base and 3 cover sets
- Example 1: Base rows 1,2,9; cover cols 1,5,8; digit 2; eliminate from r7c1 and r6c8
- Example 2: Base r2,4,7; cover c2,3,5; digit 4; eliminate 4 from multiple cells
- Images: `/examples/bf301.png`, `/examples/bf302.png`

### Jellyfish (4 base / 4 cover)
- Extends to 4 base and 4 cover sets
- Example 1: Base r3,4,6,7; cover c1,2,5,9; digit 7
- Example 2: Base r1,3,6,7; cover c2,5,8,9; digit 7
- Both from Pure Jellyfish Collection on New Sudoku Player's Forum
- Images: `/examples/bf401.png`, `/examples/bf402.png`

### Larger Basic Fish
- Possible but unnecessary — a complementary smaller fish always exists for the same eliminations

---
*Content based on [HoDoKu](https://hodoku.sourceforge.net/en/techniques.php) by Bernhard Hobiger, licensed under GNU FDLv1.3.*
