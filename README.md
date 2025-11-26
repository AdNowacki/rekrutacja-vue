
=====================================================
                ZADANIE REKRUTACYJNE 
=====================================================

Twoim zadaniem jest wdrożenie systemu REAKCJI
do komentarzy (emoji reactions).

1. Załaduj komentarzy z pliku:
   * /public/comments.json

2. Wyświetl listę komentarzy (autor, tekst, data) oraz umieść info o całkowitej liczbie komentarzy w nagłówku.
   * Dla formatowania daty użyj funkcji formatDate/useHelpers

3. Dodaj logikę odpowiedzialną za reakcje.
   * Dostępne reakcje to:  ["❤️", "😂", "👍", "😮", "👎"]
  

4. Obsłuż pełną logikę reakcji:
   - Kliknięcie reakcji dodaje reakcję użytkownika
   - Kliknięcie tej samej reakcji ponownie → usuwa ją
   - Kliknięcie innej reakcji → podmienia reakcję
   - Liczniki reakcji muszą się aktualizować poprawnie

5. Podświetl reakcję wybraną przez użytkownika.
   * Powinna być maksymalnie 1 per komentarz	

6. Tailwind – proste stylowanie wystarczy. UI nie musi być idealne, tylko czytelne.


⭐️ GŁÓWNY CEL: poprawna implementacja logiki reakcji + czytelna architektura.
⏱️ Czas na wykonanie zadania: 45 minut
🥋 BONUS: Dodać sortowanie wg. popularności/daty dodania.