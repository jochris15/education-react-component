# React Component

# What is component in React?
[Dokumentasi Component](https://react.dev/reference/react/Component)

Components merupakan code yang independent & reusable. Mereka memiliki fungsi yang sama seperti function di javascript, tetapi bekerja secara terpisah dan mengembalikan HTML.

Components dibagi menjadi 2 :
- Class Component (cara lama mendefine sebuah component di react)
- Function Component (cara baru, kita focus kesini)

# How to make component?
- Buat folder bernama components
- buat file beserta functionnya 
- penamaan sebuah function component harus PascalCase bukan camelCase , tujuan supaya bisa dibedakan antara function native bawaan react, atau function javascript biasa.

# export VS module.exports
- exports / export defaults = digunakan ketika kita menggunakan versi ModuleJs (Versi terbaru, biasanya client side pake ModuleJs)

- module.exports = digunakan ketika kita menggunakan versi CommonJs (biasa nodejs defaultnya commonjs)

# How to pass data between component?
[Dokumentasi props](https://react.dev/learn/passing-props-to-a-component)