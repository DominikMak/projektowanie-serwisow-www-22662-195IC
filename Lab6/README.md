# Laboratorium nr 6 - "Vue - aplikacja nr 1"
Stworzyłem aplikację w Vue.js składającą się z kolejnych punktów wykorzystujące różne elementy Vue.
### 1. Pierwszy oraz drugi punkt jest przykładem wykorzystania dyrektyw v-if oraz v-on do wyświetlania oraz "chowania" tekstu za pomocą przycisku.
![1](screenshots/1.PNG)
![2](screenshots/2.PNG)
Z poziomu kodu same aplikacje są bliźniacze, co je różni to właśnie użycie dwóch różnych dyrektyw:
![3](screenshots/3.PNG)
![4](screenshots/4.PNG)
### 2. Trzeci punkt obrazuje użycie dyrektywy v-for za pomocą której wyświetlane są informacje o wszystkich danych zawartych w liście. 
![5](screenshots/5.PNG)
![6](screenshots/6.PNG)
![7](screenshots/7.PNG)

### 3. Czwarty punkt wykorzystując dyrektywę v-bind zmienia kolor tekstu poprzez zmianę przypisanej do niego klasy. Klasa "red" oraz "blue" ma przypisany CSS w osobnym pliku. 

![8](screenshots/8.PNG)
![9](screenshots/11.PNG)
![10](screenshots/9.PNG)
![11](screenshots/10.PNG)

### 4. Piąty punkt przedstawia działanie dyrektywy v-model dzięki której tekst wpisywany w polu zostaje ustawiony jako tekst paragrafu pod nim.

![12](screenshots/12.PNG)
![13](screenshots/13.PNG)
![14](screenshots/14.PNG)
![15](screenshots/15.PNG)

### 5. Szósty punkt wykorzystuje właściwość "computed" dzięki której tekst jest przekształcany za pomocą określonych funkcji.

![16](screenshots/16.PNG)
![17](screenshots/17.PNG)
![18](screenshots/18.PNG)

### 6. Siódmy punkt przedstawia obsługę zdarzeń za pomocą Vue.js w tym przypadku po naciśnięciu przycisku wyświetla się informacja o wciśnięciu przycisku.

![19](screenshots/19.PNG)
![20](screenshots/20.PNG)
![21](screenshots/21.PNG)
![22](screenshots/22.PNG)

### 7. Ósmy punkt jest prostym przykładem wykorzystania komponentów do stworzenia przycisku liczącego ile razy został wciśnięty plusem komponentów jest możliwość wielokrotnego wykorzystywania bez konieczności powtarzania kodu.

![23](screenshots/23.PNG)
![24](screenshots/24.PNG)
![25](screenshots/25.PNG)
![26](screenshots/26.PNG)

### 8. Dziewiąty punkt przedstawia wykorzystanie biblioteki Vuex do operacji na stanach w tym przypadku stworzyłem prosty licznik umożliwiający zmianę wartości liczbowej w górę lub w dół.

![27](screenshots/27.PNG)
![28](screenshots/28.PNG)
![31](screenshots/31.PNG)
![29](screenshots/29.PNG)
![30](screenshots/30.PNG)

### 9. Ostatni punkt przedstawia wykorzystanie Single File Components w celu stworzenia prostej aplikacji do zostawiania ocen. 
![35](screenshots/35.PNG)
![36](screenshots/36.PNG)
## 1. Aplikacja ta składa się z:
- App.vue: W nim tworzony jest template aplikacji oraz definiowane są wykorzystywane później funkcje. 
![32](screenshots/32.PNG)
![33](screenshots/33.PNG)
![34](screenshots/34.PNG)
- Star.vue: W nim wywoływane są poprzednio wspomniane funkcje i zmieniany jest wygląd gwiazdki w prypadku najechania myszką bądź kliknięcia.
![37](screenshots/37.PNG)
![38](screenshots/38.PNG)
- Summary.vue: W nim definiowane jest wyświetlane poprzednich ocen które zapisywane są w pamięci przeglądarki.
![39](screenshots/39.PNG)
