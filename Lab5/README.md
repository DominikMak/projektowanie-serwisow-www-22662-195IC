# Laboratorium nr 5 - ""Asynchroniczny Javascript""
0. Obiekt JSON zawierający informacje o graczach.
![0](assets/JSON1.PNG)
![0-1](assets/JSON2.PNG)
![0-2](assets/JSON3.PNG)
1. Funkcja zwrotna (callback):
### TASK 1:
* W pierwszym punkcie tworzona jest lista rozwijana zawierająca pobrane nazwy użytkownika z obiektu JSON:
    - funkcja zwracająca tablicę indeksów wszystkich użytkowników.
    ![1](assets/getNumberPl.PNG)
    - funckja dodająca do istniejącej listy nazwy użytkowników zawartych w obiekcie JSON.
    ![2](assets/showUsernames.PNG)
    - funkcja wywołująca funkcję dodającą wartości do listy
    ![3](assets/shwoAnswers.PNG)
    - efekt działania
    ![4](assets/listIndex.PNG)
* Po wybraniu nazwy użytkownika z listy rozwijanej, wyświetlana jest informacja o obecnych punktach doświadczenia wybranego gracza, wymaganych punktach do następnego poziomu oraz ile punktów pozostało do zdobycia.
    - funkcja wyświetlająca wyżej podane informacje:
    ![5](assets/howmuchLeft.PNG)
    - funkcja pobierająca obecne punkty doświadczenia:
    ![6](assets/getExp.PNG)
    - funkcja pobierająca wymagane punkty do następnego poziomu:
    ![7](assets/getNextExp.PNG)
    - funkcja obliczająca różnicę:
    ![8](assets/roznica.PNG)
    - wywołanie funkcji wyświetlającej informacje:
    ![9](assets/wywolanie.PNG)
    - efekt dzialania:
    ![10](assets/efekt1.PNG)
### TASK 2
* Po wybraniu nazwy użytkownika z listy rozwijanej, wyświetlana jest informacja o tym do jakiej gildii należy wybrany gracz:
    - funkcja wywołująca funkcję wyświetlającą informacje: 
    ![11](assets/funkcjaWywolujaca2.PNG)
    - funkcja wyświetlająca informacje:
    ![12](assets/runGuild.PNG)
    - efekt działania:
    ![13](assets/efekt2.PNG)

2. Obiekt Promise.
### TASK 1
* Pobierane są 4 dane z "https://jsonplaceholder.typicode.com/comments/1", które następnie są wyświetlane, a dwie pierwsze pobrane wartości liczbowe są do siebie dodawane a wynik jest wyświetlany.
    - pobranie danych z obiektu JSON:
    ![12](assets/zad2-1.PNG)
    - funkcja sumująca dwie wartości:
    ![13](assets/funkcjaSumujaca.PNG)
    - wywołanie powyższej funkcji z czasem oczekiwania na pobranie wartości = 0.5s.
    ![14](assets/timeoutZad2-1.PNG)
    - efekt działania:
    ![15](assets/efekt3.PNG)
### TASK 2
* Wyświetlenie utworzonego, nowego obiektu z pobranych dwóch wartości.
    - funkcja zwracająca nowy obiekt:
    ![16](assets/newObject.PNG)
    - funkcja tworząca nowy obiekt:
    ![17](assets/createNew.PNG)
    - wywołanie utworzenia nowego obiektu (wraz z '.catch' w przypadku błędnej wartości oraz '.finally' w momencie zakończenia). Oczekiwanie na pobranie danych = 1s.
    ![18](assets/timeoutZad2-2.PNG)
    - efekt działania:
    ![19](assets/efekt4.PNG)
    ![20](assets/efekt5.PNG)
3. Async/await + fetch (lub axios):
### TASK 1
* Wyświetlenie sumy dwóch pierwszych pobranych wartości liczbowych.
    - funkcja 'async' pobierająca dane z "https://jsonplaceholder.typicode.com/comments/2":
    ![21](assets/asyncfn-1.PNG)
    - dalsza część funkcji wyświetlająca sumę dwóch pierwszych wartości:
    ![22](assets/asyncfn-2.PNG)
    - efekt działania:
    ![23](assets/efekt6.PNG)
### TASK 2
* Wyświetalnie nowo utworzonego obiektu.
    - dalsza część funkcji tworząca nowy obiekt:
    ![24](assets/asyncfn-3.PNG)
    - wywołanie powyższej funkcji z czasem oczekiwania 4s na pobranie danych.
    ![25](assets/timeoutZad3-1.PNG)
    - efekt działania:
    ![26](assets/efekt7.PNG)
    ![27](assets/efekt8.PNG)
4. Zapytania AJAX:
* Funkcja AJAX pobierająca dane oraz wyświetlająca sumę dwóch pierwszych wartości jak i wyświetlający nowy obiekt.
    ![28](assets/zad4.PNG)
* Efekt działania:
    ![29](assets/zad4-efekt1.PNG)
    ![30](assets/zad4-efekt2.PNG)
5. Metoda fetch:
* Funkcja wykorzystująca 'fetch' pobierająca dane oraz wyświetlająca sumę dwóch pierwszych wartości jak i wyświetlający nowy obiekt.
    ![31](assets/zad5.PNG)
* Efekt działania:
    ![32](assets/zad5-1.PNG)
    ![33](assets/zad5-2.PNG)
6. Biblioteka axios:
* Funkcja wykorzystująca 'axios' pobierająca dane oraz wyświetlająca sumę dwóch pierwszych wartości jak i wyświetlający nowy obiekt.
    ![34](assets/zad6.PNG)
* Efekt działania:
    ![35](assets/zad6-1.PNG)