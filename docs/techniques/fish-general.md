# Fish (General Explanation)

### Overview
- Fish are single-digit patterns — consider only candidates of the same digit
- Range from simple X-Wing to exotic Cannibalistic Finned Mutant Leviathans

### Core Principle
- Find N non-overlapping base sets (houses) where no base candidate appears in more than one base set
- Search for N non-overlapping cover sets that contain every base candidate
- Any cover candidate that is NOT also a base candidate can be eliminated
- Each base set must contain exactly one cell holding the fish digit; same for cover sets

### Sizes
| Size | Name |
|------|------|
| 2 | X-Wing |
| 3 | Swordfish |
| 4 | Jellyfish |
| 5 | Squirmbag |
| 6 | Whale |
| 7 | Leviathan |

### Types (Base/Cover Combinations)
- Basic Fish: rows/columns paired with columns/rows
- Franken Fish: rows and boxes paired with columns and boxes
- Mutant Fish: arbitrary combinations of rows, columns, and blocks

Notation examples:
- `4 c39 r46` → Basic X-Wing for digit 4
- `4 c39b8 r469` → Franken Swordfish
- `4 r159c9 c45b36` → Mutant Jellyfish

### Fins (Exo Fins)
- When base candidates remain uncovered by cover sets → exo fins, fish becomes Finned Fish
- Either all fins are false (normal fish eliminations) or one fin is true (eliminates candidates seeing the fin)
- All possible eliminations that see all fins can be eliminated

### Sashiminess
- Some degenerate fish contain a smaller valid fish within them
- When fins prevent the simpler fish from operating → Sashimi
- HoDoKu defaults to "Finned Fish" for all non-basic types

### Endo Fins
- When a base candidate sits in more than one base set → endo fin
- Can only occur in Franken or Mutant Fish
- Very difficult for humans to locate

### Cannibalism
- When a base candidate is covered by two or more cover sets → cannibalistic elimination
- The fish is "quasi eating itself"

---
*Content based on [HoDoKu](https://hodoku.sourceforge.net/en/techniques.php) by Bernhard Hobiger, licensed under GNU FDLv1.3.*
