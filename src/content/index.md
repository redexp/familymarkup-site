# FamilyMarkup

An exceptional language designed for creating family trees of any complexity. Its foundation is built on names and surnames.

```fml
Smith

James + Mary =
Michael
Patricia
```

It is clear that `James` and `Mary` are parents (the `+` symbol indicates they are married), while `Michael` and `Patricia` are their children (denoted by the `=` symbol).

The language has no [reserved words](https://en.wikipedia.org/wiki/Reserved_word). This approach ensures there is no need to switch keyboard layouts (in cases where you are describing a family in a language other than English). Everything relies on whether a word is written with a capital letter ([first name](#first-name) or [last name](#surname)) or in lowercase ([punctuation marks](#punctuation-marks) or [relationship description](#relationship-description)).

With the described family structure, you can quickly identify the person you need, all their family connections, and determine if there are any details that might still need clarification.

## Language structure

- [Surname](#surname)
  - [Surname Variants](#surname-variants)
- [First Name](#first-name)
  - [Name Variants](#name-variants)
  - [Surname Changes](#surname-changes)
  - [Name Reference](#name-reference)
  - [Dubious Name](#dubious-name)
- [Relationships](#relationships)
  - [Regular Relationships](#regular-relationships)
  - [Family Relationships](#family-relationships)
  - [Punctuation Marks](#punctuation-marks)
  - [Relationship Symbols](#relationship-symbols)
  - [Relationship Description](#relationship-description)
- [Comments](#comments)

## Surname

A standalone word starting with a capital letter, either at the beginning of the file or separated by empty lines, is considered a **surname** and marks the beginning of the description of families under this surname.

```fml
Jones

James + Jennifer =
Robert

Robert + Linda

Taylor

David + Elizabeth =
Jessica
```

Two surnames are described above: `Jones` and `Taylor`. The `Jones` has two families, while `Taylor` has only one. It is clear that `Robert` is newly married and does not have children yet.

### Surname Variants

There are cases where a surname has multiple spelling variations. For instance, it may be written in another language, or the family might have used one surname until a certain point and then changed it to another. For example, immigrants who change their surname to make it easier to pronounce. In such cases, the variations should be written in parentheses, separated by commas.

```fml
Carell (Caroselli)

Edwin + Theresa =
Steve
```

There are cases when a family tree includes several families with the same surname, but they are not relatives. In such situation, you can simply add a [comment](#comments) to clarify which specific family is being referred to, or you can create an alternate version of the surname to avoid confusion when writing [references](#name-reference) to a name.

```fml
Brown (Brown-NYC)

Richard + Susan =
Joseph

Susan - godmother of Karen Brown

Brown
* from LA

Thomas + Sarah =
Joseph
Karen

Thomas - godfather of Joseph Brown-NYC
```
On the last line, we described the relationship between `Thomas` and `Joseph Brown`, but since `Joseph` exists in both families, we used the surname variant `Brown-NYC` to avoid confusion. Another option is to use a [name variation](#name-variants) for one of the Josephs, such as `Joe`, allowing us to write `Joe Brown` instead of `Joseph Brown-NYC`.

## First Name

A capitalized word within the description of [relationships](#relationships) between family members is considered a **name**. Double names should be written with a hyphen and no spaces.

### Name Variants

Just like a surname, a name can also have variations written in parentheses, separated by commas. For example, the proper name might be `Thomas`, but in your family, he is called `Tom` and you want this to be recorded. It is often more convenient to use the familiar name instead of the proper one when describing relationships.

```fml
Williams

Christopher + Lisa =
Thomas (Tom)
Richard (Richie, Ricky)

Tom and Richie - twins
```

### Surname Changes

A word in parentheses **before** a name indicates that the person has changed their surname to the one in parentheses.

```fml
Wilson

Charles + Nancy =
(Johnson) Sandra

Johnson

Matthew + Sandra Wilson
```

If such a record is made, the person can be [referred](#name-reference) to by both surnames: the original and the changed one.

### Name Reference

Two words, both starting with capital letters, are considered a **reference** to a person from another family. The first word represents the given name and the second word represents the surname.

```fml
Davies

Anthony + Betty Patel =
Mark

Patel

Donald + Ashley Robinson =
Betty
```

### Dubious Name

Any number of words ending with a question mark is considered a **dubious name** indicating uncertainty about the person's actual name. You can even skip the name entirely and write something descriptive that you remember about the person, such as `girl?`. Alternatively, you can simply write a question mark if you remember nothing specific except that the person was part of the family.

```fml
Thompson

Steven + Emily Evans? =
Andrew
boy?
?
```
We described a family where the mother's name is possibly `Emily Evans`, so the editor (app that understand FamilyMarkup) will not attempt to find a family named `Evans` or a person named `Emily` within it. This family has three children: the first is definitely named `Andrew`, the second is only known to be a boy, and nothing is remembered about the third. The question marks will serve as a reminder to confirm this information with someone.

## Relationships

Перелік двох груп імен розділених одним зі [знаків відношення](#знаки-відношення) є **відносинами**. Є два типи відносин: звичайні та сімейні.

### Regular Relationships

Звичайні відносини пояснюють, що поеднує одних людей з іншими. Наприклад близнюки

```fml
Костенко

Денис + Діана Павлюк =
Юля
Людмила (Люда)

Юля і Люда - близнюки
```
На останньому рядку ми описали словом після знаку тире (один із [знаків відношення](#знаки-відношення)), що обʼєднує группу людей перед знаком тире. Розділяти імена необхідно одним з [розділових знаків](#розділові-знаки). В нашому випадку це слово з маленької літери.

Приклад опису хрещених батьків

```fml
Ткач

Charles + Jennifer Козак =
Віктор

Гончаренко

папа? + мама? =
Данило
Thomas

Данило + Ярослава Кулик =
Катерина

Thomas + Sandra Костюк

Катерина і Thomas - хрещені батьки Віктора Ткача
```
В цьому випадку, група людей перед тире не лише обʼєднана словами з маленької літери після тире, але й має відношеня до групи людей (в цьому випадку лише одна людина) після слів з маленької літери.

### Family Relationships

Сімейні відносини розділяють дві групи людей (імена батьків і імена дітей) за допомогою виключно символа `=`. У сімейних відносинах усі імена **після** знаку рівності створюють нових членів родини, а не посилаються на вже записаних, як у випадку зі звичайними відносинами. Якщо імена записані **до** знака рівності вже існують в родині (описані вище поточної сімʼї), то ці члени родини будуть вважатися батьками поточної сімʼї. Якщо якісь з імен не описані вище в родині, то вони теж будуть додані до родини, просто в них не буде опису хто батьки цих імен.

Якщо імена батьків обʼєднані знаком плюс, то це означає, що вони у шлюбі, якщо будь-яким [іншим знаком](#розділові-знаки), то це означає, що між батьками серйозних відносин не було. Якщо батьки були у шлюбі, але розлучилися, то це можна записани після знаку рівності.

Ви можете записати імена дітей через кому (або іншим [розділовим знаком](#розділові-знаки)), але зручніше писати кожне імʼя на окремому рядку.

```fml
Яковенко

Сергій + Susan Білоус = живуть окремо
(Зінченко) Lisa (Надя)
Артем (Тьома)
```

Якщо ви запишете імʼя мами без [посилання](#посилання-на-імʼя) на іншу родину і не як [імʼя під питанням](#імʼя-під-питанням), то це означатиме, що мама від народження є членом поточної родини.

### Punctuation Marks

Групи людей можна розділяти:

- комами
- плюсами
- словами з маленької літери у будь-якій кількості
- записувати кожне імʼя з нового рядка

### Relationship Symbols

Знаки відношення розділяють людей на дві групи, або просто пояснюють чим обʼєднана група людей до знаку відношення за допомогою слів з маленької літери після знаку відношення

Можна використовувати наступні знаки:

- знак рівності: `=`. Використовується виключно для створення [сімейних відносин](#сімейні-відносини)
- тире: `-`. Використовується для створення [звичайних відносин](#звичайні-відносини)
- стрілки: `->`, `<-`, `<->`. Те саме що і тире, але з додатковою інформацією про напрям відносин між двома групами.

Стрілки будуть корисними для програм які будують діаграми. Загалом буде достатньо тире і знака рівності.

### Relationship Description

Одразу після знаку відношення можна додати опис зі слів з маленької літери. Як правило це зовсім коротке пояснення від одного до трьох слів. Наприклад: `хрещений`, `живуть окремо`, `найкращі у світі друзі`. Якщо потрібно використати якісь символи окрім букв, то використовуйте [коментарі](#коментарі).

## Comments

Коментарі можна робити лише на окремому рядку та починаючи одним з символів:

- слеш `/`, як у багатьох мовах програмування
- решітка `#`, також поширений символ для початку коментарів
- зірочка `*`, зручний символ щоб не перемикати розкладку клавіатури

Після символу початку коментаря ви можете писати будь-який текст. Наприклад ви можете записати дату народження або смерті.

```fml
Лисенко
/ з Черкас

Олег + Аліна? =
# зараз живуть в Америці
Богдан
* дн: 21.08.92
```