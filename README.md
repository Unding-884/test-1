<img width="1257" height="475" alt="image" src="https://github.com/user-attachments/assets/9d760944-e31b-4665-9647-c4e43ba1c2e5" />

```mermaid
flowchart TD
  App[App.jsx] -->|onAdd| ACF[AddContactForm.jsx]
  ACF -->|onAdd 'contact'| App
  App -->|searchItem, setSearchItem|SB[SearchBar.jsx]
  SB -->|setSearchTerm|App
  App -->|contacts, onUpdate|CT[ContactTable.jsx]
  CT -->|onUpdate 'updatedContact'|App
```
# Patterns
1. Container–Presentational Pattern
2. Unidirectional Data Flow
3. Controlled Components Pattern
4. Lifting State Up
