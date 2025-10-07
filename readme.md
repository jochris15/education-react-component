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

# ModuleJs VS CommonJs (Export & Import)
## ModuleJs (Default client)
- export = bisa export multiple value, importnya dengan cara di destruct nama spesificnya
- export default = hanya untuk export single value importnya bisa di assign dalam nama apapun

## CommonJs (Default server)
- module.exports = bisa export single / multiple seperti biasa, importnya menggunakan require

# How to pass data between component?
[Dokumentasi props](https://react.dev/learn/passing-props-to-a-component)

# How to trigger function in different component?
Sebenarnya sama aja seperti props, tetapi penamaannya berbeda, jika kita passing function lalu di trigger di component lain disebut **Emit**

# Conditional rendering
[Dokumentasi Conditional Rendering](https://react.dev/learn/conditional-rendering)

Conditional rendering adalah teknik untuk menampilkan elemen atau komponen tertentu berdasarkan kondisi tertentu. Ada beberapa cara untuk melakukan conditional rendering di React:
1. **If-Else Statement**: Menggunakan pernyataan if-else di dalam fungsi render.
2. **Ternary Operator**: Menggunakan operator ternary untuk memilih antara dua elemen.
3. **Logical AND (&&) Operator**: Menggunakan operator && untuk menampilkan elemen hanya jika kondisi tertentu terpenuhi.
