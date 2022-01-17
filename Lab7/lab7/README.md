# Laboratorium nr 7 - "Vuetify + Vuerouter - aplikacja nr 2"
Stworzyłem SPA w Vue.js wykorzystując vuetify oraz vuerouter. Składa się ona z 3 "podstron" zawierających różne komponenty vuetify.
### 1. Wszystkie 'podstrony' zawierają app-bar utworzony w osobnym pliku 'AppNavigation.vue'.

![1](/Lab7/src/assets/1.PNG)
![2](Lab7/src/assets/2.PNG)

Do stworzenia 'menu' strony wykorzystałem 'v-navigation-drawer' w celu stworzenia hamburger menu wyświetlającego się w przypadku zmiany wielkości okna.
Sam panel menu stworzony jest za pomocą 'v-app-bar'. Logo w lewym górnym rogu jest stworzone wykorzystując 'v-avatar'.

### 2. Strona domowa na początku zawiera tekst na którego tle widnieje zdjęcie przesuwające się wraz ze scrollowaniem strony.

![3](Lab7/src/assets/3.PNG)

Efekt ten jest uzyskiwany wykorzystując 'v-parallax'.

### 3. W kolejnym bloku strony domowej znajduje się przykład wykorzystania 'v-alert'.

![4](Lab7/src/assets/4.PNG)
![5](Lab7/src/assets/5.PNG)

Po wciśnięciu przycisku wyświetlany jest alert który znika po upływie 3 sekund.

![6](Lab7/src/assets/6.PNG)

Efekt został uzyskany przy pomocy 'v-alert' a zawarty został w 'v-card'.

### 4. W następnym bloku strony domowej znajduje się przykład wykorzystani 'v-bottom-sheet'.

![7](Lab7/src/assets/7.PNG)
![8](Lab7/src/assets/8.PNG)

Po wciśnięciu przycisku wyświetlany jest baner u dołu ekranu który może być zamknięty po wciśnięciu przycisku 'zamknij' bądź naciśnięciu w dowolnym miejscu na stronie.

![9](Lab7/src/assets/9.PNG)

### 5. Ostatnim elementem strony domowej jest przykład wykorzystania 'v-stepper'.

![10](Lab7/src/assets/10.PNG)
![11](Lab7/src/assets/11.PNG)
![12](Lab7/src/assets/12.PNG)

Wyświetlany jest 'v-stepper' gdzie przechodząc na kolejne karty za pomocą przycisku "dalej" można zobaczyć kolejne memy. Po wybraniu przycisku 'anuluj' powraca do pierwszej karty.

![13](Lab7/src/assets/13.PNG)

### 6. Pierwszym elementem 'podstrony' 'Ciekawe komponenty' jest przykładem użycia 'v-carousel'.

![14](Lab7/src/assets/14.PNG)
![15](Lab7/src/assets/15.PNG)

V-carousel pozwala na wyświetlanie kilku elementów zawartych w jednej karuzeli którą można przewijać w celu wyświetlenia kolejnych elementów.

![16](Lab7/src/assets/16.PNG)

### 7. Drugim elementem 'podstrony' jest przykład użycia v-dialog.

![17](Lab7/src/assets/17.PNG)
![18](Lab7/src/assets/18.PNG)

Po wciśnięciu przycisku wyświetla się popup zawierający wcześniej zdefiniowaną treść.

![19](Lab7/src/assets/19.PNG)

### 8. Trzecim elementem 'podstrony' jest przykład użycia 'v-footer'.

![20](Lab7/src/assets/20.PNG)
![21](Lab7/src/assets/21.PNG)

### 9. Ostatnim elementem 'podstrony' jest przykład użycia 'v-autocomplete'

![22](Lab7/src/assets/22.PNG)
![23](Lab7/src/assets/23.PNG)
![24](Lab7/src/assets/24.PNG)
![25](Lab7/src/assets/25.PNG)

Efektem jest pole tekstowe wyświetlające podpowiedzi co do wprowadzanej frazy oraz po wyborze jednego z elementów z listy dodawany jest "chip" z możliwością usunięcia go wciskając krzyżyk przy wybranym elemencie.

![26](Lab7/src/assets/26.PNG)

### 10. Ostatnią 'podstroną' jest 'Jeszcze ciekawsze komponenty', którego pierwszym elementem jest przykład wykorzystania 'v-data-iterator'.

![27](Lab7/src/assets/27.PNG)
![28](Lab7/src/assets/28.PNG)

Efektem jest zestaw obiektów zawierających określone informacje które można sortować oraz wyszukiwać poprzez wpisanie wybranej frazy.

![29](Lab7/src/assets/29.PNG)
![30](Lab7/src/assets/30.PNG)
![31](Lab7/src/assets/31.PNG)
![32](Lab7/src/assets/32.PNG)
![33](Lab7/src/assets/33.PNG)

### 11. Drugim elementem jest przykład wykorzystania 'v-file-input'.

![34](Lab7/src/assets/34.PNG)
![35](Lab7/src/assets/35.PNG)

Efektem działania jest możliwość przesłania wybranego z dysku pliku po czym przesłane zdjęcie zostaje ustawione jako zdjęcie avatara.

![36](Lab7/src/assets/36.PNG)

### 12. Ostatnim elementem jest przykład wykorzystania 'v-otp-input'.

![37](Lab7/src/assets/37.PNG)
![38](Lab7/src/assets/38.PNG)
![39](Lab7/src/assets/39.PNG)

Efektem jest możliwość wpisania 5 cyfrowego hasła po uzupełnieniu formularza sprawdzane jest czy jest zgodny z ustalonym wcześniej hasłem oraz zwracana jest informacja o pomyślności wykonania akcji.

![40](Lab7/src/assets/40.PNG)
