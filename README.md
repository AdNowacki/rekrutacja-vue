# 📝 Zadanie Rekrutacyjne – Reakcje do Komentarzy

## 🔄 Flow zadania

1. **Zrób forka** tego repozytorium na swoje konto GitHub.
2. **Sklonuj** forka na swój komputer (`git clone ...`).
3. Utwórz nową gałąź, np. `feature/reactions`, i **wykonaj zadanie w tej gałęzi**.
4. Po zakończeniu prac **wystaw Pull Request** z Twojego forka do gałęzi `main` w oryginalnym repozytorium.

## ℹ️ Ważna informacja

Wszystkie operacje związane z reakcjami wykonujemy **wyłącznie w stanie aplikacji (Vue state)**.  
Nie zapisujemy nic do plików JSON i **nie wysyłamy danych do API**.  
Cała logika reakcji działa tylko po stronie frontu.

---

## 🎯 Zadanie

Twoim zadaniem jest wdrożenie systemu **reakcji (emoji reactions)** do komentarzy.

## ✅ Zakres zadania

### 1. Załaduj komentarze z pliku:

- `/public/comments.json`

### 2. Wyświetl listę komentarzy:

- Autor
- Treść komentarza
- Data (sformatowana za pomocą `formatDate` / `useHelpers`)
- W nagłówku umieść informację o **całkowitej liczbie komentarzy**

### 3. Dodaj logikę dla reakcji:

Dostępne reakcje:

["❤️", "😂", "👍", "😮", "👎"]

## ⚙️ Wymagana logika reakcji

- Kliknięcie reakcji **dodaje** reakcję użytkownika
- Kliknięcie **tej samej reakcji ponownie** → usuwa ją
- Kliknięcie **innej reakcji** → zamienia reakcję na nową
- Liczniki reakcji muszą być zawsze aktualne i poprawne
- Podświetl reakcję wybraną przez użytkownika  
  _(maksymalnie 1 reakcja per komentarz)_

## 🎨 Stylowanie

- Użyj **Tailwind CSS**
- UI nie musi być perfekcyjny — ma być **czytelny i logiczny**

## ⭐ Główny Cel

Stworzenie poprawnej, czystej i czytelnej implementacji **logiki reakcji** oraz architektury (Vue + state).

## ⏱️ Limit czasu

**45 minut**

## 🥋 Bonus (opcjonalnie)

Dodaj sortowanie komentarzy według:

- popularności (liczby reakcji)
- daty dodania

Powodzenia! 🚀
