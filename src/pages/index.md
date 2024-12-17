---
layout: '../layouts/Md.astro'
---
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

In [family relationships](#family-relationships), the surname following the child's name indicates that the person has changed their last name.

```fml
Wilson

Charles + Nancy =
Sandra Johnson

Johnson

Matthew + Sandra Wilson
```

If such a record is made, the person can be [referred](#name-reference) to by both surnames: the original `Sandra Wilson` and the changed one `Sandra Johnson`.

### Name Reference

Two words, both starting with capital letters, are considered a **reference** to a person from another family. The first word represents the given name and the second word represents the surname.

A single capitalized word (a name) within [regular relationships](#regular-relationships) or names from the parents list in [family relationships](#family-relationships) are also **references**, but only to members of the current surname.

```fml
Davies

Anthony + Betty Patel =
Mark

Patel

Donald + Ashley Robinson =
Betty
Laura

Betty and Laura - twins
```

When you write a reference to someone, you may change up to the last two letters of the surname or name. It's useful in languages with [grammatical case](https://en.wikipedia.org/wiki/Grammatical_case). This is not very useful for English. Generally, the ending `'s` will suffice.

```fml
Harrison

Justin - Brandon's godfather

Justin - godfather of Brandon
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

A list of two groups of names separated by one of the [relation symbols](#relationship-symbols) constitutes a **relationship**. There are two types of relationships: regular and familial.

### Regular Relationships

Regular relationships explain what connects certain people to others. For example, twins.

```fml
Walker

Paul + Donna White =
Michelle
Amanda

Michelle and Amanda - twins
```
On the last line, we described [with a word](#relationship-description) following the dash (one of the [relation symbols](#relationship-symbols)) what connects the group of people listed before the dash. Names must be separated by one of the [separators](#punctuation-marks). In our case it was a word `and`.

Example of a description of godparents

```fml
Roberts

Charles + Jennifer Green =
Joshua

Clarke

father? + mother? =
Kevin
Thomas

Kevin + Amanda Wood =
Melissa

Thomas + Sandra Harris

Melissa and Thomas - godparents of Joshua Roberts
```
In this case, the group of people before the dash is not only connected by the words in lowercase after the dash but also has a relationship to the group of people (in this case, a single person) mentioned after the lowercase words.

### Family Relationships

Family relationships divide two groups of names (names of parents and names of children) using only the `=` symbol. In family relationships, all names **after** the equals sign represent new members of the family, rather than referring to already written ones, as is the case with regular relationships. If the names written **before** the equals sign already exist in the family tree (described above the current family), these family members will be considered the parents of the current family. If some of the names are not described earlier in the family tree, they will also be added to the family, but without a description of who the parents of these names are.

If the parents' names are joined by a plus sign, it indicates that they are married. If they joined by any [other symbol](#punctuation-marks), it means that there was no serious relationship between the parents. If the parents were married but later divorced, this can be written after the equals sign.

You can list the children's names separated by commas (or another [punctuation mark](#punctuation-marks)), but it is more convenient to write each name on a separate line. Additionally, you can write numbers with a dot before the children's names. It's useful to see the order of each child and the total number of children.

```fml
Edwards

Brian + Susan Turner = live separately
1. Elisabeth (Lisa) Cooper
2. Timothy (Tim)
```

If you write the mother's name without a [reference](#name-reference) to another family and not as a [dubious name](#dubious-name), it will mean that the mother has been a member of the current family since birth.

### Punctuation Marks

Names in group can be separated using any of the following options:

- comma `,`, primarily in [regular relationships](#regular-relationships).
- plus `+`, primarily in [family relationships](#family-relationships).
- Words in lowercase, in any quantity.
- Writing each name on a new line.

### Relationship Symbols

Relation symbols divide names into two groups or simply explain what unites the group of people **before** the relation symbol, using [words](#relationship-description) written in lowercase **after** the relation symbol.

The following symbols can be used:

- equality sign `=`. Used exclusively for creating [family relationships](#family-relationships).
- dash `-`. Used to create [regular relationships](#regular-relationships).
- arrows: `->`, `<-`, `<->`. Similar to a dash but provide additional information about the direction of relationships between two groups.

Arrows are useful for programs that build diagrams. In most cases, a dash and an equality sign will suffice.

### Relationship Description

Immediately after the relation symbol, you can add a description consisting of lowercase words. Typically, this is a very brief explanation of one to three words, such as `godparent`, `live apart` or `best friends forever`. If you need to use symbols other than letters, then use [comments](#comments).

## Comments

Comments can only be made on a separate line and must start with one of the following symbols:

- slash `/`, as in many programming languages (a single slash is sufficient).
- hash `#`, a commonly used symbol for starting comments.
- asterisk `*`, a convenient symbol to avoid switching keyboard layouts.

After the comment-starting symbol, you can write any text. For example, you can note down a birth or death date.

```fml
Clark
/ from London

Ryan + Dorothy? =
# currently live in US
Jacob
* BD: 31/12/92
```