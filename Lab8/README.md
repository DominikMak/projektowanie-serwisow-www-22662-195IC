# Laboratorium nr 8 - "Vue - aplikacja nr 3 + analiza kodu źródłowego + git difftool"
Wybrałem aplikację To-do którą edytowałem dodając Vuetify w celu stworzenia bardziej responsywnego widoku aplikacji oraz dodania alertów wyświetlających się w przypadku błednych wartości podanych przez użytkownika. </br>
Link do bazowej aplikacji: https://mdn.github.io/todo-vue/dist/
### 1. Porównanie wprowadzonych zmian.

* Bazowa aplikacja:
![1](zrzuty/old-app.PNG)

* Zmodyfikowana aplikacja:
</br>Główne zmiany to dodanie Vuetify w celu zmiany statycznego opisu pola tekstowego na opis zmieniający położenie dynamicznie w momencie rozpoczęcia wpisywania nazwy nowego zadania.
</br>Kolejnym widocznym elementem jest zmiana przycisku "Add" na przycisk zawarty na końcu pola tekstowego zawierający ikonę "plusa".</br>Zauważyć można również wprowadzoną zmianę dotyczącą wyświetlania dodanych zajęć. Zajęcia wyświetlane są teraz w osobnych kartach z małym checkboxem oraz przyciski "Edit" oraz "Delete" zmienione są na przyciski zawierające ikony pióra oraz kosza umiejscowione w lewym dolnym rogu karty.

![2](zrzuty/new-app.PNG)

</br>Zakończone zadania również zostały zmodyfikowane, ponieważ teraz jeśli zadanie jest zaznaczone jako ukończone to karta tego zadania zmienia swój kolor na ciemniejszy dzięki czemu łatwiej jest odróżnić zakończone zadania od pozostałych.

![4](zrzuty/new-app2.PNG)

* Bazowa aplikacja - edycja zadań:

![3](zrzuty/old-app-2.PNG)

* Zmodyfikowana aplikacja - edycja zadań:

Edycja zadań również uległa zmianie formularz jest teraz stworzony z wykorzystaniem Vuetify a przyciski "Cancel" oraz "Save" zostały zmienione na ikony przekleśonego okręgu oraz dyskietki. 

![5](zrzuty/new-app3.PNG)

Zostały również dodane alerty w przypadku nie podania nazwy nowego zadania oraz w przypadku podania tej samej nazwy zadania w przypadku jej edycji.

![6](zrzuty/new-app-5.PNG)
![7](zrzuty/new-app4.PNG)

### 2. Analiza kodu źródłowego.

* App.vue:

![7](zrzuty/analiza1.PNG)
![8](zrzuty/analiza2.PNG)
![9](zrzuty/analiza3.PNG)

* ToDoForm.vue:

![10](zrzuty/analiza4.PNG)
![11](zrzuty/analiza5.PNG)

* ToDoItem.vue:

![12](zrzuty/analiza6.PNG)
![13](zrzuty/analiza7.PNG)
![14](zrzuty/analiza8.PNG)

* ToDoItemEditForm.vue:

![15](zrzuty/analiza9.PNG)
![16](zrzuty/analiza10.PNG)

### 3. Komenda difftool.

* App.vue:

![17](zrzuty/diff-app.PNG)

* ToDoForm.vue:

![18](zrzuty/diff-todo.PNG)

* ToDoItem.vue:

![19](zrzuty/diff-element.PNG)

* ToDoItemEditForm.vue:

![20](zrzuty/diff-edit.PNG)
